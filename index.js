document.addEventListener('DOMContentLoaded', () => {

  const options = {
    title: {
      text: 'Dagliga dödsfall per region, 7 dagars rullande medelvärde (log-skala)'
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: ''
      },
      type: 'logarithmic',
      allowDecimals: false,
      min: 1,
      max: 100
    },
    xAxis: {
      title: {
        text: 'Dagar sedan dagliga dödsfall passerat 3 →'
      },
      type: 'linear',
      allowDecimals: false
    },
    tooltip: {
            pointFormat: '{series.name}: <b>{point.y:.0f}</b><br/>',
            shared: false
        },
    plotOptions: {
      series: {
        marker: {
          enabled: false
        }
      }
    },
    series: [
      {color: "#000", lineWidth: 1, dashStyle: 'dot', showInLegend: false},
      {color: "#000", lineWidth: 1, dashStyle: 'dot', showInLegend: false},
      {color: "#000", lineWidth: 1, dashStyle: 'dot', showInLegend: false}]
  };

  $.get('test.csv', csv => {
    options.data = {
      csv
    };

    Highcharts.chart('container-log', options);

  });

});
