

  const lastIngredient = document.querySelector('#last-ingredient')

  fetch('https://api.github.com/users/charlottedevs')
    .then(data => data.json())
    .then(data => {
      lastIngredient.innerHTML = `<a href="${data.url}" target="_blank">Find Charlotte Devs on Github</a>`;
    })
    .catch(() => {
      lastIngredient.innerHTML = `<a href="" target="blank">Flour</a>`;
    });
