import { useNavigate, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import updateTaskBannerImage from "../../assets/bg6.webp"
import Swal from "sweetalert2";


const TaskUpdate = () => {
const { id } = useParams();
const axiosInstance = useAxios();
const navigate = useNavigate()

const { data: task = [] } = useQuery({
  queryKey: ["task", id],
  queryFn: async () => {
    const res = await axiosInstance.get(`/tasks/${id}`);
    return res.data;
  },
});

const { title, description, category = "" } = task[0] || {};
const [selected, setSelected] = useState("");

useEffect(() => {
  if (category) {
    setSelected(category);
  }
}, [category]);

console.log("Selected:", selected, "Category:", category);

const handleUpdateTask = async (e) => {
  e.preventDefault();

  const form = e.target;
  const title = form.title.value;
  const description = form.description.value;
  const date = new Date();
  const timestamp = date.toISOString();
  const category = form.category.value;

  const updatedTask = {
    title,
    description,
    timestamp,
    category,
  };


      const res = await axiosInstance.put(`/tasks/${id}`, updatedTask);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task has been updated!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/all_tasks")
      }
    };

    return (
      <div
        className="min-h-screen bg-yellow-300"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${updateTaskBannerImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="invisible mb-12">dfd</div>
        <div className="card md:max-w-md md:mx-auto mx-4 bg-white p-4 md:p-6 lg:p-12 h-full rounded-none ">
          <form onSubmit={handleUpdateTask} className="mt-6">
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium text-gray-700">
                  Title:
                </span>
              </label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="grow w-full text-gray-700 text-base input border border-gray-200 rounded-none focus:border-green-400 focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium text-gray-700">
                  Description:
                </span>
              </label>
              <input
                defaultValue={description}
                type="text"
                name="description"
                className="grow w-full text-gray-700 text-base input border border-gray-200 rounded-none focus:border-green-400 focus:outline-none"
              />
            </div>
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium  text-gray-700">
                  Category:
                </span>
              </label>
              <select
                name="category"
                defaultValue={category}
                onChange={(e) => setSelected(e.target.value)}
                className="select w-full text-gray-700 text-base input border border-gray-200 rounded-none cursor-pointer focus:border-green-400 focus:outline-none"
              >
                <option className="text-gray-700">To-Do</option>
                <option className="text-gray-700">In Progress</option>
                <option className="text-gray-700">Done</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="bg-green-400 w-full px-6 py-2 text-gray-700 font-medium hover:bg-green-500 cursor-pointer">
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default TaskUpdate;