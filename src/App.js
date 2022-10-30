import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HeroSection from './components/HeroSection/HeroSection';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

function App() {
  return (
    <>
    <NavbarComponent/>
    <main className="" id="main-collapse">
    <Routes>
                {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
             
                <Route path="/details/:recipeId" element={<RecipeDetails />} />
                <Route path="/" element={ <HeroSection/>} />

            
              </Routes>
   
    
</main>
<script type="text/javascript" src="./main.85741bff.js"></script>
    </>
  );
}

export default App;
