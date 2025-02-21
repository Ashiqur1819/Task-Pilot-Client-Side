

const TaskCard = ({task}) => {
    const { title, description, timestamp, category } = task;
    console.log(task)
    return (
      <div className="shadow-xl p-3 mb-6 bg-white">
        <h2 className="text-xl font-semibold text-green-500 mb-2">{title}</h2>
        <p>{description}</p>
        <div className="flex items-center justify-between mt-2">
          <p className={`font-medium text-gray-700`}>{category}</p>
          <p className="font-medium text-gray-700">{timestamp.split("T")[0]}</p>
        </div>
      </div>
    );
};

export default TaskCard;