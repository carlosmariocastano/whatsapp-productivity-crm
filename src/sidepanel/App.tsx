import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Layout } from "../shared/components/Layout";

import DashboardPage from "../modules/dashboard/DashboardPage";
import TemplatesPage from "../modules/templates/TemplatesPage";
import ContactsPage from "../modules/contacts/ContactsPage";
import TasksPage from "../modules/tasks/TasksPage";
import SettingsPage from "../modules/settings/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<DashboardPage />}
          />

          <Route
            path="/templates"
            element={<TemplatesPage />}
          />

          <Route
            path="/contacts"
            element={<ContactsPage />}
          />

          <Route
            path="/tasks"
            element={<TasksPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}