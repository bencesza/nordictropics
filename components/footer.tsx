import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-muted/30 border-t border-border mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-7 w-7 text-primary" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold text-primary tracking-tight">
                  Nordic Tropics
                </span>
                <span className="text-[9px] text-muted-foreground tracking-wider uppercase">
                  From Africa to Nordic
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Premium tropical fruits from Kenya to Northern Europe. Quality, traceability, and sustainability in every delivery.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  For Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Denmark & Kenya Operations</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="/contact" className="hover:text-primary transition-colors">
                  Contact Form
                </a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Available via contact form</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Nordic Tropics ApS. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <span>Certifications:</span>
              <span className="font-medium text-primary">GlobalG.A.P.</span>
              <span>•</span>
              <span className="font-medium text-primary">HACCP</span>
              <span>•</span>
              <span className="font-medium text-primary">SMETA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
