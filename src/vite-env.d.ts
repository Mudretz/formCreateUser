/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare namespace jest {
    interface Matchers {
        toMatchImageSnapshot(): CustomMatcherResult;
    }
}
