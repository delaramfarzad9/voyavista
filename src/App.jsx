import { useState } from "react";
import ExperiencesPage from "./pages/ExperiencesPage";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import ExperienceDetail from "./pages/ExperienceDetail";


function App() {
 const baseUrl= import.meta.env.VITE_API_URL;
 console.log(baseUrl);
 const [experiences,setExperiences]=useState([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState("");

  return (
<Routes>
  <Route path="/" element={<MainLayout />}>

    <Route index element={<Home />} />

    <Route path="experiences" element={<ExperiencesPage />} />
    <Route path="/about" element={<About />} />

    {/* <Route path="saved" element={<Saved />} /> */}
<Route path="experiences/:slug" element={<ExperienceDetail />} />
  </Route>
</Routes>
  )
}

export default App
