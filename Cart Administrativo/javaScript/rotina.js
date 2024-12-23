let excelData = []; 
let columnNames = [];
let columnPreferences = [
    { name: "Inspetor", visible: true },
    { name: "Vencimento", visible: true },
    { name: "Situação", visible: true },
];
let defaultColumnPreferences = {};

// Carrega dados e preferências ao iniciar
window.onload = function () {
    const savedData = localStorage.getItem('planilhaDados');
    const savedPreferences = localStorage.getItem('preferenciasColunas');

    if (savedData) {
        const { columnNames: savedColumnNames, excelData: savedExcelData } = JSON.parse(savedData);
        columnNames = savedColumnNames;
        excelData = savedExcelData;
    }

    if (savedPreferences) {
        columnPreferences = JSON.parse(savedPreferences);
    } else {
        columnPreferences = columnNames.map((col) => ({
            name: col,
            visible: true,
        }));
    }

    if (Object.keys(defaultColumnPreferences).length === 0) {
        defaultColumnPreferences = JSON.parse(JSON.stringify(columnPreferences));
    }

    aplicarPreferenciasDeColunas();
    preencherTabela();
    configurarSelecaoDeColunas();
};

function carregarPlanilha() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Por favor, selecione um arquivo Excel.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        const allData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        const newColumnNames = allData[0].map((col) => col?.toString().trim() || "");
        const newExcelData = allData.slice(1);

        columnNames = newColumnNames.map((col, index) => columnPreferences[index]?.name || col);
        excelData = alinharDadosComCabecalhos(newExcelData, columnNames.length);

        formatarPrioridades();
        adicionarColunaInspetor();
        adicionarColunaVencimento();
        adicionarColunaSituacao();

        salvarPlanilhaLocal();
        preencherTabela();
        configurarSelecaoDeColunas();
    };

    reader.readAsArrayBuffer(file);
}

function formatarPrioridades() {
    excelData = excelData.map((row) => {
        if (row[14]) {
            let prioridade = row[14].toString().trim().toLowerCase();
            if (prioridade.includes("alta")) {
                row[14] = "Alta";
            } else if (prioridade.includes("emergencial")) {
                row[14] = "Emergencial";
            }
        }
        return row;
    });
}

function adicionarColunaInspetor() {
    const inspetorColIndex = columnNames.length;
    columnNames.push("Inspetor");

    excelData = excelData.map((row) => {
        if (row[12]) {
            row[12] = formatarData(row[12]);
        }

        const inspetor = determinarInspetor(row[16]);
        row[inspetorColIndex] = inspetor;
        return row;
    });
}

function adicionarColunaVencimento() {
    const vencimentoColIndex = columnNames.length;
    columnNames.push("Vencimento");

    excelData = excelData.map((row) => {
        const registradoEm = row[12] ? new Date(row[12]) : null;
        const prioridade = row[14]?.toString().trim();

        let diasAdicionar = 0;
        if (prioridade === "Projeto melhoria") diasAdicionar = 120;
        else if (prioridade === "Baixa") diasAdicionar = 59;
        else if (prioridade === "Média") diasAdicionar = 29;
        else if (prioridade === "Alta") diasAdicionar = 14;
        else if (prioridade === "Emergencial") diasAdicionar = 6;

        if (registradoEm && !isNaN(registradoEm)) {
            const vencimento = new Date(registradoEm.getTime() + diasAdicionar * 24 * 60 * 60 * 1000);
            row[vencimentoColIndex] = vencimento.toISOString().split('T')[0];
        } else {
            row[vencimentoColIndex] = "";
        }
        return row;
    });
}

function adicionarColunaSituacao() {
    const situacaoColIndex = columnNames.length;
    columnNames.push("Situação");

    excelData = excelData.map((row) => {
        const hoje = new Date(); 
        const vencimentoStr = row[28]; // Coluna "Vencimento"
        const vencimento = vencimentoStr ? new Date(vencimentoStr) : null; // Converter string para Data

        if (!vencimento || isNaN(vencimento.getTime())) {
            // Se não houver uma data válida, a situação será "🔴" (vermelho)
            row[situacaoColIndex] = "🔴";
        } else {
            // Calcular a diferença de dias (ajustando para fuso horário e arredondamentos)
            const umDiaEmMs = 1000 * 60 * 60 * 24; // Milissegundos em um dia
            const diasRestantes = Math.round((vencimento - hoje) / umDiaEmMs);

            // Determinar emoji com base na diferença de dias
            if (diasRestantes < 0) {
                row[situacaoColIndex] = "🔴"; // Vencido
            } else if (diasRestantes <= 4) {
                row[situacaoColIndex] = "🟡"; // Perto do vencimento
            } else {
                row[situacaoColIndex] = "🟢"; // Dentro do prazo
            }
        }

        return row;
    });
}



function formatarData(valor) {
    if (!isNaN(valor)) {
        const excelEpoch = new Date(1899, 11, 30);
        const data = new Date(excelEpoch.getTime() + valor * 24 * 60 * 60 * 1000);
        return data.toISOString().split('T')[0];
    }

    const data = new Date(valor);
    if (!isNaN(data)) {
        return data.toISOString().split('T')[0];
    }

    return valor;
}

function determinarInspetor(valor) {
    if (valor === "SEDECCO") return "Edson Claudino";
    if (["SAU01", "SAU02", "SAU03", "SAU04", "P01", "P02", "P03", "PMRVStaCruz", "PMRVOurinhos", "PGFPaulistania", "BarracaoOurinhos"].includes(valor)) return "Moisés";
    if (["SAU05", "SAU06", "SAU07", "SAU08", "P04", "P05", "P06", "PMRVAssis", "PMRVRancharia", "PGFPalmital1", "PGFPalmital2", "BarracaoAssis", "AlmoxarifadoAssis", "FabricadePlacasAssis", "EngenhariaAssis", "PortaoPalmital"].includes(valor)) return "José Conceição";
    if (["SAU09", "SAU10", "SAU11", "SAU12", "P07", "P08", "P09", "PMRVPrudente", "PMRVVenceslau", "PMRVEpitacio", "PGFEpitacio3", "BarracaoPresPrudente"].includes(valor)) return "Nicanor Barrotela";
    return ""; 
}

function alinharDadosComCabecalhos(data, maxColumns) {
    return data.map((row) => {
        const newRow = Array(maxColumns).fill("");
        row.forEach((cell, index) => {
            if (index < maxColumns) newRow[index] = cell;
        });
        return newRow;
    });
}

function aplicarPreferenciasDeColunas() {
    columnNames = columnPreferences.map((pref) => pref.name);
    excelData = excelData.map((row) =>
        row.map((cell, index) => (columnPreferences[index]?.visible === false ? "" : cell))
    );
}

function salvarPlanilhaLocal() {
    const planilhaDados = {
        columnNames: columnNames,
        excelData: excelData,
    };
    localStorage.setItem('planilhaDados', JSON.stringify(planilhaDados));
    salvarPreferenciasDeColunas();
}

function salvarPreferenciasDeColunas() {
    columnPreferences = columnNames.map((name, index) => ({
        name: name,
        visible: columnPreferences[index]?.visible ?? true,
    }));
    localStorage.setItem('preferenciasColunas', JSON.stringify(columnPreferences));
}

function preencherTabela() {
    const tableHeaders = document.getElementById('tableHeaders');
    const tableBody = document.getElementById('baseTable').querySelector('tbody');

    tableHeaders.innerHTML = '';
    tableBody.innerHTML = '';

    columnNames.forEach((colName, index) => {
        if (columnPreferences[index]?.visible !== false) {
            const th = document.createElement('th');
            th.textContent = colName;
            tableHeaders.appendChild(th);
        }
    });

    excelData.forEach((row) => {
        const tr = document.createElement('tr');
        row.forEach((cell, index) => {
            if (columnPreferences[index]?.visible !== false) {
                const td = document.createElement('td');
                td.textContent = cell || '';
                tr.appendChild(td);
            }
        });
        tableBody.appendChild(tr);
    });
}

function configurarSelecaoDeColunas() {
    const columnSelector = document.getElementById('columnSelector');
    columnSelector.innerHTML = '';

    columnNames.forEach((colName, index) => {
        const label = document.createElement('label');
        label.style.display = 'block';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = columnPreferences[index]?.visible ?? true;
        checkbox.onchange = () => {
            columnPreferences[index].visible = checkbox.checked;
            salvarPreferenciasDeColunas();
            preencherTabela();
        };

        const input = document.createElement('input');
        input.type = 'text';
        input.value = columnPreferences[index]?.name || colName;
        input.onchange = () => {
            columnPreferences[index].name = input.value.trim();
            columnNames[index] = input.value.trim();
            salvarPreferenciasDeColunas();
            preencherTabela();
        };

        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(' '));
        label.appendChild(input);
        columnSelector.appendChild(label);
    });
}

function toggleColumnControls() {
    const controls = document.getElementById('columnControls');
    controls.style.display = controls.style.display === 'none' || controls.style.display === '' ? 'block' : 'none';
}

function excluirPlanilha() {
    if (confirm('Tem certeza de que deseja excluir a planilha carregada?')) {
        excelData = [];
        columnNames = [];
        columnPreferences = JSON.parse(JSON.stringify(defaultColumnPreferences));
        localStorage.removeItem('planilhaDados');
        localStorage.removeItem('preferenciasColunas');
        preencherTabela();
        alert('Planilha excluída com sucesso.');
    }
}