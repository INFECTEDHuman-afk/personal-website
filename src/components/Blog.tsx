
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable Web Applications with React and TypeScript",
      excerpt:
        "Learn how to structure React applications for scale using TypeScript's powerful type system, custom hooks, and performance optimization techniques.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=500&h=300",
      date: "May 15, 2023",
      readTime: "12 min read",
      category: "Web Development",
      link: "#",
    },
    {
      title: "Getting Started with Large Language Models in Production",
      excerpt:
        "A practical guide to implementing LLMs in your applications, including prompt engineering, fine-tuning, and optimizing for performance and cost.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=500&h=300",
      date: "July 28, 2023",
      readTime: "15 min read",
      category: "AI & Machine Learning",
      link: "#",
    },
    {
      title: "The Evolution of Frontend Development: Past, Present, and Future",
      excerpt:
        "Exploring how frontend development has changed over the years and what trends are shaping its future, from component libraries to AI-assisted coding.",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=500&h=300",
      date: "October 3, 2023",
      readTime: "10 min read",
      category: "Technology Trends",
      link: "#",
    },
    {
      title: "DevOps for AI: Building Robust Machine Learning Pipelines",
      excerpt:
        "Best practices for creating reliable, reproducible ML workflows that bridge the gap between development and operations in AI projects.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=500&h=300",
      date: "February 12, 2023",
      readTime: "18 min read",
      category: "DevOps & MLOps",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
          <p className="text-muted-foreground">
            Thoughts, insights, and tutorials on development and AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.title} className="overflow-hidden flex flex-col reveal">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                    {post.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold leading-tight hover:text-primary transition-colors">
                  <a href={post.link}>{post.title}</a>
                </h3>
              </CardHeader>
              <CardContent className="pb-4 flex-grow">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="pt-0 flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" asChild>
                  <a href={post.link}>Read More</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 reveal">
          <Button size="lg" variant="outline" asChild>
            <a href="#">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
