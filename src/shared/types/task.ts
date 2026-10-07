export interface Task {
  id: string;

  title: string;

  completed: boolean;

  dueDate?: string;

  contactId?: string;

  createdAt: string;
}