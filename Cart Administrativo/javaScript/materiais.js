const data = [
    { "nome": "Tapete Emborrachado", "marca": "NT", "valorunitario": "R$ 130,00", "valornecessidade": "R$ 260,00", "condicao": "Muito Bom", "quantidade": "2", "quantidadeideal": "2", "tipo": "Manutenção" },
    { "nome": "Cafeteira Britania", "marca": "Britania", "valorunitario": "R$ 135,00", "valornecessidade": "R$ 40,00", "condicao": "Regular", "quantidade": "1", "quantidadeideal": "3", "tipo": "Manutenção" },
    { "nome": "Bandeira Cart", "marca": "NT", "valorunitario": "R$ 40,00", "valornecessidade": "R$ 40,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Bandeira Brasil", "marca": "NT", "valorunitario": "R$ 40,00", "valornecessidade": "R$ 40,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Bandeira São Paulo", "marca": "NT", "valorunitario": "R$ 40,00", "valornecessidade": "R$ 80,00", "condicao": "Lacrado", "quantidade": "2", "quantidadeideal": "2", "tipo": "Manutenção" },
    { "nome": "Cafeteira", "marca": "NT", "valorunitario": "R$ 2.200,00", "valornecessidade": "R$ 2.200,00", "condicao": "Regular", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Cafeteira", "marca": "NT", "valorunitario": "R$ 750,00", "valornecessidade": "R$ 750,00", "condicao": "Regular", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Persianas", "marca": "NT", "valorunitario": "R$ 250,00", "valornecessidade": "R$ 1.500,00", "condicao": "Lacrado", "quantidade": "4", "quantidadeideal": "6", "tipo": "Manutenção" },
    { "nome": "Varal dobrável", "marca": "NT", "valorunitario": "R$ 200,00", "valornecessidade": "R$ 200,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Porta chave", "marca": "NT", "valorunitario": "R$ 230,00", "valornecessidade": "R$ 460,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "2", "tipo": "Manutenção" },
    { "nome": "Carpetes São Carlos", "marca": "NT", "valorunitario": "R$ 100,00", "valornecessidade": "R$ 600,00", "condicao": "Muito Bom", "quantidade": "6", "quantidadeideal": "6", "tipo": "Manutenção" },
    { "nome": "Mesa", "marca": "NT", "valorunitario": "R$ 350,00", "valornecessidade": "R$ 700,00", "condicao": "Lacrado", "quantidade": "2", "quantidadeideal": "2", "tipo": "Manutenção" },
    { "nome": "TV Samsung 55'", "marca": "NT", "valorunitario": "R$ 3.000,00", "valornecessidade": "R$ 6.000,00", "condicao": "Lacrado", "quantidade": "2", "quantidadeideal": "2", "tipo": "Manutenção" },
    { "nome": "Pedestal p/ corrente", "marca": "NT", "valorunitario": "R$ 180,00", "valornecessidade": "R$ 180,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Mesa copa", "marca": "NT", "valorunitario": "R$ 140,00", "valornecessidade": "R$ 140,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Micro-ondas", "marca": "NT", "valorunitario": "R$ 600,00", "valornecessidade": "R$ 1.200,00", "condicao": "Regular", "quantidade": "2", "quantidadeideal": "2", "tipo": "Manutenção" },
    { "nome": "Quadro", "marca": "NT", "valorunitario": "R$ 300,00", "valornecessidade": "R$ 1.500,00", "condicao": "Muito Bom", "quantidade": "5", "quantidadeideal": "5", "tipo": "Manutenção" },
    { "nome": "Quadro", "marca": "NT", "valorunitario": "R$ 250,00", "valornecessidade": "R$ 250,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Cinzeiro", "marca": "NT", "valorunitario": "R$ 550,00", "valornecessidade": "R$ 550,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "1", "tipo": "Manutenção" },
    { "nome": "Peças de cadeira", "marca": "NT", "valorunitario": "R$ 280,00", "valornecessidade": "R$ 2.240,00", "condicao": "Muito Bom", "quantidade": "5", "quantidadeideal": "8", "tipo": "Manutenção" },
    { "nome": "Porta papel toalha", "marca": "EaglesStar", "valorunitario": "R$ 40,00", "valornecessidade": "R$ 120,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "3", "tipo": "Manutenção" },
    { "nome": "Porta higiênica", "marca": "Bg Clear", "valorunitario": "R$ 40,00", "valornecessidade": "R$ 120,00", "condicao": "Lacrado", "quantidade": "3", "quantidadeideal": "3", "tipo": "Manutenção" },
    { "nome": "Odorizadores de ambiente", "marca": "NT", "valorunitario": "R$ 5,00", "valornecessidade": "R$ 25,00", "condicao": "Muito Bom", "quantidade": "5", "quantidadeideal": "5", "tipo": "Manutenção" },
    { "nome": 'Placas de forro', marca: 'NT', valorunitario: 'R$ 38,00', valornecessidade: 'R$ 760,00', condicao: 'Muito Bom', quantidade: '20', quantidadeideal: '20', tipo: 'Manutenção' },
    { "nome": 'Forro pvc caixa', marca: 'NT', valorunitario: 'R$ 45,00', valornecessidade: 'R$ 135,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '3', tipo: 'Manutenção' },
    { "nome": 'Carpete Caixa', marca: 'NT', valorunitario: 'R$ 28,00', valornecessidade: 'R$ 560,00', condicao: 'Muito Bom', quantidade: '20', quantidadeideal: '20', tipo: 'Manutenção' },
    { "nome": 'Cortina blackout', marca: 'NT', valorunitario: 'R$ 400,00', valornecessidade: 'R$ 400,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '1', tipo: 'Manutenção' },
    { "nome": 'Encosto cabeça cadeira', marca: 'NT', valorunitario: 'R$ 160,00', valornecessidade: 'R$ 160,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '1', tipo: 'Manutenção' },
    { "nome": 'Purificador de ar', marca: 'Ibbl', valorunitario: 'R$ 200,00', valornecessidade: 'R$ 200,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '1', tipo: 'Manutenção' },
    { "nome": 'Fechadura elétrica', marca: 'Intelbras', valorunitario: 'R$ 900,00', valornecessidade: 'R$ 900,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '1', tipo: 'Manutenção' },
    { "nome": 'Gancho adesivo', marca: 'NT', valorunitario: 'R$ 4,00', valornecessidade: 'R$ 12,00', condicao: 'Lacrado', quantidade: '3', quantidadeideal: '3', tipo: 'Manutenção' },
    { "nome": 'Proteção pé mesa', marca: 'NT', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 30,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '1', tipo: 'Manutenção' },
    { "nome": 'Fita de espuma adesiva', marca: 'NT', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 30,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '1', tipo: 'Manutenção' },
    { "nome": 'Cavadeira', marca: 'NT', valorunitario: 'R$ 70,00', valornecessidade: 'R$ 280,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Picareta', marca: 'NT', valorunitario: 'R$ 140,00', valornecessidade: 'R$ 560,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Enxada', marca: 'NT', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 240,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Grifo', marca: 'NT', valorunitario: 'R$ 400,00', valornecessidade: 'R$ 1.600,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Corda', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 100,00', condicao: 'Muito Bom', quantidade: '4', quantidadeideal: '5', tipo: 'Ferramenta' },
    { "nome": 'Cortador de Piso', marca: 'NT', valorunitario: 'R$ 200,00', valornecessidade: 'R$ 400,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '2', tipo: 'Ferramenta' },
    { "nome": 'Espuma', marca: 'NT', valorunitario: 'R$ 15,00', valornecessidade: 'R$ 60,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Marreta', marca: 'NT', valorunitario: 'R$ 35,00', valornecessidade: 'R$ 140,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Desentupidor', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 80,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Estilete', marca: 'NT', valorunitario: 'R$ 35,00', valornecessidade: 'R$ 210,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '6', tipo: 'Ferramenta' },
    { "nome": 'Alicate de Pressão', marca: 'NT', valorunitario: 'R$ 40,00', valornecessidade: 'R$ 160,00', condicao: 'Bom', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Chave de Boca', marca: 'NT', valorunitario: 'R$ 18,00', valornecessidade: 'R$ 860,00', condicao: 'Muito Bom', quantidade: '34', quantidadeideal: '48', tipo: 'Ferramenta' },
    { "nome": 'Alicate Crimpador', marca: 'NT', valorunitario: 'R$ 140,00', valornecessidade: 'R$ 560,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Rebitadeira', marca: 'NT', valorunitario: 'R$ 25,00', valornecessidade: 'R$ 150,00', condicao: 'Muito Bom', quantidade: '6', quantidadeideal: '6', tipo: 'Ferramenta' },
    { "nome": 'Trena', marca: 'NT', valorunitario: 'R$ 25,00', valornecessidade: 'R$ 150,00', condicao: 'Bom', quantidade: '5', quantidadeideal: '6', tipo: 'Ferramenta' },
    { "nome": 'Arco de Serra', marca: 'NT', valorunitario: 'R$ 40,00', valornecessidade: 'R$ 400,00', condicao: 'Muito Bom', quantidade: '9', quantidadeideal: '10', tipo: 'Ferramenta' },
    { "nome": 'Alicate', marca: 'NT', valorunitario: 'R$ 45,00', valornecessidade: 'R$ 810,00', condicao: 'Muito Bom', quantidade: '18', quantidadeideal: '18', tipo: 'Ferramenta' },
    { "nome": 'Martelo', marca: 'NT', valorunitario: 'R$ 25,00', valornecessidade: 'R$ 150,00', condicao: 'Muito Bom', quantidade: '6', quantidadeideal: '6', tipo: 'Ferramenta' },
    { "nome": 'Chave Philips', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 960,00', condicao: 'Muito Bom', quantidade: '32', quantidadeideal: '48', tipo: 'Ferramenta' },
    { "nome": 'Chave de Fenda', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 960,00', condicao: 'Muito Bom', quantidade: '36', quantidadeideal: '48', tipo: 'Ferramenta' },
    { "nome": 'Serra de Mão', marca: 'NT', valorunitario: 'R$ 550,00', valornecessidade: 'R$ 2.200,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Pé de Cabra', marca: 'NT', valorunitario: 'R$ 50,00', valornecessidade: 'R$ 200,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Nível', marca: 'NT', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 120,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Chave torx', marca: 'NT', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 120,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Jogo Chave allen', marca: 'NT', valorunitario: 'R$ 35,00', valornecessidade: 'R$ 210,00', condicao: 'Muito Bom', quantidade: '5', quantidadeideal: '6', tipo: 'Ferramenta' },
    { "nome": 'Peneira', marca: 'NT', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 240,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Máquina de pintura air less', marca: 'NT', valorunitario: 'R$ 800,00', valornecessidade: 'R$ 3.200,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Extensão elétrica', marca: 'NT', valorunitario: 'R$ 450,00', valornecessidade: 'R$ 900,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '2', tipo: 'Ferramenta' },
    { "nome": 'Broca circular', marca: 'NT', valorunitario: 'R$ 32,00', valornecessidade: 'R$ 128,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Disco de corte makita', marca: 'Makita', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 100,00', condicao: 'Bom', quantidade: '3', quantidadeideal: '5', tipo: 'Ferramenta' },
    { "nome": 'Fita catraca', marca: 'NT', valorunitario: 'R$ 21,00', valornecessidade: 'R$ 84,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Serrote', marca: 'Ramada', valorunitario: 'R$ 42,00', valornecessidade: 'R$ 168,00', condicao: 'Bom', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Jogo Broca circular', marca: 'NT', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 240,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Pistola de silicone', marca: 'NT', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 180,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '6', tipo: 'Ferramenta' },
    { "nome": 'Lixadeira Dewalt', marca: 'Makita', valorunitario: 'R$ 420,00', valornecessidade: 'R$ 1.680,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Serra', marca: 'NT', valorunitario: 'R$ 40,00', valornecessidade: 'R$ 160,00', condicao: 'Muito Bom', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Broca escova de aço', marca: 'NT', valorunitario: 'R$ 32,00', valornecessidade: 'R$ 64,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '2', tipo: 'Ferramenta' },
    { "nome": 'Tubo de PU', marca: 'W Max', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 240,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '8', tipo: 'Ferramenta' },
    { "nome": 'Tubo de silicone', marca: 'NT', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 120,00', condicao: 'Regular', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Soldador', marca: 'NT', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 60,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '2', tipo: 'Ferramenta' },
    { "nome": 'Espátula', marca: 'NT', valorunitario: 'R$ 25,00', valornecessidade: 'R$ 100,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Colher de pedreiro', marca: 'NT', valorunitario: 'R$ 30,00', valornecessidade: 'R$ 120,00', condicao: 'Ruim', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Ventosa', marca: 'NT', valorunitario: 'R$ 140,00', valornecessidade: 'R$ 560,00', condicao: 'Bom', quantidade: '3', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Desempenadeira', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 120,00', condicao: 'Bom', quantidade: '2', quantidadeideal: '6', tipo: 'Ferramenta' },
    { "nome": 'Torquesa', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 80,00', condicao: 'Bom', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Vira ferro', marca: 'NT', valorunitario: 'R$ 15,00', valornecessidade: 'R$ 60,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Fita isolante', marca: 'NT', valorunitario: 'R$ 8,00', valornecessidade: 'R$ 64,00', condicao: 'Péssimo', quantidade: '1', quantidadeideal: '8', tipo: 'Ferramenta' },
    { "nome": 'Talhadeira', marca: 'NT', valorunitario: 'R$ 12,00', valornecessidade: 'R$ 48,00', condicao: 'Bom', quantidade: '3', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Enforca Gato', marca: 'NT', valorunitario: 'R$ 10,00', valornecessidade: 'R$ 40,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Chave catraca', marca: 'NT', valorunitario: 'R$ 50,00', valornecessidade: 'R$ 200,00', condicao: 'Muito Bom', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Jogo ponta chave catraca', marca: 'NT', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 240,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Jogo de brocas e pontas', marca: 'NT', valorunitario: 'R$ 230,00', valornecessidade: 'R$ 920,00', condicao: 'Muito Bom', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Martelete Dewalt', marca: 'De Walt', valorunitario: 'R$ 900,00', valornecessidade: 'R$ 3.600,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Furadeira e parafusadeira elétrica', marca: 'De Walt', valorunitario: 'R$ 600,00', valornecessidade: 'R$ 2.400,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Soprador', marca: 'Makita', valorunitario: 'R$ 200,00', valornecessidade: 'R$ 800,00', condicao: 'Muito Bom', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Prumo', marca: 'NT', valorunitario: 'R$ 14,00', valornecessidade: 'R$ 56,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Gancho', marca: 'NT', valorunitario: 'R$ 150,00', valornecessidade: 'R$ 300,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '2', tipo: 'Ferramenta' },
    { "nome": 'Filtro de linha 20m', marca: 'NT', valorunitario: 'R$ 220,00', valornecessidade: 'R$ 880,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Fita antiderrapante', marca: 'NT', valorunitario: 'R$ 15,00', valornecessidade: 'R$ 60,00', condicao: 'Muito Bom', quantidade: '2', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Plaina', marca: 'NT', valorunitario: 'R$ 280,00', valornecessidade: 'R$ 560,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '2', tipo: 'Ferramenta' },
    { "nome": 'Escada', marca: 'NT', valorunitario: 'R$ 200,00', valornecessidade: 'R$ 800,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Marreta de borracha', marca: 'NT', valorunitario: 'R$ 35,00', valornecessidade: 'R$ 140,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '4', tipo: 'Ferramenta' },
    { "nome": 'Lanterna', marca: 'NT', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 120,00', condicao: 'Regular', quantidade: '2', quantidadeideal: '2', tipo: 'Ferramenta' },
    { "nome": "Chapa de Aluminio 1.80", "marca": "NT", "valorunitario": "R$ 18,00", "valornecessidade": "R$ 36,00", "condicao": "Bom", "quantidade": "2", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Chapa de Aluminio 1.50m", "marca": "NT", "valorunitario": "R$ 15,00", "valornecessidade": "R$ 30,00", "condicao": "Bom", "quantidade": "2", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Chapa de Aluminio 1.70m", "marca": "NT", "valorunitario": "R$ 17,00", "valornecessidade": "R$ 51,00", "condicao": "Bom", "quantidade": "3", "quantidadeideal": "3", "tipo": "Materiais" },
    { "nome": "Cabo de vassoura 1.20m", "marca": "NT", "valorunitario": "R$ 12,00", "valornecessidade": "R$ 60,00", "condicao": "Bom", "quantidade": "5", "quantidadeideal": "5", "tipo": "Materiais" },
    { "nome": "Mão francesa", "marca": "NT", "valorunitario": "R$ 45,00", "valornecessidade": "R$ 270,00", "condicao": "Muito Bom", "quantidade": "6", "quantidadeideal": "6", "tipo": "Materiais" },
    { "nome": "Suporte", "marca": "NT", "valorunitario": "R$ 30,00", "valornecessidade": "R$ 60,00", "condicao": "Muito Bom", "quantidade": "2", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Fita de borracha", "marca": "NT", "valorunitario": "R$ 80,00", "valornecessidade": "R$ 160,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Lite'n Foamy", "marca": "NT", "valorunitario": "R$ 90,00", "valornecessidade": "R$ 270,00", "condicao": "Lacrado", "quantidade": "3", "quantidadeideal": "3", "tipo": "Materiais" },
    { "nome": "Vidro", "marca": "NT", "valorunitario": "R$ 250,00", "valornecessidade": "R$ 250,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Cola tack", "marca": "HD Flex", "valorunitario": "R$ 160,00", "valornecessidade": "R$ 320,00", "condicao": "Lacrado", "quantidade": "2", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Corrente 1.80", "marca": "NT", "valorunitario": "R$ 100,00", "valornecessidade": "R$ 100,00", "condicao": "", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Corrente 1m", "marca": "NT", "valorunitario": "R$ 110,00", "valornecessidade": "R$ 110,00", "condicao": "Bom", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Molde pintura", "marca": "NT", "valorunitario": "R$ 74,85", "valornecessidade": "R$ 748,50", "condicao": "Bom", "quantidade": "10", "quantidadeideal": "10", "tipo": "Materiais" },
    { "nome": "Balança", "marca": "Villares", "valorunitario": "R$ 20,00", "valornecessidade": "R$ 20,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Cinzeiro", "marca": "NT", "valorunitario": "R$ 460,00", "valornecessidade": "R$ 920,00", "condicao": "Lacrado", "quantidade": "2", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Rolo saco de lixo", "marca": "NT", "valorunitario": "R$ 20,00", "valornecessidade": "R$ 20,00", "condicao": "Muito Bom", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Oleo para pistão", "marca": "Schulz", "valorunitario": "R$ 46,00", "valornecessidade": "R$ 46,00", "condicao": "Ruim", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Oleo para compressores de refrigeração", "marca": "Montreal", "valorunitario": "R$ 53,00", "valornecessidade": "R$ 53,00", "condicao": "Regular", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Mola automatica para portas", "marca": "Coimbra", "valorunitario": "R$ 70,00", "valornecessidade": "R$ 140,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Graxa", "marca": "Bel Tools", "valorunitario": "R$ 32,00", "valornecessidade": "R$ 64,00", "condicao": "Regular", "quantidade": "1", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Fertilizante", "marca": "Forth", "valorunitario": "R$ 20,00", "valornecessidade": "R$ 40,00", "condicao": "Regular", "quantidade": "1", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Fertilizante Spray", "marca": "Forth", "valorunitario": "R$ 30,00", "valornecessidade": "R$ 60,00", "condicao": "Regular", "quantidade": "1", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Temporizador irrigação", "marca": "Trato", "valorunitario": "R$ 110,00", "valornecessidade": "R$ 110,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Suporte Tv", "marca": "Amfer", "valorunitario": "R$ 35,00", "valornecessidade": "R$ 35,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "1", "tipo": "Materiais" },
    { "nome": "Inseticida", "marca": "Pro Inset", "valorunitario": "R$ 26,00", "valornecessidade": "R$ 52,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Fita de borda", "marca": "NT", "valorunitario": "R$ 32,00", "valornecessidade": "R$ 64,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Fita antiderrapante", "marca": "Rapazi", "valorunitario": "R$ 60,00", "valornecessidade": "R$ 120,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "2", "tipo": "Materiais" },
    { "nome": "Maçaneta", "marca": "NT", "valorunitario": "R$ 30,00", "valornecessidade": "R$ 120,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "4", "tipo": "Materiais" },
    { "nome": "Dobradiça", "marca": "NT", "valorunitario": "R$ 15,00", "valornecessidade": "R$ 60,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "4", "tipo": "Materiais" },
    { "nome": "Fechadura", "marca": "NT", "valorunitario": "R$ 40,00", "valornecessidade": "R$ 160,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "4", "tipo": "Materiais" },
    { "nome": "Registro de esfera", "marca": "NT", "valorunitario": "R$ 30,00", "valornecessidade": "R$ 120,00", "condicao": "Lacrado", "quantidade": "1", "quantidadeideal": "4", "tipo": "Materiais" },
    { "nome": "Expositor", "marca": "Dello", "valorunitario": "R$ 25,00", "valornecessidade": "R$ 100,00", "condicao": "Lacrado", "quantidade": "3", "quantidadeideal": "4", "tipo": "Materiais" },
    { "nome": "Dobradiça", "marca": "NT", "valorunitario": "R$ 3,00", "valornecessidade": "R$ 72,00", "condicao": "Muito Bom", "quantidade": "15", "quantidadeideal": "24", "tipo": "Materiais" },
    { "nome": 'Borracha Liquida Impermeabilizante', marca: 'Elastimper', valorunitario: 'R$ 800,00', valornecessidade: 'R$ 12.800,00', condicao: 'Lacrado', quantidade: '10', quantidadeideal: '16', tipo: 'Pintura' },
    { "nome": 'Rolo de pintura', marca: 'NT', valorunitario: 'R$ 25,00', valornecessidade: 'R$ 300,00', condicao: 'Bom', quantidade: '3', quantidadeideal: '12', tipo: 'Pintura' },
    { "nome": 'Tinta Acrilica semi brilho Branco neve', marca: 'Suvinil', valorunitario: 'R$ 760,00', valornecessidade: 'R$ 13.680,00', condicao: 'Lacrado', quantidade: '5', quantidadeideal: '18', tipo: 'Pintura' },
    { "nome": 'Tinta esmalte para madeira e metais', marca: 'Suvinil', valorunitario: 'R$ 130,00', valornecessidade: 'R$ 2.080,00', condicao: 'Lacrado', quantidade: '10', quantidadeideal: '16', tipo: 'Pintura' },
    { "nome": 'Esmalte base água Azul del rey', marca: 'Sherwin Williams', valorunitario: 'R$ 48,00', valornecessidade: 'R$ 384,00', condicao: 'Lacrado', quantidade: '2', quantidadeideal: '8', tipo: 'Pintura' },
    { "nome": 'Tinta Acrilica paione lavável fosco', marca: 'Sherwin Williams', valorunitario: 'R$ 600,00', valornecessidade: 'R$ 2.400,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta acrilica Fosco completo', marca: 'Suvinil', valorunitario: 'R$ 800,00', valornecessidade: 'R$ 6.400,00', condicao: 'Lacrado', quantidade: '2', quantidadeideal: '8', tipo: 'Pintura' },
    { "nome": 'Kit epóxi catalisavel', marca: 'Protech', valorunitario: 'R$ 200,00', valornecessidade: 'R$ 4.400,00', condicao: 'Lacrado', quantidade: '22', quantidadeideal: '22', tipo: 'Pintura' },
    { "nome": 'Thinner diluente lata', marca: 'Eucatex', valorunitario: 'R$ 80,00', valornecessidade: 'R$ 1.920,00', condicao: 'Lacrado', quantidade: '24', quantidadeideal: '24', tipo: 'Pintura' },
    { "nome": 'Bandeja rolo de pintura', marca: 'NT', valorunitario: 'R$ 120,00', valornecessidade: 'R$ 960,00', condicao: 'Bom', quantidade: '2', quantidadeideal: '8', tipo: 'Pintura' },
    { "nome": 'Pincel', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 160,00', condicao: '', quantidade: '3', quantidadeideal: '8', tipo: 'Pintura' },
    { "nome": 'Suporte lixa manual', marca: 'NT', valorunitario: 'R$ 35,00', valornecessidade: 'R$ 280,00', condicao: 'Muito Bom', quantidade: '2', quantidadeideal: '8', tipo: 'Pintura' },
    { "nome": 'Tinta esmalte para madeira e metais Bri Azul', marca: 'Suvinil', valorunitario: 'R$ 130,00', valornecessidade: 'R$ 520,00', condicao: 'Ruim', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta esmalte para madeira e metais Brilhante Marrom', marca: 'Suvinil', valorunitario: 'R$ 130,00', valornecessidade: 'R$ 520,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta esmalte para madeira e metais Fosco Branco', marca: 'Suvinil', valorunitario: 'R$ 130,00', valornecessidade: 'R$ 520,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta esmalte para madeira e metais Amarelo Ouro', marca: 'Suvinil', valorunitario: 'R$ 130,00', valornecessidade: 'R$ 520,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta esmalte para madeira e metais Brilhante Laranja', marca: 'Suvinil', valorunitario: 'R$ 130,00', valornecessidade: 'R$ 520,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta esmalte para madeira e metais Brilhante Verde', marca: 'Suvinil', valorunitario: 'R$ 130,00', valornecessidade: 'R$ 520,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta Acrilica Concreto fosco', marca: 'Eucatex', valorunitario: 'R$ 415,00', valornecessidade: 'R$ 1.660,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta de demarcação viaria', marca: 'Hydro Way', valorunitario: 'R$ 220,00', valornecessidade: 'R$ 880,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Massa corrida', marca: 'Suvinil', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 160,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '8', tipo: 'Pintura' },
    { "nome": 'Tinta branca gesso e dry wall', marca: 'Coral', valorunitario: 'R$ 82,00', valornecessidade: 'R$ 656,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '8', tipo: 'Pintura' },
    { "nome": 'Espatula de silicone', marca: 'NT', valorunitario: 'R$ 22,00', valornecessidade: 'R$ 88,00', condicao: 'Regular', quantidade: '2', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Endurecedor p/ Esmalte', marca: 'Maza', valorunitario: 'R$ 19,90', valornecessidade: 'R$ 159,20', condicao: 'Bom', quantidade: '1', quantidadeideal: '8', tipo: 'Pintura' },
    { "nome": 'Fundo preparador base água', marca: 'Coral', valorunitario: 'R$ 138,00', valornecessidade: 'R$ 552,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta epóxi base água', marca: 'Eucatex', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 240,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta azul piscina', marca: 'Maza', valorunitario: 'R$ 300,00', valornecessidade: 'R$ 1.200,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Adesivo de contato', marca: 'Cascola', valorunitario: 'R$ 183,00', valornecessidade: 'R$ 732,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta spray Preto fosco', marca: 'Etaniz', valorunitario: 'R$ 27,00', valornecessidade: 'R$ 108,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Tinta Spray Preto Brilhante', marca: 'Colorgin', valorunitario: 'R$ 26,00', valornecessidade: 'R$ 104,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Pintura' },
    { "nome": 'Chuveiro 220v', marca: 'Lorenzetti', valorunitario: 'R$ 130,00', valornecessidade: 'R$ 130,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '1', tipo: 'Saneamento' },
    { "nome": 'Cola Adesivo Plástico', marca: 'Krona', valorunitario: 'R$ 7,00', valornecessidade: 'R$ 28,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Veda Rosca', marca: 'NT', valorunitario: 'R$ 5,00', valornecessidade: 'R$ 20,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Tricloro Estabilizado', marca: 'Hidro Ali', valorunitario: 'R$ 5,60', valornecessidade: 'R$ 168,00', condicao: 'Muito Bom', quantidade: '30', quantidadeideal: '30', tipo: 'Saneamento' },
    { "nome": 'Bomba Poço', marca: 'NT', valorunitario: 'R$ 600,00', valornecessidade: 'R$ 2.400,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Kit Descarga Completo', marca: 'NT', valorunitario: 'R$ 40,00', valornecessidade: 'R$ 160,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Bomba de Água Periférica', marca: 'Lorenzetti', valorunitario: 'R$ 205,00', valornecessidade: 'R$ 820,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Chuveiro', marca: 'Lorenzetti', valorunitario: 'R$ 80,00', valornecessidade: 'R$ 480,00', condicao: 'Bom', quantidade: '6', quantidadeideal: '6', tipo: 'Saneamento' },
    { "nome": 'Cola PVC', marca: 'Tigre', valorunitario: 'R$ 25,00', valornecessidade: 'R$ 100,00', condicao: 'Lacrado', quantidade: '4', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Hidrometro', marca: 'NT', valorunitario: 'R$ 180,00', valornecessidade: 'R$ 720,00', condicao: 'Regular', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Torneira', marca: 'NT', valorunitario: 'R$ 260,00', valornecessidade: 'R$ 1.040,00', condicao: '', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Ralo', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 80,00', condicao: 'Lacrado', quantidade: '2', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Torneira', marca: 'NT', valorunitario: 'R$ 25,00', valornecessidade: 'R$ 100,00', condicao: 'Lacrado', quantidade: '2', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Torneira', marca: 'Talita', valorunitario: 'R$ 25,00', valornecessidade: 'R$ 100,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Anel de Vedação', marca: 'Censi', valorunitario: 'R$ 5,00', valornecessidade: 'R$ 20,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Conector 3/4', marca: 'NT', valorunitario: 'R$ 20,00', valornecessidade: 'R$ 80,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Obturador Coartal', marca: 'NT', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 240,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'Saneamento' },
    { "nome": 'Caixa de Luva Galvanizada 1/4', marca: 'NT', valorunitario: 'R$ 8,00', valornecessidade: 'R$ 320,00', condicao: 'Muito Bom', quantidade: '40', quantidadeideal: '40', tipo: 'Saneamento' },
    { "nome": 'Cofre', marca: 'NT', valorunitario: 'R$ 700,00', valornecessidade: 'R$ 70,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '1', tipo: 'Outros' },
    { "nome": 'Chaves', marca: 'NT', valorunitario: 'R$ 5,00', valornecessidade: 'R$ 250,00', condicao: 'Regular', quantidade: '50', quantidadeideal: '50', tipo: 'Outros' },
    { "nome": 'Suporte', marca: 'NT', valorunitario: 'R$ 250,00', valornecessidade: 'R$ 250,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '1', tipo: 'Outros' },
    { "nome": 'Caixa de Chaves', marca: 'NT', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 60,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '1', tipo: 'Outros' },
    { "nome": 'Placa', marca: 'NT', valorunitario: 'R$ 350,00', valornecessidade: 'R$ 700,00', condicao: 'Regular', quantidade: '2', quantidadeideal: '2', tipo: 'Sinalização' },
    { "nome": 'Placa', marca: 'NT', valorunitario: 'R$ 350,00', valornecessidade: 'R$ 700,00', condicao: 'Regular', quantidade: '2', quantidadeideal: '2', tipo: 'Sinalização' },
    { "nome": 'Placa DML', marca: 'NT', valorunitario: 'R$ 120,00', valornecessidade: 'R$ 120,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '1', tipo: 'Sinalização' },
    { "nome": 'Placa Piso Escorregadio', marca: 'NT', valorunitario: 'R$ 70,00', valornecessidade: 'R$ 140,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '2', tipo: 'Sinalização' },
    { "nome": 'EPI Reuso', marca: 'NT', valorunitario: 'R$ 400,00', valornecessidade: 'R$ 800,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '2', tipo: 'EPI' },
    { "nome": 'Extintor de Incêndio', marca: 'NT', valorunitario: 'R$ 100,00', valornecessidade: 'R$ 400,00', condicao: 'Péssimo', quantidade: '0', quantidadeideal: '4', tipo: 'EPI' },
    { "nome": 'Cinto de Segurança EPI', marca: 'NT', valorunitario: 'R$ 300,00', valornecessidade: 'R$ 1.200,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'EPI' },
    { "nome": 'Capacete', marca: 'NT', valorunitario: 'R$ 35,00', valornecessidade: 'R$ 140,00', condicao: 'Muito Bom', quantidade: '4', quantidadeideal: '4', tipo: 'EPI' },
    { "nome": 'Óculos', marca: 'NT', valorunitario: 'R$ 40,00', valornecessidade: 'R$ 160,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '4', tipo: 'EPI' },
    { "nome": 'Luvas', marca: 'NT', valorunitario: 'R$ 50,00', valornecessidade: 'R$ 200,00', condicao: 'Muito Bom', quantidade: '3', quantidadeideal: '4', tipo: 'EPI' },
    { "nome": 'Capacete de Solda', marca: 'Lyons', valorunitario: 'R$ 120,00', valornecessidade: 'R$ 480,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'EPI' },
    { "nome": 'Galocha', marca: 'NT', valorunitario: 'R$ 90,00', valornecessidade: 'R$ 360,00', condicao: 'Bom', quantidade: '1', quantidadeideal: '4', tipo: 'EPI' },
    { "nome": 'Luvas de Borracha', marca: 'Danny', valorunitario: 'R$ 60,00', valornecessidade: 'R$ 240,00', condicao: 'Muito Bom', quantidade: '1', quantidadeideal: '4', tipo: 'EPI' },
    { "nome": 'Protetor Auricular', marca: 'NT', valorunitario: 'R$ 15,00', valornecessidade: 'R$ 60,00', condicao: 'Lacrado', quantidade: '1', quantidadeideal: '4', tipo: 'EPI' },
];



    function loadTableData(filteredData) {
      const tableBody = document.querySelector("#ocorrenciasTable tbody");
      tableBody.innerHTML = ""; // Limpar a tabela antes de preencher
      let totalValorUnitario = 0;
      let totalValorNecessidade = 0;
      let totalQuantidade = 0;
      let totalQuantidadeIdeal = 0;

      filteredData.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${item.nome}</td>
          <td>${item.marca}</td>
          <td>${item.valorunitario}</td>
          <td>${item.valornecessidade}</td>
          <td>${item.condicao}</td>
          <td>${item.quantidade}</td>
          <td>${item.quantidadeideal}</td>
          <td>${item.tipo}</td>
        `;
        tableBody.appendChild(row);

        // Calculando totais
        totalValorUnitario += parseFloat(item.valorunitario.replace('R$', '').replace('.', '').replace(',', '.'));
        totalValorNecessidade += parseFloat(item.valornecessidade.replace('R$', '').replace('.', '').replace(',', '.'));
        totalQuantidade += parseInt(item.quantidade);
        totalQuantidadeIdeal += parseInt(item.quantidadeideal);
      });

      // Atualizando totais
      document.getElementById("totalValorUnitario").textContent = `R$ ${totalValorUnitario.toFixed(2).replace('.', ',')}`;
      document.getElementById("totalValorNecessidade").textContent = `R$ ${totalValorNecessidade.toFixed(2).replace('.', ',')}`;
      document.getElementById("totalQuantidade").textContent = totalQuantidade;
      document.getElementById("totalQuantidadeIdeal").textContent = totalQuantidadeIdeal;
    }

    function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
}

    function filterTable() {
      const condicaoFilter = document.getElementById('filterCondicao').value.toLowerCase();
      const tipoFilter = document.getElementById('filterTipo').value.toLowerCase();
      const nomeFilter = document.getElementById('filterNome').value.toLowerCase();
      const valorUnitarioFilter = document.getElementById('filterValorUnitario').value.toLowerCase();
      const valorNecessidadeFilter = document.getElementById('filterValorNecessidade').value.toLowerCase();

      const filteredData = data.filter(item => {
        return (condicaoFilter ? item.condicao.toLowerCase().includes(condicaoFilter) : true) &&
               (tipoFilter ? item.tipo.toLowerCase().includes(tipoFilter) : true) &&
               (nomeFilter ? item.nome.toLowerCase().includes(nomeFilter) : true) &&
               (valorUnitarioFilter ? item.valorunitario.toLowerCase().includes(valorUnitarioFilter) : true) &&
               (valorNecessidadeFilter ? item.valornecessidade.toLowerCase().includes(valorNecessidadeFilter) : true);
      });

      loadTableData(filteredData);
    }

    function limparFiltros() {
      document.getElementById('filterCondicao').value = '';
      document.getElementById('filterTipo').value = '';
      document.getElementById('filterNome').value = '';
      document.getElementById('filterValorUnitario').value = '';
      document.getElementById('filterValorNecessidade').value = '';
      loadTableData(data);
    }

    loadTableData(data); // Carregar os dados na inicialização