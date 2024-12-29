# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2024-12-29)

<section class="packages">

### Packages

<section class="package" id="random-base-minstd-shuffle-unreleased">

#### [@stdlib/random/base/minstd-shuffle](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/minstd-shuffle)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`ff528da`](https://github.com/stdlib-js/stdlib/commit/ff528da57f135041fb78f550a9e35cf0cd904b1a) - address lint error

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-mt19937-unreleased">

#### [@stdlib/random/base/mt19937](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/mt19937)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`09483ae`](https://github.com/stdlib-js/stdlib/commit/09483ae5cf6ed8edfce7d64d36a31339bc3e6e06) - update documentation to reflect correct seed range

</section>

<!-- /.bug-fixes -->

<section class="issues">

##### Closed Issues

This release closes the following issue:

[#1963](https://github.com/stdlib-js/stdlib/issues/1963)

</section>

<!-- /.issues -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#1963](https://github.com/stdlib-js/stdlib/issues/1963)

</section>

<!-- /.issues -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`b87254d`](https://github.com/stdlib-js/stdlib/commit/b87254d4535a3b90bf3d0068750ed6e9ca5dbc85) - **docs:** fix parameter descriptions in Weibull distribution packages _(by Philipp Burckhardt)_
-   [`90e96d0`](https://github.com/stdlib-js/stdlib/commit/90e96d01b7a32ec3b71caf3e5f57528338199a8f) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`8553770`](https://github.com/stdlib-js/stdlib/commit/85537708442675d6bc1bf5dad5aaf252cecb82ac) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`a78f7d1`](https://github.com/stdlib-js/stdlib/commit/a78f7d1b859b6b1d7b0bc0ee4daf76789e3e0910) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`aaa391a`](https://github.com/stdlib-js/stdlib/commit/aaa391a46214c21dca294506d06ac0b3d59512ce) - **chore:** fix typos _(by Philipp Burckhardt)_
-   [`3be9ed0`](https://github.com/stdlib-js/stdlib/commit/3be9ed0b9f4357cbfc4a92fe0e12f4aedd38a9dc) - **docs:** update related packages sections [(#2221)](https://github.com/stdlib-js/stdlib/pull/2221) _(by stdlib-bot)_
-   [`9ed7d0e`](https://github.com/stdlib-js/stdlib/commit/9ed7d0e7d57edb5ad0dfb65c944bed87d475cbf3) - **chore:** add missing trailing newlines _(by Philipp Burckhardt)_
-   [`ff528da`](https://github.com/stdlib-js/stdlib/commit/ff528da57f135041fb78f550a9e35cf0cd904b1a) - **fix:** address lint error _(by Athan Reines)_
-   [`09483ae`](https://github.com/stdlib-js/stdlib/commit/09483ae5cf6ed8edfce7d64d36a31339bc3e6e06) - **fix:** update documentation to reflect correct seed range _(by Athan Reines)_
-   [`28433d6`](https://github.com/stdlib-js/stdlib/commit/28433d637a39abec34dddc51d88c59fdc7c38f3a) - **docs:** clean-up C function parameter and return annotations _(by Philipp Burckhardt)_
-   [`9f2bf9c`](https://github.com/stdlib-js/stdlib/commit/9f2bf9c4e7939a4ed706e6dfcf2e4b18abe8900c) - **docs:** update related packages sections  [(#1907)](https://github.com/stdlib-js/stdlib/pull/1907) _(by stdlib-bot)_
-   [`f626157`](https://github.com/stdlib-js/stdlib/commit/f6261578c6f86b707b02059953c433ca5fb01d31) - **docs:** update related packages sections [(#1744)](https://github.com/stdlib-js/stdlib/pull/1744) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

<section class="packages">

### Packages

<section class="package" id="random-base-v0.2.1">

#### [@stdlib/random/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base)

<details>

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`31aff93`](https://github.com/stdlib-js/stdlib/commit/31aff930532b53e34d2c7386684375a079fcf6bb): deprecate C APIs in favor of `random/base/shared`

    -   To migrate, users should explicitly depend on `@stdlib/random-base/shared`
        and update their include paths accordingly.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-shared-v0.2.1">

#### [@stdlib/random/base/shared](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/shared)

<details>

<section class="features">

##### Features

-   [`03d7a3a`](https://github.com/stdlib-js/stdlib/commit/03d7a3a5a3a4e591299993d9fb9ee2d2dafe4263) - add `random/base/shared`

</section>

<!-- /.features -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`31aff93`](https://github.com/stdlib-js/stdlib/commit/31aff930532b53e34d2c7386684375a079fcf6bb): deprecate C APIs in favor of `random/base/shared`

    -   To migrate, users should explicitly depend on `@stdlib/random-base/shared`
        and update their include paths accordingly.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`6236c9f`](https://github.com/stdlib-js/stdlib/commit/6236c9f42238c8e6dd0ae1e7d4f8fc7ff6a1a729) - **chore:** update package meta data [(#1377)](https://github.com/stdlib-js/stdlib/pull/1377) _(by stdlib-bot, Athan Reines)_
-   [`31aff93`](https://github.com/stdlib-js/stdlib/commit/31aff930532b53e34d2c7386684375a079fcf6bb) - **remove:** remove C APIs in favor of `random/base/shared` _(by Athan Reines)_
-   [`3f6ef04`](https://github.com/stdlib-js/stdlib/commit/3f6ef04f5eae399f3293ae98883ed3263ffe2c59) - **refactor:** use shared package _(by Athan Reines)_
-   [`9b5486c`](https://github.com/stdlib-js/stdlib/commit/9b5486ce97624b5462be1fc1d2f54f14cb3b7ada) - **refactor:** use shared package _(by Athan Reines)_
-   [`019b3ce`](https://github.com/stdlib-js/stdlib/commit/019b3ce8c87b3a38625bad1973a57ab36ae8beb7) - **refactor:** use shared package _(by Athan Reines)_
-   [`382c8bb`](https://github.com/stdlib-js/stdlib/commit/382c8bb95f6611f467d0a8159fd5fbb27b73e4f8) - **refactor:** use shared package _(by Athan Reines)_
-   [`748d77d`](https://github.com/stdlib-js/stdlib/commit/748d77d1e18398d92a8d9c7b7d50776e90c4bf6a) - **refactor:** use shared package _(by Athan Reines)_
-   [`00ca7c2`](https://github.com/stdlib-js/stdlib/commit/00ca7c2fd1337ba0e8b35487ed729188d4cdcea7) - **refactor:** use shared package _(by Athan Reines)_
-   [`bc091c6`](https://github.com/stdlib-js/stdlib/commit/bc091c62e4dff04149b0da2b5ba56edbe96e7a91) - **style:** address compiler warnings _(by Athan Reines)_
-   [`03d7a3a`](https://github.com/stdlib-js/stdlib/commit/03d7a3a5a3a4e591299993d9fb9ee2d2dafe4263) - **feat:** add `random/base/shared` _(by Athan Reines)_
-   [`1dc5966`](https://github.com/stdlib-js/stdlib/commit/1dc5966c272972122ca1bf57382deab6c432a37d) - **docs:** update related packages sections [(#1361)](https://github.com/stdlib-js/stdlib/pull/1361) _(by stdlib-bot)_
-   [`4315e33`](https://github.com/stdlib-js/stdlib/commit/4315e33177a67ff0ca097e7dcf91c40f90380e91) - **docs:** update related packages sections  [(#1320)](https://github.com/stdlib-js/stdlib/pull/1320) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="packages">

### Packages

<section class="package" id="random-base-frechet-v0.2.0">

#### [@stdlib/random/base/frechet](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/frechet)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`80199f6`](https://github.com/stdlib-js/stdlib/commit/80199f66ace06d749d9c736189cb6825ddfbaa56) - update variable name to reflect arity

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-hypergeometric-v0.2.0">

#### [@stdlib/random/base/hypergeometric](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/hypergeometric)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`80199f6`](https://github.com/stdlib-js/stdlib/commit/80199f66ace06d749d9c736189cb6825ddfbaa56) - update variable name to reflect arity

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-triangular-v0.2.0">

#### [@stdlib/random/base/triangular](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/triangular)

<details>

<section class="bug-fixes">

##### Bug Fixes

-   [`80199f6`](https://github.com/stdlib-js/stdlib/commit/80199f66ace06d749d9c736189cb6825ddfbaa56) - update variable name to reflect arity

</section>

<!-- /.bug-fixes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`7137673`](https://github.com/stdlib-js/stdlib/commit/7137673f0798ef13d7c9fd7becf78e557b1d583b) - **docs:** update related packages sections (#1315) _(by stdlib-bot)_
-   [`0b15ebe`](https://github.com/stdlib-js/stdlib/commit/0b15ebe4d724b7aec7f27c47f4886bdac3adb7ae) - **docs:** update related packages sections  [(#1310)](https://github.com/stdlib-js/stdlib/pull/1310) _(by stdlib-bot)_
-   [`d675ecd`](https://github.com/stdlib-js/stdlib/commit/d675ecd88ddfe5f38e484740e951d7440247201a) - **docs:** update related packages sections (#1309) _(by stdlib-bot)_
-   [`6008b22`](https://github.com/stdlib-js/stdlib/commit/6008b22d8a9ccc5a5066241c4d37f9a70af7d8ae) - **docs:** update related packages sections [(#1308)](https://github.com/stdlib-js/stdlib/pull/1308) _(by stdlib-bot)_
-   [`97992ab`](https://github.com/stdlib-js/stdlib/commit/97992abedd7d2a3d6daf644c6b12e979642c6783) - **docs:** update related packages sections [(#1301)](https://github.com/stdlib-js/stdlib/pull/1301) _(by stdlib-bot)_
-   [`42b1c7e`](https://github.com/stdlib-js/stdlib/commit/42b1c7e18fadf89854f359a3a01cf37c66dd66cc) - **docs:** update related packages sections [(#1290)](https://github.com/stdlib-js/stdlib/pull/1290) _(by stdlib-bot)_
-   [`2786c2e`](https://github.com/stdlib-js/stdlib/commit/2786c2e5c22e189f1d29eabc5a2225f3b728f051) - **docs:** update related packages sections [(#1283)](https://github.com/stdlib-js/stdlib/pull/1283) _(by stdlib-bot)_
-   [`afa953b`](https://github.com/stdlib-js/stdlib/commit/afa953bde057e396e614ea35b7a32fd5b77479ea) - **docs:** update related packages sections [(#1281)](https://github.com/stdlib-js/stdlib/pull/1281) _(by stdlib-bot)_
-   [`20b6f2f`](https://github.com/stdlib-js/stdlib/commit/20b6f2f1e7f623fb7e987fbe648e4def2112dc12) - **docs:** update related packages sections [(#1280)](https://github.com/stdlib-js/stdlib/pull/1280) _(by stdlib-bot)_
-   [`4448d6e`](https://github.com/stdlib-js/stdlib/commit/4448d6eb63a6b693e2140d2b29be54765850c31c) - **docs:** update related packages sections [(#1277)](https://github.com/stdlib-js/stdlib/pull/1277) _(by stdlib-bot)_
-   [`f04074a`](https://github.com/stdlib-js/stdlib/commit/f04074abd0c151f1b92c58b8cd71ecb9279803e0) - **docs:** update related packages sections [(#1276)](https://github.com/stdlib-js/stdlib/pull/1276) _(by stdlib-bot)_
-   [`a2158dd`](https://github.com/stdlib-js/stdlib/commit/a2158dda7817e0cd367300884a6c78fd0dcbf4c0) - **docs:** update related packages sections [(#1275)](https://github.com/stdlib-js/stdlib/pull/1275) _(by stdlib-bot)_
-   [`ebc4ef4`](https://github.com/stdlib-js/stdlib/commit/ebc4ef41984741deef8134ed7fa3003f5a1e2e71) - **docs:** update related packages sections [(#1273)](https://github.com/stdlib-js/stdlib/pull/1273) _(by stdlib-bot)_
-   [`c5ec686`](https://github.com/stdlib-js/stdlib/commit/c5ec686da087534151644c4fe060656dbec0d5c8) - **docs:** update related packages sections [(#1272)](https://github.com/stdlib-js/stdlib/pull/1272) _(by stdlib-bot)_
-   [`1e909db`](https://github.com/stdlib-js/stdlib/commit/1e909dbafa41bfc46d3f5525a73b5f46cd7a5392) - **docs:** update related packages sections [(#1267)](https://github.com/stdlib-js/stdlib/pull/1267) _(by stdlib-bot)_
-   [`80199f6`](https://github.com/stdlib-js/stdlib/commit/80199f66ace06d749d9c736189cb6825ddfbaa56) - **fix:** update variable name to reflect arity _(by Athan Reines)_
-   [`4368c3b`](https://github.com/stdlib-js/stdlib/commit/4368c3b25edf5b315684db874ea81d1812de0adb) - **chore:** fix variable names _(by Philipp Burckhardt)_
-   [`6e77487`](https://github.com/stdlib-js/stdlib/commit/6e774879dec6cc6dfb006b2d153b7b80bfe33dec) - **chore:** fix variable names _(by Philipp Burckhardt)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`8ef1f9e`](https://github.com/stdlib-js/stdlib/commit/8ef1f9eb45527886ba9b0c341704c8ffe6cffbb3) - **docs:** update related packages sections [(#1233)](https://github.com/stdlib-js/stdlib/pull/1233) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-12-20)

<section class="packages">

### Packages

</section>

<!-- /.packages -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="packages">

### Packages

<section class="package" id="random-base-v0.1.0">

#### [@stdlib/random/base](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-arcsine-v0.1.0">

#### [@stdlib/random/base/arcsine](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/arcsine)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-bernoulli-v0.1.0">

#### [@stdlib/random/base/bernoulli](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/bernoulli)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-beta-v0.1.0">

#### [@stdlib/random/base/beta](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/beta)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-betaprime-v0.1.0">

#### [@stdlib/random/base/betaprime](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/betaprime)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-box-muller-v0.1.0">

#### [@stdlib/random/base/box-muller](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/box-muller)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-cauchy-v0.1.0">

#### [@stdlib/random/base/cauchy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/cauchy)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-chi-v0.1.0">

#### [@stdlib/random/base/chi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/chi)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-chisquare-v0.1.0">

#### [@stdlib/random/base/chisquare](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/chisquare)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-cosine-v0.1.0">

#### [@stdlib/random/base/cosine](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/cosine)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-discrete-uniform-v0.1.0">

#### [@stdlib/random/base/discrete-uniform](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/discrete-uniform)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-erlang-v0.1.0">

#### [@stdlib/random/base/erlang](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/erlang)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-exponential-v0.1.0">

#### [@stdlib/random/base/exponential](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/exponential)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-f-v0.1.0">

#### [@stdlib/random/base/f](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/f)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-frechet-v0.1.0">

#### [@stdlib/random/base/frechet](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/frechet)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-gamma-v0.1.0">

#### [@stdlib/random/base/gamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/gamma)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-geometric-v0.1.0">

#### [@stdlib/random/base/geometric](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/geometric)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-gumbel-v0.1.0">

#### [@stdlib/random/base/gumbel](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/gumbel)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-hypergeometric-v0.1.0">

#### [@stdlib/random/base/hypergeometric](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/hypergeometric)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-improved-ziggurat-v0.1.0">

#### [@stdlib/random/base/improved-ziggurat](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/improved-ziggurat)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-invgamma-v0.1.0">

#### [@stdlib/random/base/invgamma](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/invgamma)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-kumaraswamy-v0.1.0">

#### [@stdlib/random/base/kumaraswamy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/kumaraswamy)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-laplace-v0.1.0">

#### [@stdlib/random/base/laplace](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/laplace)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-levy-v0.1.0">

#### [@stdlib/random/base/levy](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/levy)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-logistic-v0.1.0">

#### [@stdlib/random/base/logistic](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/logistic)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-lognormal-v0.1.0">

#### [@stdlib/random/base/lognormal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/lognormal)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-minstd-v0.1.0">

#### [@stdlib/random/base/minstd](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/minstd)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-minstd-shuffle-v0.1.0">

#### [@stdlib/random/base/minstd-shuffle](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/minstd-shuffle)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-mt19937-v0.1.0">

#### [@stdlib/random/base/mt19937](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/mt19937)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-negative--v0.1.0">

#### [@stdlib/random/base/negative-](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/negative-)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-normal-v0.1.0">

#### [@stdlib/random/base/normal](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/normal)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-pareto-type1-v0.1.0">

#### [@stdlib/random/base/pareto-type1](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/pareto-type1)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-poisson-v0.1.0">

#### [@stdlib/random/base/poisson](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/poisson)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-randi-v0.1.0">

#### [@stdlib/random/base/randi](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/randi)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-randn-v0.1.0">

#### [@stdlib/random/base/randn](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/randn)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-randu-v0.1.0">

#### [@stdlib/random/base/randu](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/randu)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-rayleigh-v0.1.0">

#### [@stdlib/random/base/rayleigh](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/rayleigh)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-reviver-v0.1.0">

#### [@stdlib/random/base/reviver](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/reviver)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-t-v0.1.0">

#### [@stdlib/random/base/t](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/t)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-triangular-v0.1.0">

#### [@stdlib/random/base/triangular](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/triangular)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-uniform-v0.1.0">

#### [@stdlib/random/base/uniform](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/uniform)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

<section class="package" id="random-base-weibull-v0.1.0">

#### [@stdlib/random/base/weibull](https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/weibull)

<details>

<section class="features">

##### Features

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - update minimum TypeScript version

</section>

<!-- /.features -->

<section class="breaking-changes">

##### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

</details>

</section>

<!-- /.package -->

</section>

<!-- /.packages -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

<section class="commits">

### Commits

<details>

-   [`efe050d`](https://github.com/stdlib-js/stdlib/commit/efe050dbf3d17bd6929da255fa079c0324afc213) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`f816a7a`](https://github.com/stdlib-js/stdlib/commit/f816a7aa9cba1a72974c86861e3db8e06bf0faa4) - **build:** add backslashes and always include a sign _(by Philipp Burckhardt)_
-   [`fd84d3b`](https://github.com/stdlib-js/stdlib/commit/fd84d3b81c150897efba1a370ec9a128fca289bc) - **build:** swallow curl errors _(by Philipp Burckhardt)_
-   [`41ffb52`](https://github.com/stdlib-js/stdlib/commit/41ffb5217c9b2473d83840caf79522d653468e09) - **build:** include change in coverage _(by Philipp Burckhardt)_
-   [`64c8e5a`](https://github.com/stdlib-js/stdlib/commit/64c8e5aefe34bda02258ebae3ee4be8e83e6a040) - **build:** add further backslashes and remove blank comments _(by Philipp Burckhardt)_
-   [`33a5bc7`](https://github.com/stdlib-js/stdlib/commit/33a5bc7c5bb29d2b41746bc2cb7b7eb28a7156f0) - **build:** color by whether full code coverage has been achieved _(by Philipp Burckhardt)_
-   [`238c3f8`](https://github.com/stdlib-js/stdlib/commit/238c3f8ef2d03b010e8d3b4a18be183a3899c7c0) - **build:** update checkout settings and push URL _(by Philipp Burckhardt)_
-   [`8bd8737`](https://github.com/stdlib-js/stdlib/commit/8bd87377b3b19869c39f1b4b2ed2588c8bc8de7d) - **build:** upload coverage reports _(by Philipp Burckhardt)_
-   [`10c6209`](https://github.com/stdlib-js/stdlib/commit/10c6209e72680534f86acca37ec35ab3a42f81c3) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`e7f78f9`](https://github.com/stdlib-js/stdlib/commit/e7f78f9b116a69fd0cac2ab4a0a73c152526930a) - **refactor:** swap out copy for assign in base random packages _(by Philipp Burckhardt)_
-   [`28e1c84`](https://github.com/stdlib-js/stdlib/commit/28e1c84390d88044883c9ef940a12f38d66ea3ef) - **docs:** resolve C lint errors _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

