import { useState } from 'react'
import {
  Card,
  Textarea,
  Select,
  Button,
  Stack,
  Text,
  Group,
  CopyButton,
  Alert,
} from '@mantine/core'

const STRATEGY_OPTIONS = [
  { value: 'exit-ticket', label: 'Exit Ticket' },
  { value: 'process-journal', label: 'Process Journal Prompt' },
  { value: 'skill-check', label: 'Skill Check' },
  { value: 'peer-feedback', label: 'Peer Feedback Protocol' },
  { value: 'self-reflection', label: 'Self-Reflection' },
  { value: 'collaboration-check', label: 'Collaboration Assessment' },
]

const GRADE_OPTIONS = [
  { value: 'k-2', label: 'K-2' },
  { value: '3-5', label: '3-5' },
  { value: '6-8', label: '6-8' },
  { value: '9-10', label: '9-10' },
  { value: '11-12', label: '11-12' },
]

function generatePrompt(
  standard: string,
  strategy: string,
  gradeLevel: string
): string {
  const gradeLabel = GRADE_OPTIONS.find((g) => g.value === gradeLevel)?.label
  const strategyLabel = STRATEGY_OPTIONS.find(
    (s) => s.value === strategy
  )?.label

  const prompts: Record<string, string> = {
    'exit-ticket': `You are an experienced ${gradeLabel} teacher. Based on this curriculum standard/learning goal:

"${standard}"

Generate 3 exit ticket questions that:
- Target the core concept of this standard
- Progress from recall → application → transfer
- Can be answered in 2-3 minutes each
- Use age-appropriate language for ${gradeLabel} students

For each question, note what student understanding it reveals and what a strong vs. struggling response looks like.`,

    'process-journal': `You are a ${gradeLabel} teacher designing a process journal prompt. Based on this curriculum standard/learning goal:

"${standard}"

Create a structured journal prompt that asks students to:
1. Describe what they worked on today related to this standard
2. Identify one specific decision they made and why
3. Name one struggle or confusion they encountered
4. Set a concrete next step for tomorrow

Include sentence starters appropriate for ${gradeLabel} students and a brief rubric for assessing journal quality.`,

    'skill-check': `You are a ${gradeLabel} teacher. Based on this curriculum standard/learning goal:

"${standard}"

Design a 5-minute skill check that:
- Isolates one specific skill from this standard
- Requires students to demonstrate (not just recall) the skill
- Includes clear success criteria students can self-assess against
- Works for quick teacher observation during class

Provide the task, success criteria checklist, and a quick recording sheet for the teacher.`,

    'peer-feedback': `You are a ${gradeLabel} teacher designing a peer feedback protocol. Based on this curriculum standard/learning goal:

"${standard}"

Create a structured peer feedback form that:
- Focuses on observable evidence related to this standard
- Uses "I noticed..." and "I wonder..." sentence frames
- Includes 3-4 specific criteria drawn from the standard
- Is appropriate for ${gradeLabel} students

Include the feedback form, instructions for students, and norms for giving/receiving feedback.`,

    'self-reflection': `You are a ${gradeLabel} teacher. Based on this curriculum standard/learning goal:

"${standard}"

Create a self-reflection protocol that asks students to:
- Rate their understanding on a specific scale (with descriptors)
- Provide evidence of their learning from today's work
- Identify what they would do differently
- Connect their learning to the bigger goal of this standard

Use language and reflection depth appropriate for ${gradeLabel} students. Include a completed example.`,

    'collaboration-check': `You are a ${gradeLabel} teacher assessing collaboration. Based on this curriculum standard/learning goal:

"${standard}"

Create a collaboration assessment tool that:
- Connects teamwork behaviors to progress on this standard
- Includes observable indicators for: role fulfillment, communication, shared workload, and conflict resolution
- Uses a simple rating scale appropriate for ${gradeLabel}
- Can be used by both teachers (observation) and students (self/peer)

Provide the rubric/checklist and a brief observation recording sheet.`,
  }

  return prompts[strategy] || ''
}

export function FormativePromptGenerator() {
  const [standard, setStandard] = useState('')
  const [strategy, setStrategy] = useState<string | null>(null)
  const [gradeLevel, setGradeLevel] = useState<string | null>(null)
  const [generatedPrompt, setGeneratedPrompt] = useState('')
  const [hasGenerated, setHasGenerated] = useState(false)

  const canGenerate = standard.trim().length > 0 && strategy && gradeLevel

  function handleGenerate() {
    if (!canGenerate || !strategy || !gradeLevel) return
    const prompt = generatePrompt(standard, strategy, gradeLevel)
    setGeneratedPrompt(prompt)
    setHasGenerated(true)
  }

  return (
    <Stack gap="lg">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="md">
          <Text fw={700} size="lg">
            Formative Assessment Prompt Generator
          </Text>
          <Text size="sm" c="dimmed">
            Enter your curriculum standard or learning goal, choose an
            assessment strategy and grade level, and get a ready-to-use AI
            prompt you can paste into ChatGPT, Claude, or any AI tool.
          </Text>
          <Textarea
            label="Curriculum Standard or Learning Goal"
            placeholder="e.g., CCSS.MATH.CONTENT.6.RP.A.1: Understand the concept of a ratio and use ratio language to describe a ratio relationship..."
            minRows={3}
            value={standard}
            onChange={(e) => setStandard(e.currentTarget.value)}
          />
          <Group grow>
            <Select
              label="Assessment Strategy"
              placeholder="Select strategy"
              data={STRATEGY_OPTIONS}
              value={strategy}
              onChange={setStrategy}
            />
            <Select
              label="Grade Level"
              placeholder="Select grade level"
              data={GRADE_OPTIONS}
              value={gradeLevel}
              onChange={setGradeLevel}
            />
          </Group>
          <Button onClick={handleGenerate} disabled={!canGenerate} size="md">
            Generate Prompt
          </Button>
        </Stack>
      </Card>

      {hasGenerated && generatedPrompt && (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Group justify="space-between">
              <Text fw={700} size="lg">
                Your AI Prompt
              </Text>
              <CopyButton value={generatedPrompt}>
                {({ copied, copy }) => (
                  <Button
                    variant={copied ? 'filled' : 'light'}
                    color={copied ? 'teal' : 'blue'}
                    onClick={copy}
                    size="sm"
                  >
                    {copied ? 'Copied!' : 'Copy to Clipboard'}
                  </Button>
                )}
              </CopyButton>
            </Group>
            <Card bg="gray.0" padding="md" radius="sm">
              <Text
                size="sm"
                style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}
              >
                {generatedPrompt}
              </Text>
            </Card>
            <Alert color="blue" title="How to Use">
              Copy this prompt and paste it into your preferred AI tool
              (ChatGPT, Claude, Gemini, etc.). Review and edit the AI's output
              to match your specific classroom context.
            </Alert>
          </Stack>
        </Card>
      )}
    </Stack>
  )
}
