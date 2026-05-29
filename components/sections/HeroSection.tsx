'use client';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Isaac Tetteh-Apotey
        </h1>

        {/* Positioning */}
        <p className="text-xl text-gray-600 mb-3 max-w-2xl mx-auto">
          AI Engineer • Google Certified • 8 Production AI Apps Shipped
        </p>

        {/* Credibility */}
        <p className="text-md text-gray-500 mb-8 max-w-2xl mx-auto">
          Geomatics Engineer (mGhIS) | MSSE @ Quantic | Published Researcher (Zenodo)
        </p>

        {/* Core value proposition */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          I build production AI systems using 
          <span className="font-semibold text-blue-600"> AI-assisted development</span>.
          RAG systems, ML classifiers, computer vision, and geospatial applications.
          My work is publicly verifiable through deployed applications and published research.
          I understand every line I ship—and I move faster because I embrace modern tooling.
        </p>

        {/* Optional philosophy line */}
        <p className="text-sm text-gray-400 max-w-2xl mx-auto italic">
          Focused on solving real-world problems with AI, not performing outdated developer rituals.
        </p>

        {/* Featured Research */}
        <a
          href="https://doi.org/10.5281/zenodo.18133088"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-blue-50 to-white border border-blue-200 rounded-lg px-6 py-4 text-left hover:shadow-lg transition-shadow duration-300 hover:border-blue-300 mt-8"
        >
          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="flex-shrink-0 mb-3 md:mb-0">
              <div className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide">
                Featured Research
              </div>
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Bridging the Desktop-Mobile Divide: Regional Optimization of Ghana&apos;s National Grid
              </h3>

              <p className="text-sm text-gray-600 mt-1">
                Published research demonstrating a 70% accuracy improvement in Greater Accra • Available on Zenodo
              </p>
            </div>

            <div className="mt-2 md:mt-0">
              <span className="text-blue-600 font-medium">
                View Publication →
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}