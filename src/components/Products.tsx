
import React from 'react';
import { Search, FileText, Sparkles } from 'lucide-react';
import GlitchText from './GlitchText';

const ProductCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) => {
  return (
    <div className="cyber-card bg-cyber-black/40 backdrop-blur border-cyber-purple/20 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/20 group relative">
      <div className="absolute top-2 right-2">
        <div className="w-2 h-2 rounded-full bg-cyber-teal/70"></div>
      </div>
      <div className="flex flex-col items-center text-center p-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-cyber-purple/20 mb-4 group-hover:bg-cyber-purple/30 transition-colors duration-300">
          <Icon className="text-cyber-purple h-8 w-8" />
        </div>
        <h3 className="text-xl font-cyber font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Products: React.FC = () => {
  const products = [
    {
      icon: Search,
      title: "Fetcher",
      description: "Harvest the freshest AI papers."
    },
    {
      icon: FileText,
      title: "Summarizer",
      description: "Condense insights into punchy briefs."
    },
    {
      icon: Sparkles,
      title: "ContentGen",
      description: "Auto-draft your social posts."
    }
  ];

  return (
    <section id="products" className="relative py-24">
      {/* Improved section background */}
      <div className="absolute inset-0 bg-cyber-dark">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik0wIDBoMXY0MGgtMXoiIGZpbGw9IiM5Yjg3ZjUxMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTQwIDBoMXY0MGgtMXoiIGZpbGw9IiM5Yjg3ZjUxMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGg0MHYxaC00MHoiIGZpbGw9IiM5Yjg3ZjUxMCIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgNDBoNDB2MWgtNDB6IiBmaWxsPSIjOWI4N2Y1MTAiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-cyber font-bold mb-4 text-white">
            <span className="text-cyber-purple">&lt;</span> <GlitchText text="Our Products" /> <span className="text-cyber-purple">/&gt;</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Cutting-edge autonomous agents designed to enhance your productivity and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              icon={product.icon} 
              title={product.title} 
              description={product.description} 
            />
          ))}
        </div>
      </div>
      
      {/* Improved diagonal divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 96H0V0Z" fill="#151823" />
          <path d="M0 0L1440 96" stroke="#4fd1c5" strokeOpacity="0.5" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

export default Products;
