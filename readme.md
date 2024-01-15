Stencil 4 + Jest shadowDom issue

- Run `npm --prefix ./stencil-jest install && npm --prefix ./bug-stencil-jest install`
- In `stencil-jest`, run `npm run build`
- In `stencil-jest`, run `npm link`
- In `bug-stencil-jest`, run `npm link stencil-jest`
- In `bug-stencil-jest`, run `npm run test`

The test will fail.

The test succeeds when setting ``shadowDom: false`` in the Stencil component.
