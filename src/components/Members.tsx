import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import GlitchText from './GlitchText';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

const Members: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);
  const orgName = 'etsi-ai';

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const reposResponse = await fetch(`https://api.github.com/orgs/${orgName}/repos?per_page=100`);
        const repos = await reposResponse.json();

        const allContributors: Contributor[] = [];

        // Loop through all repositories and fetch their contributors
        for (const repo of repos) {
          const contributorsResponse = await fetch(`https://api.github.com/repos/${orgName}/${repo.name}/contributors`);
          const repoContributors = await contributorsResponse.json();
          
          repoContributors.forEach((contributor: any) => {
            // Add contributor if they are not already in the list
            if (!allContributors.some((c) => c.id === contributor.id)) {
              allContributors.push({
                login: contributor.login,
                id: contributor.id,
                avatar_url: contributor.avatar_url,
                html_url: contributor.html_url,
                contributions: contributor.contributions,
              });
            }
          });
        }

        setContributors(allContributors);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributors();
  }, [orgName]);

  return (
    <section id="members" className=" mt-[-1px] relative py-24" style={{ background: '#151823' }}>
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{height: '5rem', transform: 'translateY(-100%)'}}>
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 96L1440 0V96H0Z" fill="#151823" />
          <path d="M0 96L1440 0" stroke="#9b87f5" strokeOpacity="0.5" strokeWidth="1" />
        </svg>
      </div>

      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[200px] rounded-full bg-cyber-purple/30 blur-[100px] opacity-100"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] rounded-full bg-cyber-teal/20 blur-[100px] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-cyber font-bold mb-4 text-white">
            <span className="text-cyber-purple">&lt;</span> <GlitchText text="Contributors" /> <span className="text-cyber-purple">/&gt;</span>
          </h2>
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 justify-center place-items-center">
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
                      {/* <h3 className="text-lg font-cyber font-medium text-white group-hover:text-cyber-purple transition-colors">
                        {contributor.login}
                      </h3> */}
                      <div className="flex items-center justify-center text-sm text-gray-400 mt-1">
                        <Github size={14} className="mr-1 text-cyber-purple/70" />
                        {/* <span>{contributor.contributions} contributions</span> */}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        )}

        <div className="mt-24 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-cyber font-bold mb-8 text-white">
            <GlitchText text="BUILD" className="inline-block mr-4" />
            <GlitchText text="WITHOUT" className="inline-block mr-4" />
            <GlitchText text="LIMITS" className="inline-block" />
          </h2>

          <div className="mt-12">
            <a
              href="https://github.com/etsi-ai"
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
