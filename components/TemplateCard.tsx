import { Card, Text, Badge, Button, Group, Stack } from '@mantine/core'

interface TemplateCardProps {
  title: string
  description: string
  badge?: string
  downloadHref?: string
  children?: React.ReactNode
}

export function TemplateCard({ title, description, badge, downloadHref, children }: TemplateCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder my="md">
      <Stack gap="sm">
        <Group justify="space-between">
          <Text fw={600} size="lg">{title}</Text>
          {badge && <Badge color="blue" variant="light">{badge}</Badge>}
        </Group>
        <Text size="sm" c="dimmed">{description}</Text>
        {children}
        {downloadHref && (
          <Button
            component="a"
            href={downloadHref}
            download
            variant="light"
            color="blue"
            mt="sm"
          >
            Download Template
          </Button>
        )}
      </Stack>
    </Card>
  )
}
