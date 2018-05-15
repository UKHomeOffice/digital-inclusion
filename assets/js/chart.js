'use strict';

var Chart = require('chart.js');

function initChart() {
var ctx = document.getElementById("myChart");
var attrElement = document.getElementById("chart-attributes");
var oneValue = attrElement.getAttribute('one');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['1.Never Have', '2. Was online', '3.Willing and unable',
        '4.Reluctantly online', '5.Learning the ropes', '6.Task specific',
        '7. Basic online skills', '8.Confident', '9.Expert'],
        datasets: [{
            label: 'Digital Inclusion Scale',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}

exports.initChart = initChart;
