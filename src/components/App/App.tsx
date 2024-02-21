import { CardList } from '../card/cardList';
import { Header } from '../header/header';
import './App.scss';
import axios from 'axios';

import { useState, useEffect } from 'react';
import repos from '../../data/repos';

function App() {
  //  useState pour stocker les repo
  const [repo, setRepo] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm: string): void => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const response = await axios.get(
            `https://api.github.com/search/repositories?q=${searchTerm}`
          );
          setRepo(response.data.items);
          console.log(response.data.items);
        } catch (error) {
          console.error('Erreur lors de la recherche :', error);
        }
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="App">
      <Header repoItem={repo} onSearch={handleSearch} />
      <CardList repoItem={repo} />
    </div>
  );
}

export default App;
