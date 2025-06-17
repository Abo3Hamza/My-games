const games = [
  {
    name: "test app",
    image: "test.jpg",
    html: "test.html"
  },
  {
    name: "سبحه الكترونيه",
    image: "tasbih.jpg",
    html: "tasbih.html"
  },
{
  name: "حجره ورقه مقص",
  image: "fps.jpg",
  html: "fps.html"
}
  // أضف ألعابك هنا
];

const gamesList = document.getElementById('games-list');

games.forEach(game => {
  const card = document.createElement('div');
  card.className = 'game-card';
  card.tabIndex = 0;
  card.onclick = () => window.location.href = game.html;
  card.innerHTML = `
    <img src="${game.image}" alt="${game.name}" class="game-image">
    <div class="game-title">${game.name}</div>
  `;
  gamesList.appendChild(card);
});