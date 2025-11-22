// components/Navigation.tsx
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Isaac Tetteh-Apotey
          </Link>
          <div className="space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Portfolio
            </Link>
            <Link href="/build-journey" className="text-gray-600 hover:text-gray-900">
              Build Journey
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}