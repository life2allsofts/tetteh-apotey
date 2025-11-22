export default function BuildJourney() {
  const milestones = [
    {
      date: "Nov 2024",
      title: "The Realization",
      description: "GitHub profile was a static snapshot, but I'd become a dynamic builder. Needed a portfolio that grows with me.",
      decision: "Build a full-stack Next.js + Firebase portfolio"
    },
    {
      date: "Nov 2024", 
      title: "Professional Foundation",
      description: "Created dedicated professional identity: tettehapotey@gmail.com and clean Firebase project",
      decision: "Separate professional accounts from personal"
    },
    {
      date: "Nov 2024",
      title: "Technical Architecture",
      description: "Chose Next.js for SEO + Firebase for real-time data. Prioritized bot accessibility over SPA convenience.",
      decision: "Next.js SSR + Firestore + Vercel deployment"
    },
    // We'll add more as we build!
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Build Journey</h1>
      <p className="text-xl mb-12">How this portfolio came to life - decisions, challenges, and solutions</p>
      
      <div className="space-y-8">
        {milestones.map((milestone, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6">
            <div className="text-sm text-gray-500">{milestone.date}</div>
            <h2 className="text-2xl font-semibold mt-2">{milestone.title}</h2>
            <p className="text-gray-700 mt-2">{milestone.description}</p>
            <div className="mt-2 p-3 bg-blue-50 rounded">
              <strong>Decision:</strong> {milestone.decision}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}