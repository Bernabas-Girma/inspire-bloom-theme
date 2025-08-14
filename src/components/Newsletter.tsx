import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Newsletter = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-inspiring card-gradient border-0">
          <CardContent className="p-8 sm:p-12 text-center">
            <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
            
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get Weekly <span className="text-primary">Inspiration</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of like-minded individuals who start their week with 
              motivational insights, practical wisdom, and stories that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 shadow-soft border-border/50"
              />
              <Button 
                size="lg"
                className="shadow-warm hover-glow px-8"
              >
                <Send className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              No spam, ever. Unsubscribe anytime with one click.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;