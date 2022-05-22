import { ReactNode } from 'react'

interface Props {
  spacing?: string
  alignItems?: 'flex-start' | 'center' | 'flex-end'
  justifyContent?: 'flex-start' | 'center' | 'flex-end'
  children?: ReactNode
}

function Stack({ spacing, alignItems = 'center', justifyContent = 'center', children }: Props) {
  return <div style={{ display: 'flex', justifyContent, alignItems, flexDirection: 'column', gap: `var(${spacing})` }}>{children}</div>
}

export default Stack
