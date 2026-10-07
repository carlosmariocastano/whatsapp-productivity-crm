import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useContactStore } from "./contactStore";

export default function ContactForm() {
  const addContact =
    useContactStore(
      (state) => state.addContact
    );

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const save = () => {
    addContact({
      id: uuid(),
      name,
      phone,
      tags: [],
      createdAt:
        new Date().toISOString(),
    });

    setName("");
    setPhone("");
  };

  return (
    <div className="flex flex-col gap-2">
      <input
        placeholder="Nombre"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Teléfono"
        value={phone}
        onChange={(e) =>
          setPhone(e.target.value)
        }
      />

      <button onClick={save}>
        Guardar Contacto
      </button>
    </div>
  );
}