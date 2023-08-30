import { Task } from "../types/task.interface";
import { useTask } from "../context/useTask";

interface Props {
  task: Task
}

export default function TaskItem({ task }: Props) {
  const { deleteTask } = useTask();

  async function handleDeleteTask () {
    if (!window.confirm('Are you sure you want to delete this Task?')) return;
    await deleteTask(task._id);
  }

  return (
    <div key={task._id} className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer">
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-x-2">
        <button className="p-2 bg-blue-500 hover:bg-blue-600 hover:cursor-pointer">
          Update
        </button>
        <button
          className="p-2 bg-red-500 hover:bg-red-600 hover:cursor-pointer"
          onClick={handleDeleteTask}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
