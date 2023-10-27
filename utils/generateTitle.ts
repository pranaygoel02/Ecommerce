export default function generateTitle(title: string) {
  return title?.split('-').join(' ')
}