// script.js

// Taxa de absorção fixa para Kappaphycus alvarezii (kg/m²/ano)
const TAXA_ABSORCAO_M2 = 0.8; // 0.8 kg/m²/ano
const TAXA_ABSORCAO_KM2 = 0.8 * 1e6; // 800.000 kg/km²/ano

function calcularAbsorcao() {
    // Obter o valor da área e a unidade escolhida
    const area = parseFloat(document.getElementById('area').value);
    const unidade = document.getElementById('unidade').value;

    // Verificar se o valor da área é válido
    if (isNaN(area) || area <= 0) {
        alert('Por favor, insira um valor válido para a área.');
        return;
    }

    // Definir a taxa de absorção com base na unidade
    let taxaAbsorcao;
    if (unidade === 'm2') {
        taxaAbsorcao = TAXA_ABSORCAO_M2;
    } else if (unidade === 'km2') {
        taxaAbsorcao = TAXA_ABSORCAO_KM2;
    } else {
        alert('Unidade não reconhecida.');
        return;
    }

    // Calcular a quantidade de CO₂ absorvido
    const co2PorAno = area * taxaAbsorcao;
    const co2PorMes = co2PorAno / 12;
    const co2PorDia = co2PorAno / 365;

    // Função para formatar o valor
    function formatarValor(valor) {
        if (valor >= 1000) {
            return (valor / 1000).toFixed(2) + ' toneladas';
        } else {
            return valor.toFixed(2) + ' kg';
        }
    }

    // Mostrar o resultado
    document.getElementById('resultado').innerHTML = `
        <p>Quantidade total de CO₂ absorvido por ano: ${formatarValor(co2PorAno)}</p>
        <p>Quantidade total de CO₂ absorvido por mês: ${formatarValor(co2PorMes)}</p>
        <p>Quantidade total de CO₂ absorvido por dia: ${formatarValor(co2PorDia)}</p>
    `;

    // Limpar o campo de entrada após o cálculo
    document.getElementById('area').value = '';
}
