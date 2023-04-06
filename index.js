const first_ctx = document.getElementById('first_chart')
const second_ctx = document.getElementById('second_chart')

new Chart(second_ctx, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        label: 'Temperatura Média',
        data: [22, 24, 27, 23, 20, 18],
        borderWidth: 1,
        backgroundColor: '#FF6384'
      },
      {
        label: 'Umidade Média',
        data: [90, 89, 93, 87, 88, 82],
        borderWidth: 1,
        backgroundColor: '#36A2EB'
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})

const labels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Temperatura',
      data: [30, 29, 28, 25, 22, 23],
      fill: false,
      borderColor: '#FF6384',
      backgroundColor: '#FF6384',
      tension: .1
    },
    {
      label: 'Umidade',
      data: [80, 82, 80, 85, 80, 83],
      fill: false,
      borderColor: '#36A2EB',
      backgroundColor: '#36A2EB',
      tension: 0.1
    }
  ]
}

const config = {
  type: 'line',
  data: data
}

new Chart(first_ctx, config)