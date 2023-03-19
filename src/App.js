import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './screen/Home';
function App() {
  return (
    <div className="App">
      <Header/>
          <Home/>
      <Footer/>
    </div>
  );
}

export default App;
