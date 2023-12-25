import moment from 'moment';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useTasks from '../../../hooks/useTasks';
import toast from 'react-hot-toast';


const Task = ({ task }) => {

    const { _id: id, title, description, priority, deadline } = task;

    const axiosPublic = useAxiosPublic();

    const [, , refetch] = useTasks();


    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: `Want to delete Task - ${title} `,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {

            if (result.isConfirmed) {

                axiosPublic.delete(`/tasks/${id}`)
                    .then(response => {
                        // console.log(response.data);
                        if (response.data.deletedCount > 0) {
                            refetch(); //refetch  data
                            toast.success('Task deleted!')
                        }
                    })
                    .catch(error => {
                        //  console.log(error);
                        Swal.fire({
                            title: "Can't Delete!",
                            text: `Error occurred: ${error.message}`,
                            icon: "error"
                        });
                    });
            }
        });
    }

    return (

        <div className="bg-orange-200 rounded-md p-4">
            <h3 className="font-bold">{title}</h3>
            {
                priority === 'low' ?
                    <div className="badge badge-success gap-2">
                        Low
                    </div>
                    : priority === 'moderate' ?
                        <div className="badge badge-warning gap-2">
                            Moderate
                        </div> :
                        <div className="badge badge-error gap-2">
                            High
                        </div>
            }
            <p className='text-sm text-gray-500'>{description}</p>

            <p>Deadline: {moment(deadline).format("Do MMM YY")}</p>

            <div className="divider m-0"></div>

            <div className='flex justify-around'>
                <button className="btn btn-xs  btn-outline btn-primary">Edit</button>
                <button onClick={() => handleDelete(id)} className="btn btn-xs  btn-outline btn-error">Delete</button>
            </div>

        </div>
    );
};

export default Task;