import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold text-gray-900">
            <span className="mr-2">🔥</span>
            RoastMyProfile
          </Link>
          <Link 
            href="/analyze" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Try It Free
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-semibold text-gray-900 mb-4">
          Your dating profile deserves brutal honesty
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          AI-powered profile analysis that actually tells you what's wrong. No sugar-coating, just real feedback to help you get more matches.
        </p>
        
        <div className="flex gap-4 justify-center mb-12 flex-wrap">
          <Link 
            href="/analyze" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Upload Your Profile
          </Link>
          <a 
            href="#examples" 
            className="px-6 py-3 bg-white text-gray-900 border border-gray-300 rounded-md font-medium hover:bg-gray-50 transition-colors"
          >
            See Examples
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-3xl mx-auto">
          <div className="bg-gray-50 rounded-md p-6 text-left font-mono text-sm text-gray-800">
            <strong>SAVAGE MODE ACTIVATED 🔥</strong><br/><br/>
            &quot;Brother, FOUR gym selfies? We get it, you discovered creatine.<br/>
            This is giving &apos;the gym is my personality&apos; energy. Negative 800 aura.<br/><br/>
            Your bio says &apos;love to travel&apos; - literally everyone does. That&apos;s not special.<br/>
            And &apos;6&apos;1 since that matters&apos;? That&apos;s not confidence, that&apos;s compensation.<br/><br/>
            You&apos;re cooked rn but it&apos;s fixable. Show us you&apos;re a person,<br/>
            not a protein shake in human form.&quot;
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">Why RoastMyProfile?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stop guessing what&apos;s wrong. Get specific, actionable feedback powered by AI that&apos;s actually trained on current dating culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Brutally Honest Analysis</h3>
            <p className="text-gray-600">
              No generic feedback. We analyze your actual photos, bio, and overall vibe with specific callouts on what&apos;s working and what&apos;s not.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Current Dating Culture</h3>
            <p className="text-gray-600">
              Our AI is trained on the latest dating trends, slang, and red flags. We know what actually matters in 2025.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5 Personality Modes</h3>
            <p className="text-gray-600">
              Choose your feedback style: Savage, Helpful, Gordon Ramsay, Gen Z, or Therapist. From brutal roasts to supportive coaching.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600">
              Upload your profile screenshots and get a complete analysis in seconds. No waiting, no signup required.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Works on Any App</h3>
            <p className="text-gray-600">
              Tinder, Hinge, Bumble, whatever you&apos;re using. If it&apos;s a dating profile, we can roast it.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 transition-colors">
            <div className="text-4xl mb-4">🎁</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Actually Helpful</h3>
            <p className="text-gray-600">
              Behind every roast is actionable advice. We tell you exactly what to fix and how to fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Personalities Section */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Choose Your Feedback Style</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Different vibes for different needs. Pick the personality that matches your mood.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="text-5xl mb-4">🔥</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Savage Mode</h4>
              <p className="text-sm text-gray-600">Maximum brainrot. Comedy Central Roast meets TikTok. Prepare to get cooked.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="text-5xl mb-4">💙</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Helpful Mode</h4>
              <p className="text-sm text-gray-600">Supportive dating coach who genuinely wants you to succeed. Constructive and kind.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Gordon Ramsay</h4>
              <p className="text-sm text-gray-600">&quot;YOUR PROFILE IS BLOODY RAW!&quot; Kitchen Nightmares energy for your dating life.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="text-5xl mb-4">💀</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Gen Z Mode</h4>
              <p className="text-sm text-gray-600">Chronically online brainrot. Aura points, NPC callouts, the whole package. No cap.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="text-5xl mb-4">🧘</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Therapist Mode</h4>
              <p className="text-sm text-gray-600">Gentle, insightful analysis. We explore what your profile says about you. Self-awareness included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-4">Ready to get roasted?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Upload your dating profile screenshots and find out what&apos;s really holding you back. It&apos;s free, instant, and actually helpful.
          </p>
          <Link 
            href="/analyze" 
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition-colors shadow-sm"
          >
            Analyze My Profile Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm mb-4">
            © 2025 RoastMyProfile. Made with 🔥 for better dating profiles.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">Contact</a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors">API</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
