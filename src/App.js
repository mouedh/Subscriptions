import * as React from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Button from '@mui/material/Button';
//import SubscriptionsList from './components/SubscriptionsList';
// import ButtonSelect from "./components/ButtonSelect";
import Modal from "./pages/ModalBox";
//import SubItem from './components/SubItem';
// import HomeList from "./components/HomeList";
import { Button } from "@mui/material";
import "./App.css";
import { ModalProvider } from "./components/ModalContext";
//import Layout from './pages/Layout';

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <h1>HELLO WORLD</h1>
                  <Button href="/modal">Go To Modal</Button>
                </div>
              }
            />
            <Route path="modal" element={<Modal />} />
            {/* <Route path="HomeList" element={<HomeList />} /> */}
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
