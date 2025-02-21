import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";

const TaskCard = ({ task, refetch }) => {
  const { title, description, timestamp, category } = task;
  const axiosInstance = useAxios();

  const handleTaskDelete = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosInstance.delete(`/tasks/${task?._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted successfully.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div>
      <div className="shadow-xl p-3 mb-6 bg-white">
        <h2 className="text-xl font-semibold text-green-500 mb-2">{title}</h2>
        <p>{description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className={`font-medium text-gray-700`}>{category}</p>
          <p className="font-medium text-gray-700">{timestamp.split("T")[0]}</p>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <Link to={`/task_update/${task._id}`}>
            <button className="bg-green-400 text-sm px-3 py-1 text-gray-700 font-medium hover:bg-green-500 cursor-pointer">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleTaskDelete(task)}
            className="bg-red-500 text-sm px-3 py-1 text-white font-medium hover:bg-red-600 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
