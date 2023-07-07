import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
                className={`tasks__content${task.done && props.hideDoneTasks ? " tasks__content--hidden" : ""}`} key={task.id}>
                <button
                    className="tasks__button tasks__button--toggleDone"
                >
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__name ${task.done ? "tasks__name--done" : ""}`}>

                    {task.content}
                </span>
                <button
                    className="tasks__button tasks__button--remove"
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;