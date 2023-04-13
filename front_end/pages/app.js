var ctx = document.getElementById("myChart").getContext("2d");

const Chart = require('chart.js');

const chartConfig = {
    type: 'line',
    data: {
      labels: [],
      datasets: [
        {
          label: 'Série 1',
          borderColor: 'red',
          data: []
        },
        {
          label: 'Série 2',
          borderColor: 'blue',
          data: []
        },
        {
          label: 'Série 3',
          borderColor: 'green',
          data: []
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Gráfico de Linhas'
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Tempo'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Valor'
          }
        }]
      }
    }
  };
  
  const chart = new Chart('myChart', chartConfig);

  function updateChart() {
    const now = new Date();
    const label = now.toLocaleTimeString();
    const value1 = Math.random();
    const value2 = Math.random();
    const value3 = Math.random();
    
    chartConfig.data.labels.push(label);
    chartConfig.data.datasets[0].data.push(value1);
    chartConfig.data.datasets[1].data.push(value2);
    chartConfig.data.datasets[2].data.push(value3);
    
    chart.update();
  }
  
  setInterval(updateChart, 1000);