import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from "react";
import { AppProvider } from './utils/context';
import Layout from './pages/layout';
import NotFound from './pages/not-found';
import News from './pages/news';
import NewsDetails from './pages/newsDetails';
import Weather from './pages/weather';


function App() {
  const [theme, setTheme] = useState('');

  return (
    <AppProvider>
      <div className={`App ${theme}`} >
        <Routes>
          <Route path="/" element={<Layout theme={theme} setTheme={setTheme} />}>
            <Route  path='news' element={<News />}/>
            <Route  path='weather' element={<Weather />}/>
            <Route  path='*' element={<NotFound />}/>
            <Route  path='/news/:title' element={<NewsDetails />}/>
          </Route>
        </Routes>
      </div>
    </AppProvider>
    
  );
}

export default App;
