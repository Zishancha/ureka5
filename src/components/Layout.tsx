import { ReactNode } from 'react';
import Navigation from './Navigation';
import ChatButton from './ChatButton';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="page-enter page-enter-active">
        {children}
      </main>
      <ChatButton />
    </div>
  );
};

export default Layout;