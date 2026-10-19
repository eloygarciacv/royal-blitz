const bishop = {
  name: "bishop",
  sliding: true,
  directions: [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ],
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
  icon: "♔",
};
