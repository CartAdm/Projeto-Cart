function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', newTheme);
    const toggleButton = document.querySelector('.theme-toggle');
    toggleButton.textContent = newTheme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Noturno';
  }

  function loadSpreadsheet() {
    const service = document.getElementById('serviceSelect').value;
    const container = document.getElementById('spreadsheetContainer');
    container.innerHTML = '';

    if (!service) {
      container.innerHTML = '<p>Selecione um serviço para visualizar os dados.</p>';
      return;
    }

    const data = {
      saneamento: [
        ['Serviços'],
        ['Caixa dagua'],
        ['Estação tratamento água (ETA)'],
        ['Filtro / Refil'],
        ['Fossa / Caixa de gordura'],
        ['Portabilidade de água'],
        ['Outros']
      ],
      limpeza_predial_extra: [
      ['Serviços'],
        ['Alteração'],
        ['Análise'],
        ['Instalação'],
        ['Limpeza'],
        ['Manutenção'],
        ['Remoção'],
        ['Reparo'],
        ['Troca'] ,
        ['Outros'],
        ['Inspeção'],
        ['Empréstimo'],
        ['Carreto']
      ],
      civil_predial: [
        ['Serviços'],
        ['Infiltrações'],
        ['Escavação diversas'],
        ['Trincas, Fissuras e Rachaduras'],
        ['Barreira rígida / New Jersey'],
        ['Piso, rodapé '],
        ['Telhado, Laje, Forro, Calha e rede pluvial'],
        ['Pintura'],
        ['Outros']
      ],
      moveis_eletrodomesticos_utensilios: [
      ['Serviços'],
        ['Quadro de aviso, banner e paínel'],
        ['Espelho e suportes'],
        ['Acessórios, utensílios e lixeiras'],
        ['Tapetes e capachos'],
        ['Eletrodomésticos'],
        ['Placas, cancelas e sinalizações'],
        ['Móveis'],
        ['Outros']
      ],
      controle_pragas_vetores: [
        ['Serviços'],
        ['Detetização e Desratização'],
        ['Pulverização'],
        ['Retirada de abelhas e marimbondos'],
        ['Outros']
      ],
      hidraulico_predial: [
      ['Serviços'],
        ['Desentupimento encanamento'],
        ['Vaso, pia e tubulação'],
        ['Caixa dágua'],
        ['Rede de água e esgoto'],
        ['Rede de incêndio'],
        ['Torneira, ducha, válvula, tubo e conexões'],
        ['Bomba poço artesiano'],
        ['Outros']
      ],
      portoes_portas_janelas: [
        ['Serviços'],
        ['Blindex / vidro em geral'],
        ['Cerca / grade / guarda-corpo / corrimão'],
        ['Chaves cópia'],
        ['Fechadura / maçaneta / trinco / puxador'],
        ['Insulfilm'],
        ['Persiana / cortina'],
        ['Porta / janela / dobradiça em geral'],
        ['Porta da cabine'],
        ['Porta eclusa / corta-fogo / cofre'],
        ['Portões principal / veículos'],
        ['Vidro de cabine'],
        ['Outros']
      ],
      outros: [
      ['Serviços'],
        ['Limpeza Predial Extra'],
        ['Manutenção Preventiva'],
        ['Mudança de layout'],
        ['outros (Detalhar na descrição)'],
        ['Empréstimo Caminhão HR']
      ]
    };

    const rows = data[service] || [];
    if (rows.length === 0) {
      container.innerHTML = '<p>Nenhum dado encontrado para o serviço selecionado.</p>';
      return;
    }

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    rows.forEach((row, index) => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const td = document.createElement(index === 0 ? 'th' : 'td');
        td.textContent = cell;
        tr.appendChild(td);
      });
      if (index === 0) {
        thead.appendChild(tr);
      } else {
        tbody.appendChild(tr);
      }
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    container.appendChild(table);
  }