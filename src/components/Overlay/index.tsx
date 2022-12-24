import { FC, ReactNode } from 'react'
import { OverlayWrapper } from './styles'

type OverlayProps = {
  children: ReactNode
}

const Overlay: FC<OverlayProps> = ({ children }) => {
  return <OverlayWrapper>{children}</OverlayWrapper>
}

export default Overlay
