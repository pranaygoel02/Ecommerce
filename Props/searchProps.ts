export interface SearchProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
