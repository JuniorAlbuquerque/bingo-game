import { styled } from '@/styles/stitches.config'

export const OverlayWrapper = styled('div', {
  position: 'fixed',
  zIndex: 999,
  top: 0,
  left: 0,
  background: 'rgba(28, 21, 30, 0.85)',
  width: '100vw',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  alignItems: 'center',
  justifyContent: 'center'
})
