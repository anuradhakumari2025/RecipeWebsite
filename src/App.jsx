import { useState } from 'react'
import styles from './App.module.css'
import ButtonsContainer from './Components/ButtonsContainer'
import Display from './Components/Display'

function App() {

const [calVal, setCalVal] = useState("");
// const onButtonClick = (event) => console.log("Button clicked" + event);
// const onButtonClick = (event) => console.log(event);
// const onButtonClick = (buttonText) => console.log(buttonText);

const onButtonClick = (buttonText) => {
  if(buttonText === 'C'){
setCalVal("");
  }else if(buttonText === '='){
const result = eval(calVal);
setCalVal(result);
  }
  else{
const newDisplayValue = calVal + buttonText;
setCalVal(newDisplayValue);
  }
};




  return (
    <>
      <div className={styles.container}>
        <Display displayVal={calVal}></Display>
        <ButtonsContainer onButtonClick = {onButtonClick} 
        ></ButtonsContainer>
      </div>

    </>
  )
}

export default App
