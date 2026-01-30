import { useState } from 'react'
import {
  Card,
  TextInput,
  Textarea,
  Select,
  Button,
  Stack,
  Text,
  Group,
  Badge,
  Loader,
  Alert,
  Accordion,
} from '@mantine/core'

const SUBJECT_OPTIONS = [
  { value: 'science', label: 'Science' },
  { value: 'math', label: 'Mathematics' },
  { value: 'ela', label: 'English Language Arts' },
  { value: 'social-studies', label: 'Social Studies' },
  { value: 'art', label: 'Art & Design' },
  { value: 'health', label: 'Health & PE' },
  { value: 'technology', label: 'Technology' },
  { value: 'world-languages', label: 'World Languages' },
]

const GRADE_OPTIONS = [
  { value: 'k-2', label: 'K-2' },
  { value: '3-5', label: '3-5' },
  { value: '6-8', label: '6-8' },
  { value: '9-10', label: '9-10' },
  { value: '11-12', label: '11-12' },
]

interface GeneratedQuestion {
  template: string
  question: string
  context: string
  audience: string
}

// Generates driving questions client-side using template logic.
// Replace with API call when backend is available.
function generateQuestions(
  standard: string,
  subject: string,
  gradeLevel: string
): GeneratedQuestion[] {
  const subjectLabel =
    SUBJECT_OPTIONS.find((s) => s.value === subject)?.label || subject
  const gradeLabel =
    GRADE_OPTIONS.find((g) => g.value === gradeLevel)?.label || gradeLevel

  const contexts: Record<string, string[]> = {
    science: [
      'local watershed',
      'school campus ecosystem',
      'community air quality',
      'regional wildlife habitat',
      'school energy consumption',
    ],
    math: [
      'school store finances',
      'community survey data',
      'local business economics',
      'campus resource allocation',
      'neighborhood demographics',
    ],
    ela: [
      'local media coverage',
      'community storytelling traditions',
      'school publication',
      'public library programming',
      'community advocacy campaign',
    ],
    'social-studies': [
      'city council zoning proposal',
      'neighborhood historical preservation',
      'school policy debate',
      'community immigration stories',
      'local election issues',
    ],
    art: [
      'community mural project',
      'school gallery exhibition',
      'local arts festival',
      'public space redesign',
      'cultural heritage celebration',
    ],
    health: [
      'school wellness program',
      'community fitness access',
      'cafeteria nutrition data',
      'student mental health resources',
      'neighborhood walkability',
    ],
    technology: [
      'school digital access gap',
      'community tech literacy',
      'local business automation',
      'campus network infrastructure',
      'neighborhood connectivity',
    ],
    'world-languages': [
      'community translation needs',
      'local cultural exchange program',
      'multilingual signage project',
      'heritage language preservation',
      'international sister-school partnership',
    ],
  }

  const audiences: Record<string, string[]> = {
    science: [
      'city environmental board',
      'school administration',
      'community health department',
      'parks and recreation department',
      'state wildlife agency',
    ],
    math: [
      'school board finance committee',
      'local business owners',
      'city planning department',
      'school administration',
      'community development office',
    ],
    ela: [
      'local newspaper editorial board',
      'community library board',
      'school publication committee',
      'city arts council',
      'community advocacy organization',
    ],
    'social-studies': [
      'city council members',
      'historical society board',
      'student government',
      'community heritage committee',
      'local election commission',
    ],
    art: [
      'community arts council',
      'school board facilities committee',
      'local gallery owners',
      'city beautification committee',
      'cultural heritage organization',
    ],
    health: [
      'school wellness committee',
      'community health board',
      'cafeteria management',
      'school counseling department',
      'city parks department',
    ],
    technology: [
      'school technology committee',
      'community center board',
      'local chamber of commerce',
      'school IT department',
      'city digital equity office',
    ],
    'world-languages': [
      'community services department',
      'school exchange program coordinator',
      'city signage committee',
      'cultural center board',
      'international partnership office',
    ],
  }

  const subjectContexts = contexts[subject] || contexts['science']
  const subjectAudiences = audiences[subject] || audiences['science']

  const templates = [
    {
      template: 'Design Challenge',
      format: (ctx: string, aud: string) =>
        `How can we design a solution for ${ctx} that ${aud} can use to improve outcomes for our community?`,
    },
    {
      template: 'Investigation',
      format: (ctx: string, aud: string) =>
        `What is the impact of current practices on ${ctx}, and what should ${aud} do about it?`,
    },
    {
      template: 'Evaluation',
      format: (ctx: string, aud: string) =>
        `To what extent do current approaches to ${ctx} achieve their goals, and how could ${aud} improve them?`,
    },
    {
      template: 'Perspective Analysis',
      format: (ctx: string, aud: string) =>
        `How do different stakeholders view the challenges facing ${ctx}, and what does this reveal to ${aud} about competing priorities?`,
    },
    {
      template: 'Data-Driven Argument',
      format: (ctx: string, aud: string) =>
        `Based on ${subjectLabel.toLowerCase()} data about ${ctx}, what evidence-based recommendation can we make to ${aud}?`,
    },
  ]

  return templates.map((t, i) => ({
    template: t.template,
    question: t.format(subjectContexts[i], subjectAudiences[i]),
    context: subjectContexts[i],
    audience: subjectAudiences[i],
  }))
}

export function DrivingQuestionGenerator() {
  const [standard, setStandard] = useState('')
  const [subject, setSubject] = useState<string | null>(null)
  const [gradeLevel, setGradeLevel] = useState<string | null>(null)
  const [questions, setQuestions] = useState<GeneratedQuestion[]>([])
  const [loading, setLoading] = useState(false)
  const [hasGenerated, setHasGenerated] = useState(false)

  const canGenerate = standard.trim().length > 0 && subject && gradeLevel

  async function handleGenerate() {
    if (!canGenerate || !subject || !gradeLevel) return

    setLoading(true)
    // Simulate brief processing time
    await new Promise((resolve) => setTimeout(resolve, 800))

    const results = generateQuestions(standard, subject, gradeLevel)
    setQuestions(results)
    setHasGenerated(true)
    setLoading(false)
  }

  return (
    <Stack gap="lg">
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Stack gap="md">
          <Text fw={700} size="lg">
            Driving Question Generator
          </Text>
          <Text size="sm" c="dimmed">
            Enter your curriculum standard, select your subject and grade level,
            and generate five driving question options for your PBL mission.
          </Text>

          <Textarea
            label="Curriculum Standard"
            placeholder="Paste your curriculum standard here (e.g., NGSS MS-LS2-1: Analyze and interpret data to provide evidence for the effects of resource availability on organisms and populations...)"
            minRows={3}
            value={standard}
            onChange={(e) => setStandard(e.currentTarget.value)}
          />

          <Group grow>
            <Select
              label="Subject Area"
              placeholder="Select subject"
              data={SUBJECT_OPTIONS}
              value={subject}
              onChange={setSubject}
            />
            <Select
              label="Grade Level"
              placeholder="Select grade level"
              data={GRADE_OPTIONS}
              value={gradeLevel}
              onChange={setGradeLevel}
            />
          </Group>

          <Button
            onClick={handleGenerate}
            disabled={!canGenerate}
            loading={loading}
            size="md"
          >
            Generate Questions
          </Button>
        </Stack>
      </Card>

      {loading && (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Group justify="center" py="xl">
            <Loader size="md" />
            <Text>Generating driving questions...</Text>
          </Group>
        </Card>
      )}

      {hasGenerated && !loading && questions.length > 0 && (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Stack gap="md">
            <Text fw={700} size="lg">
              Generated Driving Questions
            </Text>
            <Text size="sm" c="dimmed">
              Review these options and select the one that best fits your
              curriculum goals. Edit as needed.
            </Text>

            <Accordion variant="separated">
              {questions.map((q, index) => (
                <Accordion.Item key={index} value={`question-${index}`}>
                  <Accordion.Control>
                    <Group>
                      <Badge
                        color={
                          ['blue', 'green', 'orange', 'violet', 'red'][index]
                        }
                      >
                        {q.template}
                      </Badge>
                      <Text size="sm" lineClamp={1}>
                        {q.question}
                      </Text>
                    </Group>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Stack gap="sm">
                      <Text fw={500}>Driving Question:</Text>
                      <Text fs="italic">"{q.question}"</Text>
                      <Group gap="lg">
                        <div>
                          <Text size="xs" c="dimmed">
                            Context
                          </Text>
                          <Text size="sm">{q.context}</Text>
                        </div>
                        <div>
                          <Text size="xs" c="dimmed">
                            Audience
                          </Text>
                          <Text size="sm">{q.audience}</Text>
                        </div>
                      </Group>
                    </Stack>
                  </Accordion.Panel>
                </Accordion.Item>
              ))}
            </Accordion>

            <Alert color="blue" title="Next Steps" my="sm">
              Choose the question that best aligns with your standard and
              context. Edit it to include specific local details. Then evaluate
              it against the self-assessment checklist in the Driving Questions
              section.
            </Alert>
          </Stack>
        </Card>
      )}
    </Stack>
  )
}
