import { Segment } from 'semantic-ui-react';

interface repoItem {
  repoItem: number;
}
// affichage du nombre de repo
const ResultNumber = ({ repoItem }: repoItem) => (
  <Segment>La recherche a donné {repoItem} résultats</Segment>
);

export default ResultNumber;
