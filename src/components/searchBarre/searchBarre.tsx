import { FormField, Form } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { SetStateAction, useState } from 'react';

interface onSearch {
  onSearch: (searchTerm: string) => void;
}

const SearchBarre = ({ onSearch }: onSearch) => {
  const [searchTerm, setSearchTerm] = useState('');

  // on récupère les données écrite dans l'input et on le stock dans le state
  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  // on évite le comportement par défault et on appel la function OnSearch au submit
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  // affichage de la barre de recherche qui appel les fonctions nécessaire à la recherche et à l'appel API
  return (
    <Form onSubmit={handleSubmit}>
      <FormField>
        <Icon name="github" size="massive" />
        <label></label>
        <input
          placeholder="Votre recherche Github"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </FormField>
    </Form>
  );
};

export default SearchBarre;
