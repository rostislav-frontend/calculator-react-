import { Button } from './Components/Button';
import { ButtonContainer } from './Components/ButtonContainer';
import { Calculator } from './Components/Calculator';
import { Screen } from './Components/Screen';
import { CalcProvider } from './Context/CalculatorContext';

function App() {
  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "x"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  return (
    <>
    <CalcProvider>
      <Calculator>
        <Screen />
        <ButtonContainer>
          {btnValues.flat().map((button, index) => (
            <Button
              value={button}
              key={index}
            />
          ))}
        </ButtonContainer>
      </Calculator>
    </CalcProvider>
    </>
  );
}

export default App;
