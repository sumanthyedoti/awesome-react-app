import { stagger, useAnimate } from 'framer-motion'

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const SPARKELS_COUNT = 20

const ButtonSparks = () => {
  const [scope, animate] = useAnimate()
  /* Put scope as ref to the parent of all the elements that are getting animated */
  const onButtonClick = () => {
    const sparklesAnimation = Array.from({ length: SPARKELS_COUNT }).map(
      (_, i) => [
        `.sparkle-${i}`,
        {
          x: randomNumberBetween(-100, 100),
          y: randomNumberBetween(-100, 100),
          scale: randomNumberBetween(1.5, 2.5),
          opacity: 1,
        },
        {
          duration: 0.3,
          at: '<',
        },
      ]
    )
    const sparklesFadeOut = Array.from({ length: 20 }).map((_, i) => [
      `.sparkle-${i}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.15,
        at: '<',
      },
    ])
    const sparklesReset = Array.from({ length: 20 }).map((_, i) => [
      `.sparkle-${i}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.00001,
      },
    ])
    animate([
      /* at: `<` -> start at the same time as previous */
      /* at: -/+number -> time in seconds before/after, -0.2, 0.5 */
      ...sparklesReset,
      ['.letter', { y: -48 }, { duration: 0.2, delay: stagger(0.04) }],
      ['button', { scale: 0.95 }, { duration: 0.2, at: '<' }],
      ['button', { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      ['.letter', { y: 0 }, { duration: 0.00001 }],
      ...sparklesFadeOut,
    ])
  }
  return (
    <div
      ref={scope}
      className='flex h-screen items-center justify-center bg-gray-500 pb-48'
    >
      <button
        onClick={onButtonClick}
        className='relative rounded-full border-4 border-purple-500 bg-purple-500 px-10 py-3
        text-3xl text-white transition-colors duration-100 hover:border-purple-500 hover:bg-purple-600'
      >
        <span className='sr-only'>Emotion</span>
        <span aria-hidden className='relative z-10 block overflow-hidden'>
          {['E', 'm', 'o', 't', 'i', 'o', 'n'].map((c, i) => {
            return (
              <span
                data-letter={c}
                className='letter relative inline-block after:absolute after:left-0 after:top-12 after:content-[attr(data-letter)]'
                key={`${c}-${i}`}
              >
                {c}
              </span>
            )
          })}
        </span>
        <span aria-hidden className='pointer-events-none absolute inset-0 z-10'>
          {Array.from({ length: SPARKELS_COUNT }).map((_, i) => {
            return (
              <svg
                className={`sparkle-${i} absolute left-1/2 top-1/2 opacity-1`}
                index={i}
                viewBox='0 0 122 117'
                width='10'
                height='10'
              >
                <path
                  className='fill-pink-500'
                  d='M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z'
                />
              </svg>
            )
          })}
        </span>
      </button>
    </div>
  )
}

export default ButtonSparks
