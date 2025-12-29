import { NavbarDemo } from '@/components/Layout/Navbar';
import LandingPage from '@/components/Layout/LandingPage';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <NavbarDemo />
      <LandingPage />
    </main>
  );
}
