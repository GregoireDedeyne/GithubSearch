import CardResult from './card';
import { CardGroup, Loader } from 'semantic-ui-react';
import { NextButton } from './nextButton';
import InfiniteScroll from 'react-infinite-scroll-component';
import LoaderList from './loader';

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
  handleLeft: () => void;
}

// affichage de la liste des repos
export function CardList({ repoItem, handleNext, handleLeft }: repoItem) {
  console.log(repoItem.length);

  // const totalItem = 10;

  // const hasMoreItems = repoItem.length < totalItem;

  return (
    // <InfiniteScroll
    //   dataLength={repoItem.length}
    //   next={handleNext}
    //   hasMore={hasMoreItems}
    //   loader={<LoaderList />}
    //   endMessage={<p>End of List</p>}
    // >
    <div>
      <CardGroup>
        {repoItem.map((item) => (
          <CardResult key={item.id} repo={item} />
        ))}
      </CardGroup>

      {repoItem.length > 0 && ( // Condition pour afficher les boutons uniquement si la liste n'est pas vide
        <NextButton handleNext={handleNext} handleLeft={handleLeft} />
      )}
      {/* // </InfiniteScroll> */}
    </div>
  );
}
