import { FormField, Form } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { SetStateAction, useState } from 'react';

interface onSearch {
  onSearch: (searchTerm: string) => void;
}

const SearchBarre = ({ onSearch }: onSearch) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

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
