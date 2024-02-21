import CardResult from './card';
import { CardGroup } from 'semantic-ui-react';

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
}

export function CardList({ repoItem }: repoItem) {
  return (
    <CardGroup>
      {repoItem.map((item) => (
        <CardResult key={item.id} repo={item} />
      ))}
    </CardGroup>
  );
}
