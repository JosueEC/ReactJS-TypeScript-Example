import TaskItem from "./TaskItem";
import { useTask } from "../context/useTask";

export default function TaskList () {
  const { tasks } = useTask();

  return (
    <div>
      {
        tasks ? (
          tasks.map((task) => {
            return (
              <TaskItem
                key={task._id}
                task={task}
              />
            )
          })
        ) : (
          <span>Loading...</span>
        )
      }
    </div>
  )
}
