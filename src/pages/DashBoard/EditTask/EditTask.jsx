import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import DatePicker from "react-datepicker";
import { useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const EditTask = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const loadedTask = useLoaderData();

    const { _id: id, title, description, priority, deadline } = loadedTask;

    const [dueDate, setDueDate] = useState(new Date(deadline));

    const navigate = useNavigate();

    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {

        //console.log('Form Data: ', data);

        const updateTaskInfo = {
            title: data.title,
            description: data.description,
            deadline: dueDate,
            priority: data.priority,
        }
       // console.log('updateTaskInfo: ', updateTaskInfo);

        const response = await axiosPublic.patch(`/tasks/${id}`, updateTaskInfo);

        //console.log('Edit response data:', response.data);

        if (response.data.modifiedCount > 0) {
            reset();
            navigate('/dashboard/manageTasks');
            toast.success('Task information updated!')
        }
    }


    return (
        <div>
            <Helmet>
                <title>TaskMan | Edit Task </title>
            </Helmet>

            <SectionTitle heading={'Edit Task'} subHeading={'Edit your task information'}></SectionTitle>

            <div className="px-20">

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Title */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Task Title *</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={title}
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
                        <textarea defaultValue={description} {...register('description', { required: true })} className="textarea textarea-bordered h-24" placeholder="Description of your task"></textarea>
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
                            defaultValue={priority}
                            className="select select-bordered w-full">
                            <option disabled >Select priority</option>
                            <option value="low">Low</option>
                            <option value="moderate">Moderate</option>
                            <option value="high">High</option>
                        </select>

                        {errors.priority?.type === "required" && (
                            <p className="text-red-600">Priority is required</p>
                        )}
                    </div>


                    <button className="btn btn-primary">
                        Update Task <FaEdit></FaEdit>
                    </button>

                </form>
            </div>
        </div>
    );
};

export default EditTask;