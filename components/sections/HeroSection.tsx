'use client';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-6 py-16 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Isaac Tetteh-Apotey
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Geomatics Engineer (mGhIS) & Software Engineering Researcher | Published Ghana Grid Study (Zenodo) | AI-Augmented Methodology | Quantic MSSE
        </p>
        <p className="text-lg text-gray-500 max-w-3xl mx-auto">
          Building practical software solutions for geospatial challenges, survey automation, 
          and digital transformation in infrastructure development.
        </p>
        
        {/* Featured Research Publication Badge */}
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
                Peer-recognized research with 70% accuracy improvement in Greater Accra • Published on Zenodo
              </p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="text-blue-600 font-medium">View Publication →</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}