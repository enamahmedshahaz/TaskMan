import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useUserInfo = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const { data: userInfo, isPending: userInfoLoading } = useQuery({
        queryKey: [user?.email, 'userInfo'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?email=${user.email}`);
            return res.data;
        }
    });
    return [userInfo, userInfoLoading];
};

export default useUserInfo;