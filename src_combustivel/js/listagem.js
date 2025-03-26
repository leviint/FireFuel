function listarCalculo() {
    const listaCalculo = document.getElementById('listaCalculo');
    listaCalculo.innerHTML = ''; 

    db.collection('bgySjcH2D6WZF22tk1cJ').get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const combustivel = doc.data();
            const itemCalculo = document.createElement('li');
            itemCalculo.innerHTML = `| Distância de viagem: ${combustivel.DistanciaViagem} Km | <br>
                                     | Consumo de combustível do veículo: ${combustivel.ConsumoVeiculo} Km/L | <br>
                                     | Preço do combustível: R$${combustivel.PrecoCombustivel} | <br> 
                                     | Valor Final: R$${combustivel.ValorFinal.toFixed(2)} |`;
            listaCalculo.appendChild(itemCalculo);
        });
    })
    .catch((error) => {
        console.error('Erro ao buscar cálculo: ', error);
    });
}

document.getElementById('return').onclick = function() {
    window.location.href = '../html/index.html';
};

window.onload = listarCalculo;