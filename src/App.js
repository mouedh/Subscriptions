import "./App.css";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Button from '@mui/material/Button';
//import SubscriptionsList from './components/SubscriptionsList';
import ButtonSelect from "./components/ButtonSelect";
import ModalBox from "./pages/ModalBox";
//import SubItem from './components/SubItem';
import HomeList from "./components/HomeList";
import { ModalProvider } from "./components/ModalContext";
//import Layout from './pages/Layout';

export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <ModalBox /> 
            
        <br/>
        <ButtonSelect/>
      <br/>
      <br/>  
      <div> <HomeList /></div>

      </header> */}
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/ModalBox" element={<ModalBox />} />
            <Route path="/" element={<HomeList />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
