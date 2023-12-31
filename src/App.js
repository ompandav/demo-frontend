import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {

    

  return (
    <div>
      <Item itemName = "om" ></Item>
      <ItemDate day = "21" month ="may" year = "2002" ></ItemDate>
    </div>
  );
}

export default App;
