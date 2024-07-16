// import styles from '../App.module.css'//use double dot bcz the file is not in same folder
import styles from './Display.module.css'

const Display = ({displayVal}) => {
  return (
    <input type='text' className={styles.display} value={displayVal} readOnly></input>
  )
}
export default Display;