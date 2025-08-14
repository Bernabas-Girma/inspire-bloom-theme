import { Heart, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-playfair font-bold text-2xl">
                Inspire Blog
              </span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Empowering souls through meaningful stories, practical wisdom, 
              and authentic inspiration for life's beautiful journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Latest Posts', 'Categories', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-playfair font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Mindfulness', 'Success', 'Habits', 'Gratitude'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-background/80 hover:text-primary transition-smooth">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Inspire Blog. Made with love for dreamers and doers.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-background/60 hover:text-primary transition-smooth">
              Privacy Policy
            </a>
            <a href="#" className="text-background/60 hover:text-primary transition-smooth">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;