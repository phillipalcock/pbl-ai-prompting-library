import { Card, Text, Badge, Group, Stack, List } from '@mantine/core'

interface ExampleCardProps {
  title: string
  subject: string
  gradeLevel: string
  drivingQuestion: string
  children?: React.ReactNode
}

export function ExampleCard({ title, subject, gradeLevel, drivingQuestion, children }: ExampleCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder my="md">
      <Stack gap="sm">
        <Text fw={700} size="xl">{title}</Text>
        <Group gap="xs">
          <Badge color="blue" variant="light">{subject}</Badge>
          <Badge color="green" variant="light">{gradeLevel}</Badge>
        </Group>
        <Text size="sm" fw={500} c="dimmed">Driving Question</Text>
        <Text size="md" fs="italic">"{drivingQuestion}"</Text>
        {children}
      </Stack>
    </Card>
  )
}
