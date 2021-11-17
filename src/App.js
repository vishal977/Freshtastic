import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes";
import { useState } from "react";
import { GlobalStyles } from "./components/styled/GlobalStyles";
import Cart from "./components/Cart";
import UserProfile from "./components/UserProfile";
import OrderHistory from "./components/OrderHistory";

function App() {
  /*Site theme is set to 'Light' by default. */
  const [siteTheme, setSiteTheme] = useState("light");

  /*Function to toggle site theme between light and dark. */
  const toggleSiteTheme = () => {
    siteTheme === "light" ? setSiteTheme("dark") : setSiteTheme("light");
  };

  return (
    <ThemeProvider theme={siteTheme === "light" ? lightTheme : darkTheme}>
      {/* Passing down siteTheme and toggle function as a prop to enable theme toggle from navbar. */}
      <GlobalStyles />
      <Router>
        <Navbar toggleSiteTheme={toggleSiteTheme} />
        <Routes>
          <Route path ="/" element={<Homepage />} />
          <Route exact path="/home" element={<Homepage />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/orderhistory" element={<OrderHistory />} />
          <Route exact path="/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
