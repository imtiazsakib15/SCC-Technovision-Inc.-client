import SingleTask from "../SingleTask/SingleTask";

const CompletedTasks = ({ completed, taskRefetch }) => {
  return (
    <div className="min-h-96 border rounded-md">
      <h4 className="bg-blue-700 text-white font-semibold rounded-md text-center p-3">
        Completed
      </h4>
      <div className="p-2">
        {completed?.length > 0 &&
          completed.map((task) => (
            <SingleTask key={task?._id} task={task} taskRefetch={taskRefetch} />
          ))}
      </div>
    </div>
  );
};

export default CompletedTasks;
