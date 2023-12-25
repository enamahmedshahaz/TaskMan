import useAuth from './useAuth';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTasks = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: tasks, isPending: isTasksLoading, refetch } = useQuery({
        queryKey: [user?.email, 'tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks?email=${user.email}`);
            return res.data;
        }
    });

    return [tasks, isTasksLoading, refetch];
};

export default useTasks;