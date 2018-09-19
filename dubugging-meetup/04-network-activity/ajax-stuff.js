
const githubLink = document.querySelector('#github-link')

fetch('https://api.github.com/users/charlottedevs')
  .then(data => data.json())
  .then(data => {
    githubLink.innerHTML = `<a href="${data.url}" target="_blank">Find Charlotte Devs on Github</a>`;
  })
  .catch(() => {
    githubLink.innerHTML = 'Hey, you blocked my request!';
  });

