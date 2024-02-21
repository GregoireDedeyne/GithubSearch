import SearchBarre from '../searchBarre/searchBarre';
import ResultNumber from '../resultNumber/resultNumber';

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
  onSearch: (searchTerm: string) => void;
}

export function Header({ repoItem, onSearch }: repoItem) {
  return (
    <div>
      <SearchBarre onSearch={onSearch} />
      <ResultNumber repoItem={repoItem} />
    </div>
  );
}
