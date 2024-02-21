import { FormField, Form } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { useState } from 'react';

const SearchBarre = () => (
  <Form>
    <FormField>
      <Icon name="github" size="massive" />
      <label></label>
      <input placeholder="Votre recherche Github" />
    </FormField>
  </Form>
);

export default SearchBarre;
