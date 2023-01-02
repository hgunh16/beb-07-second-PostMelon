import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import Home from 'pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
