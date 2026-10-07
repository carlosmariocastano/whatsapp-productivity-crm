import type { Contact }
from "../../shared/types/contact";

interface Props {
  contact: Contact;
}

export default function ContactDetail({
  contact,
}: Props) {
  return (
    <div
      className="
      border rounded
      p-4 mt-4"
    >

      <h2 className="text-xl font-bold">
        {contact.name}
      </h2>

      <p>
        📞 {contact.phone}
      </p>

      <p>
        🏢 {contact.company}
      </p>

      <div className="mt-3">
        <h3 className="font-bold">
          Notas
        </h3>

        <p>{contact.notes}</p>
      </div>

    </div>
  );
}