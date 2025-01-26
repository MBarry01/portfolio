import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Linkedin, Github, ExternalLink, Bot, Code, Palette, Database, BarChart3, Video } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  image: string;
}

function Home() {
  const navigate = useNavigate();
  
  const projects: Project[] = [
    {
      id: "automation",
      title: "Automation & IA",
      description: "Présentation de mes travaux dans le domaine de l'automatisation des processus et de l'intelligence artificielle. De l'utilisation de plateformes comme Make (Integromat) pour automatiser des flux de travail complexes, jusqu'au développement de solutions basées sur l'IA.",
      category: "AUTOMATION & AI",
      icon: <Bot className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
    },
    {
      id: "web-dev",
      title: "Développement Web",
      description: "Conception et développement de sites web modernes et interactifs. Expertise en front-end (HTML, CSS, JavaScript, animations web) et en back-end (Node.js, bases de données MySQL).",
      category: "WEB DEVELOPMENT",
      icon: <Code className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80"
    },
    {
      id: "design",
      title: "Graphisme & Design",
      description: "Création de designs élégants et adaptés aux besoins numériques : branding, interfaces utilisateurs (UI), et illustrations. Intégration d'éléments visuels harmonieux dans des projets digitaux.",
      category: "DESIGN",
      icon: <Palette className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
    },
    {
      id: "info-systems",
      title: "Système d'information",
      description: "Projets combinant sciences humaines et technologies numériques. Analyse de données culturelles, création d'outils pour les chercheurs et exploration des enjeux éthiques des technologies numériques.",
      category: "INFORMATION SYSTEMS",
      icon: <Database className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      id: "data-analysis",
      title: "Analyse & Visualisation de Données",
      description: "Mise en œuvre de techniques avancées pour extraire, analyser et visualiser des données. Expertise en création de tableaux de bord interactifs et storytelling à partir de données complexes.",
      category: "DATA ANALYSIS",
      icon: <BarChart3 className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
    },
    {
      id: "video",
      title: "Réalisation Vidéo",
      description: "Création de contenus vidéo pour la communication digitale : montage, animations et storytelling visuel.",
      category: "VIDEO PRODUCTION",
      icon: <Video className="w-5 h-5" />,
      image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/7yGwTTZ/profil.png" 
            alt="Portfolio Hero"
            className="w-full h-full object-cover object-center opacity-70 blur-[0.5px]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/60 to-neutral-900/90" />
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-5 drop-shadow-lg">
              <span className="sketch-highlight">BARRY Mohamadou</span>
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-90 drop-shadow-md">
              Expert Digital basé à <span className="sketch-highlight">Paris</span>
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-8 py-12">
        <main className="max-w-6xl mx-auto">
          {/* Introduction Section */}
          <header className="mb-24 text-center">
            <p className="text-lg text-neutral-600 mb-6">
              spécialisé en <span className="sketch-text">automatisation</span> 🤖, <span className="sketch-text">développement web</span> 💻,<br />
              <span className="sketch-text">design graphique</span> 🎨, et <span className="sketch-text">analyse de données</span> 📊
            </p>

            <p className="text-lg text-neutral-600">
              découvrez mes projets ci-dessous, ou contactez-moi via{' '}
              <a href="mailto:your.email@example.com" className="sketch-text hover:text-neutral-800">email</a>
              {' '}ou{' '}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sketch-text hover:text-neutral-800">linkedin</a>
            </p>
          </header>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {projects.map((project) => (
              <div 
                key={project.id}
                onClick={() => navigate(`/project/${project.id}`)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {project.icon}
                    <p className="text-sm font-medium text-neutral-500">{project.category}</p>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-800 mb-3 flex items-center gap-2">
                    <span className="sketch-text">{project.title}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-neutral-600 text-sm line-clamp-3">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="text-center text-neutral-500 text-sm">
            <div className="flex justify-center gap-4 mb-4">
              <a href="mailto:your.email@example.com" className="hover:text-neutral-800">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-800">
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p>© 2024 BARRY Mohamadou · <span className="sketch-text">Expert Digital</span></p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default Home;