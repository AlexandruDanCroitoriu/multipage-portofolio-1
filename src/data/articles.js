export const articles = [
  {
    id: 1,
    title: 'building-scalable-applications-vue3-cloud-functions',
    description: 'building-scalable-applications-vue3-cloud-functions',
    date: new Date('2024-09-05'),
    slug: 'building-scalable-applications-vue3-cloud-functions',
  },
  {
    id: 2,
    title: 'romanian-tech-scene-opportunities-challenges-2024',
    description: 'romanian-tech-scene-opportunities-challenges-2024',
    date: new Date('2024-07-14'),
    slug: 'romanian-tech-scene-opportunities-challenges-2024',
  },
  {
    id: 3,
    title: 'modern-frontend-architecture-monoliths-micro-frontends',
    description: 'modern-frontend-architecture-monoliths-micro-frontends',
    date: new Date('2024-03-10'),
    slug: 'modern-frontend-architecture-monoliths-micro-frontends',
  },
]

export function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}
