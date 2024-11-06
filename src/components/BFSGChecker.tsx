import React, { useState } from 'react';

export default function BFSGChecker() {
  const [answers, setAnswers] = useState({
    employees: '',
    revenue: '',
    hasServices: ''
  });
  
  const [result, setResult] = useState(null);
  
  const handleChange = (field: string, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    setResult(null);
  };

  const calculateResult = () => {
    const isLargeCompany = answers.employees === 'yes' || answers.revenue === 'yes';
    const hasOnlineServices = answers.hasServices === 'yes';
    
    if (!isLargeCompany && !hasOnlineServices) {
      return {
        type: 'success',
        title: 'Keine BFSG-Pflicht',
        message: 'Als Kleinstunternehmen ohne Online-Dienste bist du von der BFSG-Pflicht ausgenommen.',
        details: 'Grund: Unter 10 Mitarbeitende und Jahresumsatz/-bilanz unter 2 Millionen Euro.',
        action: 'Trotzdem empfehlen wir, Barrierefreiheit zu berücksichtigen - es verbessert das Nutzererlebnis für alle.'
      };
    } else if (isLargeCompany || hasOnlineServices) {
      return {
        type: 'warning',
        title: 'BFSG-Pflicht ab 2025',
        message: 'Du musst deine digitalen Angebote bis zum 28.06.2025 barrierefrei gestalten.',
        details: `Grund: ${isLargeCompany ? 'Dein Unternehmen überschreitet die Größenkriterien (≥10 Mitarbeiter oder ≥2 Mio. € Umsatz).' : 'Du bietest Online-Dienste an.'}`,
        action: 'Beginne jetzt mit der Planung der notwendigen Anpassungen.'
      };
    }
    
    return {
      type: 'warning',
      title: 'BFSG-Pflicht wahrscheinlich',
      message: 'Basierend auf deinen Angaben musst du wahrscheinlich handeln.',
      details: 'Eine genaue Prüfung deiner spezifischen Situation ist empfehlenswert.',
      action: 'Kontaktiere uns für eine detaillierte Analyse.'
    };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(answers).every(v => v)) {
      setResult(calculateResult());
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">BFSG Compliance Check</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium text-gray-700 mb-3">
              Hat dein Unternehmen 10 oder mehr Mitarbeiter?
            </p>
            <div className="space-x-4">
              {['yes', 'no'].map((value) => (
                <label key={value} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="employees"
                    value={value}
                    checked={answers.employees === value}
                    onChange={(e) => handleChange('employees', e.target.value)}
                    className="form-radio h-4 w-4 text-teal-600"
                  />
                  <span className="ml-2 text-gray-700">
                    {value === 'yes' ? 'Ja' : 'Nein'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium text-gray-700 mb-3">
              Liegt dein Jahresumsatz oder deine Jahresbilanzsumme bei 2 Millionen Euro oder mehr?
            </p>
            <div className="space-x-4">
              {['yes', 'no'].map((value) => (
                <label key={value} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="revenue"
                    value={value}
                    checked={answers.revenue === value}
                    onChange={(e) => handleChange('revenue', e.target.value)}
                    className="form-radio h-4 w-4 text-teal-600"
                  />
                  <span className="ml-2 text-gray-700">
                    {value === 'yes' ? 'Ja' : 'Nein'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium text-gray-700 mb-3">
              Bietest du Online-Dienste oder E-Commerce für Endkunden (B2C) an?
            </p>
            <div className="space-x-4">
              {['yes', 'no'].map((value) => (
                <label key={value} className="inline-flex items-center">
                  <input
                    type="radio"
                    name="hasServices"
                    value={value}
                    checked={answers.hasServices === value}
                    onChange={(e) => handleChange('hasServices', e.target.value)}
                    className="form-radio h-4 w-4 text-teal-600"
                  />
                  <span className="ml-2 text-gray-700">
                    {value === 'yes' ? 'Ja' : 'Nein'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors font-medium"
        >
          Prüfung durchführen
        </button>
      </form>

      {result && (
        <div className={`mt-8 p-6 rounded-lg ${
          result.type === 'success' ? 'bg-green-50 border border-green-200' :
          'bg-yellow-50 border border-yellow-200'
        }`}>
          <h3 className="text-xl font-bold mb-2">{result.title}</h3>
          <p className="text-gray-700 mb-2">{result.message}</p>
          <p className="text-gray-600 mb-4">{result.details}</p>
          <p className="font-medium text-gray-800">{result.action}</p>
          
          <div className="mt-6">
            <a
              href="https://mediaonearth.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 transition-colors"
            >
              Jetzt Beratung anfragen
            </a>
          </div>
        </div>
      )}
    </div>
  );
}