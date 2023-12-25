
import Task from './Task';
import { useDrop } from 'react-dnd';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useTasks from '../../../hooks/useTasks';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';


const TaskColumn = ({ type, title, tasksToLoad }) => {

    const [, , refetch] = useTasks();


    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop: (task) => addTaskToColumn(task._id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }));

    const axiosPublic = useAxiosPublic();


    const addTaskToColumn = (id) => {

        axiosPublic.patch(`/tasks/changeStatus/${id}?status=${type}`)

            .then(response => {
                // console.log(response.data);
                if (response.data.modifiedCount > 0) {
                    toast.success('Task status changed!')
                    refetch(); //refetch data
                }
            })
            .catch(error => {
                //  console.log(error);
                Swal.fire({
                    title: "Can't change task status!",
                    text: `Error occurred: ${error.message}`,
                    icon: "error"
                });
            });

    }

    return (
        <div>
            <h2 className="text-2xl font-semibold text-center mb-1">{title} ({tasksToLoad?.length})</h2>

            <div ref={drop} className={`${isOver ? 'bg-teal-100' : 'bg-gray-200'} w-60 h-screen rounded-md p-5 overflow-auto`}>
                <div className='flex flex-col gap-2'>
                    {
                        tasksToLoad?.map((task, index) => <Task key={index} task={task}></Task>)
                    }
                </div>

            </div>
        </div>
    );
};

export default TaskColumn;