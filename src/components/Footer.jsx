export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        <div>
          <h3 className="text-lg font-semibold text-white">MediBook</h3>
          <p className="mt-3 text-sm">
            Simple and secure doctor appointment booking platform.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <p className="text-sm">
            support@medibook.com
          </p>
          <p className="text-sm mt-1">
            +91 90000 00000
          </p>
        </div>

      </div>

      <div className="text-center text-xs text-gray-400 py-4 border-t border-gray-800">
        © {new Date().getFullYear()} MediBook. All rights reserved.
      </div>
    </footer>
  );
}