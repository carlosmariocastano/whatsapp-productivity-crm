import type { Contact } from "../../shared/types/contact";

interface Props {
  contact: Contact;
}

export default function ContactCard({
  contact,
}: Props) {
  return (
    <div className="border rounded p-4 mb-3">

      <h3 className="font-bold text-lg">
        {contact.name}
      </h3>

      <p>{contact.phone}</p>

      <p>{contact.company}</p>

      <div className="flex gap-2 mt-2">
        {contact.tags.map((tag) => (
          <span
            key={tag}
            className="
            bg-blue-100
            text-blue-700
            px-2
            py-1
            rounded"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}