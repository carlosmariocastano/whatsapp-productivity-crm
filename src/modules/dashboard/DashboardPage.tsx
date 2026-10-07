import { useContactStore }
from "../contacts/contactStore";

import { useTemplateStore }
from "../templates/templateStore";

export default function DashboardPage() {

  const contacts =
    useContactStore(
      (state) => state.contacts
    );

  const templates =
    useTemplateStore(
      (state) => state.templates
    );

  return (
    <div>
      <h1
        className="
        text-3xl font-bold"
      >Dashboard
      </h1>
      <div
        className="
        grid
        grid-cols-2
        gap-4
        mt-4"
      >
        <div
          className="
          border
          rounded
          p-4"
        >
          <h2>Contactos</h2>
          <p>
            {contacts.length}
          </p>
        </