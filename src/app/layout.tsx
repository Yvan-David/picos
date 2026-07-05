import '../styles/index.css';
import { Toaster } from '@/components/ui/sonner';
import NavigationRouter from '@/components/NavigationRouter';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Picos Interiors',
  description: 'Interior Design Studio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          <Toaster position="top-right" richColors />
          <NavigationRouter />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
