


const data = [
  {
    text: 'Vanilla',
    href: 'https://www.freecodecamp.org'
  },
  {
    text: "Eggs",
    href: 'https://www.udacity.com'
  },
  {
    text: 'Sugar',
    href: 'https://www.codecademy.com'
  },
  {
    text: 'Baking Soda',
    href: 'https://sqlzoo.net/'
  },
  {
    text: "#SALT",
    href: 'https://charlottedevs.com/'
  }
];

function ingredients() {
for (var i = 0; i<data.length; i++) {
  if (data.text) {
    document.querySelector('#middle-ingredients').innerHTML += `<p><a href="${data.href}">${data.text}</a></p>`;
  }
}
}















































































































































































sessionStorage.setItem('Last Ingredient', 'Chocolate Chips!');
