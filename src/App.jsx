import React, { useState } from 'react';
import Home from './home';
import { Routes, Route } from 'react-router-dom';
import CreateCard from './components/CreateCard';
import NavBar from './components/NavBar';
import MintSuccess from './components/MintSuccess';


function App() {
  const [walletAddress, setWalletAddress] = useState('');

  return (
    <>
      <NavBar walletAddress={walletAddress} setWalletAddress={setWalletAddress} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCard walletAddress={walletAddress} />} />
        <Route path="/mint-success" element={<MintSuccess />} />
      </Routes>

    </>
  );
}

export default App;