import "./App.css";
import LoginPage from "./components/LoginPage.js";
import ButtonAppBar from "./components/AppBar.js";
import { Container } from "@mui/material";
import QuickLinks from "./components/QuickLinks";
import { Routes, Route } from "react-router-dom";
import { SelectDog } from "./components/SelectDog";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { UserContext } from "./components/UserContext";
import { useState } from "react";
import SelectCat from "./components/SelectCat";
import DogActivities from "./components/DogActivities";
import CatActivities from "./components/CatActivities";
import Housekeeping from "./components/Housekeeping";
import NotFoundPage from "./components/NotFoundPage";
import ResourceLinks from "./components/ResourceLinks";
import AboutDev from "./components/AboutDev";
import AboutTheApp from "./components/AboutTheApp";

function App() {
  const [user, setUser] = useState({ auth: false });
  return (
    <Container maxWidth="sm" sx={{ marginTop: 15 }}>
      <ButtonAppBar />
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="home" element={<QuickLinks />} />
            <Route path="dog" element={<SelectDog />} />
            <Route path="cat" element={<SelectCat />} />
            <Route path="dogActivities" element={<DogActivities />} />
            <Route path="catActivities" element={<CatActivities />} />
            <Route path="tasks" element={<Housekeeping />} />
            <Route path="links" element={<ResourceLinks/>} />
            <Route path="devs" element={<AboutDev />} />
            <Route path="about" element={<AboutTheApp />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </Container>
  );
}

export default App;
