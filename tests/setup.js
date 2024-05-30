import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom';
import '@testing-library/jest-dom';


expect.extend(matchers);

expect.extend(matchers);

afterEach(() => {
  cleanup();
});