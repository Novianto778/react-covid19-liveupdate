import React from "react";
import { Bar } from "react-chartjs-2";

const chart = (
  <Bar
    data={{
      labels: ["Infected", "Recovered", "Deaths"],
      datasets: [
        {
          label: "Infected",
          data: [1111, 1283, 1402],
          backgroundColor: [
            "rgba(0,0,255,0.5)",
            "rgba(0,255,0,0.5)",
            "rgba(255,0,0,0.5)",
          ],
        },
      ],
    }}
    options={{
      
      legend: { display: false },
      title: { display: true, text: `Current state in`, fontSize: 24, padding: 30 },
    }}
  />
);

const Chart = () => {
  return <div className="justify-content-center d-flex chart">{chart}</div>;
};

export default Chart;
