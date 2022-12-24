import { css, styled } from '@/styles/stitches.config'

export const styles = {
  root: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    padding: 24,
    width: '100%',
    gap: 8,
    maxWidth: 640
  }),

  letter: css({
    background: '$purple12',
    color: '$purple1',
    fontWeight: 600,
    padding: '12px 2px',
    borderRadius: '$4',
    marginBottom: 10
  })
}

export const BingoNumber = styled('div', {
  background: '$purple4',
  color: '$purple12',
  border: '1px solid $purple3',
  padding: '12px 2px',
  marginBottom: 4,
  borderRadius: '$4',

  variants: {
    variant: {
      active: {
        background: '$purple8',
        color: '$purple12',
        fontWeight: 'bold'
      }
    }
  }
})
