const apiUrl = 'https://api.github.com/users/ogiansouza';
const username = 'ogiansouza';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    document.querySelector('.profile-avatar').src = data.avatar_url;
    document.querySelector('.profile-name').textContent = data.name;
    document.querySelector('.profile-username').textContent = `@${data.login}`;
    document.querySelector('#repositorio').textContent = `Repositórios: ${data.public_repos}`;
    document.querySelector('#seguidor').textContent = `Seguidores: ${data.followers}`;
    document.querySelector('#seguindo').textContent = `Seguindo: ${data.following}`;
  })
  