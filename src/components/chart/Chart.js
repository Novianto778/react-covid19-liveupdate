import React, { useState, useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

const Chart = ({ data: { confirmed, recovered, deaths, lastUpdate }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  }, [dailyData]);

  if (!confirmed) {
    return "Loading";
  }

  

  const barChart = (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [confirmed.value, recovered.value, deaths.value],
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
        title: {
          display: true,
          text: `Current state in ${country}`,
          fontSize: 24,
          padding: 30,
        },
      }}
    />
  );

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "infected",
              borderColor: "rgba(0,0,255,0.5)",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "deaths",
              borderColor: "red",
              fill: true,
              backgroundColor: "rgba(255,0,0,0.5)",
            },
          ],
        }}
        options={{
          legend: { display: true },
          title: {
            display: true,
            text: `Global Exponential Graphic`,
            fontSize: 24,
            padding: 30,
          },
        }}
      />
    ) : null;

  return (
    <div className="justify-content-center chart">
      <h6 style={{ textAlign: "center", marginBottom: 15 }}>
        Last Update: {lastUpdate.slice(0,10)}
      </h6>
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;
