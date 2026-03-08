// app/build-journey/page.tsx
export default function BuildJourney() {
  const milestones = [
    {
      date: "Nov 2024, 7:00 AM",
      title: "The Realization",
      description: "My GitHub profile was a static snapshot, but I'd become a dynamic builder. Needed a portfolio that grows with me.",
      decision: "Build a full-stack Next.js + Firebase portfolio"
    },
    {
      date: "Nov 2024, 7:30 AM", 
      title: "Professional Foundation",
      description: "Created dedicated professional identity: tettehapotey@gmail.com and clean Firebase project",
      decision: "Separate professional accounts from personal"
    },
    {
      date: "Nov 2024, 8:00 AM",
      title: "Technical Architecture",
      description: "Chose Next.js for SEO + Firebase for real-time data. Prioritized bot accessibility over SPA convenience.",
      decision: "Next.js SSR + Firestore + Vercel deployment"
    },
    {
      date: "Nov 2024, 9:00 AM",
      title: "First Project Integration",
      description: "Connected ITA-COMPUTATIONS Flutter web app to Firestore. Realized the power of dynamic content.",
      decision: "Use both githubUrl and liveUrl for maximum impact"
    },
    {
      date: "Nov 2024, 10:00 AM",
      title: "Firebase Index Challenge",
      description: "Hit a database index requirement. Instead of frustration, saw it as a learning opportunity.",
      decision: "Create composite index + temporary workaround = keep building"
    },
    {
      date: "Nov 2024, 11:00 AM",
      title: "Portfolio Live & Functional",
      description: "From zero to dynamic portfolio in 4 hours. Every new project now automatically appears.",
      decision: "Document this journey to show process matters as much as product"
    },
    {
      date: "Feb 2026",
      title: "Malware Classifier Integration",
      description: "Added ML research project with XGBoost model achieving 98.03% accuracy. Refactored codebase into modular components for maintainability.",
      decision: "Create purple theme for ML projects + add 6 comprehensive screenshots"
    },
    {
      date: "Mar 2026",
      title: "Café Fausse - Full-Stack Showcase",
      description: "Integrated complete restaurant management system with React frontend, Flask API, PostgreSQL, and JWT admin dashboard. Added 12 screenshots showing full admin capabilities.",
      decision: "Amber theme for full-stack projects + demonstrate both public and admin interfaces"
    },
    {
      date: "Mar 2026",
      title: "Codebase Refactoring",
      description: "Split monolithic page into modular components: ProjectCard, ImageGallery, ImageModal, and section components. Created utility files for project type detection and image handling.",
      decision: "Maintainable architecture supporting 5 distinct project types with individual themes"
    },
    {
      date: "Mar 2026",
      title: "Current Status: 5 Projects Live",
      description: "Portfolio now showcases: ITA-COMPUTATIONS (Flutter web), Café Fausse (React/Flask/PostgreSQL), ITA-Gh-Surveyor GPS (Flutter mobile), Malware Classifier (XGBoost/Flask), and Where In The Law (Flutter legal tech).",
      decision: "Each project has unique theme, comprehensive screenshots, and appropriate action buttons"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Build Journey</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          From a 4-hour prototype to a comprehensive portfolio showcasing 5 production projects across geospatial engineering, machine learning, and full-stack development.
        </p>
        
        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-12">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-600">Projects</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-sm text-gray-600">Technologies</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-amber-600">12</div>
            <div className="text-sm text-gray-600">Screenshots (Café Fausse)</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-green-600">98%</div>
            <div className="text-sm text-gray-600">ML Accuracy</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <div className="text-2xl font-bold text-orange-600">10+</div>
            <div className="text-sm text-gray-600">Components</div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex mb-8">
              {/* Timeline line */}
              <div className="flex flex-col items-center mr-6">
                <div className={`w-4 h-4 rounded-full ${
                  milestone.title.includes('Malware') ? 'bg-purple-600' :
                  milestone.title.includes('Café') ? 'bg-amber-600' :
                  milestone.title.includes('Refactoring') ? 'bg-green-600' :
                  milestone.title.includes('Current') ? 'bg-blue-600' :
                  'bg-blue-600'
                }`}></div>
                {index !== milestones.length - 1 && <div className="w-0.5 h-full bg-blue-400 mt-2"></div>}
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="text-sm text-gray-600 font-medium">{milestone.date}</div>
                <h2 className="text-2xl font-semibold mt-1 text-gray-900">{milestone.title}</h2>
                <p className="text-gray-700 mt-3 leading-relaxed">{milestone.description}</p>
                <div className="mt-3 p-4 bg-blue-50 rounded-lg border border-blue-300">
                  <strong className="text-blue-800">Key Decision: </strong>
                  <span className="text-gray-800">{milestone.decision}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto border border-gray-200">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">The Evolution</h3>
          <p className="text-gray-700 text-lg">
            What started as a 4-hour prototype has grown into a sophisticated, modular portfolio 
            showcasing 5 production-ready projects across geospatial engineering, machine learning, 
            and full-stack development. Each project has its own identity while maintaining a cohesive 
            professional presentation.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Next.js</span>
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Firebase</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Modular Design</span>
          </div>
        </div>
      </div>
    </div>
  );
}