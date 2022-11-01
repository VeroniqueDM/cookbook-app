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
import Logout from './components/Logout/Logout';
import Edit from './components/Edit/Edit';
import PrivateRoute from './components/Common/PrivateRoute';
import MyRecipes from './components/MyRecipes/MyRecipes';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <>
    <ErrorBoundary>
      <AuthProvider>
        <NotificationProvider>
    <NavbarComponent/>
    <Notification />

    <main className="" id="site-content">
    <Routes>
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/" element={ <HeroSection/>} />
                <Route path="/login" element={ <Login/>} />
                <Route path="/logout" element={ <Logout/>} />
                <Route path="/register" element={ <Register/>} />
                <Route path="/my-recipes" element={<PrivateRoute><MyRecipes /></PrivateRoute>} />

                <Route path="/details/:recipeId" element={<RecipeDetails />} />

                <Route element={<GuardedRoute />}>
                  <Route path="/create" element={<Create />} />
                  <Route path="/edit/:recipeId" element={<Edit/>} />
                </Route>

            
              </Routes>
   
    
</main>

 </NotificationProvider>
      </AuthProvider>
    </ErrorBoundary>
{/* <script type="text/javascript" src="./main.85741bff.js"></script> */}
    </>
  );
}

export default App;
