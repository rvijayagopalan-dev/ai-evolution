import './globals.css'

export const metadata = {
  title: 'AI Evolution — The Journey to AI-Native Enterprise',
  description:
    'From the Transformer Era to AI Enterprise Operating Systems — the complete evolution of enterprise AI across 8 breakthrough eras.',
  openGraph: {
    title: 'AI Evolution — The Journey to AI-Native Enterprise',
    description:
      'Explore 8 breakthrough eras of AI evolution: Transformers → Generative AI → Agentic AI → Cognitive AI → AI Digital Workers → GEE → AI-EOS.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
