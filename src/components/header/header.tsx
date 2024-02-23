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
  total: number;
}

export function Header({ repoItem, onSearch, total }: repoItem) {
  return (
    <div>
      <SearchBarre onSearch={onSearch} />
      <ResultNumber repoItem={total} />
    </div>
  );
}
