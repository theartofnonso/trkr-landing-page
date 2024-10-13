import { Container } from '@/app/components/Container'

const faqs = [
  [
    {
      question: 'Why should I log my weights, reps, and sets?',
      answer:
        'Logging your workouts helps track progress, identify trends, and ensure you’re using progressive overload to continuously improve your strength and endurance.',
    },
    {
      question: 'How do I track progress for specific muscle groups?',
      answer:
          'TRKR automatically categorizes your exercises by muscle group. You can review your training frequency and volume for each group over time, allowing you to focus on areas that need more attention.',
    },
  ],
  [
    {
      question: 'How do I know if I’m improving over time?',
      answer:
        'TRKR visualizes your progress with graphs and reports, showing how your strength, endurance, and muscle development have improved over time.',
    },
  ],
  [
    {
      question: 'How do I set goals for my workouts?',
      answer:
        'The app lets you set weight and rep targets for each exercise. It also tracks your personal records and offers recommendations based on your past performance.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="py-10"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-white"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            If you have anything else you want to ask,{' '}
            <a
              href="mailto:hello@trkr.fit"
              className="text-white-900 underline"
            >
              reach out to us
            </a>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-white">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-400">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
