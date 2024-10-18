(async () => {
    // Load the dataset
    const data = await fetch(
        'https://demo-live-data.highcharts.com/aapl-c.json'
    ).then(response => response.json());

    // Create the chart
    Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },
        navigator: {
            enabled: false // Disable the navigator
        },
        title: {
            text: 'AAPL Stock Price'
        },
        yAxis: {
            opposite: false, // Move y-axis to the left side
            labels: {
                align: 'left', // Align labels to the left of the axis
                x: 0 // Adjust label position (optional for fine-tuning)
            },
            title: {
                text: 'Stock Price'
            }
        },
        xAxis: {
            crosshair: false // Disable horizontal crosshair line
        },
        series: [{
            name: 'AAPL Stock Price',
            data: data,
            type: 'spline',
            tooltip: {
                valueDecimals: 1
            },
            animation: {
                duration: 2500 // Set animation duration
            },
            dataLabels: {
                enabled: false // Disable data labels on points
            },
            showInLegend: false
        }],
        tooltip: {
            shared: true,
            useHTML: true,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderColor: '#a9a9a9',
            borderRadius: 5,
            borderWidth: 1,
            shadow: true,
            style: {
                fontSize: '12px',
                fontWeight: 'normal'
            },
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: 
                'Day : <b>{point.x:%d/%m/%Y}</b><br>' + 
                '<b>{point.y:.2f} Dollars per Barrel</b>',
        },
        plotOptions: {
            series: {
                label: {
                    enabled: false // Disable floating series labels
                },
                showLastLabel: false // Prevents label on the last point of the series
            }
        },
        credits: {
            enabled: false // Disable Highcharts.com link
        }
    });
})();
