import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white h-screen p-4">
      <h1 className="text-xl font-bold mb-8">
        WhatsCRM
      </h1>
      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/templates">
          Templates
        </Link>
        <Link to="/contacts">
          Contacts
        </Link>
        <Link to="/tasks">
          Tasks
        </Link>
		<Link to="/followups">
			Follow Ups
		</Link>
        <Link to="/settings">
          Settings
        </Link>
		<Link to="/quick-replies">
			Quick Replies
		</Link>
      </nav>
    </aside>
  );
}
