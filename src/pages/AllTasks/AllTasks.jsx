

import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import TaskCard from "../../components/TaskCard";
import allTaskBannerImage from "../../assets/bg4.jpg"


const AllTasks = () => {
  const axiosInstance = useAxios();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosInstance.get("/tasks");
      return res.data;
    },
  });

  const todoTasks = tasks.filter(task => task.category === "To-Do")
  const inProgressTasks = tasks.filter(task => task.category === "In Progress")
  const DoneTasks = tasks.filter(task => task.category === "Done")
  


//   console.log(tasks);

  return (
    <div
      className="min-h-screen bg-yellow-300"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${allTaskBannerImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <div className="invisible mb-12">dfd</div>
      <div className="md:max-w-5xl md:mx-auto mx-4 px-4 md:px-6 lg:px-8 py-12  text-gray-700 bg-base-100">
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          All Tasks
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="p-4 border border-gray-200">
            <h2 className="text-2xl mb-3 font-bold">To-Do</h2>
            <div>
              {todoTasks.map((task) => (
                <TaskCard task={task} key={task._id}></TaskCard>
              ))}
            </div>
          </div>
          <div className="p-4 border border-gray-200">
            <h2 className="text-2xl mb-3 font-bold">In-Progress</h2>
            <div>
              {inProgressTasks.map((task) => (
                <TaskCard task={task} key={task._id}></TaskCard>
              ))}
            </div>
          </div>
          <div className="p-4 border border-gray-200">
            <h2 className="text-2xl mb-3 font-bold">Done</h2>
            <div>
              {DoneTasks.map((task) => (
                <TaskCard task={task} key={task._id}></TaskCard>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="invisible mt-12">dfd</div>
    </div>
  );
};

export default AllTasks;
