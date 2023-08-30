// Esta es la sintaxis para crear un context en react + typescript
import React, { createContext, useEffect, useState } from "react";
import { getTaskRequest } from "../api/task.service";
import { Task } from "../types/task.interface";


// Esta es la forma en la que podemos tipar el valor del context
// una vez que hemos tipado el useState
interface TaskContextValue {
  tasks: Task[]
}

// Esto crea el contexto del componente, aqui podemos agregar
// varios estados
export const TaskContext = createContext<TaskContextValue>({
  tasks: []
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

  useEffect(() => {
    getTaskRequest()
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  // Despues solo agregamos estos estados al value del provider
  return (
    <TaskContext.Provider
      value={{
        tasks
      }}>
      {children}
    </TaskContext.Provider>
  )
}