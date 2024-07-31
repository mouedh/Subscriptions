import './App.css';
import * as React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Button from '@mui/material/Button';
//import SubscriptionsList from './components/SubscriptionsList';
import ButtonSelect from './components/ButtonSelect';
import Modal1 from './components/Modal1';
//import SubItem from './components/SubItem';
import HomeList from './components/HomeList';
//import Layout from './pages/Layout';


export default function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Modal1 /> 
            
        <br/>
        <ButtonSelect/>
      <br/>
      <br/>  
      <div> <HomeList /></div>

      </header>
        <BrowserRouter>
          <Routes>
            <Route path="Modal1" element={<Modal1 />} />
            <Route path="HomeList" element={<HomeList />} />
      
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);