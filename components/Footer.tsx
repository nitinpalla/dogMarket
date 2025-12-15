import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">DogMarket</h2>
            <p className="text-gray-400">
              Premium dog products tailored to your furry friend's unique needs.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#products" className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#form" className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">
              Email: info@dogmarket.com
            </p>
            <p className="text-gray-400">
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DogMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

