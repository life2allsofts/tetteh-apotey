export default function HowIWorkSection() {
  return (
    <section className="container mx-auto px-6 py-16 bg-gray-50 rounded-2xl">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How I Work</h2>
        <p className="text-gray-600 mb-6">
          <span className="font-semibold">AI-Augmented + Human-Verified</span>
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-blue-600 mb-2">🔨 Build with AI</h3>
            <p className="text-gray-600 text-sm">LLM-assisted development, RAG workflows, prompt engineering, and CI/CD deployment.</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-green-600 mb-2">✅ Verify as Engineer</h3>
            <p className="text-gray-600 text-sm">Every line understood, tested, and validated. No black boxes. No blind trust.</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-6 italic">
          Built for teams that value fast iteration, practical AI adoption, and production-ready software.
        </p>
      </div>
    </section>
  );
}