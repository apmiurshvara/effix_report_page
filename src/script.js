//const { Chart } = require("chart.js");

//const { Chart } = require("chart.js");

const label = ["2018", "2019", "2020", "2021"];

const ctxOverall = document.getElementById("overall_Emission").getContext("2d");
const barChartOverall = new Chart(ctxOverall, {
  type: "bar",
  data: {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        label: "indirect",
        data: [50, 45, 20, 15],
        backgroundColor: ["rgba(0,69,97,255)"],
        borderColor: ["rgba(0,69,97,255)"],
        borderWidth: 1,
        barThickness: 50,
        borderRadius: 2,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      {
        label: "direct",
        data: [60, 60, 25, 25],
        backgroundColor: ["rgba(88,145,173,255)"],
        borderColor: ["rgba(88,145,173,255)"],
        barThickness: 50,
        borderWidth: 1,
        borderRadius: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        right: 20,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Direct en Indirect Emission of Company X (kg CO2)",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          stepSize: 25,
        },
      },
    },
  },
});

const ctxElectricityLine = document
  .getElementById("electricity_line")
  .getContext("2d");
const chartElectricityLine = new Chart(ctxElectricityLine, {
  type: "line",

  data: {
    labels: ["2018", "2019", "2020", "2021"],
    datasets: [
      {
        data: [68000, 65000, 67000, 60000],
        backgroundColor: ["rgba(88,145,173,255)"],
        borderColor: ["rgba(88,145,173,255)"],
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },

      title: {
        display: true,
        text: "Annual Electricity Use (kWh)",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 80000,
        ticks: {
          stepSize: 20000,
        },
      },
    },
  },
});

const ctxElectricityBar = document
  .getElementById("electricity_bar")
  .getContext("2d");
const chartElectricityBar = new Chart(ctxElectricityBar, {
  type: "bar",
  data: {
    labels: label,
    datasets: [
      {
        label: "Direct",
        data: [20, 18, 2, 2],
        backgroundColor: ["rgba(88,145,173,255)"],
        borderColor: ["rgba(88,145,173,255)"],
        barThickness: 25,
        borderWidth: 1,
        borderRadius: 2,
      },
      {
        label: "Indirect",
        data: [25, 24, 10, 10],
        backgroundColor: ["rgba(0,69,97,255)"],
        borderColor: ["rgba(0,69,97,255)"],
        borderWidth: 1,
        barThickness: 25,
        borderRadius: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        right: 20,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Electricity Related Emission (kg CO2)",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 25,
        ticks: {
          stepSize: 5,
        },
      },
    },
  },
});

const ctxHeatingLine = document.getElementById("heating_line").getContext("2d");
const chartHeatingLine = new Chart(ctxHeatingLine, {
  type: "line",

  data: {
    labels: label,
    datasets: [
      {
        data: [12000, 11500, 11800, 12500],
        backgroundColor: ["rgba(88,145,173,255)"],
        borderColor: ["rgba(88,145,173,255)"],
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Annual Heating Use (m3 gas)",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 12500,
        ticks: {
          stepSize: 2500,
        },
      },
    },
  },
});

const ctxHeatingBar = document.getElementById("heating_bar").getContext("2d");
const chartHeatingBar = new Chart(ctxHeatingBar, {
  type: "bar",
  data: {
    labels: label,
    datasets: [
      {
        label: "Direct",
        data: [17, 16, 18, 19],
        backgroundColor: ["rgba(88,145,173,255)"],
        borderColor: ["rgba(88,145,173,255)"],
        barThickness: 25,
        borderWidth: 1,
        borderRadius: 2,
      },
      {
        label: "Indirect",
        data: [19, 18, 20, 21],
        backgroundColor: ["rgba(0,69,97,255)"],
        borderColor: ["rgba(0,69,97,255)"],
        borderWidth: 1,
        barThickness: 25,
        borderRadius: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        right: 20,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Heating Related Emission (kg CO2)",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 25,
        ticks: {
          stepSize: 5,
        },
      },
    },
  },
});

const ctxTransportationLine = document
  .getElementById("transportation_line")
  .getContext("2d");
const chartTransportationLine = new Chart(ctxTransportationLine, {
  type: "line",

  data: {
    labels: label,
    datasets: [
      {
        data: [100000, 120000, 130000, 140000],
        backgroundColor: ["rgba(88,145,173,255)"],
        borderColor: ["rgba(88,145,173,255)"],
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 20,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Annual km Transportation",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 150000,
        ticks: {
          stepSize: 50000,
        },
      },
    },
  },
});

const ctxTransportationBar = document
  .getElementById("transportation_bar")
  .getContext("2d");
const chartTransportationBar = new Chart(ctxTransportationBar, {
  type: "bar",
  data: {
    labels: label,
    datasets: [
      {
        label: "Direct",
        data: [34, 36, 40, 44],
        backgroundColor: ["rgba(88,145,173,255)"],
        borderColor: ["rgba(88,145,173,255)"],
        barThickness: 25,
        borderWidth: 1,
        borderRadius: 2,
      },
      {
        label: "Indirect",
        data: [38, 40, 42, 45],
        backgroundColor: ["rgba(0,69,97,255)"],
        borderColor: ["rgba(0,69,97,255)"],
        borderWidth: 1,
        barThickness: 25,
        borderRadius: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        right: 20,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Transportation Related Emission (kg CO2)",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
        },
      },
    },
  },
});

const ctxInvestmentsBar = document
  .getElementById("investment_bar")
  .getContext("2d");
const chartInvestmentsBar = new Chart(ctxInvestmentsBar, {
  type: "bar",
  data: {
    labels: [2022, 2023, 2024, 2025],
    datasets: [
      {
        label: "Electricity",
        data: [2, 2, 2, 2],
        backgroundColor: ["rgba(88,145,173,255)"],
        borderColor: ["rgba(88,145,173,255)"],
        barThickness: 25,
        borderWidth: 1,
        borderRadius: 2,
      },
      {
        label: "Heating",
        data: [15, 5, 0, 0],
        backgroundColor: ["rgba(0,69,97,255)"],
        borderColor: ["rgba(0,69,97,255)"],
        borderWidth: 1,
        barThickness: 25,
        borderRadius: 2,
      },
      {
        label: "Transportation",
        data: [30, 27, 25, 22],
        backgroundColor: ["rgba(255,111,49,255)"],
        borderColor: ["rgba(255,111,49,255)"],
        barThickness: 25,
        borderWidth: 1,
        borderRadius: 2,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        left: 12,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Estimated Direct Emissions",
        align: "start",
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 10,
        },
      },
    },
  },
});
