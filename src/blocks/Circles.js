export default function Circles(props) {
  return (
    <div className='inner'>
      <div className='content'>
        <div>
          <svg
            className='light--theme'
            viewBox='0 0 100 200'
            preserveAspectRatio='xMidYMid slice'
          >
            <defs>
              <radialGradient
                id='Gradient1'
                cx='50%'
                cy='50%'
                fx='10%'
                fy='50%'
                r='.5'
              >
                <animate
                  attributeName='fx'
                  dur='54s'
                  values='0%;3%;0%'
                  repeatCount='indefinite'
                />
                <stop offset='0%' stopColor='rgba(255, 86, 246, 0.25)' />
                <stop offset='20%' stopColor='rgba(255, 86, 246, 0)' />
              </radialGradient>
              <radialGradient
                id='Gradient2'
                cx='50%'
                cy='50%'
                fx='10%'
                fy='50%'
                r='.5'
              >
                <animate
                  attributeName='fx'
                  dur='33.5s'
                  values='0%;3%;0%'
                  repeatCount='indefinite'
                />
                <stop offset='0%' stopColor='rgba(23, 145, 231, 0.25)' />
                <stop offset='20%' stopColor='rgba(23, 145, 231, 0)' />
              </radialGradient>
              <radialGradient
                id='Gradient3'
                cx='50%'
                cy='50%'
                fx='50%'
                fy='50%'
                r='.5'
              >
                <animate
                  attributeName='fx'
                  dur='31.5s'
                  values='0%;3%;0%'
                  repeatCount='indefinite'
                />
                <stop offset='0%' stopColor='rgba(23, 145, 231, 0.2)' />
                <stop offset='40%' stopColor='rgba(23, 145, 231, 0)' />
              </radialGradient>
            </defs>
            <rect
              x='20'
              y='40'
              width='90%'
              height='100%'
              fill='url(#Gradient1)'
            >
              <animate
                attributeName='x'
                dur='50s'
                values='55%;0%;95%'
                repeatCount='indefinite'
              />
              <animate
                attributeName='y'
                dur='91s'
                values='0%;25%;0%'
                repeatCount='indefinite'
              />
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 50 50'
                to='360 50 50'
                dur='117s'
                repeatCount='indefinite'
              />
            </rect>
            <rect
              x='-10'
              y='80'
              width='50%'
              height='50%'
              fill='url(#Gradient2)'
            >
              <animate
                attributeName='x'
                dur='63s'
                values='10%;0%;25%'
                repeatCount='indefinite'
              />
              <animate
                attributeName='y'
                dur='84s'
                values='0%;20%;0%'
                repeatCount='indefinite'
              />
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='0 50 50'
                to='360 50 50'
                dur='28s'
                repeatCount='indefinite'
              />
            </rect>
            <rect
              x='-10'
              y='80'
              width='50%'
              height='50%'
              fill='url(#Gradient3)'
            >
              <animate
                attributeName='x'
                dur='55s'
                values='10%;0%;20%'
                repeatCount='indefinite'
              />
              <animate
                attributeName='y'
                dur='56s'
                values='10%;25%;10%'
                repeatCount='indefinite'
              />
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='50 40 50'
                to='50 20 -50'
                dur='99s'
                repeatCount='indefinite'
              />
            </rect>
            <rect
              x='80'
              y='-40'
              width='100%'
              height='100%'
              fill='url(#Gradient2)'
            >
              <animate
                attributeName='x'
                dur='33s'
                values='-25%;0%;-25%'
                repeatCount='indefinite'
              />
              <animate
                attributeName='y'
                dur='54s'
                values='0%;50%;0%'
                repeatCount='indefinite'
              />
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='-90 -10 10'
                to='10 10 10'
                dur='58s'
                repeatCount='indefinite'
              />
            </rect>
            <rect x='0' y='0' width='80%' height='80%' fill='url(#Gradient1)'>
              <animate
                attributeName='x'
                dur='63s'
                values='-25%;0%;-25%'
                repeatCount='indefinite'
              />
              <animate
                attributeName='y'
                dur='74s'
                values='0%;50%;0%'
                repeatCount='indefinite'
              />
              <animateTransform
                attributeName='transform'
                type='rotate'
                from='80 50 70'
                to='80 50 50'
                dur='128s'
                repeatCount='indefinite'
              />
            </rect>
          </svg>
        </div>
      </div>
    </div>
  )
}
