import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

import { useTaskStore }
from "./taskStore";

export default function TasksPage() {

  const tasks =
    useTaskStore(
      (state) => state.tasks
    );

  return (
    <div>

      <h1
        className="
        text-2xl
        font-bold
        mb-4"
      >
        Tasks
      </h1>

      <TaskForm />

      <div className="mt-4">

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}

      </div>

    </div>
  );
}