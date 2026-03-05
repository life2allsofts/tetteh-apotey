'use client';

export default function ResearchSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">📚 Research & Publications</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Peer-recognized research bridging practical applications with academic rigor
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Bridging the Desktop-Mobile Divide: Regional Optimization of Ghana&apos;s National Grid
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-gray-600 mb-3">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                DOI: <code className="ml-1">10.5281/zenodo.18133088</code>
              </span>
              <span>Date: December 2025</span>
              <span>Publisher: Zenodo</span>
            </div>
            
            <a 
              href="https://doi.org/10.5281/zenodo.18133088"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6"
            >
              <img 
                src="https://zenodo.org/badge/DOI/10.5281/zenodo.18133088.svg" 
                alt="DOI Badge"
                className="h-6"
              />
            </a>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Abstract</h4>
            <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
              This empirical study documents a critical coastal-inland accuracy divide and a desktop-mobile 
              implementation discrepancy within Ghana&apos;s National Grid. By validating optimized parameters across 
              259 control points, the research achieved a 70% accuracy improvement in Greater Accra and provides 
              a framework for region-aware geospatial applications.
            </p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Contributions</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                Discovered and quantified systematic coordinate transformation discrepancies across platforms
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                Mapped geographic accuracy gradient from 1.3m RMS on coast to 61.7m RMS inland
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">•</span>
                Developed optimized parameter set with 26% average accuracy improvement
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies & Methodologies</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Geodetic Analysis</span>
              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Parameter Optimization</span>
              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Empirical Validation</span>
              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">LaTeX</span>
              <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">Python</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
            <a 
              href="https://doi.org/10.5281/zenodo.18133088"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
            >
              View Full Paper on Zenodo
            </a>
            <a 
              href="https://github.com/life2allsofts/ita_gh_surveyor_gps"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-3 px-4 rounded-lg transition-colors duration-200 font-medium hover:bg-gray-50"
            >
              View Related Application
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}