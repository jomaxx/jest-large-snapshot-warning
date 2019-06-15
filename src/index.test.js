const { setMaxSnapshotSize } = require("./");

setMaxSnapshotSize(3);

test("large snapshot", () => {
  expect({ a: 1, b: 2 }).toMatchSnapshot();
});

test("large snapshot (inline)", () => {
  expect({ a: 1, b: 2 }).toMatchInlineSnapshot(`
    WARNING: THIS IS A LARGE SNAPSHOT!

    Object {
      "a": 1,
      "b": 2,
    }
  `);
});

test("small snapshot", () => {
  expect({ a: 1 }).toMatchSnapshot();
});

test("small snapshot (inline)", () => {
  expect({ a: 1 }).toMatchInlineSnapshot(`
    Object {
      "a": 1,
    }
  `);
});
