import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import HeroSection from './components/HeroSection/HeroSection';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ErrorBoundary from './components/Common/ErrorBoundary';
import { AuthProvider } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext'
import Notification from './components/Common/Notification';
import GuardedRoute from './components/Common/GuardedRoute';
import Create from './components/Create';
import Edit from './components/Edit';
function App() {
  return (
    <>
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
    <NavbarComponent/>
    <Notification />

    <main className="" id="main-collapse">
    <Routes>
                {/* <Route path="/dashboard/*" element={<Dashboard />} /> */}
                <Route path="/" element={ <HeroSection/>} />
                <Route path="/login" element={ <Login/>} />
                <Route path="/register" element={ <Register/>} />
                <Route element={<GuardedRoute />}>
                  <Route path="/create" element={<Create />} />
                  <Route path="/edit/:petId" element={<Edit />} />
                </Route>
                <Route path="/details/:recipeId" element={<RecipeDetails />} />

            
              </Routes>
   
    
</main>
 </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
<script type="text/javascript" src="./main.85741bff.js"></script>
    </>
  );
}

export default App;
