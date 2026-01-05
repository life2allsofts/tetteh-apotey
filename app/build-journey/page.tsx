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
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Build Journey</h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          How this portfolio came to life in 4 hours - decisions, challenges, and solutions that transformed a concept into reality.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex mb-8">
              {/* Timeline line */}
              <div className="flex flex-col items-center mr-6">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
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
          <h3 className="text-2xl font-bold mb-4 text-gray-800">The Lesson</h3>
          <p className="text-gray-700 text-lg">
             The most &quot;difficult&quot; option is often the most straightforward when you have the right approach.  
            Complexity dissolves with clear step-by-step execution and resilient problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
}