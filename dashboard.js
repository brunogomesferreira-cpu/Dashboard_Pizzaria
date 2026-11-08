
/* GRÁFICO DE VENDAS MENSAIS */

new Chart(document.getElementById("graficoVendas"), {

    type: "line",

    data: {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],

        datasets: [{
            label: "Faturamento (R$)",

            data: [8000, 11000, 9500, 14000, 17000, 18450],

            borderColor: "#f5a623",
            backgroundColor: "#f5a62333",
            fill: true,
            tension: 0.4
        }]
    }

});


/* GRÁFICO DE PIZZAS MAIS VENDIDAS */

new Chart(document.getElementById("graficoPizzas"), {

    type: "bar",

    data: {
        labels: ["Calabresa", "Mussarela", "Portuguesa", "Frango", "Marguerita"],

        datasets: [{
            label: "Quantidade vendida",

            data: [120, 95, 80, 65, 45],

            backgroundColor: [
                "#f5a623",
                "#e85d04",
                "#c0392b",
                "#d97706",
                "#292929"
            ]
        }]
    }

});


/* GRÁFICO DE TIPOS DE PEDIDOS */

new Chart(document.getElementById("graficoPedidos"), {

    type: "doughnut",

    data: {
        labels: ["Delivery", "Retirada", "Consumo no local"],

        datasets: [{
            data: [55, 30, 15],

            backgroundColor: [
                "#f5a623",
                "#e85d04",
                "#292929"
            ]
        }]
    }

});
