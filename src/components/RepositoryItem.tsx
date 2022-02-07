export interface Repository {
  id: number;
  name: string;
  description?: string;
  html_url: string;
}

interface RepositoryItemProps {
  repository: Repository;
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository?.description ?? 'Sem descrição'}</p>

      <a href={repository.html_url}>Acessar repositório</a>
    </li>
  );
}
