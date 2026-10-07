import { useContactStore } from "../contacts/contactStore";
import { useTemplateStore } from "../templates/templateStore";
import { useTaskStore } from "../tasks/taskStore";

export default function DashboardPage() {
  const contacts = useContactStore(
    (state) => state.contacts
  );

  const templates = useTemplateStore(
    (state) => state.templates
  );

  const tasks = useTaskStore(
    (state) => state.tasks
  );

  const pendingTasks = tasks.filter(
    (task) => !task.completed
  );

  const completedTasks = tasks.filter(
    (task) => task.completed
  );

  return (
    <div className="flex flex-col gap-6">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Resumen de actividad
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">

        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-sm text-gray-500">
            Contactos
          </h2>

          <p className="text-3xl font-bold">
            {contacts.length}
          </p>
        </div>

        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-sm text-gray-500">
            Plantillas
          </h2>

          <p className="text-3xl font-bold">
            {templates.length}
          </p>
        </div>

        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-sm text-gray-500">
            Tareas Pendientes
          </h2>

          <p className="text-3xl font-bold text-orange-500">
            {pendingTasks.length}
          </p>
        </div>

        <div className="border rounded-lg p-4 shadow-sm">
          <h2 className="text-sm text-gray-500">
            Tareas Completadas
          </h2>

          <p className="text-3xl font-bold text-green-600">
            {completedTasks.length}
          </p>
        </div>

      </div>

      <div className="border rounded-lg p-4">

        <h2 className="text-xl font-bold mb-4">
          Pendientes de Hoy
        </h2>

        {pendingTasks.length === 0 ? (
          <p className="text-gray-500">
            No hay tareas pendientes
          </p>
        ) : (
          <div className="flex flex-col gap-2">

            {pendingTasks
              .slice(0, 5)
              .map((task) => (
                <div
                  key={task.id}
                  className="
                    border
                    rounded
                    p-3
                    flex
                    justify-between"
                >
                  <span>
                    {task.title}
                  </span>

                  <span
                    className="
                    text-orange-500"
                  >
                    Pendiente
                  </span>
                </div>
              ))}
          </div>
        )}

      </div>

      <div className="border rounded-lg p-4">

        <h2 className="text-xl font-bold mb-4">
          Acciones Rápidas
        </h2>

        <div className="flex gap-3">

          <button
            className="
            bg-blue-600
            text-white
            px-4
            py-2
            rounded"
          >
            + Contacto
          </button>

          <button
            className="
            bg-green-600
            text-white
            px-4
            py-2
            rounded"
          >
            + Plantilla
          </button>

          <button
            className="
            bg-orange-600
            text-white
            px-4
            py-2
            rounded"
          >
            + Tarea
          </button>

        </div>

      </div>

    </div>
  );
}