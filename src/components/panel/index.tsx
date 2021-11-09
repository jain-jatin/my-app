import React from "react";
import { taskProps } from "../tasks/index";
import Tasks from "../tasks/index";
import "./index.css";

type props = {
    panelTitle: string;
    taskList: taskProps[];
};
export const Panel = ({ panelTitle, taskList }: props) => {
    return (
        <div className="panel">
            <div className="panel__title">{panelTitle}</div>
            <div className="panel__column">
                <div className="panel__List">
                    {taskList.map((task, index) => {
                        return (
                            <Tasks
                                taskTitle={task.taskTitle}
                                dueDate={task.dueDate}
                                assignee={task.assignee}
                            />
                        );
                    })}
                </div>
                <div className="panel__addCard">
                    Add another Task
                    <button className="panel__addTask">Add another task</button>
                </div>
            </div>
        </div>
    );
};
