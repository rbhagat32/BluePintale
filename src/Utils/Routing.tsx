import { Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Expertise from "../Pages/Expertise";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/expertise" element={<Expertise />}>
        <Route path="branding" />
        <Route path="social" />
        <Route path="digital" />
        <Route path="packaging" />
        <Route path="story" />
        <Route path="video" />
      </Route>
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
