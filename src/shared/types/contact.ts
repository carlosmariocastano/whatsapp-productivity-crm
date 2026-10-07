export interface Contact {
  id: string;
  name: string;
  phone: string;
  company?: string;
  email?: string;
  notes?: string;
  tags: string[];
  createdAt: string;
}