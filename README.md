<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Pseudorandom Number Generators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base (i.e., lower-level) pseudorandom number generators (PRNGs).

<section class="installation">

## Installation

```bash
npm install @stdlib/random-base
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var random = require( '@stdlib/random-base' );
```

#### random

Namespace containing "base" (i.e., lower-level) pseudorandom number generators (PRNGs).

```javascript
var ns = random;
// returns {...}
```

The namespace contains the following PRNGs:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`arcsine( a, b )`][@stdlib/random/base/arcsine]</span><span class="delimiter">: </span><span class="description">arcsine distributed pseudorandom numbers.</span>
-   <span class="signature">[`bernoulli( p )`][@stdlib/random/base/bernoulli]</span><span class="delimiter">: </span><span class="description">Bernoulli distributed pseudorandom numbers.</span>
-   <span class="signature">[`beta( alpha, beta )`][@stdlib/random/base/beta]</span><span class="delimiter">: </span><span class="description">beta distributed pseudorandom numbers.</span>
-   <span class="signature">[`betaprime( alpha, beta )`][@stdlib/random/base/betaprime]</span><span class="delimiter">: </span><span class="description">beta prime distributed pseudorandom numbers.</span>
-   <span class="signature">[`binomial( n, p )`][@stdlib/random/base/binomial]</span><span class="delimiter">: </span><span class="description">binomial distributed pseudorandom numbers.</span>
-   <span class="signature">[`boxMuller()`][@stdlib/random/base/box-muller]</span><span class="delimiter">: </span><span class="description">standard normally distributed pseudorandom numbers using the Box-Muller transform.</span>
-   <span class="signature">[`cauchy( x0, gamma )`][@stdlib/random/base/cauchy]</span><span class="delimiter">: </span><span class="description">Cauchy distributed pseudorandom numbers.</span>
-   <span class="signature">[`chi( k )`][@stdlib/random/base/chi]</span><span class="delimiter">: </span><span class="description">Chi distributed pseudorandom numbers.</span>
-   <span class="signature">[`chisquare( k )`][@stdlib/random/base/chisquare]</span><span class="delimiter">: </span><span class="description">Chi-square distributed pseudorandom numbers.</span>
-   <span class="signature">[`cosine( mu, s )`][@stdlib/random/base/cosine]</span><span class="delimiter">: </span><span class="description">raised cosine distributed pseudorandom numbers.</span>
-   <span class="signature">[`discreteUniform( a, b )`][@stdlib/random/base/discrete-uniform]</span><span class="delimiter">: </span><span class="description">discrete uniform distributed pseudorandom numbers.</span>
-   <span class="signature">[`erlang( k, lambda )`][@stdlib/random/base/erlang]</span><span class="delimiter">: </span><span class="description">Erlang distributed pseudorandom numbers.</span>
-   <span class="signature">[`exponential( lambda )`][@stdlib/random/base/exponential]</span><span class="delimiter">: </span><span class="description">exponentially distributed pseudorandom numbers.</span>
-   <span class="signature">[`f( d1, d2 )`][@stdlib/random/base/f]</span><span class="delimiter">: </span><span class="description">F distributed pseudorandom numbers.</span>
-   <span class="signature">[`frechet( alpha, s, m )`][@stdlib/random/base/frechet]</span><span class="delimiter">: </span><span class="description">Fréchet distributed pseudorandom numbers.</span>
-   <span class="signature">[`gamma( alpha, beta )`][@stdlib/random/base/gamma]</span><span class="delimiter">: </span><span class="description">gamma distributed pseudorandom numbers.</span>
-   <span class="signature">[`geometric( p )`][@stdlib/random/base/geometric]</span><span class="delimiter">: </span><span class="description">geometric distributed pseudorandom numbers.</span>
-   <span class="signature">[`gumbel( mu, beta )`][@stdlib/random/base/gumbel]</span><span class="delimiter">: </span><span class="description">Gumbel distributed pseudorandom numbers.</span>
-   <span class="signature">[`hypergeometric( N, K, n )`][@stdlib/random/base/hypergeometric]</span><span class="delimiter">: </span><span class="description">hypergeometric distributed pseudorandom numbers.</span>
-   <span class="signature">[`improvedZiggurat()`][@stdlib/random/base/improved-ziggurat]</span><span class="delimiter">: </span><span class="description">standard normally distributed pseudorandom numbers using the Improved Ziggurat method.</span>
-   <span class="signature">[`invgamma( alpha, beta )`][@stdlib/random/base/invgamma]</span><span class="delimiter">: </span><span class="description">inverse gamma distributed pseudorandom numbers.</span>
-   <span class="signature">[`kumaraswamy( a, b )`][@stdlib/random/base/kumaraswamy]</span><span class="delimiter">: </span><span class="description">Kumaraswamy's double bounded distributed pseudorandom numbers.</span>
-   <span class="signature">[`laplace( mu, b )`][@stdlib/random/base/laplace]</span><span class="delimiter">: </span><span class="description">Laplace (double exponential) distributed pseudorandom numbers.</span>
-   <span class="signature">[`levy( mu, c )`][@stdlib/random/base/levy]</span><span class="delimiter">: </span><span class="description">Lévy distributed pseudorandom numbers.</span>
-   <span class="signature">[`logistic( mu, s )`][@stdlib/random/base/logistic]</span><span class="delimiter">: </span><span class="description">logistic distributed pseudorandom numbers.</span>
-   <span class="signature">[`lognormal( mu, sigma )`][@stdlib/random/base/lognormal]</span><span class="delimiter">: </span><span class="description">lognormal distributed pseudorandom numbers.</span>
-   <span class="signature">[`minstdShuffle()`][@stdlib/random/base/minstd-shuffle]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) whose output is shuffled.</span>
-   <span class="signature">[`minstd()`][@stdlib/random/base/minstd]</span><span class="delimiter">: </span><span class="description">A linear congruential pseudorandom number generator (LCG) based on Park and Miller.</span>
-   <span class="signature">[`mt19937()`][@stdlib/random/base/mt19937]</span><span class="delimiter">: </span><span class="description">A 32-bit Mersenne Twister pseudorandom number generator.</span>
-   <span class="signature">[`negativeBinomial( r, p )`][@stdlib/random/base/negative-binomial]</span><span class="delimiter">: </span><span class="description">negative binomially distributed pseudorandom numbers.</span>
-   <span class="signature">[`normal( mu, sigma )`][@stdlib/random/base/normal]</span><span class="delimiter">: </span><span class="description">normally distributed pseudorandom numbers.</span>
-   <span class="signature">[`pareto1( alpha, beta )`][@stdlib/random/base/pareto-type1]</span><span class="delimiter">: </span><span class="description">Pareto (Type I) distributed pseudorandom numbers.</span>
-   <span class="signature">[`poisson( lambda )`][@stdlib/random/base/poisson]</span><span class="delimiter">: </span><span class="description">Poisson distributed pseudorandom numbers.</span>
-   <span class="signature">[`randi()`][@stdlib/random/base/randi]</span><span class="delimiter">: </span><span class="description">pseudorandom numbers having integer values.</span>
-   <span class="signature">[`randn()`][@stdlib/random/base/randn]</span><span class="delimiter">: </span><span class="description">standard normally distributed pseudorandom numbers.</span>
-   <span class="signature">[`randu()`][@stdlib/random/base/randu]</span><span class="delimiter">: </span><span class="description">uniformly distributed pseudorandom numbers between 0 and 1.</span>
-   <span class="signature">[`rayleigh( sigma )`][@stdlib/random/base/rayleigh]</span><span class="delimiter">: </span><span class="description">Rayleigh distributed pseudorandom numbers.</span>
-   <span class="signature">[`reviveBasePRNG( key, value )`][@stdlib/random/base/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized pseudorandom number generator (PRNG).</span>
-   <span class="signature">[`t( v )`][@stdlib/random/base/t]</span><span class="delimiter">: </span><span class="description">Student's t-distributed pseudorandom numbers.</span>
-   <span class="signature">[`triangular( a, b, c )`][@stdlib/random/base/triangular]</span><span class="delimiter">: </span><span class="description">triangular distributed pseudorandom numbers.</span>
-   <span class="signature">[`uniform( a, b )`][@stdlib/random/base/uniform]</span><span class="delimiter">: </span><span class="description">uniformly distributed pseudorandom numbers.</span>
-   <span class="signature">[`weibull( k, lambda )`][@stdlib/random/base/weibull]</span><span class="delimiter">: </span><span class="description">Weibull distributed pseudorandom numbers.</span>

</div>

<!-- </toc> -->

Attached to each PRNG are the following properties:

-   **NAME**: the generator name.
-   **seed**: the value used to seed the PRNG.
-   **seedLength**: the length of the PRNG seed.
-   **state**: the PRNG state.
-   **stateLength**: the length of the PRNG state.
-   **byteLength**: the size of the PRNG state.
-   **PRNG**: the underlying pseudorandom number generator.

Additionally, attached to each PRNG is a `.factory()` method which supports creating a seeded PRNG and thus generating a reproducible sequence of pseudorandom numbers.

```javascript
var rand;
var v;
var i;

// Generate pseudorandom values...
for ( i = 0; i < 100; i++ ) {
    v = random.randu();
}

// Generate the same pseudorandom values...
rand = random.randu.factory({
    'seed': random.randu.seed
});
for ( i = 0; i < 100; i++ ) {
    v = rand();
}
```

For parameterized PRNGs, the `.factory()` method supports specifying parameters upon either PRNG creation or invocation. For example,

```javascript
// Create a PRNG which requires providing parameters at each invocation:
var rand = random.normal.factory({
    'seed': 12345
});

var r = rand( 1.0, 2.0 );
// returns <number>

// Create a PRNG with fixed parameters:
rand = random.normal.factory( 1.0, 2.0, {
    'seed': 12345
});

r = rand();
// returns <number>
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples => generate histograms for several different PRNGs and compare to expected shape -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var random = require( '@stdlib/random-base' );

console.log( objectKeys( random ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-base.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-base

[test-image]: https://github.com/stdlib-js/random-base/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-base/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-base/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-base?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-base.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-base/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-base/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-base/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-base/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-base/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-base/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-base/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-base/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-base/main/LICENSE

<!-- <toc-links> -->

[@stdlib/random/base/arcsine]: https://github.com/stdlib-js/random-base-arcsine

[@stdlib/random/base/bernoulli]: https://github.com/stdlib-js/random-base-bernoulli

[@stdlib/random/base/beta]: https://github.com/stdlib-js/random-base-beta

[@stdlib/random/base/betaprime]: https://github.com/stdlib-js/random-base-betaprime

[@stdlib/random/base/binomial]: https://github.com/stdlib-js/random-base-binomial

[@stdlib/random/base/box-muller]: https://github.com/stdlib-js/random-base-box-muller

[@stdlib/random/base/cauchy]: https://github.com/stdlib-js/random-base-cauchy

[@stdlib/random/base/chi]: https://github.com/stdlib-js/random-base-chi

[@stdlib/random/base/chisquare]: https://github.com/stdlib-js/random-base-chisquare

[@stdlib/random/base/cosine]: https://github.com/stdlib-js/random-base-cosine

[@stdlib/random/base/discrete-uniform]: https://github.com/stdlib-js/random-base-discrete-uniform

[@stdlib/random/base/erlang]: https://github.com/stdlib-js/random-base-erlang

[@stdlib/random/base/exponential]: https://github.com/stdlib-js/random-base-exponential

[@stdlib/random/base/f]: https://github.com/stdlib-js/random-base-f

[@stdlib/random/base/frechet]: https://github.com/stdlib-js/random-base-frechet

[@stdlib/random/base/gamma]: https://github.com/stdlib-js/random-base-gamma

[@stdlib/random/base/geometric]: https://github.com/stdlib-js/random-base-geometric

[@stdlib/random/base/gumbel]: https://github.com/stdlib-js/random-base-gumbel

[@stdlib/random/base/hypergeometric]: https://github.com/stdlib-js/random-base-hypergeometric

[@stdlib/random/base/improved-ziggurat]: https://github.com/stdlib-js/random-base-improved-ziggurat

[@stdlib/random/base/invgamma]: https://github.com/stdlib-js/random-base-invgamma

[@stdlib/random/base/kumaraswamy]: https://github.com/stdlib-js/random-base-kumaraswamy

[@stdlib/random/base/laplace]: https://github.com/stdlib-js/random-base-laplace

[@stdlib/random/base/levy]: https://github.com/stdlib-js/random-base-levy

[@stdlib/random/base/logistic]: https://github.com/stdlib-js/random-base-logistic

[@stdlib/random/base/lognormal]: https://github.com/stdlib-js/random-base-lognormal

[@stdlib/random/base/minstd-shuffle]: https://github.com/stdlib-js/random-base-minstd-shuffle

[@stdlib/random/base/minstd]: https://github.com/stdlib-js/random-base-minstd

[@stdlib/random/base/mt19937]: https://github.com/stdlib-js/random-base-mt19937

[@stdlib/random/base/negative-binomial]: https://github.com/stdlib-js/random-base-negative-binomial

[@stdlib/random/base/normal]: https://github.com/stdlib-js/random-base-normal

[@stdlib/random/base/pareto-type1]: https://github.com/stdlib-js/random-base-pareto-type1

[@stdlib/random/base/poisson]: https://github.com/stdlib-js/random-base-poisson

[@stdlib/random/base/randi]: https://github.com/stdlib-js/random-base-randi

[@stdlib/random/base/randn]: https://github.com/stdlib-js/random-base-randn

[@stdlib/random/base/randu]: https://github.com/stdlib-js/random-base-randu

[@stdlib/random/base/rayleigh]: https://github.com/stdlib-js/random-base-rayleigh

[@stdlib/random/base/reviver]: https://github.com/stdlib-js/random-base-reviver

[@stdlib/random/base/t]: https://github.com/stdlib-js/random-base-t

[@stdlib/random/base/triangular]: https://github.com/stdlib-js/random-base-triangular

[@stdlib/random/base/uniform]: https://github.com/stdlib-js/random-base-uniform

[@stdlib/random/base/weibull]: https://github.com/stdlib-js/random-base-weibull

<!-- </toc-links> -->

</section>

<!-- /.links -->
