import CardResult from './card';
import { CardGroup } from 'semantic-ui-react';
import { NextButton } from './nextButton';

interface Repository {
  id: number;
  name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  stargazers_count: number;
}

interface repoItem {
  repoItem: Repository[];
  handleNext: () => void;
}

// affichage de la liste des repos
export function CardList({ repoItem, handleNext }: repoItem) {
  return (
    <CardGroup>
      {repoItem.map((item) => (
        <CardResult key={item.id} repo={item} />
      ))}
      {repoItem.length > 0 && <NextButton handleNext={handleNext} />}{' '}
    </CardGroup>
  );
}
