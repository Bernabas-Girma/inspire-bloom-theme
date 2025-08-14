import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import BlogGrid from '@/components/BlogGrid';
import QuoteSection from '@/components/QuoteSection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BlogGrid />
      <QuoteSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;