import styles from './InputForNumber.module.css';

const InputForNumber = ({setValue}) => {

  function submitHandler(e) {
    e.preventDefault();
    setValue(e.target.numberInput.value)
  }
  return (
    <form className={styles['number-input']} onSubmit={submitHandler}>
      <label htmlFor="numberInput">Введите число:</label>
      <input type="number" id="numberInput" name="numberInput" min="0" max="1000" step="1"></input>
      <button type="submit">Отправить</button>
    </form>
  );
};

export default InputForNumber;
