import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(251, 146, 60, 0.7) 0%, rgba(249, 115, 22, 0.6) 50%, rgba(59, 130, 246, 0.5) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-white/90 mr-4" />
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Inspire Your
              <span className="block text-gradient bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
          </div>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
            Discover stories that ignite your passion, motivational insights that fuel your dreams, 
            and wisdom that transforms your perspective on life's beautiful journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              variant="secondary"
              className="shadow-inspiring hover-glow bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-semibold px-8 py-3"
            >
              Start Reading
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="shadow-inspiring hover-glow border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-3"
            >
              Join Community
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-white/70 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none" />
    </section>
  );
};

export default Hero;