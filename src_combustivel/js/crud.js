document.getElementById('dadosForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const distanciaViagem = document.getElementById('distanciaViagem').value;
    const consumoVeiculo = document.getElementById('consumoVeiculo').value;
    const precoCombustivel = document.getElementById('precoCombustivel').value;
    const valorFinal = (distanciaViagem / consumoVeiculo) * precoCombustivel;

    calcularCusto(distanciaViagem, consumoVeiculo, precoCombustivel, valorFinal);
});

function calcularCusto(distanciaViagem, consumoVeiculo, precoCombustivel, valorFinal) {
    db.collection('bgySjcH2D6WZF22tk1cJ').add({
        DistanciaViagem: distanciaViagem,
        ConsumoVeiculo: consumoVeiculo,
        PrecoCombustivel: precoCombustivel,
        ValorFinal: valorFinal
    })
    .then(() => {
        window.location.href = '../html/listagem.html';
    })
    .catch((error) => {
        console.error('Erro ao calcular dados: ', error);
        alert('Erro ao calcular dados. Tente novamente.');
    });
}

document.getElementById('visualize').onclick = function() {
    window.location.href = '../html/listagem.html';
};
