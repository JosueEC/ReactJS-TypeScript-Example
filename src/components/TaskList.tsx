import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/task.service";
import { Task } from "../types/task.interface";
import TaskItem from "./TaskItem";

export default function TaskList () {
  const [taskList, setTaskList] = useState<Task[]>();

  useEffect(() => {
    getTaskRequest()
      .then(response => response.json())
      .then(data => setTaskList(data));
  }, [])

  return (
    <div>
      {
        taskList ? (
          taskList.map((task) => {
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
