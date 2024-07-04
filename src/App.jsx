import styles from './App.module.css'
import ButtonsContainer from './Components/ButtonsContainer'
import Display from './Components/Display'



function App() {

  return (
    <>
      <div className={styles.container}>
        <Display></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>

    </>
  )
}

export default App
