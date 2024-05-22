import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/nameToday')({
  component: () => <div>Hello /nameToday!</div>
})