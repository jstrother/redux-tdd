const sum = (state = 0, action) => {
  switch (action.type) {
    case 'ADDS_NUMBER':
      return action.number;
  }
};

module.exports = {
  sum
};