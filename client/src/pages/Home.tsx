import { Mail, Github, Linkedin, Instagram, ExternalLink, Award, Trophy, Users, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useState, useRef, useEffect } from 'react';

interface TeamMember {
  name: string;
  achievements: string[];
  social: {
    linkedin: string;
    instagram: string;
    github: string;
  };
  photoPlaceholder: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aman Kumar Happy',
    achievements: ['IDE Bootcamp (NIT Patna)', 'SIH Hackathon', 'Tech MIT'],
    social: {
      linkedin: 'https://www.linkedin.com/in/amankumarhappy/',
      instagram: 'https://www.instagram.com/amankumarhappy1/',
      github: 'https://github.com/amankumarhappy',
    },
    photoPlaceholder: 'aman-kumar-happy',
  },
  {
    name: 'Biru Kumar',
    achievements: ['IDE Bootcamp (NIT Patna)', 'SIH Hackathon', 'Tech MIT'],
    social: {
      linkedin: 'https://www.linkedin.com/in/birukumar/',
      instagram: 'https://www.instagram.com/birukumar.05/',
      github: 'https://github.com/birukumar2',
    },
    photoPlaceholder: 'biru-kumar',
  },
  {
    name: 'Amber Arya',
    achievements: ['IDE Bootcamp (NIT Patna)', 'Active Event Participant'],
    social: {
      linkedin: 'https://www.linkedin.com/in/amber-arya/',
      instagram: 'https://www.instagram.com/_.amberrr.arya__/',
      github: 'https://github.com/amber-arya',
    },
    photoPlaceholder: 'amber-arya',
  },
  {
    name: 'Ritesh Kumar Sah',
    achievements: ['SIH Hackathon', 'Active Event Participant'],
    social: {
      linkedin: 'https://www.linkedin.com/in/riteshsah4/',
      instagram: 'https://www.instagram.com/riteshsah.04/',
      github: 'https://github.com/riteshsah-04',
    },
    photoPlaceholder: 'ritesh-kumar-sah',
  },
];

// 3D Cube Component
const Cube3D = ({ delay = 0 }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => ({
        x: (prev.x + 0.5) % 360,
        y: (prev.y + 0.8) % 360,
        z: (prev.z + 0.3) % 360,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: '80px',
        height: '80px',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
        animation: `float 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: '80px',
            height: '80px',
            border: '2px solid rgba(0, 217, 255, 0.6)',
            background: `rgba(0, 217, 255, ${0.05 + i * 0.02})`,
            transform: `rotateY(${i * 60}deg) translateZ(40px)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            boxShadow: `inset 0 0 20px rgba(0, 217, 255, 0.3)`,
          }}
        >
          ◆
        </div>
      ))}
    </div>
  );
};

// 3D Floating Particle
const FloatingParticle3D = ({ delay = 0, color = '#00d9ff' }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        background: color,
        boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
        animation: `float-3d 6s ease-in-out infinite, pulse 2s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        pointerEvents: 'none',
      }}
    />
  );
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="flex items-center gap-3 text-2xl font-bold glow-cyan"
            style={{
              perspective: '1000px',
              transform: 'rotateX(5deg) rotateY(-5deg)',
              animation: 'float 3s ease-in-out infinite',
            }}
          >
            <img
              src="/images/logo-nexa-force.jpg"
              alt="NexaForce logo"
              className="h-10 w-auto rounded-sm"
              style={{ objectFit: 'contain' }}
            />
            <span>NEXAFORCE</span>
          </div>
          <div className="flex gap-6">
            <a 
              href="#team" 
              className="hover:text-primary transition-all hover:scale-110 hover:glow-cyan"
              style={{ transform: 'translateZ(20px)' }}
            >
              Team
            </a>
            <a 
              href="#achievements" 
              className="hover:text-primary transition-all hover:scale-110"
              style={{ transform: 'translateZ(20px)' }}
            >
              Achievements
            </a>
            <a 
              href="#contact" 
              className="hover:text-primary transition-all hover:scale-110"
              style={{ transform: 'translateZ(20px)' }}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full 3D Immersive */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D Background with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605083652/mYkEdUPsoKCGRjaKJV4gis/hero-background-jjf4NpRnjvNh8oPnnd7FEH.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateZ(-100px) scale(1.1) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="absolute inset-0 bg-background/40"></div>
        </div>

        {/* 3D Floating Cubes */}
        <div className="absolute top-20 left-10 z-10" style={{ transform: 'translateZ(50px)' }}>
          <Cube3D delay={0} />
        </div>
        <div className="absolute bottom-40 right-20 z-10" style={{ transform: 'translateZ(80px)' }}>
          <Cube3D delay={1} />
        </div>
        <div className="absolute top-1/3 right-1/4 z-10" style={{ transform: 'translateZ(60px)' }}>
          <Cube3D delay={0.5} />
        </div>

        {/* 3D Floating Particles */}
        <FloatingParticle3D delay={0} color="#00d9ff" />
        <FloatingParticle3D delay={0.5} color="#ff006e" />
        <FloatingParticle3D delay={1} color="#00d9ff" />
        <FloatingParticle3D delay={1.5} color="#ff006e" />

        {/* Main Content - 3D Transform */}
        <div 
          className="container mx-auto px-4 z-20 text-center"
          style={{
            transform: `translateZ(100px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
            transformStyle: 'preserve-3d',
            animation: 'fade-in-up 0.8s ease-out',
          }}
        >
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 glow-cyan" 
            style={{
              textShadow: '0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.4)',
              letterSpacing: '3px',
              animation: 'float 4s ease-in-out infinite, neon-flicker 0.15s infinite',
              transform: 'translateZ(50px)',
            }}
          >
            NEXAFORCE
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto" 
            style={{
              animation: 'slide-in-up 0.8s ease-out 0.2s both',
              transform: 'translateZ(40px)',
            }}
          >
            Innovative Tech Team | National Level Achievers | Building Tomorrow's Solutions
          </p>
          <div 
            className="flex gap-4 justify-center flex-wrap"
            style={{
              animation: 'fade-in-up 0.8s ease-out 0.4s both',
              transform: 'translateZ(30px)',
            }}
          >
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/80 text-primary-foreground border-glow hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-110 hover:translate-y-[-4px]"
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                transform: 'translateZ(20px)',
                boxShadow: '0 10px 30px rgba(0, 217, 255, 0.3)',
              }}
            >
              Meet Our Team
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-glow hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-110 hover:translate-y-[-4px]"
              onClick={() => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                transform: 'translateZ(20px)',
                boxShadow: '0 10px 30px rgba(0, 217, 255, 0.2)',
              }}
            >
              Our Achievements
            </Button>
          </div>
        </div>

        {/* 3D Background Elements */}
        <div 
          className="absolute inset-0 z-5"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(0, 217, 255, 0.1) 0%, transparent 50%)`,
            transform: 'translateZ(30px)',
            pointerEvents: 'none',
          }}
        />
      </section>

      {/* Team Section - 3D Cards with Depth */}
      <section id="team" className="py-20 relative" style={{ perspective: '1200px' }}>
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605083652/mYkEdUPsoKCGRjaKJV4gis/team-section-bg-MdHYJsei4jqcctyProkgnW.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            transform: 'translateZ(-50px)',
          }}
        ></div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3" 
              style={{
                textShadow: '0 0 20px rgba(0, 217, 255, 0.4)',
                transform: 'translateZ(50px)',
              }}
            >
              <Users 
                className="w-10 h-10 text-primary" 
                style={{
                  animation: 'float 3s ease-in-out infinite, rotate 8s linear infinite',
                }}
              />
              <span className="glow-cyan">OUR TEAM</span>
            </h2>
            <p className="text-lg text-muted-foreground" style={{ transform: 'translateZ(30px)' }}>
              Four innovators united by passion for technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group"
                style={{
                  perspective: '1000px',
                  transform: `translateZ(${20 + index * 10}px)`,
                }}
              >
                <Card 
                  className="bg-card border-glow p-6 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 animate-fade-in-up overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    perspective: '1000px',
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * 15}deg) rotateY(${x * 15}deg) scale(1.08) translateZ(30px)`;
                    e.currentTarget.style.boxShadow = `0 30px 60px rgba(0, 217, 255, 0.4), 0 0 40px rgba(0, 217, 255, 0.3)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
                    e.currentTarget.style.boxShadow = '0 0 0 rgba(0, 217, 255, 0)';
                  }}
                >
                  {/* Circular Image Placeholder with 3D Effect */}
                  <div className="mb-6 flex justify-center" style={{ transform: 'translateZ(20px)' }}>
                    <div 
                      className="w-32 h-32 rounded-full border-4 border-primary flex items-center justify-center overflow-hidden relative group/circle"
                      style={{
                        boxShadow: '0 0 30px rgba(0, 217, 255, 0.4), inset 0 0 20px rgba(0, 217, 255, 0.1)',
                        background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.1) 0%, rgba(255, 0, 110, 0.1) 100%)',
                        transform: 'translateZ(15px)',
                        animation: 'rotate 20s linear infinite',
                      }}
                    >
                      <img 
                        src={`/team-photos/${member.photoPlaceholder}.png`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        style={{
                          transform: 'translateZ(10px)',
                        }}
                      />
                    </div>
                  </div>

                  <div className="text-center mb-4" style={{ transform: 'translateZ(15px)' }}>
                    <h3 className="text-xl font-bold text-primary mb-3">{member.name}</h3>
                  </div>

                  <div className="mb-4" style={{ transform: 'translateZ(10px)' }}>
                    <p className="text-xs text-muted-foreground mb-2 font-semibold">ACHIEVEMENTS:</p>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div 
                    className="flex gap-3 justify-center pt-4 border-t border-border"
                    style={{ transform: 'translateZ(8px)' }}
                  >
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-primary hover:scale-125 transition-all hover:glow-cyan"
                      title="LinkedIn"
                      style={{ transform: 'translateZ(5px)' }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-primary hover:scale-125 transition-all hover:glow-cyan"
                      title="GitHub"
                      style={{ transform: 'translateZ(5px)' }}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-primary hover:scale-125 transition-all hover:glow-cyan"
                      title="Instagram"
                      style={{ transform: 'translateZ(5px)' }}
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - 3D Cards */}
      <section id="achievements" className="py-20 relative" style={{ perspective: '1200px' }}>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3" 
              style={{
                textShadow: '0 0 20px rgba(255, 0, 110, 0.4)',
                transform: 'translateZ(50px)',
              }}
            >
              <Trophy 
                className="w-10 h-10 text-secondary" 
                style={{
                  animation: 'float 3s ease-in-out infinite, rotate 8s linear infinite',
                }}
              />
              <span className="glow-magenta">ACHIEVEMENTS</span>
            </h2>
            <p className="text-lg text-muted-foreground" style={{ transform: 'translateZ(30px)' }}>
              Recognized excellence across multiple platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IDE Bootcamp */}
            <div style={{ perspective: '1000px', transform: 'translateZ(30px)' }}>
              <Card 
                className="bg-card border-glow p-8 text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ 
                  animationDelay: '0s',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * 12}deg) rotateY(${x * 12}deg) scale(1.05) translateZ(25px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
                }}
              >
                <div className="mb-6 h-48 rounded-lg border-2 border-primary/30 flex items-center justify-center overflow-hidden relative" style={{
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(0, 217, 255, 0.1) 100%)',
                  transform: 'translateZ(15px)',
                }}>
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'url(/achievement-photos/ide-bootcamp.jpeg)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </div>

                <div className="mb-4 flex justify-center" style={{ transform: 'translateZ(12px)' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center border-glow">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2" style={{ transform: 'translateZ(10px)' }}>IDE BOOTCAMP</h3>
                <p className="text-muted-foreground mb-4" style={{ transform: 'translateZ(8px)' }}>National Level Winner</p>
                <p className="text-sm text-foreground/70" style={{ transform: 'translateZ(6px)' }}>
                  Emerged as winners at the prestigious IDE Bootcamp hosted at NIT Patna, competing against teams from across the nation.
                </p>
              </Card>
            </div>

            {/* Tech MIT */}
            <div style={{ perspective: '1000px', transform: 'translateZ(40px)' }}>
              <Card 
                className="bg-card border-glow-magenta p-8 text-center hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ 
                  animationDelay: '0.1s',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * 12}deg) rotateY(${x * 12}deg) scale(1.05) translateZ(25px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
                }}
              >
                <div className="mb-6 h-48 rounded-lg border-2 border-secondary/30 flex items-center justify-center overflow-hidden relative" style={{
                  boxShadow: '0 0 20px rgba(255, 0, 110, 0.2)',
                  background: 'linear-gradient(135deg, rgba(255, 0, 110, 0.05) 0%, rgba(255, 0, 110, 0.1) 100%)',
                  transform: 'translateZ(15px)',
                }}>
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'url(/achievement-photos/tech-mit.jpeg)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </div>

                <div className="mb-4 flex justify-center" style={{ transform: 'translateZ(12px)' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary/30 to-secondary/10 rounded-lg flex items-center justify-center border-glow-magenta">
                    <Trophy className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-2" style={{ transform: 'translateZ(10px)' }}>TECH MIT</h3>
                <p className="text-muted-foreground mb-4" style={{ transform: 'translateZ(8px)' }}>State Level Recognition</p>
                <ul className="text-sm text-foreground/70 space-y-2" style={{ transform: 'translateZ(6px)' }}>
                  <li>🥇 <strong>1st Place</strong> in Thrust Category</li>
                  <li>🥈 <strong>6th Rank</strong> in Startup Idea Pitching</li>
                </ul>
              </Card>
            </div>

            {/* SIH Hackathon */}
            <div style={{ perspective: '1000px', transform: 'translateZ(30px)' }}>
              <Card 
                className="bg-card border-glow p-8 text-center hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up overflow-hidden"
                style={{ 
                  animationDelay: '0.2s',
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateX(${y * 12}deg) rotateY(${x * 12}deg) scale(1.05) translateZ(25px)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1) translateZ(0)';
                }}
              >
                <div className="mb-6 h-48 rounded-lg border-2 border-primary/30 flex items-center justify-center overflow-hidden relative" style={{
                  boxShadow: '0 0 20px rgba(0, 217, 255, 0.2)',
                  background: 'linear-gradient(135deg, rgba(0, 217, 255, 0.05) 0%, rgba(0, 217, 255, 0.1) 100%)',
                  transform: 'translateZ(15px)',
                }}>
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: 'url(/achievement-photos/sih-hackathon.jpeg)',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </div>

                <div className="mb-4 flex justify-center" style={{ transform: 'translateZ(12px)' }}>
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center border-glow">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2" style={{ transform: 'translateZ(10px)' }}>SIH HACKATHON</h3>
                <p className="text-muted-foreground mb-4" style={{ transform: 'translateZ(8px)' }}>Internal Level Selection</p>
                <p className="text-sm text-foreground/70" style={{ transform: 'translateZ(6px)' }}>
                  Successfully selected for the internal level competition at our college, showcasing innovative problem-solving skills.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - 3D */}
      <section id="contact" className="py-20 relative" style={{ perspective: '1200px' }}>
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663605083652/mYkEdUPsoKCGRjaKJV4gis/footer-accent-McUYptG2MkBefQVnckAAsv.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
            transform: 'translateZ(-50px)',
          }}
        ></div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4 glow-cyan" 
              style={{
                textShadow: '0 0 20px rgba(0, 217, 255, 0.4)',
                transform: 'translateZ(50px)',
              }}
            >
              GET IN TOUCH
            </h2>
            <p className="text-lg text-muted-foreground" style={{ transform: 'translateZ(30px)' }}>
              Connect with us on social media or send us an email
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Follow Us Section */}
            <div 
              className="text-center animate-fade-in-up"
              style={{
                perspective: '1000px',
                transform: 'translateZ(40px)',
              }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">FOLLOW US</h3>
              <p className="text-muted-foreground mb-6">Check out our profiles on social media platforms</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a 
                  href="https://www.linkedin.com/company/nexaforce/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border-glow hover:bg-primary/10 rounded-lg transition-all hover:scale-125 hover:shadow-lg hover:shadow-primary/50"
                  title="LinkedIn"
                  style={{
                    transform: 'translateZ(15px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(15px) scale(1.2) rotateZ(10deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(15px)';
                  }}
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a 
                  href="https://www.instagram.com/nexaforce.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border-glow hover:bg-primary/10 rounded-lg transition-all hover:scale-125 hover:shadow-lg hover:shadow-primary/50"
                  title="Instagram"
                  style={{
                    transform: 'translateZ(15px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateZ(15px) scale(1.2) rotateZ(-10deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateZ(15px)';
                  }}
                >
                  <Instagram className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>

            {/* Contact Email Section */}
            <div 
              className="text-center animate-fade-in-up" 
              style={{ 
                animationDelay: '0.1s',
                perspective: '1000px',
                transform: 'translateZ(40px)',
              }}
            >
              <h3 className="text-xl font-bold text-secondary mb-4">CONTACT US</h3>
              <p className="text-muted-foreground mb-6">Interested in working together? Let's connect!</p>
              <a 
                href="mailto:nexaforce78@gmail.com"
                className="inline-block"
                style={{ transform: 'translateZ(15px)' }}
              >
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground border-glow-magenta hover:shadow-lg hover:shadow-secondary/50 transition-all hover:scale-110"
                  style={{
                    boxShadow: '0 10px 30px rgba(255, 0, 110, 0.3)',
                  }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  nexaforce78@gmail.com
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">© 2024 NexaForce. All rights reserved.</p>
          <p className="text-sm text-muted-foreground/70">
            Building innovative solutions | National Level Achievers
          </p>
        </div>
      </footer>
    </div>
  );
}
