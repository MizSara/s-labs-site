export default function HomePage() {
  return (
    <div className="bg-[#fdfaf6] min-h-screen text-[#1e1e1e] font-serif">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <h1 className="text-3xl font-bold tracking-tight">S. Labs</h1>
        <nav className="space-x-6 text-sm font-sans">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">The Edit</a>
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Field Notes</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Subscribe</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative text-center py-24 px-4 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')" }}>
        <div className="bg-black bg-opacity-30 backdrop-blur-sm py-16 px-6 rounded-md inline-block">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tests of Taste.<br />Notes of Beauty.</h2>
          <button className="mt-4 px-6 py-2 bg-white text-black text-sm font-semibold rounded-full shadow hover:bg-gray-100 transition">Explore the Edit</button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 py-12 text-center">
        <div>
          <h3 className="text-lg font-bold mb-1">Beauty Labs</h3>
          <p className="text-sm text-gray-600">Products & potions</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">Shop the Edit</h3>
          <p className="text-sm text-gray-600">Curated products</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">Field Notes</h3>
          <p className="text-sm text-gray-600">Observations & essays</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-1">Essays & Dispatches</h3>
          <p className="text-sm text-gray-600">Narratives & reflections</p>
        </div>
      </section>

      {/* Social Media Embeds */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-bold text-center mb-6">S. Labs on Social</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-w-1 aspect-h-1">
            <iframe className="w-full h-96" src="https://www.tiktok.com/embed/v2/7236727018034965803" title="TikTok" allowFullScreen></iframe>
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <iframe className="w-full h-96" src="https://assets.pinterest.com/ext/embed.html?id=99360735500167782" title="Pinterest" allowFullScreen></iframe>
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <iframe className="w-full h-96" src="https://www.instagram.com/p/Cs3dpXXJwJk/embed" title="Instagram" allowFullScreen></iframe>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="px-6 py-12 text-center bg-[#f8f4ef]">
        <h3 className="text-2xl font-bold mb-4">Join the Lab</h3>
        <p className="mb-6 text-gray-700">Get monthly picks & tested truths—straight to your inbox.</p>
        <div className="ml-embedded mx-auto max-w-lg border border-gray-300 rounded-lg shadow-sm p-6 bg-white" data-form="xgqv7k"></div>
        <script>
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '1540215');
        </script>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Contact</h3>
        <p className="text-gray-700">Have a question, collaboration idea, or just want to say hello?</p>
        <p className="mt-2 text-sm text-gray-600 italic">Contact details will be added soon.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 px-6 py-4 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} S. Labs. All rights reserved.
      </footer>
    </div>
  );
}
