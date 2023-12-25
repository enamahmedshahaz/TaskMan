import { FaPlus } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useUserInfo from '../../../hooks/useUserInfo'
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const AddTask = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [dueDate, setDueDate] = useState(new Date());


    const [userInfo] = useUserInfo();

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        //console.log('Form Data: ', data);

        const taskInfo = {
            title: data.title,
            description: data.description,
            deadline: dueDate,
            priority: data.priority,
            status: 'todo',
            createdBy: userInfo?.email,
            createdAt: new Date(),
        }
         console.log('postInfo: ', taskInfo);

        const response = await axiosPublic.post('/tasks', taskInfo);
        if (response.data.insertedId) {
            reset();
            navigate('/dashboard/manageTasks');
            toast.success('Task Added!')
        }
    }

    return (
        <div>
            <Helmet>
                <title>TaskMan | Add Task </title>
            </Helmet>

            <SectionTitle heading={'Create a new Task'} subHeading={'Create new tasks and manage your progress'}></SectionTitle>

            <div className="p-20">
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Title */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Task Title *</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Title of your Task"
                            {...register('title', { required: true })}
                            className="input input-bordered w-full" />
                        {errors.title?.type === "required" && (
                            <p className="text-red-600">Title is required</p>
                        )}
                    </div>

                    {/* Description */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Task Description *</span>
                        </label>
                        <textarea {...register('description', { required: true })} className="textarea textarea-bordered h-24" placeholder="Description of your post"></textarea>
                        {errors.description?.type === "required" && (
                            <p className="text-red-600">Description  is required</p>
                        )}
                    </div>


                    {/* Deadline */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Task Deadline *</span>
                        </label>

                        <DatePicker
                            className="input input-bordered w-full"
                            dateFormat="dd-MMM-yyyy"
                            selected={dueDate}
                            onChange={(dateSelected) => setDueDate(dateSelected)}
                        />

                    </div>

                    {/* priority Options */}
                    <div className="form-control my-6">
                        <label className="label">
                            <span className="label-text">Select priority *</span>
                        </label>

                        <select {...register('priority', { required: true })}
                            defaultValue={"default"}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select priority</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>

                        {errors.priority?.type === "required" && (
                            <p className="text-red-600">Priority is required</p>
                        )}
                    </div>
                    
                    
                    <button className="btn btn-primary">
                        Add Task <FaPlus></FaPlus>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddTask;