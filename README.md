# NPM Release Test

[![Build Status](https://travis-ci.org/daenamkim/npm-release-test.svg?branch=master)](https://travis-ci.org/daenamkim/npm-release-test)
[![Coverage Status](https://coveralls.io/repos/github/daenamkim/npm-release-test/badge.svg?branch=master)](https://coveralls.io/github/daenamkim/npm-release-test?branch=master)


- Basically follow [Reference](https://medium.com/@nilayvishwakarma/build-an-npm-package-with-typescript-by-nilay-vishwakarma-f303d7072f80)
- Replace a demo function as below because I want to compare to types too
  ```ts
  export function IsNullOrEmpty(str: string): boolean {
    return !str || (!!str && str.trim().length === 0);
  }
  ```
- Must run `npm version [YOUR VERSION]` to run `preversion` and `postversion`, add a tag in GitHub repo before `npm publish`
- Do not add `dist/` in `.npmignore`, it must be included but `coverage/` and `test/`
