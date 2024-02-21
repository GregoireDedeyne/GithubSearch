import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from 'semantic-ui-react';

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

interface repo {
  repo: Repository;
}

const CardResult = ({ repo }: repo) => (
  <Card>
    <Image src={repo.owner.avatar_url} wrapped ui={false} />
    <CardContent>
      <CardHeader>{repo.name}</CardHeader>
      <CardMeta>{repo.owner.login}</CardMeta>
      <CardDescription>{repo.description}</CardDescription>
    </CardContent>
    <CardContent extra>
      <a>
        <Icon name="star" />
        {repo.stargazers_count} Stars{' '}
      </a>
    </CardContent>
  </Card>
);

export default CardResult;
