
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import GlitchText from '../components/GlitchText';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Github } from 'lucide-react';

// GitHub contributor interface
interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const MembersPage = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "et-si | Members";
    
    // Fetch contributors from GitHub API
    const fetchContributors = async () => {
      try {
        // Replace with your actual repository owner and name
        const response = await fetch('https://api.github.com/repos/your-username/your-repo/contributors');
        
        if (!response.ok) {
          throw new Error('Failed to fetch contributors');
        }
        
        const data = await response.json();
        setContributors(data);
      } catch (err) {
        console.error('Error fetching contributors:', err);
        setError('Failed to load contributors. Please try again later.');
        
        // For demo purposes, add some dummy data if the fetch fails
        setContributors([
          {
            login: 'contributor1',
            id: 1,
            avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
            html_url: 'https://github.com/contributor1',
            contributions: 42
          },
          {
            login: 'contributor2',
            id: 2,
            avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
            html_url: 'https://github.com/contributor2',
            contributions: 38
          },
          {
            login: 'contributor3',
            id: 3,
            avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
            html_url: 'https://github.com/contributor3',
            contributions: 27
          },
          {
            login: 'contributor4',
            id: 4,
            avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
            html_url: 'https://github.com/contributor4',
            contributions: 19
          },
          {
            login: 'contributor5',
            id: 5,
            avatar_url: 'https://avatars.githubusercontent.com/u/5?v=4',
            html_url: 'https://github.com/contributor5',
            contributions: 15
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    
    fetchContributors();
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black overflow-hidden">
      {/* Particle background effect */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="pt-24 pb-32 relative">
        {/* Purple glow effect */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] rounded-full bg-cyber-purple/20 blur-[100px] opacity-70"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-cyber font-bold mb-6 text-white">
              <span className="text-cyber-purple">&lt;</span> <GlitchText text="Our Contributors" /> <span className="text-cyber-purple">/&gt;</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The brilliant minds behind et-si's development and growth.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-cyber-purple/30 h-12 w-12"></div>
                <div className="flex-1 space-y-4 py-1">
                  <div className="h-4 bg-cyber-purple/30 rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-cyber-purple/30 rounded"></div>
                    <div className="h-4 bg-cyber-purple/30 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="text-center text-cyber-purple p-8 border border-cyber-purple/30 rounded-md bg-cyber-dark/50">
              <p>{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {contributors.map((contributor) => (
                <a 
                  href={contributor.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={contributor.id}
                  className="block"
                >
                  <Card className="cyber-card bg-cyber-dark/40 border-cyber-purple/20 hover:border-cyber-purple/50 transition-all duration-300 overflow-hidden group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16 border-2 border-cyber-purple/30 group-hover:border-cyber-purple/70 transition-all">
                          <AvatarImage src={contributor.avatar_url} alt={contributor.login} />
                          <AvatarFallback className="bg-cyber-dark text-cyber-purple font-cyber">
                            {contributor.login.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-cyber font-medium text-white group-hover:text-cyber-purple transition-colors">
                            {contributor.login}
                          </h3>
                          <div className="flex items-center text-sm text-gray-400">
                            <Github size={14} className="mr-1 text-cyber-purple/70" />
                            <span>{contributor.contributions} contributions</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          )}
          
          <div className="mt-20">
            <Separator className="bg-cyber-purple/20" />
            <div className="text-center mt-12">
              <h2 className="text-3xl font-cyber font-bold mb-4 text-white">
                <GlitchText text="Join Our Contributors" />
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Interested in contributing to et-si? Check out our GitHub repository and join our Discord community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyber-button flex items-center"
                >
                  <Github className="mr-2" size={20} />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Custom diagonal divider */}
        <div className="absolute bottom-0 left-0 w-full h-24">
          <div className="w-full h-full bg-cyber-dark clip-diagonal-reverse"></div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MembersPage;
