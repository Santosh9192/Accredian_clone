import { footerContent } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#11101d] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AE</span>
              </div>
              <span className="font-bold text-white text-lg">{footerContent.brand}</span>
            </div>
            <p className="text-gray-500 text-xs">{footerContent.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${footerContent.contact.email}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                  Email us: {footerContent.contact.email}
                </a>
              </li>
              <li className="text-sm text-gray-400 leading-relaxed">
                {footerContent.contact.address}
              </li>
            </ul>
          </div>

          {/* Social placeholder */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {["in", "𝕏", "▶"].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center text-sm text-gray-400 hover:text-white transition-all">
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
