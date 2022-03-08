import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fecthCountry } from './redux/Country/countries';
import HeroSection from './components/hero/HeroSection';
import Header from './components/header/Header';
import SearchField from './components/searchSection/SearchField';
import Town from './components/townPage/Town';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fecthCountry()), []);

  // const [title, setTitle] = useState('Not selected');

  // const handleNewTitle = (newTitle) => {
  //   setTitle(newTitle);
  // };

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Routes>
        <Route exact path="/" element={<SearchField />} />
        <Route path="/town" element={<Town />} />
      </Routes>
    </div>
  );
}

export default App;
