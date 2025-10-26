import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function FooterNew() {
  const links = {
    shop: [
      { label: "All Books", href: "#" },
      { label: "Age 0-3", href: "#" },
      { label: "Age 4-7", href: "#" },
      { label: "Age 8+", href: "#" },
      { label: "Book Bundles", href: "#" }
    ],
    resources: [
      { label: "Parent's Guide", href: "#" },
      { label: "Reading Tips", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Virtual Autism Info", href: "#" },
      { label: "Success Stories", href: "#" }
    ],
    company: [
      { label: "About Us", href: "#" },
      { label: "Our Mission", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press Kit", href: "#" }
    ],
    support: [
      { label: "FAQ", href: "#" },
      { label: "Shipping", href: "#" },
      { label: "Returns", href: "#" },
      { label: "Track Order", href: "#" },
      { label: "Gift Cards", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 text-gray-700">
      {/* Newsletter Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl text-gray-800 mb-2">
                📬 Join Our Reading Community
              </h3>
              <p className="text-gray-600">
                Get expert tips, new book releases, and exclusive offers delivered to your inbox weekly.
              </p>
            </div>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-gray-300 text-gray-800 placeholder:text-gray-500 rounded-full flex-1 px-5"
              />
              <Button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white px-6 rounded-full shadow-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-md transform -rotate-6">
                <BookOpen className="w-6 h-6 text-white transform rotate-6" />
              </div>
              <span className="text-2xl text-gray-800">TinyTales</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Fighting virtual autism, one story at a time. Building brighter futures through reading. 📚
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 bg-amber-100 hover:bg-amber-200 text-amber-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-gray-800 mb-4">Shop</h4>
            <ul className="space-y-2">
              {links.shop.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <div className="text-sm text-gray-800">hello@tinytales.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Phone</div>
                <div className="text-sm text-gray-800">1-800-READ-NOW</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Address</div>
                <div className="text-sm text-gray-800">123 Story Lane, Reading City</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2023 TinyTales Bosstore — All Youtime Resgrighted
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-amber-600 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
