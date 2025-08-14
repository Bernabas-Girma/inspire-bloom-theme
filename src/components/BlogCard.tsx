import { Clock, User, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
}

const BlogCard = ({ title, excerpt, author, readTime, image, category }: BlogCardProps) => {
  return (
    <Card className="group hover-lift shadow-soft border-0 card-gradient overflow-hidden h-full">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-gentle group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full accent-gradient text-primary-foreground">
            {category}
          </span>
        </div>
        
        <h3 className="font-playfair text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="p-2 hover:bg-primary/10 transition-smooth group-hover:translate-x-1"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;