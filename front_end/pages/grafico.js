import Chart from 'chart.js';
import React from 'react';


export default function grafico() {
  return (
    <div>
      <canvas id="myChart"></canvas>
    </div>
  );
}

class GraficoChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    componentDidMount() {
      this.chart = new Chart(this.chartRef.current, {
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
      });
  
      this.intervalId = setInterval(() => {
        this.update();
      }, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.intervalId);
    }

    update() {
      const now = new Date();
      const label = now.toLocaleTimeString();
      const value1 = Math.random();
      const value2 = Math.random();
      const value3 = Math.random();
      console.log(value1)
  
      this.chart.data.labels.push(label);
      this.chart.data.datasets[0].data.push(value1);
      this.chart.data.datasets[1].data.push(value2);
      this.chart.data.datasets[2].data.push(value3);
  
      this.chart.update();
    }
  
    render() {
      return (
        <canvas ref={this.chartRef} />
      );
    }
  }
  