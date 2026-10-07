export interface Contact {
  id: string;

  phone: string;

  name?: string;

  company?: string;

  email?: string;

  notes?: string;

  tags: string[];

  createdAt: string;
}