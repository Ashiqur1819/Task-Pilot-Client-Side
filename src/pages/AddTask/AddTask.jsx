import { useState } from "react";
import addtaskbanner from "../../assets/bg5.jpg";
import useAxios from "../../hooks/useAxios";

const AddTask = () => {
  const [selected, setSelected] = useState("To-Do");
  const axiosInstance = useAxios();

  const handleAddTask = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const date = new Date();
    const timestamp = date.toISOString();

    const task = { title, description, timestamp, category };

    // Send data to the backend
    const res = await axiosInstance.post("/task", task);
    console.log(res.data);
  };
  return (
    <div
      className="min-h-screen bg-yellow-300"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${addtaskbanner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="invisible mb-12">dfd</div>
      <div className="card md:max-w-md md:mx-auto mx-4 bg-white p-4 md:p-6 lg:p-12 h-full rounded-none ">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Add New Task
        </h2>
        <form onSubmit={handleAddTask} className="mt-6">
          <div className="form-control mt-1">
            <label className="label px-0">
              <span className="label-text font-medium text-gray-700">
                Title:
              </span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
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
              type="text"
              name="description"
              placeholder="Description"
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
              value={selected}
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
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
