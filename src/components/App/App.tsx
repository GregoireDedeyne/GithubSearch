import { CardList } from '../card/cardList';
import { Header } from '../header/header';
import './App.scss';
import axios from 'axios';

import { useState, useEffect } from 'react';

function App() {
  //  useState pour stocker les repo
  const [repo, setRepo] = useState([]);
  // useState pour stocker l'état de recherche
  const [searchTerm, setSearchTerm] = useState('');
  // useState pour stocker le nombre de page
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (searchTerm: string): void => {
    setSearchTerm(searchTerm);
  };

  // appel pour mettre à jour la page et aller à la suivante
  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // utilisation de useEffect pour éviter les effets de bord
  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const response = await axios.get(
            `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc&page=${currentPage}&per_page=9`
          );
          // MAJ des données dans le State
          setRepo(response.data.items);
          console.log(response.data.items);
        } catch (error) {
          console.error('Erreur lors de la recherche :', error);
        }
      }
    };
    // appel de la fonction
    fetchData();
    // l'effet doit être déclenché chaque fois que searchTerm ou currentPage change
  }, [searchTerm, currentPage]);

  return (
    <div className="App">
      <Header repoItem={repo} onSearch={handleSearch} />
      <CardList repoItem={repo} handleNext={handleNext} />
    </div>
  );
}

export default App;
