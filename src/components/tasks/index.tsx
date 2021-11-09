import "./index.css";

export type taskProps = {
    taskTitle: string;
    dueDate: string;
    assignee: string;
};
const Tasks = ({ taskTitle, dueDate, assignee }: taskProps) => {
    return (
        <div className="tasks">
            <div className="task__name">{taskTitle}</div>
            <div className="task__dueDate">Due: {dueDate}</div>
            <div className="task__assignee">
                {assignee} <img className="member__image" src="" alt="" />
            </div>
        </div>
    );
};

export default Tasks;
