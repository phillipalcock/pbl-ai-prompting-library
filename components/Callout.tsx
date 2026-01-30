import { Alert } from '@mantine/core'

interface CalloutProps {
  type?: 'info' | 'warning' | 'success' | 'error'
  title?: string
  children: React.ReactNode
}

const colorMap = {
  info: 'blue',
  warning: 'yellow',
  success: 'green',
  error: 'red',
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  return (
    <Alert
      color={colorMap[type]}
      title={title}
      my="md"
      styles={{ root: { fontSize: 'inherit' } }}
    >
      {children}
    </Alert>
  )
}
