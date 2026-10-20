const bishop = {
  name: "bishop",
  sliding: true,
  directions: [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ],
  svg: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M96 96H0V0H39.3623L24.3564 56H32.6387L47.6436 0H96V96Z" fill="currentColor"/>
</svg>`,
  icon: "♗",
};

const knight = {
  name: "knight",
  sliding: false,
  directions: [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ],
  svg: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M96 96H0V56C21.4508 56 39.8072 42.7563 47.3418 24H0V0H96V96Z" fill="currentColor"/>
</svg>`,
  icon: "♘",
};

const rook = {
  name: "rook",
  sliding: true,
  directions: [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ],
  svg: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32 24H64V0H96V96H0V0H32V24Z" fill="currentColor"/>
</svg>`,
  icon: "♖",
};

const queen = {
  name: "queen",
  sliding: true,
  directions: [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ],
  svg: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M96 96H0V0H5.3291C13.307 15.4426 29.42 26 48 26C66.58 26 82.693 15.4426 90.6709 0H96V96Z" fill="currentColor"/>
</svg>`,
  icon: "♕",
};

const king = {
  name: "king",
  sliding: false,
  directions: [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ],
  svg: `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M96 96H0V0L24 12L48 0L72 12L96 0V96Z" fill="currentColor"/>
</svg>`,
  icon: "♔",
};
