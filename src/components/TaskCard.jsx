

const TaskCard = ({task}) => {
    const { Title, Description, Timestamp, Category } = task;
    console.log(task)
    return (
      <div className="shadow-xl p-3 mb-6 bg-white">
        <h2 className="text-xl font-semibold text-green-500 mb-2">{Title}</h2>
        <p>{Description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className={`font-medium text-gray-700`}>{Category}</p>
          <p className="font-medium text-gray-700">{Timestamp.split("T")[0]}</p>
        </div>
      </div>
    );
};

export default TaskCard;