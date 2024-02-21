import repos from '../../data/repos';
import CardResult from './card';
import { CardGroup } from 'semantic-ui-react';
export function CardList() {
  const repoItem = repos.items;
  return (
    <CardGroup>
      {repoItem.map((item) => (
        <CardResult key={item.id} repo={item} />
      ))}
    </CardGroup>
  );
}
