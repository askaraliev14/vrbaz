import { alpha, useTheme } from '@mui/material';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'; // import { Line } from 'react-chartjs-2'

const datasetOptions = {
  fill: true,
  borderWidth: 1,
  pointRadius: 2,
  tension: 0.4,
  pointBorderWidth: 4
};
const options = {
  plugins: {
    legend: {
      display: false
    },
    tooltips: {
      displayColors: false,
      callbacks: {
        title: () => '',
        filter: () => false,
        label: tooltipItem => {
          let label = tooltipItem.label;

          if (label) {
            label += ' - ';
          }

          return `${label}$${Math.round(tooltipItem.yLabel * 100) / 100}`;
        }
      }
    }
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false
      },
      ticks: {
        beginAtZero: true
      }
    },
    y: {
      display: false,
      grid: {
        display: false
      },
      ticks: {
        beginAtZero: true
      }
    }
  }
};

const VendorAnalyticsChart = () => {
  const [data, setData] = useState({});
  const {
    palette: colors
  } = useTheme();
  useEffect(() => {
    // create label for 30 days (dummy date)
    let labelList = new Array(30).fill('').map((_item, ind) => {
      let date = new Date();
      date.setDate(ind + 1);
      return format(date, 'MMM dd');
    });
    setData({
      labels: labelList,
      datasets: [{
        label: 'Sale',
        data: datasetData,
        backgroundColor: alpha(colors.primary.main, 0.2),
        borderColor: colors.primary.main,
        ...datasetOptions
      }]
    });
  }, []);
  return <></>; //   <Line data={data} options={options} />
};

const datasetData = [10, 7, 4, 15, 12, 17, 13, 25, 22, 19, 30, 25, 22, 29, 40, 37, 47, 43, 59, 60, 55, 62, 69, 43, 59, 60, 75, 62, 75, 80];
export default VendorAnalyticsChart;