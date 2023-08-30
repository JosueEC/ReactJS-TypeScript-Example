import { Task } from "../types/task.interface";

interface Props {
  task: Task
}

export default function TaskItem({ task }: Props) {
  return (
    <div key={task._id} className="bg-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer">
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div className="flex gap-x-2">
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  )
}