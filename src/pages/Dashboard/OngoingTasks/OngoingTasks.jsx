import SingleTask from "../SingleTask/SingleTask";

const OngoingTasks = ({ ongoing }) => {
  return (
    <div className="min-h-96 border rounded-md">
      <h4 className="bg-blue-700 text-white font-semibold rounded-md text-center p-3">
        Ongoing
      </h4>
      <div className="p-2">
        {ongoing?.length > 0 &&
          ongoing.map((task) => <SingleTask key={task?._id} task={task} />)}
      </div>
    </div>
  );
};

export default OngoingTasks;
