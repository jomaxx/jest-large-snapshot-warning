# jest-large-snapshot-warning

Add warnings to large snapshots!

## Setup

```bash
# install
yarn add --dev jest-large-snapshot-warning
```

```js
// my.test.js
import "jest-large-snapshot-warning";

test("large snapshot", () => {
  expect(/* large object */).toMatchSnapshot();
});
```

### setMaxSnapshotSize

The default max size is `50`.

```js
// my.test.js
import { setMaxSnapshotSize } "jest-large-snapshot-warning";

setMaxSnapshotSize(10);

test("large snapshot", () => {
  expect(/* large object */).toMatchSnapshot();
});
```

### setupFiles

To setup a max snapshot size for all test suites, use the [setupFiles](https://jestjs.io/docs/en/configuration.html#setupfiles-array) option in your jest config.

```js
// setupTest.js
import { setMaxSnapshotSize } "jest-large-snapshot-warning";

setMaxSnapshotSize(10);
```

```json
{
  "setupFiles": ["./setupTest.js"]
}
```
