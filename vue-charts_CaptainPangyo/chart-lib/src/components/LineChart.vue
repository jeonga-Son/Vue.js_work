<template>
  <canvas id="lineChart"></canvas>
</template>

<script>
import Chart from "chart.js";

export default {
  mounted() {
    const ctx = document.getElementById("lineChart");

    let chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: "rgba(255,99,132)",
            borderColor: "rgba(255,99,132)",
            data: [0, 10, 5, 2, 20, 30, 45],
          },
        ],
      },
      options: {},
    });

    console.log(chart);
  },
};
</script>

<style></style>
