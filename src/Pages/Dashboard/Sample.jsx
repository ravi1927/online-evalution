import React from "react";
import DashCard from "../../components/Common/DashCard";
import { Grid, Box, Typography, CardContent, Card } from "@mui/material";
import dashsurvey from "../../assets/dash-survey.svg";
import house from "../../assets/house_FILL1_wght400_GRAD0_opsz24.svg";
import chart from "../../assets/bar_chart_FILL1_wght400_GRAD0_opsz24.svg";
import plus from "../../assets/plus.png";
import check from "../../assets/check-solid.svg";
import recently from "../../assets/recent.svg";
import Chart from "chart.js/auto";
import { Line, Doughnut } from "react-chartjs-2";
import { PATHS } from "../../utils/constants";

export const options = {
  responsive: true,
  scale: {
    ticks: {
      precision: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};
const Sample = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels: labels,

    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "#45AEAE",
        borderColor: "#45AEAE",
        data: [15,13,11,15,13,11,15,13,11,15,13,11],
      },
      {
        label: "My Second dataset",
        backgroundColor: "#b3e51c",
        borderColor: "#b3e51c",
        data: [20,23,21,24,23,21,25,20,21,25,23,21],
      },
      {
        label: "My Third dataset",
        backgroundColor: "#fae23e",
        borderColor: "#fae23e",
        data: [30, 33, 31, 33, 32, 31, 35,30,31,35,33,31],
      },
    ],
  };

  const doughnutdata = {
    //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: {
      show: false,
    },
    datasets: [
      {
        label: "Region",
        data: [9, 8, 5, 7, 6],
        backgroundColor: [
          "#ff6384",
          "#45AEAE",
          "#ffce56",
          "#e7e9ed",
          "#36a2eb",
        ],
        borderColor: ["#ff6384", "#45AEAE", "#ffce56", "#e7e9ed", "#36a2eb"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Grid container columnSpacing={"1rem"} rowSpacing={"1rem"}>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <DashCard
            img={dashsurvey}
            title={"Changepassword"}
            count={"38"}
            view={"Changepassword"}
            viewImg={plus}
            url={PATHS.Changepassword.root}
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          <DashCard
            img={house}
            title={"ManageCourse"}
            count={"80"}
             view={"ManageCourse"}
            viewImg={check}
            url={PATHS.Managecourse.root}
          />
        </Grid>
        <Grid item lg={4} md={6} sm={12} xs={12}>
          {/* <DashCard
            img={chart}
            title={"Reports"}
            count={"48"}
            view={"View all reports"}
            viewImg={recently}
            url={PATHS.Reports}
          /> */}
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
         
        </Grid>

        <Grid item lg={4} md={4} sm={12} xs={12} elevation={2}>
          
        </Grid>
      </Grid>
    </>
  );
};

export default Sample;
