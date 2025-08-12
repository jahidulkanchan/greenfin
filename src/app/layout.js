import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'GreenFin - Premium Bonsai & Aquarium Fish for Nature Lovers',
  description: 'Discover high-quality bonsai plants and exotic aquarium fish at GreenFin. Your one-stop destination for sustainable greenery, aquatic beauty, and expert care tips.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
