import "./style.css";

const Form = () => (
    <form className="form">

        <input className="form__taskContent" autoFocus placeholder="Co jest do zrobienia?" />
        <button className="form__addTasks">Dodaj zadanie</button>

    </form>
);

export default Form; 