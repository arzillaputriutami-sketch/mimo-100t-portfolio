import { getSubmission, submissions } from '../../../../data/submissions'
import ScenarioClient from '../../../../components/ScenarioClient'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return submissions.map(s => ({ project: s.project, scenario: s.scenario }))
}

export default function ScenarioPage({ params }: { params: { project: string; scenario: string } }) {
  const submission = getSubmission(params.project, params.scenario)
  if (!submission) return notFound()
  return <ScenarioClient submission={submission} />
}
