import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, LineChart, BarChart, PieChart } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface DetailedAnalysis {
  insights: string[];
}

interface ProjectImage {
  url: string;
  title: string;
  description: string;
  poster?: string;
  analysis?: DetailedAnalysis;
}

interface ProjectContent {
  title: string;
  description: string;
  images: ProjectImage[];
  skills: Skill[];
}

function AnalysisSection({ analysis }: { analysis: DetailedAnalysis }) {
  return (
    <div className="mt-8 space-y-8 bg-neutral-50 rounded-xl p-6">
      {/* Main Dashboard Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Example frames that will be replaced with real iframes */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="h-[300px] bg-white rounded-lg mb-4 flex items-center justify-center border border-neutral-100 overflow-hidden">
            <iframe 
              src="https://mbarry01.github.io/Visualisation/" 
              width="100%" 
              height="100%" 
              title="Graphique des ventes"
              style={{ border: 'none' }}
            />
          </div>
          <h4 className="font-medium mb-2">Évolution des Ventes</h4>
          <p className="text-sm text-neutral-600">Analyse des tendances de vente sur 12 mois avec prévisions</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="h-[300px] bg-white rounded-lg mb-4 flex items-center justify-center border border-neutral-100">
            <div className="text-center p-4">
              <BarChart className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <p className="text-neutral-600">Performance régionale</p>
            </div>
          </div>
          <h4 className="font-medium mb-2">Performance par Région</h4>
          <p className="text-sm text-neutral-600">Comparaison des performances de vente par région</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="h-[300px] bg-white rounded-lg mb-4 flex items-center justify-center border border-neutral-100">
            <div className="text-center p-4">
              <PieChart className="w-8 h-8 text-neutral-400 mx-auto mb-2" />
              <p className="text-neutral-600">Répartition revenus</p>
            </div>
          </div>
          <h4 className="font-medium mb-2">Répartition des Revenus</h4>
          <p className="text-sm text-neutral-600">Distribution des revenus par catégorie de produits</p>
        </div>
      </div>

      {/* KPIs Section */}
      <div className="bg-white rounded-lg p-6">
        <h4 className="text-lg font-medium mb-4">Insights Clés</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {analysis.insights.map((insight, index) => (
            <div key={index} className="bg-neutral-50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {index % 3 === 0 && <LineChart className="w-5 h-5 text-blue-500" />}
                  {index % 3 === 1 && <BarChart className="w-5 h-5 text-green-500" />}
                  {index % 3 === 2 && <PieChart className="w-5 h-5 text-purple-500" />}
                </div>
                <p className="text-sm text-neutral-600">{insight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillBar({ name, level }: Skill) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="mb-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-neutral-800 font-medium sketch-text">{name}</span>
        <span className={`text-sm transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {level}%
        </span>
      </div>
      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-neutral-800 rounded-full transition-all duration-700 ease-out"
          style={{ 
            width: `${isHovered ? level : level - 10}%`,
            transform: `translateX(${isHovered ? '0' : '-5px'})`,
          }}
        />
      </div>
    </div>
  );
}

function ProjectImage({ image, index }: { image: ProjectImage; index: number }) {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const analysisRef = useRef<HTMLDivElement>(null);

  const defaultAnalysis: DetailedAnalysis = {
    insights: [
      "Augmentation de 25% des ventes par rapport à l'année précédente",
      "Pic d'activité observé pendant les périodes promotionnelles",
      "Forte corrélation entre les campagnes marketing et les ventes",
      "Les régions du Sud montrent la plus forte croissance"
    ]
  };

  const handleAnalysisClick = () => {
    setShowAnalysis(!showAnalysis);
    if (!showAnalysis && analysisRef.current) {
      setTimeout(() => {
        analysisRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  return (
    <div>
      <div className={`flex flex-col ${
        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      } gap-8 items-center`}>
        <div className="w-full md:w-7/12">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img 
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <h2 className="text-2xl font-light text-neutral-800 mb-4">
            {image.title}
          </h2>
          <p className="text-neutral-600 mb-4">
            {image.description}
          </p>
          <button
            onClick={handleAnalysisClick}
            className="inline-flex items-center gap-2 text-neutral-800 hover:text-neutral-600"
          >
            <span>Voir l'analyse détaillée</span>
            <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${showAnalysis ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      {showAnalysis && (
        <div ref={analysisRef}>
          <AnalysisSection analysis={image.analysis || defaultAnalysis} />
        </div>
      )}
    </div>
  );
}

function ProjectPage() {
  const { id } = useParams();

  const projectContent: Record<string, ProjectContent> = {
    'data-analysis': {
      title: 'Analyse & Visualisation de Données',
      description: 'Explorez mes analyses et visualisations de données',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
          title: 'Tableaux de Bord Interactifs',
          description: 'Création de dashboards interactifs pour visualiser les KPIs d\'une entreprise e-commerce.',
          analysis: {
            insights: [
              "Augmentation de 25% des ventes par rapport à l'année précédente",
              "Pic d'activité observé pendant les périodes promotionnelles",
              "Forte corrélation entre les campagnes marketing et les ventes",
              "Les régions du Sud montrent la plus forte croissance"
            ]
          }
        },
        {
          url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
          title: 'Analyse Prédictive',
          description: 'Modèles de prédiction pour anticiper les tendances de vente et optimiser les stocks.',
          analysis: {
            insights: [
              "Précision du modèle prédictif : 92%",
              "Réduction des stocks excédentaires de 30%",
              "Amélioration de la rotation des stocks de 15%",
              "Optimisation des coûts de stockage"
            ]
          }
        },
        {
          url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
          title: 'Visualisation de Données',
          description: 'Création de visualisations de données complexes pour faciliter la prise de décision.',
          analysis: {
            insights: [
              "Identification de 3 segments clients majeurs",
              "Analyse des comportements d'achat par segment",
              "Optimisation des campagnes marketing ciblées",
              "ROI marketing amélioré de 40%"
            ]
          }
        }
      ],
      skills: [
        { name: 'Data Analysis', level: 95 },
        { name: 'Data Visualization', level: 90 },
        { name: 'Python/Pandas', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'Statistical Analysis', level: 80 }
      ]
    }
  };

  const content = id ? projectContent[id] : null;

  if (!content) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-800">
            <ArrowLeft className="w-5 h-5" />
            <span>Retour</span>
          </Link>
        </div>
      </nav>

      {/* Project Content */}
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <header className="mb-16">
            <h1 className="text-4xl font-light text-neutral-800 mb-4">
              {content.title}
            </h1>
            <p className="text-neutral-600 text-lg">
              {content.description}
            </p>
          </header>

          {/* Project Images/Videos and Descriptions */}
          <div className="space-y-24">
            {content.images.map((image, index) => (
              <ProjectImage 
                key={index}
                image={image}
                index={index}
              />
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-24">
            <h2 className="text-2xl font-light text-neutral-800 mb-8">Compétences Clés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              {content.skills.map((skill, index) => (
                <SkillBar key={index} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectPage;