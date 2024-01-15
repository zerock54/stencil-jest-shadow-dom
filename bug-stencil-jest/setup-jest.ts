import { applyPolyfills, defineCustomElements } from 'stencil-jest/loader';
import '@testing-library/jest-dom';

jest.setTimeout(20000);

beforeEach(async () => {
  await applyPolyfills();
  await defineCustomElements(window);
});
