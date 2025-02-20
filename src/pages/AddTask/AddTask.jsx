import { useState } from "react";
import addtaskbanner from "../../assets/addtaskbg.png"

const AddTask = () => {
      const [selected, setSelected] = useState("To-Do");
    return (
      <div
        className="min-h-screen bg-yellow-300"
        style={{
          backgroundImage: `url(${addtaskbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="invisible mb-12">dfd</div>
        <div className="card max-w-md mx-auto bg-white p-4 md:p-6 lg:p-12 h-full rounded-none col-span-3">
          <h2 className="text-2xl md:text-3xl font-bold text-black">
            Add New Task
          </h2>
          <form className="mt-6">
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium text-gray-700">
                  Title:
                </span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Title"
                className="grow w-full text-gray-700 text-base input border border-gray-200 rounded-none focus:border-yellow-400 focus:outline-none"
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
                name="name"
                placeholder="Description"
                className="grow w-full text-gray-700 text-base input border border-gray-200 rounded-none focus:border-yellow-400 focus:outline-none"
              />
            </div>
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium  text-gray-700">
                  Category:
                </span>
              </label>
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="select w-full text-gray-700 text-base input border border-gray-200 rounded-none cursor-pointer focus:border-yellow-400 focus:outline-none"
              >
                <option className="text-gray-700">To-Do</option>
                <option className="text-gray-700">In Progress</option>
                <option className="text-gray-700">Done</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="bg-yellow-400 w-full px-6 py-2 text-gray-700 font-medium hover:bg-yellow-500 cursor-pointer">
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddTask;