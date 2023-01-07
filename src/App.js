import "./App.css";
import Box from "@mui/material/Box";
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box width="400px" sx={{width:{xl: '1480px'}}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
