import { createLazyFileRoute } from '@tanstack/react-router'
import ComingSoon from '@/components/coming-soon'

export const Route = createLazyFileRoute('/_authenticated/central-de-ajuda/')({
  component: ComingSoon,
})
