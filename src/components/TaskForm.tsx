import { ChangeEvent, FormEvent, useState } from "react"
import { TaskStatus } from "../types/enums";
import { Task } from "../types/Task";

export default function TaskForm (): JSX.Element {
  const [task, setTask] = useState<Task>({
    title: '',
    description: '',
    status: TaskStatus.PENDING
  })

  function handleChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setTask({...task, [name]: value});
  }

  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.info(task)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text" 
          name="title" 
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
          placeholder="Wirte a title"
          onChange={handleChange}
        />
        <textarea 
          name="description" 
          rows={3}
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block w-full my-2" 
          placeholder="Wirte a description"
          onChange={handleChange}
        />
        <label htmlFor="" className="inline-flex items-center gap-x-2">
          <input type="checkbox" className="h-5 w-5 text-indigo-600"/>
          <span>Done</span>
        </label>
        <button className="bg-indigo-500 px-3 block py-2 w-full">
          Save
        </button>
      </form>
    </div>
  )
}
