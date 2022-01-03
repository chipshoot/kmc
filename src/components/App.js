import { ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import theme from "./ui/Theme";
import Home from "./pages/Home";
import { useState } from "react";
import Services from "./pages/Services";

function App() {
  const mainMenuOptions = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Make an Appointment", path: "/appointment" },
  ];
  const [value, setValue] = useState(0);
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Header
        value={value}
        setValue={setValue}
        matches={matches}
        mainMenu={mainMenuOptions}
      ></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<div>aboutus</div>} />
        <Route path="/contact" element={<div>contactus</div>} />
        <Route path="/appointment" element={<div>appointment</div>} />
      </Routes>
      <Footer
        value={value}
        setValue={setValue}
        matches={matches}
        mainMenu={mainMenuOptions}
      ></Footer>
    </ThemeProvider>
  );
}

export default App;
