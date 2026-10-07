import ContactForm from "./ContactForm";
import { useContactStore } from "./contactStore";

export default function ContactsPage() {
  const contacts =
    useContactStore(
      (state) => state.contacts
    );

  return (
    <div>
      <h1 className="text-2xl font-bold">
        Contacts
      </h1>

      <ContactForm />

      <div className="mt-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="border p-3 mb-2"
          >
            <h3>{contact.name}</h3>

            <p>{contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}