import { css, keyframes } from '@/styles/stitches.config'

const logoSpin = keyframes({
  from: { WebkitTransform: 'rotate(0deg)', transform: 'rotate(0deg)' },
  to: { WebkitTransform: 'rotate(360deg)', transform: 'rotate(360deg)' }
})

export const styles = {
  wrapper: css({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    width: '100%',
    height: '100%',

    main: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '$3',
      flex: 1,

      p: {
        marginTop: '$2'
      }
    }
  }),

  action: css({
    display: 'flex',
    flexDirection: 'column',
    gap: '$4',
    width: 340
  }),

  footer: css({
    marginTop: 'auto',
    marginBottom: '$4',

    code: {
      background: '$gray5',
      padding: '$2',
      borderRadius: '$2',
      margin: '0 4px'
    }
  })
}
