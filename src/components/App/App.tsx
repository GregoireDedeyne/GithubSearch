import { CardList } from '../card/cardList';
import { Header } from '../header/header';
import './App.scss';
import { useState } from 'react';

function App() {
  //  useState pour stocker les repo
  const [repo, setRepo] = useState([]);

  return (
    <div className="App">
      <Header />
      <CardList />
    </div>
  );
}

export default App;
