import AnalyzeClient from './AnalyzeClient';
import Link from 'next/link';

export default function AnalyzePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-gray-900">
            <span className="mr-2">🔥</span>
            RoastMyProfile
          </Link>
          <Link 
            href="/" 
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      <AnalyzeClient />
    </div>
  );
}
