import SingleTask from "../SingleTask/SingleTask";

const TodoTasks = ({ todos, taskRefetch }) => {
  return (
    <div className="min-h-96 border rounded-md">
      <h4 className="bg-blue-700 text-white font-semibold rounded-md text-center p-3">
        To-Do
      </h4>
      <div className="p-2">
        {todos?.length > 0 &&
          todos.map((task) => (
            <SingleTask key={task?._id} task={task} taskRefetch={taskRefetch} />
          ))}
      </div>
    </div>
  );
};

export default TodoTasks;
