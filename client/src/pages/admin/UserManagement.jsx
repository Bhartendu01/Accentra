import { useState } from 'react';
import Card from '../../components/ui/Card';
import Page from '../../components/ui/Page';

const initialUsers = [
  { id: 1, name: 'Maya Chen', email: 'maya@student.com', role: 'student', xp: 1420, active: 'Today' },
  { id: 2, name: 'Admin Lee', email: 'admin@accentra.ai', role: 'admin', xp: 5000, active: 'Today' },
  { id: 3, name: 'Sofia Garcia', email: 'sofia@example.com', role: 'student', xp: 1260, active: 'Yesterday' }
];

export default function UserManagement() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <Page>
      <Card>
        <h2 className="text-3xl font-black">User management</h2>
        <div className="mt-6 overflow-x-auto"><table className="w-full text-left"><thead className="text-sm text-slate-500"><tr><th className="p-3">Name</th><th className="p-3">Email</th><th className="p-3">Role</th><th className="p-3">XP</th><th className="p-3">Active</th></tr></thead><tbody>{users.map((user) => <tr key={user.id} className="border-t border-slate-200 dark:border-white/10"><td className="p-3 font-bold">{user.name}</td><td className="p-3">{user.email}</td><td className="p-3"><select value={user.role} onChange={(e) => setUsers(users.map((item) => item.id === user.id ? { ...item, role: e.target.value } : item))} className="rounded-lg bg-slate-100 px-3 py-2 dark:bg-slate-800"><option>student</option><option>admin</option></select></td><td className="p-3">{user.xp}</td><td className="p-3">{user.active}</td></tr>)}</tbody></table></div>
      </Card>
    </Page>
  );
}
