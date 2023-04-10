import React from "react";
import Highcharts from "highcharts";
import more from "highcharts/highcharts-more";
import HighchartsReact from "highcharts-react-official";
import solidGaouge from "highcharts/modules/solid-gauge";

import styles from "./Gauge.module.scss";

interface GaugeProps {
  healthscore: number;
}

if (typeof Highcharts === "object") {
  more(Highcharts);
  solidGaouge(Highcharts);
}

export default function Gauge(props: GaugeProps) {
  const { healthscore } = props;

  const options = {
    chart: {
      type: "solidgauge",
      height: "100%",
    },

    title: {
      text: "Saúde em %",
      style: {
        fontSize: "24px",
      },
    },

    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [
        {
          // Track for Stand
          outerRadius: "62%",
          innerRadius: "38%",
          backgroundColor: "#fff",
          borderWidth: 0,
        },
      ],
    },

    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: [],
    },

    plotOptions: {
      solidgauge: {
        dataLabels: {
          borderWidth: 0,
          x: -3,
          y: -25,
          border: "none",
          style: {
            fontSize: "40px",
          },
        },
      },
    },

    series: [
      {
        name: "Saúde em",
        data: [
          {
            color: "#2980b9",
            radius: "60%",
            innerRadius: "88%",
            y: healthscore,
          },
        ],
      },
    ],
  };

  return (
    <div className={styles.HealthHistory}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"chart"}
      />
    </div>
  );
}
