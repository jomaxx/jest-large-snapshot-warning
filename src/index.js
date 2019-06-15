let MAX_SIZE = 50;
let serializing = false;

expect.addSnapshotSerializer({
  test(val) {
    return !serializing;
  },

  print(val, serialize) {
    try {
      serializing = true;
      const result = serialize(val);
      return result.split("\n").length > MAX_SIZE
        ? `WARNING: THIS IS A LARGE SNAPSHOT!\n\n${result}`
        : result;
    } finally {
      serializing = false;
    }
  }
});

module.exports = {
  setMaxSnapshotSize(val) {
    MAX_SIZE = val;
  }
};
