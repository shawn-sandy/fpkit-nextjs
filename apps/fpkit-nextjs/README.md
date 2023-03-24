# README

Test setup

```bash
// package setup
vitest jsdom c8
@testing-library/jest-dom @testing-library/react @testing-library/user-event @types/react-test-renderer react-test-renderer
```

Setup.js

```js
import '@testing-library/jest-dom'

// *SOURCE https://markus.oberlehner.net/blog/using-testing-library-jest-dom-with-vitest/?s=09&utm_source=pocket_mylist
import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

expect.extend(matchers);
```

Vite.config.js

```js
/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom", // add jsdom
    setupFiles: "./src/test/setup.ts", // setup includes
    coverage: {
      // config coverage
      reporter: ["text", "html"], // generate coverage reports
      exclude: [
        // dont test the following files
        "node_modules/",
        "src/test/setup.ts",
      ],
    },
  },
});
```

## Example test

```tsx
import React from 'react';

import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';

import App from '../App'
describe('App renders correctly', () => {

  test('renders without crashing', () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
})
```
