document.addEventListener('DOMContentLoaded', () => {

      const options = {
        title: {
          text: 'Döda per region, 7 dagars rullande medelvärde (log)'
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
        }
      };

      const optionsLin = {
        title: {
          text: 'Döda per region, 7 dagars rullande medelvärde (linjär)'
        },
        credits: {
          enabled: false
        },
        yAxis: {
          title: {
            text: ''
          },
          type: 'linear',
          allowDecimals: false,
          min: 0,
          max: 100,
          tickAmount: 5
        },
        xAxis: {
          title: {
            text: 'Dagar sedan dagliga dödsfall passerat 3 →'
          },
          type: 'linear',
          allowDecimals: false
        }
      };

      $.get('test.csv', csv => {
        options.data = {
          csv
        };
          Highcharts.chart('container-log', options);
        });

        $.get('test.csv', csv => {
          optionsLin.data = {
            csv
          };
            Highcharts.chart('container-lin', optionsLin);
          });

      });
