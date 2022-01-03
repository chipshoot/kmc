import {
  Grid,
  Typography,
  Stack,
  Button,
  Card,
  useMediaQuery,
  Avatar,
  CardHeader,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { Image } from "mui-image";
import React from "react";
import BlueBg from "../../assets/Blue-Shape.png";
import GreenBg from "../../assets/Green-Shape.png";
import OrangeBg from "../../assets/Orange-Shape.png";
import ImageAbout from "../../assets/images/kmsAbout.jpg";
import ImageService from "../../assets/images/kmsService.jpg";
import ImageContact from "../../assets/images/kmsContact.jpg";

const LandingContent = {
  About: {
    Title: "Welcom to Acupuncture and Medicine",
    Content: [
      "At our clinic, we use environmentally friendly, ancient and natural medical methods to treat today's health problems. The goal for us is for more people to become fully healthy, be able to return to their workplaces and live a healthier life. Neuropathic medicine and Chinese medicine are a complementary or alternative treatment method that is based, among other things, on the body's self-healing ability. The method focuses on the cause of the disease and that the whole person should be treated without harm. A course of neuropathic treatment can, for example, consist of a change in lifestyle or diet and the preparations given are usually taken from the plant kingdom and acupuncture.",
      "For years, we have treated many patients who have come to the realization that modern medicine alone can often be insufficient to deal with certain ailments. We maintain a high standard of our services and therefore perform well.",
    ],
  },
  Service: {
    Title: "How can we help you",
    Content: [
      "We can help you with both acute and chronic problems. Chinese medicine covers everything from common diseases to troublesome diseases.",
      "Muscle and skeletal diseases / pain. Inflammatory diseases Eg rheumatism. Nervous system diseases: stroke, paralysis of the face, arm, tinnitus, sensory impairment, etc. WHO suggested 64 indications for acupuncture.",
      "Combined treatments are best. Our treatment methods are different combinations of acupuncture, natural medicine. Chinese medical massage and cupping etc.",
    ],
    ServiceItems: [
      {
        Service: "Stress management",
      },
      {
        Service: "Anxiety",
      },
      {
        Service: "Pain",
      },
      {
        Service: "Depression",
      },
    ],
  },
  Contact: {
    Title: "Get professional help to improve yourself!",
    Content: [
      "With each patient's individual medical history in mind, we strive to address the underlying causes of illness rather than just addressing their symptoms. We can be reached by phone at:",
    ],
  },
};

const LandingSection = ({
  bgUrl,
  imgDesc,
  imgUrl,
  reversImg = false,
  children,
}) => {
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid
      container
      direction={{ sm: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "white",
        backgroundImage: `url(${bgUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingLeft: "1em",
        height: { lg: "700px", md: "700px" },
        textAlign: { md: "left", sm: "center", xs: "center" },
        paddingBottom: { md: "0em", sm: "1em", xs: "1em" },
      }}
      columnGap={{ md: "5em", sm: "0em" }}
    >
      <Grid item order={{ sm: 1, md: reversImg ? 2 : 1 }}>
        <Stack
          maxWidth={matchesLg ? "40em" : "30em"}
          paddingRight={matchesLg ? "4em" : "1em"}
          paddingLeft={"1em"}
        >
          {children}
        </Stack>
      </Grid>
      <Grid item order={{ sm: 1, md: reversImg ? 1 : 2 }}>
        <Image
          alt={imgDesc}
          src={imgUrl}
          width={matchesLg ? "25em" : "15em"}
          height={matchesLg ? "30em" : "20em"}
          fit="fill"
          sx={{ borderRadius: "5px" }}
        ></Image>
      </Grid>
    </Grid>
  );
};

const LandingSectionText = ({ title, content, children }) => {
  return (
    <>
      <Typography variant="h4" color={red[900]}>
        {title}
      </Typography>
      {content.map((itemText, index) => (
        <Typography key={index} variant="body1" paragraph>
          {itemText}
        </Typography>
      ))}
      {children}
      <Button>Learn More</Button>
    </>
  );
};

const ServiceCard = ({ service, icon }) => {
  return (
    <Grid item>
      <Card xs={12} sm={6} sx={{ minWidth: "17em" }} square>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "orange" }}>{service.charAt(0)}</Avatar>
          }
          title={service}
        ></CardHeader>
      </Card>
    </Grid>
  );
};

const ServiceCards = ({ services }) => {
  return (
    <Grid container direction="row" justifyContent="center" spacing={2}>
      {services.map((item, index) => (
        <ServiceCard key={index} service={item.Service} />
      ))}
    </Grid>
  );
};

const Home = () => {
  return (
    <Grid container direction="column">
      {/*----- Main slogan -----*/}
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#347f82",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E")`,
            height: "600px",
          }}
          color="white"
        >
          <Typography align="center" variant="h2" lineHeight="1.5em">
            ACUPUNCTURE &amp; MEDICINE STOCKHOLM
          </Typography>
          <Typography align="center" variant="h6">
            Traditional Chinese medical treatments and methods, natural
            medicine, acupuncture, massage, trade in herbal medicine and health
            preparations, training in the above areas.
          </Typography>
        </Grid>
      </Grid>
      {/*----- About us secsion -----*/}
      <Grid item>
        <LandingSection
          bgUrl={BlueBg}
          imgDesc="About Image"
          imgUrl={ImageAbout}
        >
          <LandingSectionText
            title={LandingContent.About.Title}
            content={LandingContent.About.Content}
          ></LandingSectionText>
        </LandingSection>
      </Grid>
      {/*----- Services secsion -----*/}
      <Grid item>
        <LandingSection
          bgUrl={GreenBg}
          imgDesc="Service Image"
          imgUrl={ImageService}
          reversImg={true}
        >
          <LandingSectionText
            title={LandingContent.Service.Title}
            content={LandingContent.Service.Content}
          >
            <ServiceCards services={LandingContent.Service.ServiceItems} />
          </LandingSectionText>
        </LandingSection>
      </Grid>
      {/*----- Action bar -----*/}
      <Grid item>
        <Grid
          sm
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ bgcolor: "#f5f5f2", height: "150px" }}
          textAlign="center"
        >
          <Grid md={4} item>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Grid container>
                    <Grid item>
                      <Avatar>C</Avatar>
                    </Grid>
                    <Grid item>
                      <Typography>Call us</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid md={4} item>
            Resevation
          </Grid>
          <Grid md={4} item>
            Opening hours
          </Grid>
        </Grid>
      </Grid>
      {/*----- Contact secsion -----*/}
      <Grid item>
        <LandingSection
          bgUrl={OrangeBg}
          imgDesc="Contact Image"
          imgUrl={ImageContact}
        >
          <LandingSectionText
            title={LandingContent.Contact.Title}
            content={LandingContent.Contact.Content}
          >
            <Typography variant="h5" color={red[900]} paragraph>
              +46 70065-0016
            </Typography>
          </LandingSectionText>
        </LandingSection>
      </Grid>
    </Grid>
  );
};

export default Home;
