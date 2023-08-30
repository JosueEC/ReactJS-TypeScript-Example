// Esta es la sintaxis para crear un context en react + typescript
import React, { createContext, useEffect, useState } from "react";
import { createTaskRequest, getTaskRequest } from "../api/task.service";
import { CreateTask, Task } from "../types/task.interface";


// Esta es la forma en la que podemos tipar el valor del context
// una vez que hemos tipado el useState
interface TaskContextValue {
  tasks: Task[],
  createTask: (task: CreateTask) => void
}

// Esto crea el contexto del componente, aqui podemos agregar
// varios estados
export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  createTask: () => {}
});

// Esto tipa el componente que llega al componente del contexto
interface Props {
  children: React.ReactNode;
}

// Este es el componente que encierra a los componentes que van a
// tener acceso al contexto
export const TaskProvider: React.FC<Props> = ({ children }) => {
  // Aqui podemos crear varios estados que querramos que sean 
  // compartidos entre los componentes envueltos por el TaskProvider
  const [tasks, setTasks] = useState<Task[]>([]);

  // Este useEffect es el que lee las tasks de la BD y las guarda en
  // el context, para que puedan se accedidas desde los componentes
  // que estan englobados en el contexto
  useEffect(() => {
    getTaskRequest()
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  // Podemos crear funciones que pueden ser utilizadas para modificar
  // el context
  const createTask = async (task: CreateTask) => {
    const response = await createTaskRequest(task)
    setTasks([...tasks, response]);
  }

  // Despues solo agregamos estos estados al value del provider
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask
      }}>
      {children}
    </TaskContext.Provider>
  )
}