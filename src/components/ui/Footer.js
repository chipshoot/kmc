import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const MainFooter = styled("footer")(({ theme }) => ({
  background: theme.palette.primary.main,
  height: "170px",
  width: "100%",
  zIndex: `${theme.zIndex.modal + 1}`,
  position: "relative",
}));

const MainContainer = styled(Grid)({
  position: "absolute",
});

const LinkContainer = styled(Grid)({
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75em",
  fontWeight: "bold",
  textDecoration: "none",
});
export default function Footer(props) {
  const { setValue, matches, mainMenu } = props;
  return (
    <MainFooter>
      <MainContainer
        container
        justifyContent="center"
        spacing={2}
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        {mainMenu.map((menu, index) => (
          <Grid sx={{ margin: "3em" }} item key={index}>
            <Grid container direction="column">
              <LinkContainer
                item
                component={Link}
                to={menu.path}
                onClick={() => setValue(index)}
              >
                {menu.name}
              </LinkContainer>
            </Grid>
          </Grid>
        ))}
      </MainContainer>
      <Grid
        container
        justifyContent={"flex-end"}
        sx={{
          position: "absolute",
          marginTop: "7em",
          right: matches ? "0.6em" : "1.5em",
        }}
        spacing={1}
      >
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <TwitterIcon sx={{ color: "white", fontSize: matches ? 30 : 40 }} />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target={"_blank"}
        >
          <FacebookIcon sx={{ color: "white", fontSize: matches ? 30 : 40 }} />
        </Grid>
      </Grid>
    </MainFooter>
  );
}
