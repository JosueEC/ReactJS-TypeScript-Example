import { Task,CreateTask } from "../types/task.interface";

const API: string = 'http://localhost:3000/api'

export const createTaskRequest = async (task: CreateTask): Promise<Task> => {
  const URL: string = `${API}/v1/task`;
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

export const getTaskRequest = (): Promise<Response> => {
  const URL = `${API}/v1/task`;
  return fetch(URL);
};