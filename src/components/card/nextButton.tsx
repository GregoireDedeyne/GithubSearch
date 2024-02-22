import { ButtonContent, Button, Icon } from 'semantic-ui-react';

interface handleNext {
  handleNext: () => void;
  handleLeft: () => void;
}

export function NextButton({ handleNext, handleLeft }: handleNext) {
  console.log(handleNext);

  return (
    // appel de la fonction handleNext
    <div>
      <Button animated attached="left" onClick={handleLeft}>
        <ButtonContent visible>Previous</ButtonContent>
        <ButtonContent hidden>
          <Icon name="arrow left" />
        </ButtonContent>
      </Button>
      <Button animated attached="right" onClick={handleNext}>
        <ButtonContent visible>Next</ButtonContent>
        <ButtonContent hidden>
          <Icon name="arrow right" />
        </ButtonContent>
      </Button>
    </div>
  );
}
