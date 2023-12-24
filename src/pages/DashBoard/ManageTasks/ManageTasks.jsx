const ManageTasks = () => {
    return (
        <div className="bg-blue-300 min-h-screen">

            <div className="p-10 flex justify-around items-center">

                <div className="w-60 h-96 bg-gray-200 rounded-sm p-5">
                    <h2 className="text-xl font-semibold">Todo</h2>
                </div>

                <div className="w-60 h-96 bg-gray-200 rounded-sm p-5">
                    <h2 className="text-xl font-semibold">On-going</h2>
                </div>

                <div className="w-60 h-96 bg-gray-200 rounded-sm p-5">
                    <h2 className="text-xl font-semibold">Completed</h2>
                </div>
            </div>

        </div>
    );
};

export default ManageTasks;