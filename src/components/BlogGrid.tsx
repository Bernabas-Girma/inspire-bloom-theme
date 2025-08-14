import BlogCard from './BlogCard';
import { Button } from '@/components/ui/button';
import blog1 from '@/assets/blog-1.jpg';
import blog2 from '@/assets/blog-2.jpg';
import blog3 from '@/assets/blog-3.jpg';

const BlogGrid = () => {
  const blogPosts = [
    {
      title: "Finding Peace in the Chaos of Modern Life",
      excerpt: "In our fast-paced world, discovering moments of tranquility becomes essential for our mental well-being. Learn practical strategies to cultivate inner peace amidst life's constant demands.",
      author: "Sarah Chen",
      readTime: "5 min read",
      image: blog1,
      category: "Mindfulness"
    },
    {
      title: "The Power of Positive Thinking: Science-Backed Benefits",
      excerpt: "Explore the fascinating research behind optimism and how positive thinking can literally rewire your brain for happiness, success, and better relationships.",
      author: "Dr. Michael Ross",
      readTime: "7 min read",
      image: blog2,
      category: "Psychology"
    },
    {
      title: "Climbing Your Personal Mountains: A Guide to Goal Achievement",
      excerpt: "Every goal is a mountain waiting to be climbed. Discover the strategies that turn overwhelming ambitions into achievable milestones on your journey to success.",
      author: "Elena Rodriguez",
      readTime: "6 min read",
      image: blog3,
      category: "Success"
    },
    {
      title: "Daily Habits That Transform Your Life",
      excerpt: "Small, consistent actions compound into extraordinary results. Learn how to build sustainable habits that create lasting positive change in every area of your life.",
      author: "James Parker",
      readTime: "4 min read",
      image: blog1,
      category: "Habits"
    },
    {
      title: "The Art of Gratitude: Rewiring Your Brain for Joy",
      excerpt: "Gratitude isn't just a nice sentiment—it's a powerful practice that can reshape your entire worldview. Discover how to cultivate authentic appreciation for life's gifts.",
      author: "Maya Patel",
      readTime: "5 min read",
      image: blog2,
      category: "Gratitude"
    },
    {
      title: "Overcoming Fear: Your Guide to Courageous Living",
      excerpt: "Fear often stands between us and our dreams. Learn proven techniques to face your fears head-on and step into the life you've always imagined.",
      author: "Alex Thompson",
      readTime: "8 min read",
      image: blog3,
      category: "Courage"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-primary">Inspirations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into stories and insights that will spark your inner fire and guide you 
            toward a more fulfilling, purposeful life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              readTime={post.readTime}
              image={post.image}
              category={post.category}
            />
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="shadow-warm hover-glow px-8 py-3"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;