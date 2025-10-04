import { Clock } from "lucide-react";
import blog1 from "@/assets/blog1.jpg";
import blog2 from "@/assets/blog2.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "Creating an object-oriented design strategy and guidelines",
      readTime: "5 min read",
      category: "Design",
      image: blog1,
      excerpt: "Exploring optimal design strategies and systematic approaches",
    },
    {
      title: "Emerging of different strategies and ergonomic approaches",
      readTime: "8 min read",
      category: "Strategy",
      image: blog2,
      excerpt: "How to leverage agile methodology for better results",
    },
    {
      title: "Breaking down information design and creating intuitive systems",
      readTime: "6 min read",
      category: "UX",
      image: blog1,
      excerpt: "Building systems that speak to both logic and creativity",
    },
  ];

  return (
    <section id="blog" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-sm text-muted-foreground mb-16 text-center">
          * Insights
        </h2>

        <h3 className="text-3xl md:text-4xl font-light text-center mb-16">
          Design Insights & Trends
        </h3>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[4/3] mb-4 bg-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="bg-foreground text-background px-2 py-1 rounded">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-sm font-medium mb-2 group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h3>
              
              <p className="text-xs text-muted-foreground">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
