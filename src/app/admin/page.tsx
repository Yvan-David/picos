import PasswordGate from '@/components/admin/PasswordGate';
import Dashboard from '@/components/admin/Dashboard';

export const metadata = {
  title: 'Admin Dashboard',
};

export default function AdminPage() {
  return (
    <PasswordGate>
      <Dashboard />
    </PasswordGate>
  );
}
