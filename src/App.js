import './App.scss';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Header></Header>
        <Card></Card>
      </div>
      <p className="fs">
        <a href="#nav">E.T</a>
      </p>
    </>
  );
}

export default App; 