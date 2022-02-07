import { useState, useEffect } from 'react';

import { RepositoryItem, Repository } from './RepositoryItem';
import '../styles/repositories.scss';

const baseUrl = 'https://api.github.com';
const url = '/orgs/rocketseat/repos';

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}${url}`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repository) => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  );
}
