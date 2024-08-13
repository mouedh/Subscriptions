import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "./pages/ModalBox";
import "./App.css";
import { ModalProvider } from "./components/ModalContext";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route
              path="/"
              element={
                <div>
                  <h1>HELLO WORLD</h1>
                  <Button href="/modal">Go To Modal</Button>
                </div>
              }
            /> */}
            <Route path="/" element={<Modal />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </div>
  );
}
