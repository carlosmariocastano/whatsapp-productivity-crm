import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { Contact } from "../../shared/types/contact";

interface ContactState {
  contacts: Contact[];

  addContact: (contact: Contact) => void;

  deleteContact: (id: string) => void;
  
  addTag: (contactId: string,tag: string) => void;
}

export const useContactStore =
  create<ContactState>()(
    persist(
      (set) => ({
        contacts: [],

        addContact: (contact) =>
          set((state) => ({
            contacts: [
              ...state.contacts,
              contact,
            ],
          })),

        deleteContact: (id) =>
          set((state) => ({
            contacts:
              state.contacts.filter(
                (c) => c.id !== id
              ),
          })),
		  
		addTag: (  contactId,  tag) =>
		  set((state) => ({
			contacts:
			  state.contacts.map((contact) =>
				contact.id === contactId
				  ? {
					  ...contact,
					  tags: [
						...contact.tags,
						tag,
					  ],
					}
				  : contact
			  ),
		  })),
      }),
      {
        name: "contacts-storage",
      }
    )
  );