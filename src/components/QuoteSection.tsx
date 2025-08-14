import { Quote } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="py-20 quote-gradient">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <Quote className="h-16 w-16 text-primary mx-auto mb-8 opacity-80" />
        
        <blockquote className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-medium text-foreground leading-relaxed mb-8">
          "The journey of a thousand miles begins with a single step. 
          <span className="text-primary"> Every day is a new opportunity</span> 
          to become the person you're meant to be."
        </blockquote>
        
        <cite className="font-inter text-lg text-muted-foreground">
          — Ancient Wisdom, Modern Application
        </cite>
      </div>
    </section>
  );
};

export default QuoteSection;