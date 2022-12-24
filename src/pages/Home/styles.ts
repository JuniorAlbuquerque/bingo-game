import { css } from '@/styles/stitches.config'

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
    width: 340,

    h1: {
      fontFamily: '$pacifico'
    }
  }),

  lastNumberSorted: css({
    marginTop: '$4',
    background: '$gray1',
    padding: '$4',
    borderRadius: '$3',
    fontSize: '$4',

    span: {
      marginLeft: 8,
      border: '1px solid $purple9',
      background: '$purple9',
      fontWeight: 600,
      color: '$purple12',

      padding: '$1 $2',
      borderRadius: '$2'
    }
  }),

  footer: css({
    marginTop: 'auto',
    marginBottom: '$6',

    code: {
      background: '$gray5',
      padding: '$2',
      borderRadius: '$2',
      margin: '0 4px'
    }
  })
}
