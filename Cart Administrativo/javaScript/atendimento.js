const data = [
    { local: 'SEDECCO', municipio: 'BAURU', inspetor: 'Edson' },
 { local: 'SAU01', municipio: 'PIRATININGA', inspetor: 'Edson' },
 { local: 'PP01', municipio: 'PIRATININGA', inspetor: 'Edson' },
 { local: 'PGF4', municipio: 'PAULISTANIA', inspetor: 'Edson' },
 { local: 'SAU02', municipio: 'PAULISTANIA', inspetor: 'Edson' },
 { local: 'PP02', municipio: 'SANTA CRUZ DO RIO PARDO', inspetor: 'Edson' },
 { local: 'PMRV Sta. Cruz do Pardo', municipio: 'SANTA CRUZ DO RIO PARDO', inspetor: 'Edson' },
 { local: 'SAU03', municipio: 'SANTA CRUZ DO RIO PARDO', inspetor: 'Edson' },
 { local: 'PP03', municipio: 'SANTA CRUZ DO RIO PARDO', inspetor: 'Edson' },
 { local: 'PMRV Ourinhos', municipio: 'OURINHOS', inspetor: 'Edson' },
 { local: 'CONSERVA OURINHOS', municipio: 'OURINHOS', inspetor: 'Edson' },
 { local: 'SAU04', municipio: 'SALTOGRANDE', inspetor: 'Edson' },
 { local: 'PGF1', municipio: 'PALMITAL', inspetor: 'José' },
 { local: 'PGF2', municipio: 'PALMITAL', inspetor: 'José' },
 { local: 'PP04', municipio: 'PALMITAL', inspetor: 'José' },
 { local: 'SAU05', municipio: 'PALMITAL', inspetor: 'José' },
 { local: 'ALMOXARIFADO', municipio: 'ASSIS', inspetor: 'José' },
 { local: 'CONSERVA ASSIS', municipio: 'ASSIS', inspetor: 'José' },
 { local: 'PMRV Assis', municipio: 'ASSIS', inspetor: 'José' },
 { local: 'SAU06', municipio: 'ASSIS', inspetor: 'José' },
 { local: 'PP05', municipio: 'ASSIS', inspetor: 'José' },
 { local: 'SAU07', municipio: 'PARAGUAÇU PAULISTA', inspetor: 'José' },
 { local: 'PMRV Rancharia', municipio: 'RANCHARIA', inspetor: 'José' },
 { local: 'SAU08', municipio: 'RANCHARIA', inspetor: 'José' },
 { local: 'PP06', municipio: 'RANCHARIA', inspetor: 'José' },
 { local: 'PP07', municipio: 'REGENTEFEIJO', inspetor: 'Nicanor' },
 { local: 'SAU09', municipio: 'REGENTEFEIJO', inspetor: 'Nicanor' },
 { local: 'PMRV P Prudente', municipio: 'PRES.PRUDENTE', inspetor: 'Nicanor' },
 { local: 'CONSERVA PRUDENTE', municipio: 'PRES.PRUDENTE', inspetor: 'Nicanor' },
 { local: 'SAU10', municipio: 'PRES.PRUDENTE', inspetor: 'Nicanor' },
 { local: 'PP08', municipio: 'PRESIDENTE BERNARDES', inspetor: 'Nicanor' },
 { local: 'SAU11', municipio: 'PRESIDENTE BERNARDES', inspetor: 'Nicanor' },
 { local: 'PMRV P Venceslau', municipio: 'PRESID. VENCESLAU', inspetor: 'Nicanor' },
 { local: 'SAU12', municipio: 'CAIUÁ', inspetor: 'Nicanor' },
 { local: 'PP09', municipio: 'CAIUÁ', inspetor: 'Nicanor' },
 { local: 'PMRV Epitácio', municipio: 'CAIUÁ', inspetor: 'Nicanor' },
 { local: 'PGF3', municipio: 'PALMITAL', inspetor: 'Nicanor' },
 
     
 ];
 
 function gerarTabela(dados) {
   const tbody = document.querySelector('#limpezaTable tbody');
   tbody.innerHTML = '';
   dados.forEach(item => {
     tbody.innerHTML += `
       <tr>
         <td>${item.local}</td>
         <td>${item.municipio}</td>
         <td>${item.inspetor}</td>
       </tr>
     `;
   });
 }
 
 gerarTabela(data);
 
 
     const body = document.body;
 
     function toggleTheme() {
       const currentTheme = body.getAttribute('data-theme');
       const newTheme = currentTheme === 'light' ? 'dark' : 'light';
       body.setAttribute('data-theme', newTheme);
     }
 
     function filtrarTabela() {
   const filtroLocal = document.getElementById('filtroLocal').value.toLowerCase();
   const filtroMunicipio = document.getElementById('filtroMunicipio').value.toLowerCase();
   const filtroInspetor = document.getElementById('filtroInspetor').value.toLowerCase();
 
   const filtrados = data.filter(item =>
     item.local.toLowerCase().includes(filtroLocal) &&
     item.municipio.toLowerCase().includes(filtroMunicipio) &&
     item.inspetor.toLowerCase().includes(filtroInspetor)
   );
 
   gerarTabela(filtrados);
 }
 
 
 function limparFiltros() {
   document.getElementById('filtroLocal').value = '';
   document.getElementById('filtroMunicipio').value = '';
   document.getElementById('filtroInspetor').value = '';
   gerarTabela(data);
 }
 