import { Task } from "../types/Task";

const API: string = 'http://localhost/3000'

export const createTaskRequest = async (task: Task): Promise<Task> => {
  const URL: string = `${API}/task`;
  const options = { 
    method: 'POST',
    body: JSON.stringify(task),
    headers: { 'Content-Type': 'application/json'}
  }

  const data = await fetch(URL, options)
    .then(response => response.json())
    .then(results => {
      return results;
    })
    .catch(({ message }) => console.error(message))

  return data;
}