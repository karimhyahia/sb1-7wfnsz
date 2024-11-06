import React from 'react';

export default function BlogPost() {
  const scrollToChecker = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const checkerElement = document.getElementById('checker');
    if (checkerElement) {
      checkerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 prose prose-lg">
      <h1 className="text-4xl font-bold mb-6">BFSG 2025: Was du jetzt über Barrierefreiheit im Web wissen musst</h1>
      
      <div className="text-gray-600 mb-8">
        <p className="font-medium">Lesezeit: 5 Minuten</p>
        <p>Veröffentlicht am {new Date().toLocaleDateString('de-DE')}</p>
      </div>

      <div className="space-y-6">
        <p className="text-xl font-medium text-gray-800">
          Stell dir vor, du könntest deine Website nicht nutzen. Frustrierend, oder? Für viele Menschen ist das Realität. 
          Ab 2025 ändert sich das - dank des neuen Barrierefreiheitsstärkungsgesetzes (BFSG).
        </p>

        <h2>Das Wichtigste in Kürze:</h2>
        <ul>
          <li>Ab 28. Juni 2025 müssen viele Websites barrierefrei sein</li>
          <li>Betroffen sind B2C-Unternehmen mit Online-Diensten</li>
          <li>Ausgenommen sind Kleinstunternehmen (unter 10 Mitarbeiter UND unter 2 Mio. € Umsatz)</li>
          <li>Bei Nichteinhaltung drohen Strafen bis 100.000 €</li>
        </ul>

        <h2>Wen betrifft das neue Gesetz?</h2>
        <p>
          Du bist betroffen, wenn dein Unternehmen:
        </p>
        <ul>
          <li>10 oder mehr Mitarbeiter beschäftigt ODER</li>
          <li>Einen Jahresumsatz von 2 Millionen Euro oder mehr erzielt UND</li>
          <li>Produkte oder Dienstleistungen für Endverbraucher anbietet</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-3">Wichtig zu wissen:</h3>
          <p>
            Auch wenn du ein kleineres Unternehmen hast: Sobald du eines der Kriterien überschreitest 
            (z.B. 11 Mitarbeiter, aber nur 1,5 Mio. € Umsatz), musst du die Anforderungen erfüllen.
          </p>
        </div>

        <h2>Was bedeutet eigentlich "barrierefrei"?</h2>
        <p>
          Eine barrierefreie Website ermöglicht allen Menschen einen uneingeschränkten Zugang. 
          Das bedeutet konkret:
        </p>
        <ul>
          <li>Klare Navigation und Struktur</li>
          <li>Gute Kontraste und lesbare Schriften</li>
          <li>Alternativtexte für Bilder</li>
          <li>Bedienbarkeit per Tastatur</li>
          <li>Verständliche Sprache</li>
        </ul>

        <h2>Dein Zeitplan bis 2025</h2>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-4">
            <li>✓ Jetzt: Prüfe, ob du betroffen bist</li>
            <li>✓ 2024: Analysiere deine Website auf Barrierefreiheit</li>
            <li>✓ Bis Mitte 2024: Plane notwendige Anpassungen</li>
            <li>✓ Bis Ende 2024: Setze Änderungen um</li>
            <li>✓ Frühjahr 2025: Teste die Barrierefreiheit</li>
            <li>✓ 28. Juni 2025: Deadline für neue Inhalte</li>
          </ul>
        </div>

        <div className="bg-teal-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-3">Unser Tipp:</h3>
          <p>
            Warte nicht bis zur letzten Minute. Eine barrierefreie Website ist nicht nur gesetzliche 
            Pflicht, sondern auch eine Chance, mehr Menschen zu erreichen. Nutze unseren kostenlosen 
            BFSG-Checker, um zu prüfen, ob du betroffen bist.
          </p>
          <a 
            href="#checker" 
            onClick={scrollToChecker}
            className="inline-block mt-4 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
          >
            Zum BFSG-Checker
          </a>
        </div>

        <h2>Fazit</h2>
        <p>
          Barrierefreiheit im Web wird Pflicht - und das ist gut so. Denn eine barrierefreie Website 
          ist nicht nur gesetzeskonform, sondern auch benutzerfreundlicher für alle. Starte jetzt 
          mit der Planung, dann bist du bestens für 2025 vorbereitet.
        </p>

        <div className="mt-12 border-t pt-8">
          <p className="font-medium">Brauchst du Unterstützung bei der Umsetzung?</p>
          <a 
            href="https://mediaonearth.com" 
            className="text-teal-600 hover:text-teal-700 font-medium"
          >
            Kontaktiere uns für eine persönliche Beratung →
          </a>
        </div>
      </div>
    </article>
  );
}