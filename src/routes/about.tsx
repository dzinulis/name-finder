import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: () => <div>
    <p>Atlasi vārdu no latviešu vārda dienu kalendāra.</p>
    <p>Autors Raitis Sondors</p>
    <p>GitHub: <a href="https://github.com/dzinulis">https://github.com/dzinulis</a> </p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/raitis-sondors/">https://www.linkedin.com/in/raitis-sondors/</a> </p>

  </div>
})