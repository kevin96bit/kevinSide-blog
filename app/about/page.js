import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Chi sono | Kevin’s Blog',
  description: 'Scopri chi sono, il mio percorso e cosa mi spinge a creare e imparare ogni giorno.',
}

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* 📸 Foto profilo */}
        <div className="relative w-36 h-36 mx-auto mb-8 ">
          <Image
            src="/io-in-piedi.jpg"
            alt="Foto profilo di Kevin"
            fill
            className="object-cover object-top rounded-full border-4 border-blue-500 shadow-lg shadow-blue-500/30"
            sizes="144px"
            priority
          />
        </div>

        {/* 🧢 Titolo */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
          Chi sono
        </h1>

        {/* ✏️ Sottotitolo */}
        <p className="text-gray-400 mb-12 text-lg">
          Una breve storia su di me, il mio percorso e ciò che amo costruire.
        </p>

        {/* 💬 Contenuto */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-left">
          <p>
            Ciao! Mi chiamo <span className="text-blue-400 font-medium">Kevin</span> e sono una persona curiosa e appassionata di tecnologia.
            Ho sempre avuto il desiderio di capire come funzionano le cose e, nel tempo, ho scoperto che scrivere codice mi dà
            un senso di libertà e realizzazione.
          </p>

          <p>
            Mi piace lavorare su progetti che uniscono logica e creatività — dal creare siti web con{' '}
            <span className="text-blue-400">React</span> e{' '}
            <span className="text-blue-400">Next.js</span>, fino a sperimentare con strumenti come{' '}
            <span className="text-blue-400">Kali Linux</span> e la sicurezza informatica.
          </p>

          <p>
            Quando non sono al computer, probabilmente mi trovi ad ascoltare{' '}
            <span className="text-blue-400">Dubstep/Riddim</span> o{' '}
            <span className="text-blue-400">Metal</span>, ad allenarmi in palestra o a studiare qualcosa di nuovo che mi spinga
            fuori dalla mia comfort zone. Credo che la crescita personale arrivi un passo alla volta.
          </p>

          <p>
            Il mio obiettivo è continuare a migliorare come persona, perfezionare il mio inglese e provare a costruire progetti che
            abbiano un impatto reale — anche piccolo, ma autentico.
          </p>
        </div>

        {/* 🔹 Separatore */}
        <div className="my-12 border-t border-gray-700"></div>

        {/* 🚀 Focus attuale */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">
            Attualmente mi sto concentrando su:
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-left max-w-md mx-auto">
            <li>Migliorare la mia conoscenza dell’inglese e la comunicazione</li>
            <li>Approfondire la mie skills riguardanti lo scrivere un codice pulito e scoprire nuovi framework</li>
            <li>Diventare più autonomo e sicuro nella risoluzione dei problemi</li>
          </ul>
        </div>

        {/* 🔹 Separatore */}
        <div className="my-12 border-t border-gray-700"></div>

        {/* 🌟 Curiosità su di me */}
        <div className="text-left max-w-lg mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400 text-center">
            Curiosità su di me 💭
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Amo la colazione salata ☕ — Non mi stufa mai.</li>
            <li>Fin da piccolo (e ancora oggi) adoro i giochi competitivi e i Souls — anche se, lo ammetto, a volte mi fanno arrabbiare 😅.</li>
            <li>Credo che la costanza valga più del talento. Anche un piccolo passo al giorno ti porta lontano.</li>
          </ul>
        </div>

        {/* ✉️ Contatto + Home */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <a
            href="mailto:kevin96imerti@outlook.it"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md transition"
          >
            Contattami
          </a>

          <Link
            href="/"
            className="inline-block border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-medium px-6 py-3 rounded-md transition"
          >
            ← Torna alla Home
          </Link>
        </div>
      </div>
    </section>
  )
}
