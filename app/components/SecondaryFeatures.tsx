
import { Container } from '@/app/components/Container'

import {BookmarkIcon, ChartBarSquareIcon, RocketLaunchIcon, UserCircleIcon} from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Log workout sessions',
    description:
      'Keep track of every rep, set, and weights whilst training.',
    icon: Bookmark,
  },
  {
    name: 'Track other activities',
    description:
      'Bring other activities that align with your goals to see the bigger picture of your performance.',
    icon: RocketLaunch,
  },
  {
    name: 'Get personalised training',
    description:
      'Get personalized training tailored to your goals and fitness level. We meet you where you are.',
    icon: UserCircle,
  },
  {
    name: 'Understand your training',
    description:
      'Use data-driven insights to guide every workout and make smart decisions to optimise performance.',
    icon: ChartBarSquare,
  },
  {
    name: 'Share achievements',
    description:
      'Celebrate your wins, big or small! Share your achievements and inspire others.',
    icon: RocketLaunch,
  },
  {
    name: 'Community',
    description:
      'Connect with fellow fitness enthusiasts who share your passion and commitment for wellness.',
    icon: RocketLaunch,
  },
]

function Bookmark(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <BookmarkIcon {...props} />
    )
}


function RocketLaunch(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <RocketLaunchIcon {...props} />
    )
}

function ChartBarSquare(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <ChartBarSquareIcon {...props} />
    )
}

function UserCircle(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <UserCircleIcon {...props} />
    )
}


export function SecondaryFeatures() {
  return (
      <section
          id="secondary-features"
          aria-label="Features for building a portfolio"
          className="relative isolate py-16"
      >
          <div
              aria-hidden="true"
              className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
              <div
                  style={{
                      clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#2bf20c] to-[#038cec] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              />
          </div>
          <Container>
              <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className="text-3xl font-medium tracking-tight text-white">
                      What is inside TRKR
                  </h2>
                  <p className="mt-2 text-lg text-gray-400">
                      We understand that training is more than just lifting weights—it’s about
                      being intentional with every movement, ensuring each rep aligns with your goals.
                  </p>
              </div>
              <ul
                  role="list"
                  className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
              >
                  {features.map((feature) => (
                      <li
                          key={feature.name}
                          className="rounded-md p-8 bg-sapphireDark60"
                      >
                          <feature.icon className="h-6 w-6"/>
                          <h3 className="mt-6 font-semibold text-white">
                              {feature.name}
                          </h3>
                          <p className="mt-2 text-gray-400">{feature.description}</p>
                      </li>
                  ))}
              </ul>
          </Container>
      </section>
  )
}
