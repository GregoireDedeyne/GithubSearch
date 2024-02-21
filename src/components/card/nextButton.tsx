import { ButtonContent, Button, Icon } from 'semantic-ui-react';

interface handleNext {
  handleNext: () => void;
}

export function NextButton({ handleNext }: handleNext) {
  console.log(handleNext);

  return (
    <Button animated onClick={handleNext}>
      <ButtonContent visible>Next</ButtonContent>
      <ButtonContent hidden>
        <Icon name="arrow right" />
      </ButtonContent>
    </Button>
  );
}
