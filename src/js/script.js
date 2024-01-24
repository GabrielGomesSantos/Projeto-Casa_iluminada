function setupSwitchListener(switchId, luzElements, lampadaElements = null) {
    var mySwitch = document.getElementById(switchId);

    mySwitch.addEventListener('change', function () {
        luzElements.forEach(function (luzElement) {
            luzElement.style.transition = 'background-color 0.5s ease-in-out';
        });

        if (this.checked) {
            luzElements.forEach(function (luzElement) {
                luzElement.style.backgroundColor = 'rgba(255, 199, 0, 0.10)';
            });

            if (lampadaElements) {
                lampadaElements.forEach(function (lampadaElement) {
                    lampadaElement.style.backgroundColor = '#FFC700';
                });
            }
        } else {
            luzElements.forEach(function (luzElement) {
                luzElement.style.backgroundColor = '#00000091';
            });

            if (lampadaElements) {
                lampadaElements.forEach(function (lampadaElement) {
                    lampadaElement.style.backgroundColor = '#000000';
                });
            }
        }
    });
}

// Exemplo de uso para luz_sala, luz_sala_2 e luz_sala_3
setupSwitchListener(
    'mySwitch3',
    [
        document.querySelector('.luz_sala'),
        document.querySelector('.luz_sala_2'),
        document.querySelector('.luz_sala_3')
    ],
    [
        document.querySelector('.lampada_sala'),
        document.querySelector('.lampada_sala_2'),
        document.querySelector('.lampada_sala_3')
    ]
);


// Exemplos de uso
// Exemplo de uso para luz_varanda
setupSwitchListener('mySwitch1', [document.querySelector('.luz_varanda')], [document.querySelector('.lampada_varanda')]);

// Exemplo de uso para luz_quarto_2
setupSwitchListener('mySwitch2', [document.querySelector('.luz_quarto_2')], [document.querySelector('.lampada_quarto_2')]);

// Exemplo de uso para luz_sala, luz_sala_2 e luz_sala_3
setupSwitchListener(
    'mySwitch3',
    [
        document.querySelector('.luz_sala'),
        document.querySelector('.luz_sala_2'),
        document.querySelector('.luz_sala_3')
    ],
    [
        document.querySelector('.lampada_sala'),
        document.querySelector('.lampada_sala_2'),
        document.querySelector('.lampada_sala_3')
    ]
);

// Exemplo de uso para luz_banheiro
setupSwitchListener('mySwitch4', [document.querySelector('.luz_banheiro')], [document.querySelector('.lampada_banheiro')]);

// Exemplo de uso para luz_cozinha
setupSwitchListener('mySwitch5', [document.querySelector('.luz_cozinha')], [document.querySelector('.lampada_cozinha')]);

// Exemplo de uso para luz_quarto
setupSwitchListener('mySwitch6', [document.querySelector('.luz_quarto')], [document.querySelector('.lampada_quarto')]);


////// Desmarcar 


// Função para atualizar as cores das luzes e lâmpadas
function atualizarCores(luzElements, lampadaElements) {
    // Atualizar a cor das luzes para apagar
    luzElements.forEach(function (luzElement) {
        luzElement.style.transition = 'background-color 0.5s ease-in-out';
        luzElement.style.backgroundColor = '#00000091';
    });

    // Atualizar a cor das lâmpadas para apagar, se fornecidas
    if (lampadaElements) {
        lampadaElements.forEach(function (lampadaElement) {
            lampadaElement.style.transition = 'background-color 0.5s ease-in-out';
            lampadaElement.style.backgroundColor = '#000000';
        });
    }
}

// Exemplo de chamada da função com elementos específicos
var luzElements = [
    document.querySelector('.luz_varanda'),
    document.querySelector('.luz_quarto'),
    document.querySelector('.luz_quarto_2'),
    document.querySelector('.luz_cozinha'),
    document.querySelector('.luz_banheiro'),
    document.querySelector('.luz_sala'),
    document.querySelector('.luz_sala_2'),
    document.querySelector('.luz_sala_3'),

];

var lampadaElements = [
    document.querySelector('.lampada_varanda'),
    document.querySelector('.lampada_quarto'),
    document.querySelector('.lampada_quarto_2'),
    document.querySelector('.lampada_cozinha'),
    document.querySelector('.lampada_banheiro'),
    document.querySelector('.lampada_sala'),
    document.querySelector('.lampada_sala_2'),
    document.querySelector('.lampada_sala_3'),
]

// Adicione a lógica de atualização de cores ao evento de clique do botão
document.getElementById('seuBotaoId').addEventListener('click', function (event) {


    // Chama a função para atualizar as cores
    atualizarCores(luzElements, lampadaElements);

    // Adicione qualquer outra lógica necessária após a atualização de cores
});
