var ctx, chart
window.addEventListener('load', function () {
    ctx = document.getElementById('chart')

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016' , '2017', '2018', '2019', '2020'],
            datasets: [{
                label: 'No of Branches Across World (2010-2020)',
                backgroundColor: ['rgb(128, 0, 128)','rgb((125,25,112)','rgb(0, 128, 128)','rgb(255,20,147)','rgb(128,0,0)','rgb(90, 85, 128)','rgb(170, 136, 128)','rgb(0, 80, 121)','rgb(120, 12, 128)','rgb(20, 28, 128)','rgb(120, 12, 128)'],
                data: [50,70,100,140,160,200,250,400,450,480,500]
            },


        ]
        },
        options: {
            title: {
                display: true,
                text:'Growth of Our Hotel',
            },
            scales:{
                yAxes:[
                    {
                        ticks:{
                            beginAtZero:true
                        }
                    }
                ]
            }
        }
    })
})


window.addEventListener('load', function () {
    ctx = document.getElementById('chart1')

    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016' , '2017', '2018', '2019', '2020'],
            datasets: [{
                label: 'Popularity (2010-2020)',
                backgroundColor: '#009688',
                borderColor: 'rgb(0, 0, 0)',
                borderWidth: 2,
                fill: true,
                data: [50,70,100,140,160,200,250,400,450,480,500]
            },


        ]
        },
        options: {
            title: {
                display: true,
                text:'Popularity',
            },
            scales:{
                yAxes:[
                    {
                        ticks:{
                            beginAtZero:true
                        }
                    }
                ]
            }
        }
    })
})


