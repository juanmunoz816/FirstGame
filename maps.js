/*
 * Reglas:
 * El final de cada nivel debe ser el inicio del siguiente
*/

const emojis = {
    '-': ' ',
    'O': '🌌',
    'X': '🌑',
    'I': '👾',
    'PLAYER': '🛸',
    'BOMB_COLLISION': '💥',
    'GAME_OVER': '☠️',
    'WIN': '⭐',
    'lives': '🛸',
  };
  
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);

  maps.push(`
  O-XXXXXXXXX
  X---XXXXXXX
  XXX-----XXX
  XXXXXXX-XXX
  XXXXXXX-XXX
  XXX-----XXX
  XXX-XXXXXXX
  XXX-XXXXXXX
  XXX-----IXX
  XXXXXXXXXXX
`);

maps.push(`
XXXXXI---XX
X----XXX-XX
X-XX-XXX-XX
X---------X
XXXXX-XXXX-
XXXXX------
XXXXXXX-XXX
--------X--
-XXXXXXXOXX
---------XX
`);