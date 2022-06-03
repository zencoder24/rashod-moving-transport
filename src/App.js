import{BrowserRouter as Router, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {useState } from 'react';
import GetQuote from './components/Modal/GetQuote';


function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Navbar setOpenModal={setOpenModal} openModal={openModal}/>
      <GetQuote openModal={openModal} setOpenModal={setOpenModal}/>
      {/*These are the different views that will be rendered based on the URL Route */}
      <Router>
          <Route path='/' render={() => <HomePage setOpenModal={setOpenModal} />}/>
      </Router>
      <Footer setOpenModal={setOpenModal}/>
    </div>
  );
}

export default App;
