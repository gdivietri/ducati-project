// Rewriting the entire app to add robust content, images, and color

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <header className="bg-red-700 p-6 shadow-xl">
        <h1 className="text-3xl font-bold text-center">🏍️ Ducati Enthusiast Hub</h1>
        <p className="text-center text-sm mt-2">Your go-to spot for all things Ducati</p>
      </header>

      <section className="grid md:grid-cols-2 gap-6 p-6">
        <div className="bg-gray-900 rounded-2xl shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">🔥 Latest Models</h2>
          <Image
            src="https://cdn.pixabay.com/photo/2020/08/09/06/06/ducati-5474423_1280.jpg"
            alt="Ducati Panigale"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <p className="mt-2 text-sm text-gray-300">Check out the 2025 Ducati Panigale V4 R — now with 240 HP straight from MotoGP tech.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">🏁 Race Results</h2>
          <ul className="list-disc list-inside text-gray-300 text-sm">
            <li>WorldSBK - Aragon GP: P1 Alvaro Bautista</li>
            <li>MotoGP - Qatar GP: P2 Francesco Bagnaia</li>
            <li>Isle of Man TT: P1 Ducati V4 Streetfighter</li>
          </ul>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">🛠️ Maintenance Guide</h2>
          <p className="text-sm text-gray-300">Keep your Ducati running smooth with guides on oil changes, chain tension, tire pressure, and winter storage.</p>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-2">🛣️ Best Places to Ride</h2>
          <ul className="list-disc list-inside text-gray-300 text-sm">
            <li>Pacific Coast Highway, CA</li>
            <li>Dolomites, Italy</li>
            <li>Stelvio Pass, Switzerland</li>
            <li>Tail of the Dragon, TN</li>
          </ul>
        </div>
      </section>

      <footer className="text-center text-xs text-gray-500 p-4 border-t border-gray-800">
        Made with ❤️ for Ducati fans | © 2025 Ducati Hub
      </footer>
    </main>
  );
}
