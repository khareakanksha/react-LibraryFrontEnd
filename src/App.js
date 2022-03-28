import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {ArticleListPage} from './pages/ArticleListPage';
import {ArticlePage} from './pages/ArticlePage';
import {NavBar} from './components/NavBar';
import {NotFoundPage} from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    <div className='app'> 
    <NavBar/>
    <div id='page-body'>
    <Routes>
      <Route exact path="/" element={<HomePage/>}/>
      <Route exact path="/about" element={<AboutPage/>}/> 
       <Route exact path="/articles" element={<ArticleListPage/>}/>
       <Route exact path="/articles/:name" element={<ArticlePage/>}/>
     <Route path='*' element={<NotFoundPage/>}/>
     </Routes>
     </div>
     </div>
  </BrowserRouter>
  );
}

export default App;
