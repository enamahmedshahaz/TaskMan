import React from 'react';
import Task from './Task';



const TaskColumn = ({ type, title, tasksToLoad }) => {
    return (
        <div className="w-60 min-h-96 bg-gray-200 rounded-sm p-5">
            <h2 className="text-xl font-semibold">{title}</h2>

            <div className='flex flex-col gap-2'>
                {
                    tasksToLoad?.map((task, index) => <Task key={index} task={task}></Task>)
                }
            </div>

        </div>
    );
};

export default TaskColumn;