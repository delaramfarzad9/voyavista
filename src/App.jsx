import { useState } from "react";
import ExperiencesPage from "./pages/ExperiencesPage";

function App() {
 const baseUrl= import.meta.env.VITE_API_URL;
 console.log(baseUrl);
 const [experiences,setExperiences]=useState([]);
 const [loading,setLoading]=useState(true);
 const [error,setError]=useState("");

  return (
    <>
<ExperiencesPage/>
    </>
  )
}

export default App
