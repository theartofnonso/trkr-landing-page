'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/app/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Best way to visualise your progress.',
    body: 'Cleanest app, easy to use, love the graphs, so you can look back and see your improvements.',
    author: 'Archie Katama',
    rating: 5,
  },
  {
    title: 'Love this app!',
    body: 'Brilliant app, really easy to use and great for looking back to see what exercises were done previously and the weights used. Love the clock running in the corner so it\'s really easy to keep track of rests too! 10/10',
    author: 'PopsyYork',
    rating: 5,
  },
  {
    title: 'Great fitness companion.',
    body: 'Been using TRKR for weeks and I\'m impressed. It nails the balance between detailed analytics and a sleek looking Ul.\n' +
        'The streak monitor keeps me on track without feeling overwhelming. And I love the insights that help me tweak my workouts for better results.\n' +
        'Definitely a part of my gym setup now.',
    author: 'Nahar235',
    rating: 5,
  },
  {
    title: 'The best fitness app there is.',
    body: 'After trying a million different fitness apps, I downloaded TRKR and haven\'t looked back!\n' +
        'The functionality is amazing, such a straightforward yet dynamic app. Perfect for workout beginners and experts. I would not be as consistent in the gym over the last few months if it weren\'t for this app. LOVE LOVE LOVE.',
    author: 'BK2809',
    rating: 5,
  },
  {
    title: 'The gym buddy I needed when I got started',
    body: "After trying a million different fitness apps, I downloaded TRKR and haven\'t looked back! The functionality is amazing, such a straightforward yet dynamic app. Perfect for workout beginners and experts. I would not be as consistent in the gym over the last few months if it weren\'t for this app. LOVE LOVE LOVE",
    author: 'Pro SmartTECH',
    rating: 5,
  },
  {
    title: 'Love this app!',
    body: 'Brilliant app, really easy to use and great for looking back to see what exercises were done previously and the weights used. Love the clock running in the corner so it\'s really easy to keep track of rests too! 10/10',
    author: 'PopsyYork',
    rating: 5,
  },
  {
    title: 'Great fitness companion.',
    body: 'Been using TRKR for weeks and I\'m impressed. It nails the balance between detailed analytics and a sleek looking Ul.\n' +
        'The streak monitor keeps me on track without feeling overwhelming. And I love the insights that help me tweak my workouts for better results.\n' +
        'Definitely a part of my gym setup now.',
    author: 'Nahar235',
    rating: 5,
  },
  {
    title: 'The best fitness app there is.',
    body: 'After trying a million different fitness apps, I downloaded TRKR and haven\'t looked back!\n' +
        'The functionality is amazing, such a straightforward yet dynamic app. Perfect for workout beginners and experts. I would not be as consistent in the gym over the last few months if it weren\'t for this app. LOVE LOVE LOVE.',
    author: 'BK2809',
    rating: 5,
  },
  {
    title: 'Best way to visualise your progress.',
    body: 'Cleanest app, easy to use, love the graphs, so you can look back and see your improvements.',
    author: 'Archie Katama',
    rating: 5,
  },
  {
    title: 'Love this app!',
    body: 'Brilliant app, really easy to use and great for looking back to see what exercises were done previously and the weights used. Love the clock running in the corner so it\'s really easy to keep track of rests too! 10/10',
    author: 'PopsyYork',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-green-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in p-6 opacity-0',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-400 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pb-8 py-16"
    >
      <Container>
        <ReviewGrid />
      </Container>
    </section>
  )
}
