import { Card, Text, Badge, Group, Stack, List } from '@mantine/core'

interface ExampleCardProps {
  title: string
  subject: string
  gradeLevel: string
  essentialQuestion?: string
  /** @deprecated Use essentialQuestion instead */
  drivingQuestion?: string
  children?: React.ReactNode
}

export function ExampleCard({ title, subject, gradeLevel, essentialQuestion, drivingQuestion, children }: ExampleCardProps) {
  const question = essentialQuestion || drivingQuestion || ''
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder my="md">
      <Stack gap="sm">
        <Text fw={700} size="xl">{title}</Text>
        <Group gap="xs">
          <Badge color="blue" variant="light">{subject}</Badge>
          <Badge color="green" variant="light">{gradeLevel}</Badge>
        </Group>
        <Text size="sm" fw={500} c="dimmed">Essential Question</Text>
        <Text size="md" fs="italic">"{question}"</Text>
        {children}
      </Stack>
    </Card>
  )
}
