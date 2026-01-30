import { Checkbox, Text, Stack } from '@mantine/core'

interface ChecklistItemProps {
  label: string
  description?: string
}

export function ChecklistItem({ label, description }: ChecklistItemProps) {
  return (
    <Stack gap={2} my="xs">
      <Checkbox label={label} />
      {description && <Text size="xs" c="dimmed" ml={30}>{description}</Text>}
    </Stack>
  )
}
