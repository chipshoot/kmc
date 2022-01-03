import React from "react";
import { Grid, Typography } from "@mui/material";
import HeaderImg from "../../assets/images/KmsServiceHeader.jpg";

const Services = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${HeaderImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "350px",
      }}
      alignItems="stretch"
      justifyContent="center"
    >
      <Grid
        item
        container
        xs
        sx={{
          backgroundColor: "#4aa7a9",
          opacity: "0.8",
          direction: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography align="center" variant="h2" color="white">
          Services
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Services;
