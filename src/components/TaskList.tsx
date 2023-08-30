import { useEffect, useState } from "react";
import { getTaskRequest } from "../api/Task.service";
import { Task } from "../types/task.interface";

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
          taskList.map(({ _id, title, description }) => {
            return (
              <div key={_id}>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            )
          })
        ) : (
          <span>Loading...</span>
        )
      }
    </div>
  )
}
