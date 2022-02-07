import { useState, useEffect } from 'react';

import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss';

const baseUrl = 'https://api.github.com';
const url = '/orgs/rocketseat/repos';

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}${url}`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((item) => (
          <RepositoryItem key={item.id} repository={item} />
        ))}
      </ul>
    </section>
  );
}
