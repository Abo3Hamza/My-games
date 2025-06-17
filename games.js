const games = [
  {
    name: "test app",
    image: "test.jpg",
    html: "test.html"
  },
{
    name: "chess",
    image: "chess.jpg",
    html: "chess.html"
  },
{
    name: "Gomoku",
    image: "Gomoku.jpg",
    html: "Gomoku.html"
  },
{
    name: "خمن الرقم",
    image: "Guess.jpg",
    html: "Guess.html"
  },
{
    name: "سبحه الكترونيه",
    image: "tasbih.jpg",
    html: "tasbih.html"
  },
{
    name: "simple calculator",
    image: "S-Calc.jpg",
    html: "S-Calc.html"
  },
{
    name: "advanced calculator",
    image: "M-Calc.jpg",
    html: "M-Calc.html"
  },
{
    name: "first project",
    image: "My-xo.jpg",
    html: "My-xo.html"
  },
{
    name: "tic tac toc",
    image: "xo.jpg",
    html: "xo.html"
  },
{
    name: "Snake game",
    image: "snake.jpg",
    html: "snake.html"
  },
{
    name: "Wall Chess",
    image: "wall.jpg",
    html: "wall.html"
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