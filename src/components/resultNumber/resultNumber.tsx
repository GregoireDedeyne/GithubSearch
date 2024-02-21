import { Segment } from 'semantic-ui-react';

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

const ResultNumber = ({ repoItem }: repoItem) => (
  <Segment>La recherche a donné {repoItem.length} résultats</Segment>
);

export default ResultNumber;
