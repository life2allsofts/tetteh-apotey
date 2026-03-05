'use client';

export default function ToolsSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🚀 Professional Tools</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Interactive applications solving real-world problems in geospatial engineering and machine learning
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Ghana Coordinate Converter Tool */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🇬🇭</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Ghana Coordinate Converter</h3>
                  <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium">
                    Live Production
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              Web companion to mobile app. Convert between Ghana Grid and Geographic coordinates with survey-grade precision.
              <span className="block mt-2 text-sm text-blue-600 font-medium">
                This practical tool led to published research:{" "}
                <a 
                  href="https://doi.org/10.5281/zenodo.18133088" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-800"
                >
                  10.5281/zenodo.18133088
                </a>
              </span>
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                  Grid ↔ Geographic
                </span>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                  DMS Input
                </span>
                <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
                  Cadastral Accuracy
                </span>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <a 
                href="https://ita-ghana-coordinate-converter-web.vercel.app/"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
              >
                Use Tool
              </a>
              <div className="flex-1 border border-gray-300 text-gray-400 text-center py-3 px-4 rounded-lg font-medium bg-gray-100 cursor-not-allowed">
                Code in Dev
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Python Flask</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">JavaScript</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Geospatial</span>
            </div>
          </div>
        </div>

        {/* Malware Classifier Tool */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 overflow-hidden">
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🛡️</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Malware Classifier</h3>
                  <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full font-medium">
                    ML Research • Live
                  </span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              Machine learning system for classifying PE files as malware or goodware using static analysis. 
              XGBoost model achieves 98.03% accuracy with automated CI/CD pipeline deployed on Hugging Face.
            </p>
            
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">
                  98.03% Accuracy
                </span>
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">
                  99.59% AUC-ROC
                </span>
                <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full font-medium">
                  CI/CD Automated
                </span>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <a 
                href="https://tetteh-apotey-malware-classifier.hf.space/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-3 px-4 rounded-lg transition-colors duration-200 font-medium"
              >
                Live Demo
              </a>
              <a 
                href="https://github.com/life2allsofts/malware-classifier"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-3 px-4 rounded-lg transition-colors duration-200 font-medium hover:bg-gray-50"
              >
                View Code
              </a>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">XGBoost</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Python/Flask</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Docker</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">Hugging Face</span>
              <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">GitHub Actions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}