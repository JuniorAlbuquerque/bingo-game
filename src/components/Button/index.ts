import { styled } from '@/styles/stitches.config'

export const Button = styled('button', {
  padding: '$4 $6',
  borderRadius: '$2',
  cursor: 'pointer',
  background: '$yellow500',
  border: 'none',
  color: '$gray1',
  fontWeight: 600,
  fontSize: '$4',
  transition: 'all 0.3s ease',

  '&:hover': {
    filter: 'brightness(80%)'
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $purple2'
  }
})
