import { useEffect, useState } from "react";
import useTasks from "../../../hooks/useTasks";
import TaskColumn from "./TaskColumn";



const ManageTasks = () => {

    const [tasks, isTasksLoading, refetch] = useTasks();
    
    const [todo, setTodo] = useState([]);
    const [ongoing, setOngoing] = useState([]);
    const [completed, setCompleted] = useState([]);

    useEffect(() => {

        if (!isTasksLoading) {
            const filterTodo = tasks?.filter(task => task.status === 'todo');
            const filterOngoing = tasks?.filter(task => task.status === 'ongoing');
            const filterCompleted = tasks?.filter(task => task.status === 'completed');

            setTodo(filterTodo);
            setOngoing(filterOngoing);
            setCompleted(filterCompleted);
        }

    },[tasks]);

    return (
        <div className="bg-blue-300 min-h-screen">

            <div className="p-10 flex justify-around items-start ">

                <TaskColumn type="todo" title="Todo" tasksToLoad={todo}></TaskColumn>
                <TaskColumn type="ongoing" title="On-going" tasksToLoad={ongoing}></TaskColumn>
                <TaskColumn type="todo" title="Completed" tasksToLoad={completed}></TaskColumn>

            </div>

        </div>
    );
};

export default ManageTasks;