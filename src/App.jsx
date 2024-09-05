import { useState } from "react";
import Body from "./components/Body"
import Header from "./components/Header"
import Results from "./components/Results"
import { calculateInvestmentResults } from "./util/investment";

const HEADER = 'Investment Calculator';
const INITIAL_INVESTMENT = 'INITIAL INVESTMENT';
const ANNUAL_INVESTMENT = 'ANNUAL INVESTMENT';
const EXPECTED_RETURN = 'EXPECTED RETURN';
const DURATION = 'DURATION';
const headers = ['Year', 'Investment Value', 'Interest(Year)', 'Total Interest', 'Invested Capital'];

function App() {
  const [results, setResult] = useState({});
  const [inputs, setInput] = useState({
      [INITIAL_INVESTMENT]: 0,
      [ANNUAL_INVESTMENT]: 0,
      [EXPECTED_RETURN]: 0,
      [DURATION]: 1
  });

  const isInputValid = inputs[DURATION] >= 1;

  function handleInputChange(input, label){
    setInput(prevInput => {
      const updatedInput = {...prevInput}
      updatedInput[label] = input;

      const annualData = calculateInvestmentResults({ // Treat empty input as 0
        initialInvestment: (+updatedInput[INITIAL_INVESTMENT] || 0),
        annualInvestment: (+updatedInput[ANNUAL_INVESTMENT] || 0),
        expectedReturn: (+updatedInput[EXPECTED_RETURN] || 0),
        duration: (+updatedInput[DURATION] || 0)
      });
      setResult({annualData});

      return updatedInput;
    });
  }

  return (
    <>
      <Header header={HEADER}/>
      <Body inputs={inputs} onInputChange={handleInputChange}/>
      {/* {(results.annualData && (results.annualData != 0)) && <Results headers={headers} results={results}/>} */}
      {!isInputValid && <p className='center'>Please enter a proper value</p>}
      {isInputValid && results.annualData && <Results headers={headers} results={results}/>}
    </>
  )
}

export default App
