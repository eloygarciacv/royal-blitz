const cards = [
  [
    [bishop, null, rook],
    [knight, king, null],
    [null, null, queen],
  ],
  [
    [rook, knight, bishop],
    [queen, null, null],
    [king, null, null],
  ],
  [
    [null, knight, bishop],
    [null, null, queen],
    [rook, king, null],
  ],
  [
    [null, queen, bishop],
    [null, king, knight],
    [null, null, rook],
  ],
  [
    [rook, null, king],
    [knight, queen, null],
    [bishop, null, null],
  ],
  [
    [null, null, null],
    [knight, queen, king],
    [bishop, null, rook],
  ],
  [
    [queen, rook, king],
    [null, null, null],
    [bishop, knight, null],
  ],
  [
    [null, null, queen],
    [rook, null, knight],
    [king, null, bishop],
  ],
  [
    [null, null, king],
    [rook, null, queen],
    [null, knight, bishop],
  ],
  [
    [bishop, null, king],
    [null, null, knight],
    [rook, null, queen],
  ],
  [
    [bishop, null, null],
    [null, king, null],
    [rook, knight, queen],
  ],
  [
    [rook, queen, bishop],
    [knight, null, null],
    [king, null, null],
  ],
  [
    [null, queen, bishop],
    [knight, null, king],
    [null, null, rook],
  ],
  [
    [null, null, bishop],
    [queen, king, null],
    [null, knight, rook],
  ],
  [
    [rook, knight, null],
    [null, queen, null],
    [bishop, null, king],
  ],
  [
    [null, null, rook],
    [null, queen, knight],
    [bishop, king, null],
  ],
  [
    [queen, null, null],
    [rook, null, knight],
    [bishop, null, king],
  ],
  [
    [queen, knight, null],
    [null, null, rook],
    [king, null, bishop],
  ],
  [
    [null, rook, king],
    [knight, queen, null],
    [null, null, bishop],
  ],
  [
    [king, null, null],
    [knight, null, rook],
    [null, queen, bishop],
  ],
  [
    [rook, knight, queen],
    [null, bishop, null],
    [king, null, null],
  ],
  [
    [rook, knight, null],
    [king, bishop, null],
    [queen, null, null],
  ],
  [
    [null, queen, rook],
    [null, bishop, knight],
    [null, null, king],
  ],
  [
    [null, null, null],
    [queen, bishop, knight],
    [rook, king, null],
  ],
  [
    [null, null, null],
    [knight, bishop, rook],
    [queen, null, king],
  ],
  [
    [null, null, queen],
    [null, bishop, rook],
    [king, knight, null],
  ],
  [
    [king, null, null],
    [rook, bishop, null],
    [null, knight, queen],
  ],
  [
    [bishop, null, null],
    [null, king, knight],
    [rook, queen, null],
  ],
  [
    [null, queen, null],
    [king, bishop, rook],
    [null, knight, null],
  ],
  [
    [knight, queen, null],
    [king, null, null],
    [null, rook, bishop],
  ],
  [
    [bishop, null, rook],
    [queen, null, null],
    [king, knight, null],
  ],
  [
    [bishop, null, knight],
    [rook, queen, null],
    [null, king, null],
  ],
  [
    [rook, null, king],
    [null, bishop, null],
    [knight, queen, null],
  ],
  [
    [queen, null, bishop],
    [knight, rook, null],
    [null, null, king],
  ],
  [
    [null, rook, king],
    [null, queen, null],
    [bishop, null, knight],
  ],
  [
    [null, queen, null],
    [knight, bishop, null],
    [rook, null, king],
  ],
  [
    [bishop, null, null],
    [null, rook, knight],
    [queen, null, king],
  ],
  [
    [null, knight, null],
    [rook, null, null],
    [king, queen, bishop],
  ],
  [
    [null, rook, bishop],
    [king, null, knight],
    [null, queen, null],
  ],
  [
    [bishop, knight, rook],
    [null, null, null],
    [queen, king, null],
  ],
  [
    [bishop, knight, rook],
    [king, null, null],
    [null, queen, null],
  ],
  [
    [bishop, knight, rook],
    [null, null, null],
    [king, null, queen],
  ],
  [
    [bishop, knight, null],
    [rook, queen, null],
    [king, null, null],
  ],
  [
    [bishop, knight, null],
    [rook, null, null],
    [queen, null, king],
  ],
  [
    [bishop, knight, null],
    [rook, null, king],
    [null, queen, null],
  ],
  [
    [bishop, knight, king],
    [rook, null, null],
    [null, null, queen],
  ],
  [
    [bishop, knight, queen],
    [null, rook, null],
    [king, null, null],
  ],
  [
    [bishop, knight, null],
    [king, rook, queen],
    [null, null, null],
  ],
  [
    [bishop, knight, king],
    [null, rook, null],
    [queen, null, null],
  ],
  [
    [bishop, knight, null],
    [null, rook, null],
    [null, queen, king],
  ],
  [
    [bishop, knight, null],
    [null, rook, king],
    [null, null, queen],
  ],
  [
    [bishop, knight, king],
    [queen, null, rook],
    [null, null, null],
  ],
  [
    [bishop, knight, null],
    [null, queen, rook],
    [null, king, null],
  ],
  [
    [bishop, knight, null],
    [king, null, rook],
    [queen, null, null],
  ],
  [
    [bishop, knight, null],
    [null, king, rook],
    [null, queen, null],
  ],
  [
    [bishop, knight, queen],
    [null, king, null],
    [rook, null, null],
  ],
  [
    [bishop, knight, king],
    [null, null, queen],
    [rook, null, null],
  ],
  [
    [bishop, knight, null],
    [king, null, null],
    [rook, null, queen],
  ],
  [
    [bishop, knight, null],
    [king, queen, null],
    [null, rook, null],
  ],
  [
    [bishop, knight, null],
    [null, null, king],
    [queen, rook, null],
  ],
  [
    [bishop, knight, null],
    [null, king, null],
    [null, rook, queen],
  ],
  [
    [bishop, knight, queen],
    [king, null, null],
    [null, null, rook],
  ],
  [
    [bishop, knight, null],
    [null, queen, king],
    [null, null, rook],
  ],
  [
    [bishop, knight, null],
    [null, king, queen],
    [null, null, rook],
  ],
  [
    [bishop, knight, king],
    [null, null, null],
    [null, queen, rook],
  ],
  [
    [bishop, rook, knight],
    [queen, null, null],
    [king, null, null],
  ],
  [
    [bishop, rook, knight],
    [null, queen, null],
    [null, null, king],
  ],
  [
    [bishop, rook, knight],
    [null, null, king],
    [null, queen, null],
  ],
  [
    [bishop, rook, knight],
    [king, null, null],
    [null, null, queen],
  ],
  [
    [bishop, null, knight],
    [rook, null, queen],
    [null, null, king],
  ],
  [
    [bishop, null, knight],
    [rook, null, null],
    [king, null, queen],
  ],
  [
    [bishop, null, knight],
    [null, rook, king],
    [queen, null, null],
  ],
  [
    [bishop, null, knight],
    [null, rook, null],
    [king, queen, null],
  ],
  [
    [bishop, king, knight],
    [null, rook, null],
    [null, null, queen],
  ],
  [
    [bishop, queen, knight],
    [null, null, rook],
    [king, null, null],
  ],
  [
    [bishop, king, knight],
    [queen, null, rook],
    [null, null, null],
  ],
  [
    [bishop, null, knight],
    [null, null, rook],
    [queen, null, king],
  ],
  [
    [bishop, null, knight],
    [null, king, rook],
    [null, null, queen],
  ],
  [
    [bishop, queen, knight],
    [null, king, null],
    [rook, null, null],
  ],
  [
    [bishop, null, knight],
    [queen, null, null],
    [rook, king, null],
  ],
  [
    [bishop, king, knight],
    [null, queen, null],
    [rook, null, null],
  ],
  [
    [bishop, queen, knight],
    [king, null, null],
    [null, rook, null],
  ],
  [
    [bishop, null, knight],
    [queen, null, null],
    [null, rook, king],
  ],
  [
    [bishop, null, knight],
    [null, king, queen],
    [null, rook, null],
  ],
  [
    [bishop, king, knight],
    [null, null, null],
    [queen, rook, null],
  ],
  [
    [bishop, null, knight],
    [null, null, king],
    [null, rook, queen],
  ],
  [
    [bishop, queen, knight],
    [null, null, null],
    [null, king, rook],
  ],
  [
    [bishop, null, knight],
    [queen, null, king],
    [null, null, rook],
  ],
  [
    [bishop, null, knight],
    [king, queen, null],
    [null, null, rook],
  ],
  [
    [bishop, null, knight],
    [null, king, null],
    [null, queen, rook],
  ],
  [
    [bishop, rook, null],
    [knight, null, king],
    [queen, null, null],
  ],
  [
    [bishop, rook, null],
    [knight, king, null],
    [null, queen, null],
  ],
  [
    [bishop, rook, king],
    [knight, null, null],
    [null, null, queen],
  ],
  [
    [bishop, queen, rook],
    [knight, null, null],
    [null, king, null],
  ],
  [
    [bishop, null, rook],
    [knight, queen, null],
    [null, null, king],
  ],
  [
    [bishop, null, rook],
    [knight, null, queen],
    [king, null, null],
  ],
  [
    [bishop, king, rook],
    [knight, null, null],
    [queen, null, null],
  ],
  [
    [bishop, queen, null],
    [knight, rook, null],
    [null, null, king],
  ],
  [
    [bishop, king, queen],
    [knight, rook, null],
    [null, null, null],
  ],
  [
    [bishop, queen, king],
    [knight, null, rook],
    [null, null, null],
  ],
  [
    [bishop, null, queen],
    [knight, king, rook],
    [null, null, null],
  ],
  [
    [bishop, null, null],
    [knight, null, rook],
    [king, queen, null],
  ],
  [
    [bishop, null, king],
    [knight, queen, null],
    [rook, null, null],
  ],
  [
    [bishop, king, null],
    [knight, null, null],
    [rook, queen, null],
  ],
  [
    [bishop, null, null],
    [knight, null, null],
    [rook, king, queen],
  ],
  [
    [bishop, null, queen],
    [knight, null, king],
    [null, rook, null],
  ],
  [
    [bishop, king, null],
    [knight, null, queen],
    [null, rook, null],
  ],
  [
    [bishop, null, null],
    [knight, null, null],
    [queen, rook, king],
  ],
  [
    [bishop, null, null],
    [knight, null, null],
    [king, rook, queen],
  ],
  [
    [bishop, queen, null],
    [knight, king, null],
    [null, null, rook],
  ],
  [
    [bishop, null, queen],
    [knight, null, null],
    [king, null, rook],
  ],
  [
    [bishop, king, null],
    [knight, queen, null],
    [null, null, rook],
  ],
  [
    [bishop, null, null],
    [knight, null, null],
    [queen, king, rook],
  ],
  [
    [bishop, null, null],
    [knight, null, king],
    [null, queen, rook],
  ],
  [
    [bishop, rook, null],
    [null, queen, knight],
    [null, king, null],
  ],
  [
    [bishop, rook, null],
    [king, null, knight],
    [queen, null, null],
  ],
  [
    [bishop, queen, rook],
    [null, king, knight],
    [null, null, null],
  ],
  [
    [bishop, null, rook],
    [king, queen, knight],
    [null, null, null],
  ],
  [
    [bishop, queen, king],
    [rook, null, knight],
    [null, null, null],
  ],
  [
    [bishop, king, null],
    [rook, queen, knight],
    [null, null, null],
  ],
  [
    [bishop, null, null],
    [rook, null, knight],
    [null, queen, king],
  ],
  [
    [bishop, null, null],
    [rook, king, knight],
    [null, null, queen],
  ],
  [
    [bishop, queen, null],
    [king, rook, knight],
    [null, null, null],
  ],
  [
    [bishop, null, null],
    [queen, rook, knight],
    [null, king, null],
  ],
  [
    [bishop, king, null],
    [null, rook, knight],
    [null, queen, null],
  ],
  [
    [bishop, null, null],
    [null, rook, knight],
    [king, null, queen],
  ],
  [
    [bishop, null, queen],
    [null, null, knight],
    [rook, king, null],
  ],
  [
    [bishop, null, null],
    [null, queen, knight],
    [rook, null, king],
  ],
  [
    [bishop, queen, null],
    [null, null, knight],
    [null, rook, king],
  ],
  [
    [bishop, null, king],
    [queen, null, knight],
    [null, rook, null],
  ],
  [
    [bishop, king, null],
    [null, null, knight],
    [null, rook, queen],
  ],
  [
    [bishop, king, null],
    [queen, null, knight],
    [null, null, rook],
  ],
  [
    [bishop, null, null],
    [null, queen, knight],
    [king, null, rook],
  ],
  [
    [bishop, null, king],
    [null, null, knight],
    [queen, null, rook],
  ],
  [
    [bishop, rook, queen],
    [null, null, null],
    [knight, null, king],
  ],
  [
    [bishop, rook, king],
    [queen, null, null],
    [knight, null, null],
  ],
  [
    [bishop, rook, null],
    [king, queen, null],
    [knight, null, null],
  ],
  [
    [bishop, rook, null],
    [null, null, queen],
    [knight, king, null],
  ],
  [
    [bishop, rook, null],
    [null, null, king],
    [knight, null, queen],
  ],
  [
    [bishop, null, rook],
    [queen, null, king],
    [knight, null, null],
  ],
  [
    [bishop, king, rook],
    [null, queen, null],
    [knight, null, null],
  ],
  [
    [bishop, null, rook],
    [null, null, queen],
    [knight, null, king],
  ],
  [
    [bishop, null, rook],
    [null, king, null],
    [knight, queen, null],
  ],
  [
    [bishop, null, rook],
    [king, null, null],
    [knight, null, queen],
  ],
  [
    [bishop, queen, null],
    [rook, null, null],
    [knight, null, king],
  ],
  [
    [bishop, null, queen],
    [rook, null, king],
    [knight, null, null],
  ],
  [
    [bishop, null, null],
    [rook, king, queen],
    [knight, null, null],
  ],
  [
    [bishop, queen, null],
    [null, rook, null],
    [knight, king, null],
  ],
  [
    [bishop, king, null],
    [null, rook, queen],
    [knight, null, null],
  ],
  [
    [bishop, null, null],
    [null, rook, king],
    [knight, queen, null],
  ],
  [
    [bishop, null, king],
    [null, rook, null],
    [knight, null, queen],
  ],
  [
    [bishop, king, queen],
    [null, null, rook],
    [knight, null, null],
  ],
  [
    [bishop, null, null],
    [queen, null, rook],
    [knight, king, null],
  ],
  [
    [bishop, null, null],
    [null, null, rook],
    [knight, queen, king],
  ],
  [
    [bishop, queen, null],
    [null, king, null],
    [knight, rook, null],
  ],
  [
    [bishop, king, null],
    [queen, null, null],
    [knight, rook, null],
  ],
  [
    [bishop, null, null],
    [null, queen, king],
    [knight, rook, null],
  ],
  [
    [bishop, null, king],
    [null, null, queen],
    [knight, rook, null],
  ],
  [
    [bishop, queen, null],
    [null, null, king],
    [knight, null, rook],
  ],
  [
    [bishop, null, queen],
    [null, null, null],
    [knight, king, rook],
  ],
  [
    [bishop, null, null],
    [queen, king, null],
    [knight, null, rook],
  ],
  [
    [bishop, null, king],
    [null, queen, null],
    [knight, null, rook],
  ],
  [
    [bishop, null, null],
    [king, null, queen],
    [knight, null, rook],
  ],
  [
    [bishop, king, null],
    [null, null, null],
    [knight, queen, rook],
  ],
  [
    [bishop, rook, queen],
    [king, null, null],
    [null, knight, null],
  ],
  [
    [bishop, rook, null],
    [queen, null, king],
    [null, knight, null],
  ],
  [
    [bishop, rook, king],
    [null, queen, null],
    [null, knight, null],
  ],
  [
    [bishop, rook, null],
    [null, king, queen],
    [null, knight, null],
  ],
  [
    [bishop, rook, null],
    [null, null, null],
    [queen, knight, king],
  ],
  [
    [bishop, queen, rook],
    [king, null, null],
    [null, knight, null],
  ],
  [
    [bishop, king, rook],
    [null, null, queen],
    [null, knight, null],
  ],
  [
    [bishop, null, rook],
    [null, king, null],
    [queen, knight, null],
  ],
  [
    [bishop, null, rook],
    [null, null, king],
    [null, knight, queen],
  ],
  [
    [bishop, null, queen],
    [rook, king, null],
    [null, knight, null],
  ],
  [
    [bishop, null, null],
    [rook, queen, null],
    [null, knight, king],
  ],
  [
    [bishop, null, null],
    [rook, null, queen],
    [king, knight, null],
  ],
  [
    [bishop, king, null],
    [rook, null, null],
    [null, knight, queen],
  ],
  [
    [bishop, null, queen],
    [null, rook, king],
    [null, knight, null],
  ],
  [
    [bishop, null, null],
    [null, rook, queen],
    [null, knight, king],
  ],
  [
    [bishop, king, null],
    [null, rook, null],
    [queen, knight, null],
  ],
  [
    [bishop, queen, null],
    [null, null, rook],
    [null, knight, king],
  ],
  [
    [bishop, king, null],
    [null, queen, rook],
    [null, knight, null],
  ],
  [
    [bishop, null, king],
    [null, null, rook],
    [queen, knight, null],
  ],
  [
    [bishop, null, null],
    [null, null, rook],
    [king, knight, queen],
  ],
  [
    [bishop, queen, king],
    [null, null, null],
    [rook, knight, null],
  ],
  [
    [bishop, null, queen],
    [null, null, null],
    [rook, knight, king],
  ],
  [
    [bishop, null, null],
    [null, queen, king],
    [rook, knight, null],
  ],
  [
    [bishop, null, null],
    [king, null, queen],
    [rook, knight, null],
  ],
  [
    [bishop, king, queen],
    [null, null, null],
    [null, knight, rook],
  ],
  [
    [bishop, rook, queen],
    [null, null, king],
    [null, null, knight],
  ],
  [
    [bishop, rook, null],
    [queen, null, null],
    [null, king, knight],
  ],
  [
    [bishop, rook, null],
    [null, null, queen],
    [king, null, knight],
  ],
  [
    [bishop, rook, null],
    [null, king, null],
    [queen, null, knight],
  ],
  [
    [bishop, rook, null],
    [king, null, null],
    [null, queen, knight],
  ],
  [
    [bishop, queen, rook],
    [null, null, null],
    [king, null, knight],
  ],
  [
    [bishop, null, rook],
    [null, queen, null],
    [null, king, knight],
  ],
  [
    [bishop, null, rook],
    [null, null, king],
    [queen, null, knight],
  ],
  [
    [bishop, null, queen],
    [rook, null, null],
    [null, king, knight],
  ],
  [
    [bishop, null, null],
    [rook, queen, king],
    [null, null, knight],
  ],
  [
    [bishop, null, king],
    [rook, null, null],
    [queen, null, knight],
  ],
  [
    [bishop, null, null],
    [rook, null, null],
    [king, queen, knight],
  ],
  [
    [bishop, queen, king],
    [null, rook, null],
    [null, null, knight],
  ],
  [
    [bishop, king, null],
    [queen, rook, null],
    [null, null, knight],
  ],
  [
    [bishop, null, null],
    [null, rook, queen],
    [null, king, knight],
  ],
  [
    [bishop, null, null],
    [king, rook, null],
    [queen, null, knight],
  ],
  [
    [bishop, null, queen],
    [null, null, rook],
    [king, null, knight],
  ],
  [
    [bishop, null, null],
    [queen, king, rook],
    [null, null, knight],
  ],
  [
    [bishop, king, null],
    [null, null, rook],
    [queen, null, knight],
  ],
  [
    [bishop, null, king],
    [null, null, rook],
    [null, queen, knight],
  ],
  [
    [bishop, queen, null],
    [null, null, null],
    [rook, king, knight],
  ],
  [
    [bishop, null, queen],
    [king, null, null],
    [rook, null, knight],
  ],
  [
    [bishop, null, null],
    [null, king, queen],
    [rook, null, knight],
  ],
  [
    [bishop, null, queen],
    [null, king, null],
    [null, rook, knight],
  ],
  [
    [bishop, null, null],
    [queen, null, king],
    [null, rook, knight],
  ],
  [
    [bishop, null, king],
    [null, queen, null],
    [null, rook, knight],
  ],
  [
    [bishop, null, null],
    [king, null, queen],
    [null, rook, knight],
  ],
  [
    [knight, rook, bishop],
    [queen, king, null],
    [null, null, null],
  ],
  [
    [knight, rook, bishop],
    [null, queen, null],
    [null, king, null],
  ],
  [
    [knight, rook, bishop],
    [king, null, queen],
    [null, null, null],
  ],
  [
    [knight, rook, bishop],
    [null, null, null],
    [null, queen, king],
  ],
  [
    [knight, rook, bishop],
    [null, null, king],
    [null, null, queen],
  ],
  [
    [knight, queen, bishop],
    [rook, null, null],
    [king, null, null],
  ],
  [
    [knight, null, bishop],
    [rook, queen, null],
    [null, null, king],
  ],
  [
    [knight, null, bishop],
    [rook, null, king],
    [queen, null, null],
  ],
  [
    [knight, null, bishop],
    [rook, king, null],
    [null, queen, null],
  ],
  [
    [knight, queen, bishop],
    [null, rook, king],
    [null, null, null],
  ],
  [
    [knight, null, bishop],
    [null, rook, queen],
    [null, king, null],
  ],
  [
    [knight, null, bishop],
    [king, rook, null],
    [queen, null, null],
  ],
  [
    [knight, null, bishop],
    [null, rook, null],
    [king, queen, null],
  ],
  [
    [knight, queen, bishop],
    [king, null, rook],
    [null, null, null],
  ],
  [
    [knight, null, bishop],
    [null, king, rook],
    [queen, null, null],
  ],
  [
    [knight, king, bishop],
    [null, null, rook],
    [null, null, queen],
  ],
  [
    [knight, king, bishop],
    [queen, null, null],
    [rook, null, null],
  ],
  [
    [knight, null, bishop],
    [null, null, null],
    [rook, king, queen],
  ],
  [
    [knight, null, bishop],
    [queen, null, null],
    [null, rook, king],
  ],
  [
    [knight, null, bishop],
    [king, queen, null],
    [null, rook, null],
  ],
  [
    [knight, king, bishop],
    [null, null, queen],
    [null, rook, null],
  ],
  [
    [knight, null, bishop],
    [null, king, null],
    [null, rook, queen],
  ],
  [
    [knight, null, bishop],
    [null, null, queen],
    [king, null, rook],
  ],
  [
    [rook, knight, bishop],
    [null, null, queen],
    [null, null, king],
  ],
  [
    [rook, knight, bishop],
    [null, king, null],
    [queen, null, null],
  ],
  [
    [rook, knight, bishop],
    [null, null, king],
    [null, null, queen],
  ],
  [
    [null, knight, bishop],
    [rook, queen, king],
    [null, null, null],
  ],
  [
    [null, knight, bishop],
    [rook, null, queen],
    [king, null, null],
  ],
  [
    [null, knight, bishop],
    [rook, null, null],
    [queen, king, null],
  ],
  [
    [null, knight, bishop],
    [rook, null, null],
    [null, queen, king],
  ],
  [
    [queen, knight, bishop],
    [null, rook, null],
    [null, king, null],
  ],
  [
    [king, knight, bishop],
    [null, rook, queen],
    [null, null, null],
  ],
  [
    [null, knight, bishop],
    [null, rook, king],
    [queen, null, null],
  ],
  [
    [null, knight, bishop],
    [king, rook, null],
    [null, queen, null],
  ],
  [
    [queen, knight, bishop],
    [null, king, rook],
    [null, null, null],
  ],
  [
    [null, knight, bishop],
    [queen, null, rook],
    [null, null, king],
  ],
  [
    [null, knight, bishop],
    [null, queen, rook],
    [king, null, null],
  ],
  [
    [null, knight, bishop],
    [king, null, rook],
    [null, null, queen],
  ],
  [
    [null, knight, bishop],
    [queen, null, king],
    [rook, null, null],
  ],
  [
    [null, knight, bishop],
    [null, king, null],
    [rook, null, queen],
  ],
  [
    [queen, knight, bishop],
    [null, null, null],
    [king, rook, null],
  ],
  [
    [null, knight, bishop],
    [queen, king, null],
    [null, rook, null],
  ],
  [
    [null, knight, bishop],
    [null, queen, null],
    [null, rook, king],
  ],
  [
    [king, knight, bishop],
    [null, null, null],
    [null, rook, queen],
  ],
  [
    [queen, knight, bishop],
    [king, null, null],
    [null, null, rook],
  ],
  [
    [null, knight, bishop],
    [queen, null, null],
    [null, king, rook],
  ],
  [
    [null, knight, bishop],
    [null, null, king],
    [null, queen, rook],
  ],
  [
    [rook, king, bishop],
    [knight, null, queen],
    [null, null, null],
  ],
  [
    [rook, null, bishop],
    [knight, null, king],
    [null, queen, null],
  ],
  [
    [rook, null, bishop],
    [knight, null, null],
    [null, king, queen],
  ],
  [
    [queen, rook, bishop],
    [knight, null, king],
    [null, null, null],
  ],
  [
    [null, rook, bishop],
    [knight, null, queen],
    [null, null, king],
  ],
  [
    [null, rook, bishop],
    [knight, null, null],
    [king, queen, null],
  ],
  [
    [null, king, bishop],
    [knight, rook, null],
    [queen, null, null],
  ],
  [
    [null, queen, bishop],
    [knight, king, rook],
    [null, null, null],
  ],
  [
    [null, null, bishop],
    [knight, queen, rook],
    [null, king, null],
  ],
  [
    [null, null, bishop],
    [knight, null, rook],
    [null, queen, king],
  ],
  [
    [queen, king, bishop],
    [knight, null, null],
    [rook, null, null],
  ],
  [
    [null, queen, bishop],
    [knight, null, null],
    [rook, king, null],
  ],
  [
    [null, null, bishop],
    [knight, queen, king],
    [rook, null, null],
  ],
  [
    [null, null, bishop],
    [knight, king, queen],
    [rook, null, null],
  ],
  [
    [king, null, bishop],
    [knight, null, null],
    [rook, queen, null],
  ],
  [
    [null, queen, bishop],
    [knight, null, null],
    [null, rook, king],
  ],
  [
    [null, king, bishop],
    [knight, queen, null],
    [null, rook, null],
  ],
  [
    [null, null, bishop],
    [knight, king, null],
    [queen, rook, null],
  ],
  [
    [null, null, bishop],
    [knight, null, king],
    [null, rook, queen],
  ],
  [
    [king, null, bishop],
    [knight, queen, null],
    [null, null, rook],
  ],
  [
    [null, null, bishop],
    [knight, null, queen],
    [null, king, rook],
  ],
  [
    [rook, queen, bishop],
    [king, null, knight],
    [null, null, null],
  ],
  [
    [rook, null, bishop],
    [null, queen, knight],
    [null, king, null],
  ],
  [
    [rook, null, bishop],
    [null, null, knight],
    [queen, null, king],
  ],
  [
    [rook, null, bishop],
    [null, king, knight],
    [null, queen, null],
  ],
  [
    [null, rook, bishop],
    [null, queen, knight],
    [null, null, king],
  ],
  [
    [null, rook, bishop],
    [null, king, knight],
    [queen, null, null],
  ],
  [
    [king, rook, bishop],
    [null, null, knight],
    [null, null, queen],
  ],
  [
    [null, null, bishop],
    [rook, queen, knight],
    [king, null, null],
  ],
  [
    [king, null, bishop],
    [rook, null, knight],
    [queen, null, null],
  ],
  [
    [null, king, bishop],
    [rook, null, knight],
    [null, queen, null],
  ],
  [
    [queen, null, bishop],
    [null, rook, knight],
    [king, null, null],
  ],
  [
    [null, queen, bishop],
    [null, rook, knight],
    [null, king, null],
  ],
  [
    [king, null, bishop],
    [queen, rook, knight],
    [null, null, null],
  ],
  [
    [null, null, bishop],
    [null, rook, knight],
    [null, queen, king],
  ],
  [
    [null, king, bishop],
    [null, rook, knight],
    [null, null, queen],
  ],
  [
    [queen, null, bishop],
    [null, null, knight],
    [rook, king, null],
  ],
  [
    [king, queen, bishop],
    [null, null, knight],
    [rook, null, null],
  ],
  [
    [null, null, bishop],
    [queen, king, knight],
    [rook, null, null],
  ],
  [
    [null, null, bishop],
    [king, queen, knight],
    [rook, null, null],
  ],
  [
    [queen, null, bishop],
    [null, king, knight],
    [null, rook, null],
  ],
  [
    [king, null, bishop],
    [null, queen, knight],
    [null, rook, null],
  ],
  [
    [null, null, bishop],
    [king, null, knight],
    [null, rook, queen],
  ],
  [
    [null, null, bishop],
    [queen, null, knight],
    [king, null, rook],
  ],
  [
    [null, king, bishop],
    [null, queen, knight],
    [null, null, rook],
  ],
  [
    [null, null, bishop],
    [king, null, knight],
    [queen, null, rook],
  ],
  [
    [king, null, bishop],
    [null, null, knight],
    [null, queen, rook],
  ],
  [
    [rook, queen, bishop],
    [null, null, king],
    [knight, null, null],
  ],
  [
    [rook, null, bishop],
    [queen, null, null],
    [knight, king, null],
  ],
  [
    [rook, null, bishop],
    [null, queen, null],
    [knight, null, king],
  ],
  [
    [rook, king, bishop],
    [null, null, null],
    [knight, queen, null],
  ],
  [
    [null, rook, bishop],
    [null, king, queen],
    [knight, null, null],
  ],
  [
    [king, rook, bishop],
    [null, null, null],
    [knight, queen, null],
  ],
  [
    [null, rook, bishop],
    [null, null, null],
    [knight, king, queen],
  ],
  [
    [queen, null, bishop],
    [rook, king, null],
    [knight, null, null],
  ],
  [
    [king, null, bishop],
    [rook, queen, null],
    [knight, null, null],
  ],
  [
    [null, king, bishop],
    [rook, null, queen],
    [knight, null, null],
  ],
  [
    [null, null, bishop],
    [rook, null, king],
    [knight, queen, null],
  ],
  [
    [queen, null, bishop],
    [null, rook, king],
    [knight, null, null],
  ],
  [
    [null, queen, bishop],
    [null, rook, null],
    [knight, null, king],
  ],
  [
    [null, null, bishop],
    [king, rook, null],
    [knight, null, queen],
  ],
  [
    [king, queen, bishop],
    [null, null, rook],
    [knight, null, null],
  ],
  [
    [null, null, bishop],
    [queen, king, rook],
    [knight, null, null],
  ],
  [
    [null, king, bishop],
    [null, queen, rook],
    [knight, null, null],
  ],
  [
    [queen, null, bishop],
    [king, null, null],
    [knight, rook, null],
  ],
  [
    [king, null, bishop],
    [null, null, queen],
    [knight, rook, null],
  ],
  [
    [null, king, bishop],
    [null, null, null],
    [knight, rook, queen],
  ],
  [
    [null, queen, bishop],
    [king, null, null],
    [knight, null, rook],
  ],
  [
    [king, null, bishop],
    [queen, null, null],
    [knight, null, rook],
  ],
  [
    [null, null, bishop],
    [null, queen, king],
    [knight, null, rook],
  ],
  [
    [null, null, bishop],
    [null, king, null],
    [knight, queen, rook],
  ],
  [
    [rook, null, bishop],
    [queen, null, king],
    [null, knight, null],
  ],
  [
    [rook, null, bishop],
    [null, king, queen],
    [null, knight, null],
  ],
  [
    [rook, null, bishop],
    [null, null, null],
    [king, knight, queen],
  ],
  [
    [queen, rook, bishop],
    [null, king, null],
    [null, knight, null],
  ],
  [
    [null, rook, bishop],
    [queen, null, null],
    [null, knight, king],
  ],
  [
    [king, rook, bishop],
    [null, null, queen],
    [null, knight, null],
  ],
  [
    [null, rook, bishop],
    [king, null, null],
    [queen, knight, null],
  ],
  [
    [queen, null, bishop],
    [rook, null, null],
    [null, knight, king],
  ],
  [
    [null, queen, bishop],
    [rook, null, king],
    [null, knight, null],
  ],
  [
    [null, king, bishop],
    [rook, null, null],
    [queen, knight, null],
  ],
  [
    [king, queen, bishop],
    [null, rook, null],
    [null, knight, null],
  ],
  [
    [null, king, bishop],
    [queen, rook, null],
    [null, knight, null],
  ],
  [
    [null, null, bishop],
    [null, rook, queen],
    [king, knight, null],
  ],
  [
    [null, null, bishop],
    [null, rook, null],
    [queen, knight, king],
  ],
  [
    [null, null, bishop],
    [null, rook, king],
    [null, knight, queen],
  ],
  [
    [queen, null, bishop],
    [king, null, rook],
    [null, knight, null],
  ],
  [
    [null, queen, bishop],
    [null, null, rook],
    [king, knight, null],
  ],
  [
    [king, null, bishop],
    [null, queen, rook],
    [null, knight, null],
  ],
  [
    [null, null, bishop],
    [null, king, rook],
    [null, knight, queen],
  ],
  [
    [queen, null, bishop],
    [null, null, king],
    [rook, knight, null],
  ],
  [
    [null, queen, bishop],
    [null, null, null],
    [rook, knight, king],
  ],
  [
    [king, null, bishop],
    [queen, null, null],
    [rook, knight, null],
  ],
  [
    [null, king, bishop],
    [null, null, queen],
    [rook, knight, null],
  ],
  [
    [null, null, bishop],
    [king, null, null],
    [rook, knight, queen],
  ],
  [
    [queen, king, bishop],
    [null, null, null],
    [null, knight, rook],
  ],
  [
    [null, null, bishop],
    [null, queen, null],
    [king, knight, rook],
  ],
  [
    [null, null, bishop],
    [king, null, queen],
    [null, knight, rook],
  ],
  [
    [king, null, bishop],
    [null, null, null],
    [queen, knight, rook],
  ],
  [
    [rook, null, bishop],
    [queen, king, null],
    [null, null, knight],
  ],
  [
    [rook, null, bishop],
    [king, queen, null],
    [null, null, knight],
  ],
  [
    [rook, null, bishop],
    [null, null, queen],
    [null, king, knight],
  ],
  [
    [rook, king, bishop],
    [null, null, null],
    [queen, null, knight],
  ],
  [
    [rook, null, bishop],
    [null, null, null],
    [king, queen, knight],
  ],
  [
    [queen, rook, bishop],
    [king, null, null],
    [null, null, knight],
  ],
  [
    [null, rook, bishop],
    [queen, null, null],
    [king, null, knight],
  ],
  [
    [king, rook, bishop],
    [null, queen, null],
    [null, null, knight],
  ],
  [
    [null, rook, bishop],
    [null, null, null],
    [queen, king, knight],
  ],
  [
    [null, rook, bishop],
    [null, null, king],
    [null, queen, knight],
  ],
  [
    [queen, null, bishop],
    [rook, null, null],
    [king, null, knight],
  ],
  [
    [null, queen, bishop],
    [rook, king, null],
    [null, null, knight],
  ],
  [
    [null, king, bishop],
    [rook, queen, null],
    [null, null, knight],
  ],
  [
    [queen, king, bishop],
    [null, rook, null],
    [null, null, knight],
  ],
  [
    [null, queen, bishop],
    [null, rook, null],
    [king, null, knight],
  ],
  [
    [null, null, bishop],
    [queen, rook, king],
    [null, null, knight],
  ],
  [
    [null, null, bishop],
    [king, rook, queen],
    [null, null, knight],
  ],
  [
    [king, null, bishop],
    [null, rook, null],
    [null, queen, knight],
  ],
  [
    [null, null, bishop],
    [king, null, rook],
    [queen, null, knight],
  ],
  [
    [null, king, bishop],
    [null, null, rook],
    [null, queen, knight],
  ],
  [
    [queen, null, bishop],
    [null, king, null],
    [rook, null, knight],
  ],
  [
    [null, queen, bishop],
    [null, null, king],
    [rook, null, knight],
  ],
  [
    [null, null, bishop],
    [null, queen, null],
    [rook, king, knight],
  ],
  [
    [king, null, bishop],
    [null, null, queen],
    [rook, null, knight],
  ],
  [
    [null, null, bishop],
    [king, null, null],
    [rook, queen, knight],
  ],
  [
    [queen, null, bishop],
    [null, null, king],
    [null, rook, knight],
  ],
  [
    [null, queen, bishop],
    [king, null, null],
    [null, rook, knight],
  ],
  [
    [null, king, bishop],
    [queen, null, null],
    [null, rook, knight],
  ],
  [
    [null, null, bishop],
    [null, queen, null],
    [king, rook, knight],
  ],
  [
    [king, null, bishop],
    [null, null, null],
    [queen, rook, knight],
  ],
  [
    [knight, rook, queen],
    [null, bishop, null],
    [null, king, null],
  ],
  [
    [knight, rook, null],
    [null, bishop, null],
    [queen, null, king],
  ],
  [
    [knight, rook, null],
    [null, bishop, king],
    [null, queen, null],
  ],
  [
    [knight, rook, king],
    [null, bishop, null],
    [null, null, queen],
  ],
  [
    [knight, queen, rook],
    [king, bishop, null],
    [null, null, null],
  ],
  [
    [knight, null, rook],
    [queen, bishop, king],
    [null, null, null],
  ],
  [
    [knight, null, rook],
    [null, bishop, null],
    [king, queen, null],
  ],
  [
    [knight, queen, null],
    [rook, bishop, king],
    [null, null, null],
  ],
  [
    [knight, null, queen],
    [rook, bishop, null],
    [king, null, null],
  ],
  [
    [knight, null, null],
    [rook, bishop, queen],
    [null, null, king],
  ],
  [
    [knight, null, null],
    [rook, bishop, null],
    [null, king, queen],
  ],
  [
    [knight, king, queen],
    [null, bishop, rook],
    [null, null, null],
  ],
  [
    [knight, null, null],
    [queen, bishop, rook],
    [null, king, null],
  ],
  [
    [knight, null, null],
    [king, bishop, rook],
    [queen, null, null],
  ],
  [
    [knight, null, null],
    [null, bishop, rook],
    [null, queen, king],
  ],
  [
    [knight, null, null],
    [null, bishop, rook],
    [king, null, queen],
  ],
  [
    [knight, queen, king],
    [null, bishop, null],
    [rook, null, null],
  ],
  [
    [knight, null, null],
    [queen, bishop, null],
    [rook, null, king],
  ],
  [
    [knight, null, null],
    [king, bishop, null],
    [rook, null, queen],
  ],
  [
    [knight, queen, null],
    [null, bishop, null],
    [null, rook, king],
  ],
  [
    [knight, null, queen],
    [null, bishop, king],
    [null, rook, null],
  ],
  [
    [knight, null, null],
    [queen, bishop, null],
    [king, rook, null],
  ],
  [
    [knight, null, null],
    [king, bishop, queen],
    [null, rook, null],
  ],
  [
    [knight, null, queen],
    [king, bishop, null],
    [null, null, rook],
  ],
  [
    [knight, king, null],
    [queen, bishop, null],
    [null, null, rook],
  ],
  [
    [knight, null, null],
    [null, bishop, null],
    [queen, king, rook],
  ],
  [
    [knight, null, king],
    [null, bishop, null],
    [null, queen, rook],
  ],
  [
    [rook, knight, null],
    [queen, bishop, null],
    [null, null, king],
  ],
  [
    [rook, knight, null],
    [null, bishop, queen],
    [null, king, null],
  ],
  [
    [rook, knight, null],
    [null, bishop, king],
    [null, queen, null],
  ],
  [
    [queen, knight, rook],
    [null, bishop, king],
    [null, null, null],
  ],
  [
    [null, knight, rook],
    [null, bishop, null],
    [queen, null, king],
  ],
  [
    [king, knight, rook],
    [null, bishop, null],
    [null, queen, null],
  ],
  [
    [null, knight, rook],
    [null, bishop, null],
    [null, king, queen],
  ],
  [
    [queen, knight, null],
    [rook, bishop, null],
    [null, null, king],
  ],
  [
    [null, knight, queen],
    [rook, bishop, null],
    [null, king, null],
  ],
  [
    [null, knight, king],
    [rook, bishop, null],
    [null, queen, null],
  ],
  [
    [null, knight, null],
    [rook, bishop, null],
    [king, null, queen],
  ],
  [
    [queen, knight, king],
    [null, bishop, rook],
    [null, null, null],
  ],
  [
    [null, knight, queen],
    [king, bishop, rook],
    [null, null, null],
  ],
  [
    [king, knight, null],
    [queen, bishop, rook],
    [null, null, null],
  ],
  [
    [null, knight, queen],
    [null, bishop, null],
    [rook, null, king],
  ],
  [
    [null, knight, null],
    [king, bishop, queen],
    [rook, null, null],
  ],
  [
    [null, knight, king],
    [null, bishop, null],
    [rook, null, queen],
  ],
  [
    [queen, knight, null],
    [king, bishop, null],
    [null, rook, null],
  ],
  [
    [king, knight, null],
    [null, bishop, queen],
    [null, rook, null],
  ],
  [
    [null, knight, king],
    [null, bishop, null],
    [queen, rook, null],
  ],
  [
    [queen, knight, null],
    [null, bishop, null],
    [null, king, rook],
  ],
  [
    [null, knight, queen],
    [null, bishop, king],
    [null, null, rook],
  ],
  [
    [null, knight, null],
    [null, bishop, queen],
    [king, null, rook],
  ],
  [
    [null, knight, null],
    [king, bishop, null],
    [null, queen, rook],
  ],
  [
    [rook, null, knight],
    [queen, bishop, null],
    [null, king, null],
  ],
  [
    [rook, king, knight],
    [null, bishop, queen],
    [null, null, null],
  ],
  [
    [rook, null, knight],
    [null, bishop, king],
    [queen, null, null],
  ],
  [
    [rook, null, knight],
    [king, bishop, null],
    [null, null, queen],
  ],
  [
    [queen, rook, knight],
    [king, bishop, null],
    [null, null, null],
  ],
  [
    [null, rook, knight],
    [queen, bishop, king],
    [null, null, null],
  ],
  [
    [null, rook, knight],
    [null, bishop, queen],
    [king, null, null],
  ],
  [
    [null, rook, knight],
    [null, bishop, null],
    [null, queen, king],
  ],
  [
    [queen, null, knight],
    [rook, bishop, king],
    [null, null, null],
  ],
  [
    [null, queen, knight],
    [rook, bishop, null],
    [king, null, null],
  ],
  [
    [king, null, knight],
    [rook, bishop, queen],
    [null, null, null],
  ],
  [
    [null, null, knight],
    [rook, bishop, null],
    [queen, king, null],
  ],
  [
    [null, queen, knight],
    [null, bishop, rook],
    [null, king, null],
  ],
  [
    [null, null, knight],
    [queen, bishop, rook],
    [null, null, king],
  ],
  [
    [null, king, knight],
    [null, bishop, rook],
    [queen, null, null],
  ],
  [
    [null, null, knight],
    [king, bishop, rook],
    [null, queen, null],
  ],
  [
    [king, null, knight],
    [null, bishop, rook],
    [null, null, queen],
  ],
  [
    [queen, null, knight],
    [null, bishop, null],
    [rook, king, null],
  ],
  [
    [king, null, knight],
    [queen, bishop, null],
    [rook, null, null],
  ],
  [
    [null, null, knight],
    [null, bishop, queen],
    [rook, null, king],
  ],
  [
    [null, null, knight],
    [null, bishop, king],
    [rook, queen, null],
  ],
  [
    [queen, null, knight],
    [null, bishop, null],
    [king, rook, null],
  ],
  [
    [null, king, knight],
    [queen, bishop, null],
    [null, rook, null],
  ],
  [
    [null, null, knight],
    [null, bishop, null],
    [queen, rook, king],
  ],
  [
    [null, queen, knight],
    [king, bishop, null],
    [null, null, rook],
  ],
  [
    [null, null, knight],
    [queen, bishop, null],
    [king, null, rook],
  ],
  [
    [null, null, knight],
    [null, bishop, queen],
    [null, king, rook],
  ],
  [
    [king, null, knight],
    [null, bishop, null],
    [null, queen, rook],
  ],
  [
    [rook, queen, king],
    [knight, bishop, null],
    [null, null, null],
  ],
  [
    [rook, null, queen],
    [knight, bishop, null],
    [null, king, null],
  ],
  [
    [null, rook, queen],
    [knight, bishop, null],
    [null, null, king],
  ],
  [
    [king, rook, null],
    [knight, bishop, null],
    [null, queen, null],
  ],
  [
    [null, rook, null],
    [knight, bishop, king],
    [null, null, queen],
  ],
  [
    [null, null, rook],
    [knight, bishop, null],
    [null, queen, king],
  ],
  [
    [king, null, rook],
    [knight, bishop, null],
    [null, null, queen],
  ],
  [
    [queen, null, null],
    [knight, bishop, rook],
    [null, king, null],
  ],
  [
    [king, queen, null],
    [knight, bishop, rook],
    [null, null, null],
  ],
  [
    [null, king, null],
    [knight, bishop, rook],
    [null, queen, null],
  ],
  [
    [null, null, king],
    [knight, bishop, rook],
    [null, null, queen],
  ],
  [
    [queen, null, king],
    [knight, bishop, null],
    [rook, null, null],
  ],
  [
    [king, null, queen],
    [knight, bishop, null],
    [rook, null, null],
  ],
  [
    [null, null, null],
    [knight, bishop, queen],
    [rook, king, null],
  ],
  [
    [null, queen, null],
    [knight, bishop, king],
    [null, rook, null],
  ],
  [
    [null, null, queen],
    [knight, bishop, null],
    [king, rook, null],
  ],
  [
    [null, null, null],
    [knight, bishop, queen],
    [null, rook, king],
  ],
  [
    [king, null, null],
    [knight, bishop, null],
    [queen, rook, null],
  ],
  [
    [null, king, null],
    [knight, bishop, null],
    [null, rook, queen],
  ],
  [
    [queen, null, null],
    [knight, bishop, null],
    [king, null, rook],
  ],
  [
    [null, king, queen],
    [knight, bishop, null],
    [null, null, rook],
  ],
  [
    [king, null, null],
    [knight, bishop, queen],
    [null, null, rook],
  ],
  [
    [null, null, null],
    [knight, bishop, king],
    [queen, null, rook],
  ],
  [
    [rook, queen, null],
    [null, bishop, knight],
    [null, king, null],
  ],
  [
    [rook, null, queen],
    [null, bishop, knight],
    [null, null, king],
  ],
  [
    [rook, null, null],
    [queen, bishop, knight],
    [king, null, null],
  ],
  [
    [rook, king, null],
    [null, bishop, knight],
    [queen, null, null],
  ],
  [
    [rook, null, null],
    [king, bishop, knight],
    [null, queen, null],
  ],
  [
    [null, rook, queen],
    [king, bishop, knight],
    [null, null, null],
  ],
  [
    [null, rook, king],
    [queen, bishop, knight],
    [null, null, null],
  ],
  [
    [null, rook, null],
    [null, bishop, knight],
    [king, queen, null],
  ],
  [
    [null, rook, null],
    [null, bishop, knight],
    [null, king, queen],
  ],
  [
    [king, null, rook],
    [queen, bishop, knight],
    [null, null, null],
  ],
  [
    [null, null, rook],
    [null, bishop, knight],
    [queen, king, null],
  ],
  [
    [queen, null, null],
    [rook, bishop, knight],
    [null, king, null],
  ],
  [
    [null, null, null],
    [rook, bishop, knight],
    [queen, null, king],
  ],
  [
    [king, null, null],
    [rook, bishop, knight],
    [null, queen, null],
  ],
  [
    [null, king, queen],
    [null, bishop, knight],
    [rook, null, null],
  ],
  [
    [null, null, null],
    [null, bishop, knight],
    [rook, queen, king],
  ],
  [
    [king, null, null],
    [null, bishop, knight],
    [rook, null, queen],
  ],
  [
    [queen, king, null],
    [null, bishop, knight],
    [null, rook, null],
  ],
  [
    [null, null, null],
    [king, bishop, knight],
    [queen, rook, null],
  ],
  [
    [null, null, null],
    [null, bishop, knight],
    [king, rook, queen],
  ],
  [
    [queen, null, null],
    [king, bishop, knight],
    [null, null, rook],
  ],
  [
    [null, queen, king],
    [null, bishop, knight],
    [null, null, rook],
  ],
  [
    [king, null, null],
    [null, bishop, knight],
    [queen, null, rook],
  ],
  [
    [null, king, null],
    [null, bishop, knight],
    [null, queen, rook],
  ],
  [
    [rook, king, queen],
    [null, bishop, null],
    [knight, null, null],
  ],
  [
    [rook, null, null],
    [queen, bishop, king],
    [knight, null, null],
  ],
  [
    [rook, null, null],
    [king, bishop, queen],
    [knight, null, null],
  ],
  [
    [rook, null, null],
    [null, bishop, null],
    [knight, king, queen],
  ],
  [
    [queen, rook, king],
    [null, bishop, null],
    [knight, null, null],
  ],
  [
    [null, rook, null],
    [queen, bishop, null],
    [knight, king, null],
  ],
  [
    [null, rook, null],
    [null, bishop, queen],
    [knight, null, king],
  ],
  [
    [null, rook, null],
    [king, bishop, null],
    [knight, queen, null],
  ],
  [
    [king, rook, null],
    [null, bishop, null],
    [knight, null, queen],
  ],
  [
    [queen, null, rook],
    [null, bishop, null],
    [knight, null, king],
  ],
  [
    [null, queen, rook],
    [null, bishop, null],
    [knight, king, null],
  ],
  [
    [null, king, rook],
    [null, bishop, queen],
    [knight, null, null],
  ],
  [
    [null, null, rook],
    [null, bishop, king],
    [knight, queen, null],
  ],
  [
    [king, queen, null],
    [rook, bishop, null],
    [knight, null, null],
  ],
  [
    [null, null, null],
    [rook, bishop, queen],
    [knight, king, null],
  ],
  [
    [null, null, null],
    [rook, bishop, null],
    [knight, queen, king],
  ],
  [
    [null, null, null],
    [rook, bishop, king],
    [knight, null, queen],
  ],
  [
    [null, queen, null],
    [null, bishop, rook],
    [knight, null, king],
  ],
  [
    [null, null, queen],
    [null, bishop, rook],
    [knight, king, null],
  ],
  [
    [king, null, null],
    [null, bishop, rook],
    [knight, queen, null],
  ],
  [
    [null, king, null],
    [null, bishop, rook],
    [knight, null, queen],
  ],
  [
    [queen, null, null],
    [null, bishop, king],
    [knight, rook, null],
  ],
  [
    [king, null, queen],
    [null, bishop, null],
    [knight, rook, null],
  ],
  [
    [null, null, null],
    [queen, bishop, null],
    [knight, rook, king],
  ],
  [
    [null, null, null],
    [king, bishop, null],
    [knight, rook, queen],
  ],
  [
    [queen, king, null],
    [null, bishop, null],
    [knight, null, rook],
  ],
  [
    [null, null, king],
    [null, bishop, queen],
    [knight, null, rook],
  ],
  [
    [rook, queen, null],
    [null, bishop, null],
    [king, knight, null],
  ],
  [
    [rook, king, null],
    [queen, bishop, null],
    [null, knight, null],
  ],
  [
    [rook, null, null],
    [null, bishop, queen],
    [null, knight, king],
  ],
  [
    [null, rook, queen],
    [null, bishop, king],
    [null, knight, null],
  ],
  [
    [king, rook, null],
    [queen, bishop, null],
    [null, knight, null],
  ],
  [
    [null, rook, king],
    [null, bishop, null],
    [queen, knight, null],
  ],
  [
    [null, rook, null],
    [null, bishop, null],
    [king, knight, queen],
  ],
  [
    [queen, king, rook],
    [null, bishop, null],
    [null, knight, null],
  ],
  [
    [null, null, rook],
    [queen, bishop, null],
    [null, knight, king],
  ],
  [
    [null, null, rook],
    [null, bishop, queen],
    [king, knight, null],
  ],
  [
    [null, null, rook],
    [null, bishop, king],
    [queen, knight, null],
  ],
  [
    [null, null, rook],
    [king, bishop, null],
    [null, knight, queen],
  ],
  [
    [queen, null, null],
    [rook, bishop, null],
    [king, knight, null],
  ],
  [
    [null, queen, king],
    [rook, bishop, null],
    [null, knight, null],
  ],
  [
    [null, null, queen],
    [rook, bishop, null],
    [null, knight, king],
  ],
  [
    [null, null, king],
    [queen, bishop, rook],
    [null, knight, null],
  ],
  [
    [king, null, null],
    [null, bishop, rook],
    [queen, knight, null],
  ],
  [
    [queen, null, null],
    [null, bishop, null],
    [rook, knight, king],
  ],
  [
    [null, null, queen],
    [king, bishop, null],
    [rook, knight, null],
  ],
  [
    [null, null, king],
    [null, bishop, queen],
    [rook, knight, null],
  ],
  [
    [null, king, null],
    [null, bishop, null],
    [rook, knight, queen],
  ],
  [
    [king, queen, null],
    [null, bishop, null],
    [null, knight, rook],
  ],
  [
    [null, null, null],
    [queen, bishop, king],
    [null, knight, rook],
  ],
  [
    [null, king, null],
    [null, bishop, queen],
    [null, knight, rook],
  ],
  [
    [null, null, null],
    [king, bishop, null],
    [queen, knight, rook],
  ],
  [
    [rook, null, queen],
    [null, bishop, king],
    [null, null, knight],
  ],
  [
    [rook, null, null],
    [null, bishop, queen],
    [king, null, knight],
  ],
  [
    [rook, king, null],
    [null, bishop, null],
    [null, queen, knight],
  ],
  [
    [queen, rook, null],
    [null, bishop, null],
    [null, king, knight],
  ],
  [
    [null, rook, queen],
    [null, bishop, null],
    [king, null, knight],
  ],
  [
    [null, rook, null],
    [king, bishop, queen],
    [null, null, knight],
  ],
  [
    [null, rook, null],
    [null, bishop, king],
    [queen, null, knight],
  ],
  [
    [queen, null, rook],
    [null, bishop, null],
    [king, null, knight],
  ],
  [
    [null, queen, rook],
    [null, bishop, king],
    [null, null, knight],
  ],
  [
    [null, null, rook],
    [queen, bishop, null],
    [null, king, knight],
  ],
  [
    [king, null, rook],
    [null, bishop, null],
    [queen, null, knight],
  ],
  [
    [null, null, king],
    [rook, bishop, queen],
    [null, null, knight],
  ],
  [
    [queen, null, null],
    [king, bishop, rook],
    [null, null, knight],
  ],
  [
    [null, queen, null],
    [null, bishop, rook],
    [king, null, knight],
  ],
  [
    [king, null, queen],
    [null, bishop, rook],
    [null, null, knight],
  ],
  [
    [null, null, null],
    [null, bishop, rook],
    [queen, king, knight],
  ],
  [
    [queen, king, null],
    [null, bishop, null],
    [rook, null, knight],
  ],
  [
    [null, queen, null],
    [king, bishop, null],
    [rook, null, knight],
  ],
  [
    [null, null, queen],
    [null, bishop, null],
    [rook, king, knight],
  ],
  [
    [null, null, null],
    [queen, bishop, king],
    [rook, null, knight],
  ],
  [
    [null, null, king],
    [null, bishop, null],
    [rook, queen, knight],
  ],
  [
    [king, null, null],
    [queen, bishop, null],
    [null, rook, knight],
  ],
  [
    [knight, rook, null],
    [queen, null, king],
    [bishop, null, null],
  ],
  [
    [knight, rook, king],
    [null, null, null],
    [bishop, queen, null],
  ],
  [
    [knight, rook, null],
    [null, null, null],
    [bishop, king, queen],
  ],
  [
    [knight, queen, rook],
    [null, king, null],
    [bishop, null, null],
  ],
  [
    [knight, null, rook],
    [queen, null, null],
    [bishop, king, null],
  ],
  [
    [knight, null, rook],
    [null, null, null],
    [bishop, queen, king],
  ],
  [
    [knight, queen, king],
    [rook, null, null],
    [bishop, null, null],
  ],
  [
    [knight, null, queen],
    [rook, null, null],
    [bishop, null, king],
  ],
  [
    [knight, king, null],
    [rook, queen, null],
    [bishop, null, null],
  ],
  [
    [knight, null, null],
    [rook, null, queen],
    [bishop, king, null],
  ],
  [
    [knight, null, null],
    [rook, null, king],
    [bishop, queen, null],
  ],
  [
    [knight, null, null],
    [rook, king, null],
    [bishop, null, queen],
  ],
  [
    [knight, queen, null],
    [null, rook, null],
    [bishop, king, null],
  ],
  [
    [knight, null, queen],
    [null, rook, king],
    [bishop, null, null],
  ],
  [
    [knight, null, null],
    [king, rook, null],
    [bishop, queen, null],
  ],
  [
    [knight, null, king],
    [null, rook, null],
    [bishop, null, queen],
  ],
  [
    [knight, null, queen],
    [null, king, rook],
    [bishop, null, null],
  ],
  [
    [knight, null, king],
    [queen, null, rook],
    [bishop, null, null],
  ],
  [
    [knight, null, null],
    [null, queen, rook],
    [bishop, null, king],
  ],
  [
    [knight, queen, null],
    [null, null, king],
    [bishop, rook, null],
  ],
  [
    [knight, null, queen],
    [king, null, null],
    [bishop, rook, null],
  ],
  [
    [knight, null, null],
    [queen, king, null],
    [bishop, rook, null],
  ],
  [
    [knight, null, king],
    [null, queen, null],
    [bishop, rook, null],
  ],
  [
    [knight, king, null],
    [null, null, null],
    [bishop, rook, queen],
  ],
  [
    [knight, queen, null],
    [king, null, null],
    [bishop, null, rook],
  ],
  [
    [knight, king, null],
    [null, null, queen],
    [bishop, null, rook],
  ],
  [
    [knight, null, null],
    [null, king, null],
    [bishop, queen, rook],
  ],
  [
    [rook, knight, queen],
    [null, null, king],
    [bishop, null, null],
  ],
  [
    [rook, knight, king],
    [null, null, null],
    [bishop, queen, null],
  ],
  [
    [null, knight, rook],
    [queen, null, null],
    [bishop, null, king],
  ],
  [
    [null, knight, rook],
    [null, null, queen],
    [bishop, king, null],
  ],
  [
    [null, knight, rook],
    [null, king, null],
    [bishop, null, queen],
  ],
  [
    [queen, knight, null],
    [rook, null, king],
    [bishop, null, null],
  ],
  [
    [king, knight, queen],
    [rook, null, null],
    [bishop, null, null],
  ],
  [
    [null, knight, null],
    [rook, null, queen],
    [bishop, null, king],
  ],
  [
    [null, knight, null],
    [rook, king, null],
    [bishop, queen, null],
  ],
  [
    [queen, knight, king],
    [null, rook, null],
    [bishop, null, null],
  ],
  [
    [king, knight, null],
    [queen, rook, null],
    [bishop, null, null],
  ],
  [
    [null, knight, null],
    [king, rook, null],
    [bishop, null, queen],
  ],
  [
    [queen, knight, null],
    [king, null, rook],
    [bishop, null, null],
  ],
  [
    [null, knight, queen],
    [null, null, rook],
    [bishop, null, king],
  ],
  [
    [null, knight, null],
    [queen, king, rook],
    [bishop, null, null],
  ],
  [
    [king, knight, null],
    [null, queen, rook],
    [bishop, null, null],
  ],
  [
    [null, knight, king],
    [null, null, rook],
    [bishop, null, queen],
  ],
  [
    [queen, knight, null],
    [null, king, null],
    [bishop, rook, null],
  ],
  [
    [null, knight, null],
    [king, null, queen],
    [bishop, rook, null],
  ],
  [
    [null, knight, null],
    [null, null, king],
    [bishop, rook, queen],
  ],
  [
    [null, knight, queen],
    [null, null, null],
    [bishop, king, rook],
  ],
  [
    [null, knight, null],
    [queen, null, king],
    [bishop, null, rook],
  ],
  [
    [null, knight, null],
    [king, queen, null],
    [bishop, null, rook],
  ],
  [
    [null, knight, king],
    [null, null, queen],
    [bishop, null, rook],
  ],
  [
    [king, knight, null],
    [null, null, null],
    [bishop, queen, rook],
  ],
  [
    [rook, queen, knight],
    [king, null, null],
    [bishop, null, null],
  ],
  [
    [rook, null, knight],
    [queen, king, null],
    [bishop, null, null],
  ],
  [
    [rook, null, knight],
    [null, queen, null],
    [bishop, king, null],
  ],
  [
    [rook, null, knight],
    [null, null, null],
    [bishop, queen, king],
  ],
  [
    [null, rook, knight],
    [queen, null, null],
    [bishop, king, null],
  ],
  [
    [null, rook, knight],
    [null, queen, king],
    [bishop, null, null],
  ],
  [
    [null, rook, knight],
    [null, null, queen],
    [bishop, null, king],
  ],
  [
    [null, queen, knight],
    [rook, king, null],
    [bishop, null, null],
  ],
  [
    [king, null, knight],
    [rook, null, null],
    [bishop, null, queen],
  ],
  [
    [king, queen, knight],
    [null, rook, null],
    [bishop, null, null],
  ],
  [
    [null, king, knight],
    [queen, rook, null],
    [bishop, null, null],
  ],
  [
    [null, null, knight],
    [null, rook, queen],
    [bishop, king, null],
  ],
  [
    [null, null, knight],
    [null, rook, king],
    [bishop, null, queen],
  ],
  [
    [queen, null, knight],
    [null, null, rook],
    [bishop, null, king],
  ],
  [
    [king, null, knight],
    [queen, null, rook],
    [bishop, null, null],
  ],
  [
    [null, null, knight],
    [king, queen, rook],
    [bishop, null, null],
  ],
  [
    [null, null, knight],
    [null, king, rook],
    [bishop, queen, null],
  ],
  [
    [null, null, knight],
    [null, null, rook],
    [bishop, king, queen],
  ],
  [
    [queen, null, knight],
    [king, null, null],
    [bishop, rook, null],
  ],
  [
    [null, null, knight],
    [queen, null, king],
    [bishop, rook, null],
  ],
  [
    [king, null, knight],
    [null, queen, null],
    [bishop, rook, null],
  ],
  [
    [null, null, knight],
    [null, king, null],
    [bishop, rook, queen],
  ],
  [
    [queen, null, knight],
    [null, king, null],
    [bishop, null, rook],
  ],
  [
    [null, queen, knight],
    [null, null, king],
    [bishop, null, rook],
  ],
  [
    [null, null, knight],
    [king, null, queen],
    [bishop, null, rook],
  ],
  [
    [null, king, knight],
    [null, null, null],
    [bishop, queen, rook],
  ],
  [
    [rook, queen, null],
    [knight, null, king],
    [bishop, null, null],
  ],
  [
    [rook, null, null],
    [knight, null, queen],
    [bishop, null, king],
  ],
  [
    [rook, king, null],
    [knight, null, null],
    [bishop, queen, null],
  ],
  [
    [rook, null, null],
    [knight, king, null],
    [bishop, null, queen],
  ],
  [
    [queen, rook, null],
    [knight, null, null],
    [bishop, king, null],
  ],
  [
    [null, rook, queen],
    [knight, king, null],
    [bishop, null, null],
  ],
  [
    [king, rook, null],
    [knight, queen, null],
    [bishop, null, null],
  ],
  [
    [queen, null, rook],
    [knight, null, null],
    [bishop, null, king],
  ],
  [
    [king, queen, rook],
    [knight, null, null],
    [bishop, null, null],
  ],
  [
    [null, king, rook],
    [knight, null, queen],
    [bishop, null, null],
  ],
  [
    [null, null, rook],
    [knight, null, null],
    [bishop, king, queen],
  ],
  [
    [queen, king, null],
    [knight, rook, null],
    [bishop, null, null],
  ],
  [
    [null, queen, king],
    [knight, rook, null],
    [bishop, null, null],
  ],
  [
    [king, null, null],
    [knight, rook, queen],
    [bishop, null, null],
  ],
  [
    [null, null, null],
    [knight, rook, king],
    [bishop, queen, null],
  ],
  [
    [queen, null, null],
    [knight, king, rook],
    [bishop, null, null],
  ],
  [
    [null, queen, null],
    [knight, null, rook],
    [bishop, null, king],
  ],
  [
    [null, null, queen],
    [knight, null, rook],
    [bishop, king, null],
  ],
  [
    [null, king, null],
    [knight, queen, rook],
    [bishop, null, null],
  ],
  [
    [null, null, king],
    [knight, null, rook],
    [bishop, queen, null],
  ],
  [
    [null, king, queen],
    [knight, null, null],
    [bishop, rook, null],
  ],
  [
    [null, null, king],
    [knight, null, queen],
    [bishop, rook, null],
  ],
  [
    [king, null, null],
    [knight, null, null],
    [bishop, rook, queen],
  ],
  [
    [queen, null, king],
    [knight, null, null],
    [bishop, null, rook],
  ],
  [
    [null, queen, null],
    [knight, null, null],
    [bishop, king, rook],
  ],
  [
    [null, null, null],
    [knight, king, queen],
    [bishop, null, rook],
  ],
  [
    [rook, king, null],
    [null, queen, knight],
    [bishop, null, null],
  ],
  [
    [rook, null, null],
    [null, null, knight],
    [bishop, king, queen],
  ],
  [
    [queen, rook, null],
    [null, king, knight],
    [bishop, null, null],
  ],
  [
    [null, rook, null],
    [null, null, knight],
    [bishop, queen, king],
  ],
  [
    [null, rook, null],
    [king, null, knight],
    [bishop, null, queen],
  ],
  [
    [queen, king, rook],
    [null, null, knight],
    [bishop, null, null],
  ],
  [
    [null, null, rook],
    [null, king, knight],
    [bishop, queen, null],
  ],
  [
    [king, null, rook],
    [null, null, knight],
    [bishop, null, queen],
  ],
  [
    [null, null, queen],
    [rook, null, knight],
    [bishop, king, null],
  ],
  [
    [null, null, king],
    [rook, queen, knight],
    [bishop, null, null],
  ],
  [
    [null, king, null],
    [rook, null, knight],
    [bishop, null, queen],
  ],
  [
    [null, queen, null],
    [null, rook, knight],
    [bishop, null, king],
  ],
  [
    [null, king, queen],
    [null, rook, knight],
    [bishop, null, null],
  ],
  [
    [null, null, king],
    [queen, rook, knight],
    [bishop, null, null],
  ],
  [
    [king, null, null],
    [null, rook, knight],
    [bishop, queen, null],
  ],
  [
    [queen, null, king],
    [null, null, knight],
    [bishop, rook, null],
  ],
  [
    [null, null, queen],
    [null, king, knight],
    [bishop, rook, null],
  ],
  [
    [null, king, null],
    [queen, null, knight],
    [bishop, rook, null],
  ],
  [
    [null, null, null],
    [null, queen, knight],
    [bishop, rook, king],
  ],
  [
    [queen, null, null],
    [null, null, knight],
    [bishop, king, rook],
  ],
  [
    [king, queen, null],
    [null, null, knight],
    [bishop, null, rook],
  ],
  [
    [null, null, null],
    [queen, king, knight],
    [bishop, null, rook],
  ],
  [
    [null, null, null],
    [king, null, knight],
    [bishop, queen, rook],
  ],
  [
    [rook, king, queen],
    [null, null, null],
    [bishop, knight, null],
  ],
  [
    [rook, null, null],
    [queen, null, null],
    [bishop, knight, king],
  ],
  [
    [rook, null, null],
    [king, queen, null],
    [bishop, knight, null],
  ],
  [
    [rook, null, king],
    [null, null, queen],
    [bishop, knight, null],
  ],
  [
    [null, rook, queen],
    [null, null, null],
    [bishop, knight, king],
  ],
  [
    [null, rook, null],
    [queen, king, null],
    [bishop, knight, null],
  ],
  [
    [null, rook, null],
    [null, null, king],
    [bishop, knight, queen],
  ],
  [
    [null, null, rook],
    [queen, null, king],
    [bishop, knight, null],
  ],
  [
    [null, null, rook],
    [null, queen, null],
    [bishop, knight, king],
  ],
  [
    [king, null, rook],
    [null, null, queen],
    [bishop, knight, null],
  ],
  [
    [null, king, rook],
    [null, null, null],
    [bishop, knight, queen],
  ],
  [
    [queen, king, null],
    [rook, null, null],
    [bishop, knight, null],
  ],
  [
    [null, queen, null],
    [rook, null, null],
    [bishop, knight, king],
  ],
  [
    [null, null, null],
    [rook, queen, king],
    [bishop, knight, null],
  ],
  [
    [null, null, king],
    [rook, null, null],
    [bishop, knight, queen],
  ],
  [
    [null, queen, null],
    [king, rook, null],
    [bishop, knight, null],
  ],
  [
    [king, null, queen],
    [null, rook, null],
    [bishop, knight, null],
  ],
  [
    [null, king, null],
    [null, rook, queen],
    [bishop, knight, null],
  ],
  [
    [null, king, null],
    [queen, null, rook],
    [bishop, knight, null],
  ],
  [
    [null, null, king],
    [null, queen, rook],
    [bishop, knight, null],
  ],
  [
    [king, null, null],
    [null, null, rook],
    [bishop, knight, queen],
  ],
  [
    [queen, null, null],
    [null, null, king],
    [bishop, knight, rook],
  ],
  [
    [null, null, queen],
    [king, null, null],
    [bishop, knight, rook],
  ],
  [
    [null, null, king],
    [queen, null, null],
    [bishop, knight, rook],
  ],
  [
    [null, king, null],
    [null, queen, null],
    [bishop, knight, rook],
  ],
  [
    [rook, null, queen],
    [null, king, null],
    [bishop, null, knight],
  ],
  [
    [rook, null, null],
    [queen, null, null],
    [bishop, king, knight],
  ],
  [
    [rook, null, null],
    [null, queen, king],
    [bishop, null, knight],
  ],
  [
    [rook, king, null],
    [null, null, queen],
    [bishop, null, knight],
  ],
  [
    [rook, null, null],
    [king, null, null],
    [bishop, queen, knight],
  ],
  [
    [queen, rook, null],
    [null, null, king],
    [bishop, null, knight],
  ],
  [
    [null, rook, queen],
    [king, null, null],
    [bishop, null, knight],
  ],
  [
    [king, rook, null],
    [queen, null, null],
    [bishop, null, knight],
  ],
  [
    [null, rook, null],
    [null, null, queen],
    [bishop, king, knight],
  ],
  [
    [queen, null, rook],
    [null, null, null],
    [bishop, king, knight],
  ],
  [
    [null, queen, rook],
    [king, null, null],
    [bishop, null, knight],
  ],
  [
    [null, null, rook],
    [queen, king, null],
    [bishop, null, knight],
  ],
  [
    [null, king, rook],
    [null, queen, null],
    [bishop, null, knight],
  ],
  [
    [null, null, rook],
    [null, null, king],
    [bishop, queen, knight],
  ],
  [
    [null, queen, null],
    [rook, null, null],
    [bishop, king, knight],
  ],
  [
    [null, null, null],
    [rook, king, queen],
    [bishop, null, knight],
  ],
  [
    [null, king, null],
    [rook, null, null],
    [bishop, queen, knight],
  ],
  [
    [null, queen, null],
    [null, rook, king],
    [bishop, null, knight],
  ],
  [
    [null, null, king],
    [null, rook, null],
    [bishop, queen, knight],
  ],
  [
    [null, queen, king],
    [null, null, rook],
    [bishop, null, knight],
  ],
  [
    [null, king, queen],
    [null, null, rook],
    [bishop, null, knight],
  ],
  [
    [null, null, null],
    [null, queen, rook],
    [bishop, king, knight],
  ],
  [
    [null, null, queen],
    [null, null, king],
    [bishop, rook, knight],
  ],
  [
    [null, null, null],
    [king, queen, null],
    [bishop, rook, knight],
  ],
  [
    [king, null, null],
    [null, null, queen],
    [bishop, rook, knight],
  ],
  [
    [knight, rook, king],
    [null, null, queen],
    [null, null, bishop],
  ],
  [
    [knight, rook, null],
    [king, null, null],
    [null, queen, bishop],
  ],
  [
    [knight, king, rook],
    [null, null, queen],
    [null, null, bishop],
  ],
  [
    [knight, null, rook],
    [null, null, null],
    [queen, king, bishop],
  ],
  [
    [knight, null, rook],
    [null, king, null],
    [null, queen, bishop],
  ],
  [
    [knight, queen, null],
    [rook, king, null],
    [null, null, bishop],
  ],
  [
    [knight, null, queen],
    [rook, null, king],
    [null, null, bishop],
  ],
  [
    [knight, null, null],
    [rook, queen, null],
    [null, king, bishop],
  ],
  [
    [knight, null, null],
    [rook, null, queen],
    [king, null, bishop],
  ],
  [
    [knight, king, null],
    [rook, null, null],
    [queen, null, bishop],
  ],
  [
    [knight, queen, null],
    [null, rook, null],
    [king, null, bishop],
  ],
  [
    [knight, null, null],
    [queen, rook, king],
    [null, null, bishop],
  ],
  [
    [knight, null, null],
    [king, rook, queen],
    [null, null, bishop],
  ],
  [
    [knight, null, king],
    [null, rook, null],
    [queen, null, bishop],
  ],
  [
    [knight, queen, null],
    [null, null, rook],
    [null, king, bishop],
  ],
  [
    [knight, null, queen],
    [king, null, rook],
    [null, null, bishop],
  ],
  [
    [knight, null, null],
    [queen, null, rook],
    [king, null, bishop],
  ],
  [
    [knight, king, null],
    [null, queen, rook],
    [null, null, bishop],
  ],
  [
    [knight, null, king],
    [null, null, rook],
    [null, queen, bishop],
  ],
  [
    [knight, queen, null],
    [null, null, king],
    [rook, null, bishop],
  ],
  [
    [knight, king, queen],
    [null, null, null],
    [rook, null, bishop],
  ],
  [
    [knight, null, king],
    [queen, null, null],
    [rook, null, bishop],
  ],
  [
    [knight, null, null],
    [king, queen, null],
    [rook, null, bishop],
  ],
  [
    [knight, null, null],
    [null, null, queen],
    [rook, king, bishop],
  ],
  [
    [knight, king, null],
    [queen, null, null],
    [null, rook, bishop],
  ],
  [
    [knight, null, null],
    [null, queen, null],
    [king, rook, bishop],
  ],
  [
    [knight, null, null],
    [null, null, king],
    [queen, rook, bishop],
  ],
  [
    [rook, knight, queen],
    [null, null, null],
    [null, king, bishop],
  ],
  [
    [rook, knight, null],
    [queen, king, null],
    [null, null, bishop],
  ],
  [
    [rook, knight, king],
    [null, queen, null],
    [null, null, bishop],
  ],
  [
    [rook, knight, null],
    [king, null, null],
    [null, queen, bishop],
  ],
  [
    [queen, knight, rook],
    [null, null, null],
    [null, king, bishop],
  ],
  [
    [king, knight, rook],
    [queen, null, null],
    [null, null, bishop],
  ],
  [
    [null, knight, rook],
    [null, queen, king],
    [null, null, bishop],
  ],
  [
    [null, knight, rook],
    [null, null, queen],
    [king, null, bishop],
  ],
  [
    [null, knight, queen],
    [rook, king, null],
    [null, null, bishop],
  ],
  [
    [king, knight, null],
    [rook, queen, null],
    [null, null, bishop],
  ],
  [
    [null, knight, null],
    [rook, null, queen],
    [null, king, bishop],
  ],
  [
    [null, knight, queen],
    [king, rook, null],
    [null, null, bishop],
  ],
  [
    [null, knight, null],
    [queen, rook, null],
    [king, null, bishop],
  ],
  [
    [null, knight, null],
    [null, rook, null],
    [queen, king, bishop],
  ],
  [
    [null, knight, king],
    [null, rook, null],
    [null, queen, bishop],
  ],
  [
    [king, knight, queen],
    [null, null, rook],
    [null, null, bishop],
  ],
  [
    [null, knight, null],
    [queen, null, rook],
    [null, king, bishop],
  ],
  [
    [null, knight, king],
    [null, null, rook],
    [queen, null, bishop],
  ],
  [
    [queen, knight, null],
    [null, null, king],
    [rook, null, bishop],
  ],
  [
    [null, knight, null],
    [null, queen, null],
    [rook, king, bishop],
  ],
  [
    [king, knight, null],
    [null, null, queen],
    [rook, null, bishop],
  ],
  [
    [null, knight, null],
    [null, king, null],
    [rook, queen, bishop],
  ],
  [
    [queen, knight, king],
    [null, null, null],
    [null, rook, bishop],
  ],
  [
    [null, knight, queen],
    [null, null, null],
    [king, rook, bishop],
  ],
  [
    [king, knight, null],
    [null, null, null],
    [queen, rook, bishop],
  ],
  [
    [rook, null, knight],
    [queen, null, null],
    [king, null, bishop],
  ],
  [
    [rook, null, knight],
    [null, null, null],
    [queen, king, bishop],
  ],
  [
    [queen, rook, knight],
    [null, null, king],
    [null, null, bishop],
  ],
  [
    [null, rook, knight],
    [null, queen, null],
    [null, king, bishop],
  ],
  [
    [null, rook, knight],
    [null, king, null],
    [queen, null, bishop],
  ],
  [
    [null, rook, knight],
    [null, null, null],
    [king, queen, bishop],
  ],
  [
    [queen, null, knight],
    [rook, null, null],
    [king, null, bishop],
  ],
  [
    [null, null, knight],
    [rook, queen, king],
    [null, null, bishop],
  ],
  [
    [null, null, knight],
    [rook, king, queen],
    [null, null, bishop],
  ],
  [
    [null, king, knight],
    [rook, null, null],
    [null, queen, bishop],
  ],
  [
    [queen, null, knight],
    [null, rook, null],
    [null, king, bishop],
  ],
  [
    [null, queen, knight],
    [null, rook, king],
    [null, null, bishop],
  ],
  [
    [null, null, knight],
    [null, rook, queen],
    [king, null, bishop],
  ],
  [
    [null, null, knight],
    [king, rook, null],
    [queen, null, bishop],
  ],
  [
    [queen, null, knight],
    [null, king, rook],
    [null, null, bishop],
  ],
  [
    [null, queen, knight],
    [king, null, rook],
    [null, null, bishop],
  ],
  [
    [king, null, knight],
    [null, null, rook],
    [queen, null, bishop],
  ],
  [
    [queen, king, knight],
    [null, null, null],
    [rook, null, bishop],
  ],
  [
    [null, queen, knight],
    [null, null, null],
    [rook, king, bishop],
  ],
  [
    [null, null, knight],
    [queen, null, king],
    [rook, null, bishop],
  ],
  [
    [king, null, knight],
    [null, queen, null],
    [rook, null, bishop],
  ],
  [
    [null, queen, knight],
    [null, null, null],
    [king, rook, bishop],
  ],
  [
    [null, null, knight],
    [queen, king, null],
    [null, rook, bishop],
  ],
  [
    [null, king, knight],
    [null, queen, null],
    [null, rook, bishop],
  ],
  [
    [king, null, knight],
    [null, null, queen],
    [null, rook, bishop],
  ],
  [
    [rook, queen, null],
    [knight, null, null],
    [null, king, bishop],
  ],
  [
    [rook, king, null],
    [knight, queen, null],
    [null, null, bishop],
  ],
  [
    [rook, null, king],
    [knight, null, queen],
    [null, null, bishop],
  ],
  [
    [rook, null, null],
    [knight, king, null],
    [queen, null, bishop],
  ],
  [
    [rook, null, null],
    [knight, null, null],
    [king, queen, bishop],
  ],
  [
    [null, rook, queen],
    [knight, null, null],
    [null, king, bishop],
  ],
  [
    [null, rook, null],
    [knight, king, queen],
    [null, null, bishop],
  ],
  [
    [king, rook, null],
    [knight, null, null],
    [queen, null, bishop],
  ],
  [
    [queen, null, rook],
    [knight, king, null],
    [null, null, bishop],
  ],
  [
    [null, queen, rook],
    [knight, null, null],
    [king, null, bishop],
  ],
  [
    [king, null, rook],
    [knight, null, queen],
    [null, null, bishop],
  ],
  [
    [null, null, rook],
    [knight, null, king],
    [queen, null, bishop],
  ],
  [
    [queen, null, null],
    [knight, rook, king],
    [null, null, bishop],
  ],
  [
    [null, null, queen],
    [knight, rook, null],
    [king, null, bishop],
  ],
  [
    [null, null, null],
    [knight, rook, queen],
    [null, king, bishop],
  ],
  [
    [null, king, null],
    [knight, rook, null],
    [null, queen, bishop],
  ],
  [
    [queen, null, king],
    [knight, null, rook],
    [null, null, bishop],
  ],
  [
    [null, null, null],
    [knight, queen, rook],
    [king, null, bishop],
  ],
  [
    [null, null, null],
    [knight, null, rook],
    [queen, king, bishop],
  ],
  [
    [queen, null, null],
    [knight, null, null],
    [rook, king, bishop],
  ],
  [
    [null, null, queen],
    [knight, king, null],
    [rook, null, bishop],
  ],
  [
    [null, king, null],
    [knight, null, queen],
    [rook, null, bishop],
  ],
  [
    [queen, king, null],
    [knight, null, null],
    [null, rook, bishop],
  ],
  [
    [null, queen, null],
    [knight, king, null],
    [null, rook, bishop],
  ],
  [
    [null, null, null],
    [knight, queen, king],
    [null, rook, bishop],
  ],
  [
    [null, null, null],
    [knight, null, queen],
    [king, rook, bishop],
  ],
  [
    [null, null, king],
    [knight, null, null],
    [queen, rook, bishop],
  ],
  [
    [rook, null, queen],
    [null, king, knight],
    [null, null, bishop],
  ],
  [
    [rook, null, null],
    [queen, null, knight],
    [null, king, bishop],
  ],
  [
    [rook, null, null],
    [null, queen, knight],
    [king, null, bishop],
  ],
  [
    [rook, null, null],
    [king, null, knight],
    [queen, null, bishop],
  ],
  [
    [queen, rook, null],
    [null, null, knight],
    [king, null, bishop],
  ],
  [
    [king, rook, null],
    [queen, null, knight],
    [null, null, bishop],
  ],
  [
    [null, rook, king],
    [null, null, knight],
    [queen, null, bishop],
  ],
  [
    [null, rook, null],
    [null, king, knight],
    [null, queen, bishop],
  ],
  [
    [null, null, rook],
    [queen, king, knight],
    [null, null, bishop],
  ],
  [
    [null, king, rook],
    [null, queen, knight],
    [null, null, bishop],
  ],
  [
    [king, null, rook],
    [null, null, knight],
    [queen, null, bishop],
  ],
  [
    [null, null, rook],
    [king, null, knight],
    [null, queen, bishop],
  ],
  [
    [queen, king, null],
    [rook, null, knight],
    [null, null, bishop],
  ],
  [
    [king, queen, null],
    [rook, null, knight],
    [null, null, bishop],
  ],
  [
    [null, null, null],
    [rook, null, knight],
    [queen, king, bishop],
  ],
  [
    [null, null, king],
    [rook, null, knight],
    [null, queen, bishop],
  ],
  [
    [queen, null, null],
    [king, rook, knight],
    [null, null, bishop],
  ],
  [
    [null, king, null],
    [null, rook, knight],
    [queen, null, bishop],
  ],
  [
    [null, null, null],
    [null, rook, knight],
    [king, queen, bishop],
  ],
  [
    [null, null, queen],
    [king, null, knight],
    [rook, null, bishop],
  ],
  [
    [null, king, null],
    [queen, null, knight],
    [rook, null, bishop],
  ],
  [
    [null, null, king],
    [null, queen, knight],
    [rook, null, bishop],
  ],
  [
    [king, null, null],
    [null, null, knight],
    [rook, queen, bishop],
  ],
  [
    [null, queen, king],
    [null, null, knight],
    [null, rook, bishop],
  ],
  [
    [null, king, queen],
    [null, null, knight],
    [null, rook, bishop],
  ],
  [
    [null, null, null],
    [queen, null, knight],
    [king, rook, bishop],
  ],
  [
    [null, null, null],
    [king, queen, knight],
    [null, rook, bishop],
  ],
  [
    [null, null, null],
    [null, king, knight],
    [queen, rook, bishop],
  ],
  [
    [rook, queen, null],
    [king, null, null],
    [knight, null, bishop],
  ],
  [
    [rook, null, king],
    [queen, null, null],
    [knight, null, bishop],
  ],
  [
    [rook, null, null],
    [null, queen, null],
    [knight, king, bishop],
  ],
  [
    [queen, rook, null],
    [null, null, null],
    [knight, king, bishop],
  ],
  [
    [null, rook, null],
    [queen, null, king],
    [knight, null, bishop],
  ],
  [
    [null, rook, king],
    [null, null, null],
    [knight, queen, bishop],
  ],
  [
    [queen, king, rook],
    [null, null, null],
    [knight, null, bishop],
  ],
  [
    [null, queen, rook],
    [null, null, king],
    [knight, null, bishop],
  ],
  [
    [null, null, rook],
    [king, null, queen],
    [knight, null, bishop],
  ],
  [
    [king, null, rook],
    [null, null, null],
    [knight, queen, bishop],
  ],
  [
    [null, queen, null],
    [rook, null, null],
    [knight, king, bishop],
  ],
  [
    [null, king, queen],
    [rook, null, null],
    [knight, null, bishop],
  ],
  [
    [null, null, null],
    [rook, king, null],
    [knight, queen, bishop],
  ],
  [
    [null, null, queen],
    [null, rook, null],
    [knight, king, bishop],
  ],
  [
    [king, null, null],
    [queen, rook, null],
    [knight, null, bishop],
  ],
  [
    [null, null, king],
    [null, rook, queen],
    [knight, null, bishop],
  ],
  [
    [null, null, null],
    [king, rook, null],
    [knight, queen, bishop],
  ],
  [
    [null, queen, king],
    [null, null, rook],
    [knight, null, bishop],
  ],
  [
    [null, null, queen],
    [null, king, rook],
    [knight, null, bishop],
  ],
  [
    [king, queen, null],
    [null, null, null],
    [knight, rook, bishop],
  ],
  [
    [null, null, queen],
    [king, null, null],
    [knight, rook, bishop],
  ],
  [
    [null, null, king],
    [null, queen, null],
    [knight, rook, bishop],
  ],
  [
    [null, null, null],
    [null, king, queen],
    [knight, rook, bishop],
  ],
  [
    [rook, queen, king],
    [null, null, null],
    [null, knight, bishop],
  ],
  [
    [rook, null, null],
    [null, null, queen],
    [king, knight, bishop],
  ],
  [
    [null, rook, null],
    [null, queen, null],
    [king, knight, bishop],
  ],
  [
    [null, rook, null],
    [king, null, queen],
    [null, knight, bishop],
  ],
  [
    [null, rook, null],
    [null, null, king],
    [queen, knight, bishop],
  ],
  [
    [queen, null, rook],
    [king, null, null],
    [null, knight, bishop],
  ],
  [
    [king, queen, rook],
    [null, null, null],
    [null, knight, bishop],
  ],
  [
    [null, null, rook],
    [null, king, queen],
    [null, knight, bishop],
  ],
  [
    [queen, null, null],
    [rook, null, king],
    [null, knight, bishop],
  ],
  [
    [null, queen, null],
    [rook, null, null],
    [king, knight, bishop],
  ],
  [
    [king, null, queen],
    [rook, null, null],
    [null, knight, bishop],
  ],
  [
    [null, null, null],
    [rook, king, null],
    [queen, knight, bishop],
  ],
  [
    [queen, null, null],
    [null, rook, null],
    [king, knight, bishop],
  ],
  [
    [null, king, queen],
    [null, rook, null],
    [null, knight, bishop],
  ],
  [
    [null, null, king],
    [queen, rook, null],
    [null, knight, bishop],
  ],
  [
    [king, null, null],
    [null, rook, null],
    [queen, knight, bishop],
  ],
  [
    [queen, king, null],
    [null, null, rook],
    [null, knight, bishop],
  ],
  [
    [null, queen, null],
    [null, king, rook],
    [null, knight, bishop],
  ],
  [
    [king, null, null],
    [queen, null, rook],
    [null, knight, bishop],
  ],
  [
    [null, queen, null],
    [king, null, null],
    [rook, knight, bishop],
  ],
  [
    [null, null, null],
    [queen, king, null],
    [rook, knight, bishop],
  ],
];
