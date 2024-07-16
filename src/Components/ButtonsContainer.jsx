import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const btnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.btnContainer}>
      {btnNames.map((btnName) => (
        <button className={styles.btn} onClick={() => onButtonClick(btnName)}>
          {btnName}
        </button>
      ))}
      {/* <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button>

          <button className={styles.btn}>C</button>
          <button className={styles.btn}>C</button> */}
    </div>
  );
};
export default ButtonsContainer;
