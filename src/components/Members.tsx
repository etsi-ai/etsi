
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import GlitchText from './GlitchText';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// GitHub contributor interface
interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const StatCard = ({ 
  title, 
  value,
  icon
}: { 
  title: string, 
  value: string,
  icon?: string
}) => {
  return (
    <div className="cyber-card bg-cyber-dark/40 border-cyber-purple/20 relative overflow-hidden group hover:border-cyber-purple/40 transition-all duration-300">
      <div className="absolute top-2 left-2">
        <div className="w-2 h-2 rounded-full bg-cyber-purple/70"></div>
      </div>
      <div className="flex flex-col items-center text-center py-8">
        <h5 className="text-xs uppercase tracking-wider text-cyber-teal/70 mb-4">{title}</h5>
        <p className="text-4xl md:text-5xl font-cyber font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors duration-300">{value}</p>
        {icon && (
          <div className="mt-3 text-cyber-purple/60">
            <Icon icon={icon} width="24" height="24" />
          </div>
        )}
      </div>
    </div>
  );
};

const Members: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch contributors from GitHub API
    const fetchContributors = async () => {
      try {
        // For demo purposes, add some dummy data
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
    <section id="members" className="relative py-24" style={{ background: '#151823' }}>
      {/* Top divider - improved design */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{height: '5rem', transform: 'translateY(-100%)'}}>
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 96L1440 0V96H0Z" fill="#151823" />
          <path d="M0 96L1440 0" stroke="#9b87f5" strokeOpacity="0.5" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Purple glow effects */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] rounded-full bg-cyber-purple/20 blur-[100px] opacity-70"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] rounded-full bg-cyber-teal/20 blur-[100px] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-cyber font-bold mb-4 text-white">
            <span className="text-cyber-purple">&lt;</span> <GlitchText text="Community Stats" /> <span className="text-cyber-purple">/&gt;</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join our growing community of developers, researchers, and AI enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <StatCard 
            title="Monthly Active Users" 
            value="212K+" 
            icon="lucide:users"
          />
          <StatCard 
            title="Monthly Transactions" 
            value="900K+" 
            icon="lucide:activity"
          />
          <StatCard 
            title="Apps and Services" 
            value="250+" 
            icon="lucide:apps"
          />
        </div>
        
        <div className="mt-24">
          <h3 className="text-3xl font-cyber font-bold mb-8 text-center text-white">
            <GlitchText text="Top Contributors" />
          </h3>
          
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
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="h-16 w-16 mb-4 border-2 border-cyber-purple/30 group-hover:border-cyber-purple/70 transition-all">
                          <AvatarImage src={contributor.avatar_url} alt={contributor.login} />
                          <AvatarFallback className="bg-cyber-dark text-cyber-purple font-cyber">
                            {contributor.login.substring(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <h3 className="text-lg font-cyber font-medium text-white group-hover:text-cyber-purple transition-colors">
                          {contributor.login}
                        </h3>
                        <div className="flex items-center justify-center text-sm text-gray-400 mt-1">
                          <Github size={14} className="mr-1 text-cyber-purple/70" />
                          <span>{contributor.contributions} contributions</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          )}
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-cyber font-bold mb-8 text-white">
            <GlitchText text="BUILD" className="inline-block mr-4" />
            <GlitchText text="WITHOUT" className="inline-block mr-4" />
            <GlitchText text="LIMITS" className="inline-block" />
          </h2>
          
          <div className="mt-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button flex items-center mx-auto w-max"
            >
              <Github className="mr-2" size={20} />
              Join on GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom divider - improved design */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{height: '5rem'}}>
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L1440 96H0V0Z" fill="#0a0a0a" />
          <path d="M0 0L1440 96" stroke="#4fd1c5" strokeOpacity="0.5" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};

export default Members;
