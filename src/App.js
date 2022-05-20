import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import data from "./data";
import Card from './components/Card';

function App() {
  console.log(data)
  let cards = data.map(item => {
    return (
      <Card
        className="card"
        id={item.title}
        {...item} />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div className="cards-list">
        {cards}
      </div>
      
    </div>
  );
}

export default App;
