import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

const VisitorsChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // destroy old instance
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Visitors",
            data: [12, 19, 8, 15, 22, 30, 25],
            backgroundColor: "rgba(96, 165, 250)", // tailwind blue-400
            borderRadius: 8,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, position: "top" },
        },
      },
    });
  }, []);

  return <canvas ref={chartRef} className="w-full h-64" />;
};

export default VisitorsChart;
