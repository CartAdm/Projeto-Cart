const data = [
  { local: "SEDECCO", municipio: "BAURU", inspetor: "Edson", rotina: 5475, ultimaLimpeza: "2039-03-12" },
  { local: "SAU01", municipio: "PIRATININGA", inspetor: "Edson", rotina: 5475, ultimaLimpeza: "2039-03-12" },
  { local: "PP01", municipio: "PIRATININGA", inspetor: "Edson", rotina: 150, ultimaLimpeza: "2039-03-12" },
  { local: "PGF4", municipio: "PAULISTANIA", inspetor: "Edson", rotina: "", ultimaLimpeza: "2039-03-12" },
  { local: "SAU02", municipio: "PAULISTANIA", inspetor: "Edson", rotina: 40, ultimaLimpeza: "2024-12-18" },
  { local: "PP02", municipio: "SANTA CRUZ DO RIO PARDO", inspetor: "Edson", rotina: 365, ultimaLimpeza: "2039-03-12" },
  { local: "PMRV Sta. Cruz do Pardo", municipio: "SANTA CRUZ DO RIO PARDO", inspetor: "Edson", rotina: 365, ultimaLimpeza: "2039-03-12" },
  { local: "SAU03", municipio: "SANTA CRUZ DO RIO PARDO", inspetor: "Edson", rotina: 40, ultimaLimpeza: "2024-12-18" },
  { local: "PP03", municipio: "SANTA CRUZ DO RIO PARDO", inspetor: "Edson", rotina: 365, ultimaLimpeza: "2039-03-12" },
  { local: "PMRV Ourinhos", municipio: "OURINHOS", inspetor: "Edson", rotina: 5475, ultimaLimpeza: "2039-03-12" },
  { local: "CONSERVA OURINHOS", municipio: "OURINHOS", inspetor: "Edson", rotina: 365, ultimaLimpeza: "2039-03-12" },
  { local: "SAU04", municipio: "SALTOGRANDE", inspetor: "Edson", rotina: 40, ultimaLimpeza: "2024-12-18" },
  { local: "PGF1", municipio: "PALMITAL", inspetor: "José", rotina: 730, ultimaLimpeza: "2039-03-12" },
  { local: "PGF2", municipio: "PALMITAL", inspetor: "José", rotina: 730, ultimaLimpeza: "2039-03-12" },
  { local: "PP04", municipio: "PALMITAL", inspetor: "José", rotina: 365, ultimaLimpeza: "2039-03-12" },
  { local: "SAU05", municipio: "PALMITAL", inspetor: "José", rotina: 120, ultimaLimpeza: "2024-12-18" },
  { local: "ALMOXARIFADO", municipio: "ASSIS", inspetor: "José", rotina: 40, ultimaLimpeza: "2024-12-17" },
  { local: "CONSERVA ASSIS", municipio: "ASSIS", inspetor: "José", rotina: 5475, ultimaLimpeza: "2039-03-12" },
  { local: "PMRV Assis", municipio: "ASSIS", inspetor: "José", rotina: 150, ultimaLimpeza: "2024-11-19" },
  { local: "PMRV Assis", municipio: "ASSIS", inspetor: "José", rotina: 30, ultimaLimpeza: "2024-12-17" },
  { local: "SAU06", municipio: "ASSIS", inspetor: "José", rotina: 30, ultimaLimpeza: "2024-12-17" },
  { local: "PP05", municipio: "ASSIS", inspetor: "José", rotina: 30, ultimaLimpeza: "2024-12-17" },
  { local: "SAU07", municipio: "PARAGUAÇU PAULISTA", inspetor: "José", rotina: 120, ultimaLimpeza: "2039-03-12" },
  { local: "PMRV Rancharia", municipio: "RANCHARIA", inspetor: "José", rotina: 5475, ultimaLimpeza: "2039-03-12" },
  { local: "SAU08", municipio: "RANCHARIA", inspetor: "José", rotina: 30, ultimaLimpeza: "2024-12-17" },
  { local: "PP06", municipio: "RANCHARIA", inspetor: "José", rotina: 365, ultimaLimpeza: "2039-03-12" },
  { local: "PP07", municipio: "REGENTEFEIJO", inspetor: "Nicanor", rotina: 365, ultimaLimpeza: "2024-10-24" },
  { local: "SAU09", municipio: "REGENTEFEIJO", inspetor: "Nicanor", rotina: 365, ultimaLimpeza: "2024-10-24" },
  { local: "PMRV P Prudente", municipio: "PRES.PRUDENTE", inspetor: "Nicanor", rotina: 515, ultimaLimpeza: "2024-10-24" },
  { local: "PMRV P Prudente", municipio: "PRES.PRUDENTE", inspetor: "Nicanor", rotina: 515, ultimaLimpeza: "2039-03-12" },
  { local: "CONSERVA PRUDENTE", municipio: "PRES.PRUDENTE", inspetor: "Nicanor", rotina: 5475, ultimaLimpeza: "2039-03-12" },
  { local: "SAU10", municipio: "PRES.PRUDENTE", inspetor: "Nicanor", rotina: 365, ultimaLimpeza: "2024-10-24" },
  { local: "PP08", municipio: "PRESIDENTE BERNARDES", inspetor: "Nicanor", rotina: 150, ultimaLimpeza: "2024-10-11" },
  { local: "SAU11", municipio: "PRESIDENTE BERNARDES", inspetor: "Nicanor", rotina: 45, ultimaLimpeza: "2024-12-16" },
  { local: "PMRV P Venceslau", municipio: "PRESID. VENCESLAU", inspetor: "Nicanor", rotina: 5475, ultimaLimpeza: "2039-03-12" },
  { local: "SAU12", municipio: "CAIUÁ", inspetor: "Nicanor", rotina: 365, ultimaLimpeza: "2039-03-12" },
  { local: "PP09", municipio: "CAIUÁ", inspetor: "Nicanor", rotina: 45, ultimaLimpeza: "2024-12-16" },
  { local: "PMRV Epitácio", municipio: "CAIUÁ", inspetor: "Nicanor", rotina: 730, ultimaLimpeza: "2039-03-12" },
  { local: "PGF3", municipio: "PALMITAL", inspetor: "Nicanor", rotina: 730, ultimaLimpeza: "2039-03-12" },
  ];

  gerarTabela();

  function alterarRegistro(local) {
    linhaSelecionada = data.find((item) => item.local === local);
    document.getElementById("dataAlterada").value =
      linhaSelecionada.ultimaLimpeza;
    document.getElementById("popup").style.display = "block";
  }

  function fecharPopup() {
    document.getElementById("popup").style.display = "none";
  }

  function salvarAlteracao() {
    const novaData = document.getElementById("dataAlterada").value;
    linhaSelecionada.ultimaLimpeza = novaData;
    gerarTabela();
    fecharPopup();
  }

  const body = document.body;

  function toggleTheme() {
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
  }

  function calcularDiasRestantes(ultimaLimpeza, rotina) {
    const hoje = new Date();
    const ultima = new Date(ultimaLimpeza);
    const proximaLimpeza = new Date(ultima);
    proximaLimpeza.setDate(ultima.getDate() + rotina);
    return Math.ceil((proximaLimpeza - hoje) / (1000 * 60 * 60 * 24));
  }

  function gerarTabela(filtrados = data) {
    const tbody = document.querySelector("#limpezaTable tbody");
    tbody.innerHTML = "";
  
    filtrados.forEach((item) => {
      const diasRestantes = calcularDiasRestantes(item.ultimaLimpeza, item.rotina);
  
      const situacaoEmoji =
        diasRestantes > 15
          ? "🟢" 
          : diasRestantes >= 10
          ? "🟡" 
          : "🔴"; 
  

      tbody.innerHTML += `
        <tr>
          <td>${item.local}</td>
          <td>${item.municipio}</td>
          <td>${item.inspetor}</td>
          <td>${item.rotina}</td>
          <td>${new Date(item.ultimaLimpeza).toLocaleDateString("pt-BR")}</td>
          <td>${diasRestantes}</td>
          <td class="status">${situacaoEmoji}</td> <!-- Emoji inserido aqui -->
          <td><button onclick="alterarRegistro('${item.local}')">Alterar</button></td>
        </tr>`;
    });
  }
  
  function filtrarPorSituacao(cor) {
    const filtrados = data.filter((item) => {
      const diasRestantes = calcularDiasRestantes(
        item.ultimaLimpeza,
        item.rotina
      );
      return (
        (cor === "green" && diasRestantes > 15) ||
        (cor === "orange" && diasRestantes >= 10 && diasRestantes <= 15) ||
        (cor === "red" && diasRestantes < 10)
      );
    });
    gerarTabela(filtrados);
  }

  function filtrarTabela() {
    const filtroLocal = document
      .getElementById("filtroLocal")
      .value.toLowerCase();
    const filtroMunicipio = document
      .getElementById("filtroMunicipio")
      .value.toLowerCase();
    const filtroInspetor = document
      .getElementById("filtroInspetor")
      .value.toLowerCase();
    const filtrados = data.filter(
      (item) =>
        item.local.toLowerCase().includes(filtroLocal) &&
        item.municipio.toLowerCase().includes(filtroMunicipio) &&
        item.inspetor.toLowerCase().includes(filtroInspetor)
    );
    gerarTabela(filtrados);
  }

  function limparFiltros() {
    document.getElementById("filtroLocal").value = "";
    document.getElementById("filtroMunicipio").value = "";
    document.getElementById("filtroInspetor").value = "";
    gerarTabela(data);
  }