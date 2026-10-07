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

  const [company, setCompany] =
    useState("");

  const [notes, setNotes] =
    useState("");

  const save = () => {

    if (!name || !phone) return;

    addContact({
      id: uuid(),
      name,
      phone,
      company,
      notes,
      tags: [],
      createdAt:
        new Date().toISOString()
    });

    setName("");
    setPhone("");
    setCompany("");
    setNotes("");
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

      <input
        placeholder="Empresa"
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)
        }
      />

      <textarea
        placeholder="Notas"
        value={notes}
        onChange={(e) =>
          setNotes(e.target.value)
        }
      />

      <button
        onClick={save}
      >
        Guardar Contacto
      </button>

    </div>
  );
}