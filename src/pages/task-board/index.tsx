import React from "react";
import { Panel } from "../../components/panel";

export const TaskBoard: React.FC = () => {
    const data: any = {
        tbTitle: "Task Board",
        memberList: [
            {
                name: "Ashok",
                imageUrl: "",
            },
            {
                name: "Mohit",
                imageUrl: "",
            },
            {
                name: "Deepak",
                imageUrl: "",
            },
        ],
        taskList: [
            {
                taskTitle: "Gst Filling Flow",
                dueDate: "12/12/019",
                assignee: "James",
                state: "planned",
                priority: "blocker",
            },
            {
                taskTitle: "ITR Filling Flow",
                dueDate: "12/12/019",
                assignee: "Jenny",
                state: "planned",
                priority: "medium",
            },
            {
                taskTitle: "Metrics Dashboard",
                dueDate: "12/12/019",
                assignee: "Jane",
                state: "started",
                priority: "low",
            },
            {
                taskTitle: "Error Dashboard",
                dueDate: "12/12/019",
                assignee: "James",
                state: "started",
                priority: "high",
            },
            {
                taskTitle: "Advance Returns flow",
                dueDate: "12/12/019",
                assignee: "Jenny",
                state: "done",
                priority: "critical",
            },
        ],
        panelList: [
            {
                panelTitle: "Planned",
                taskList: [
                    {
                        taskTitle: "Gst Filling Flow",
                        dueDate: "12/12/019",
                        assignee: "James",
                        status: "",
                    },
                    {
                        taskTitle: "ITR Filling Flow",
                        dueDate: "12/12/019",
                        assignee: "Jenny",
                        status: "",
                    },
                ],
            },
            {
                panelTitle: "Started",
                taskList: [
                    {
                        taskTitle: "Metrics Dashboard",
                        dueDate: "12/12/019",
                        assignee: "Jane",
                        status: "started",
                    },
                    {
                        taskTitle: "Error Dashboard",
                        dueDate: "12/12/019",
                        assignee: "James",
                        status: "started",
                    },
                    {
                        taskTitle: "Advance Returns flow",
                        dueDate: "12/12/019",
                        assignee: "Jenny",
                        status: "",
                    },
                ],
            },
            {
                panelTitle: "Done",
                taskList: [
                    {
                        taskTitle: "Analytics dashboard",
                        dueDate: "12/12/019",
                        assignee: "James",
                        status: "done",
                    },
                ],
            },
        ],
  };
    return (
        <div className="taskBoard">
            <div className="tb__navbar">
                <div className="tb__title">{data.tbTitle}</div>
                <div className="tb__members">
                    Members:
                    {data?.memberList.map((member: any) => {
                        return (
                            <img
                                src={member.imageUrl}
                                className="member__image"
                                alt=""
                            />
                        );
                    })}
                </div>
            </div>
            <div className="tb__body conatiner-fluid">
                <div className="tb__panelRow row">
                    {data.panelList.map((panel: any, index: number) => {
                        return (
                            <div className="tb__panelColumn col">
                                <Panel
                                    panelTitle={panel.panelTitle}
                                    taskList={panel.taskList}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
