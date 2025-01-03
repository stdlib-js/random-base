/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import arcsine = require( '@stdlib/random-base-arcsine' );
import bernoulli = require( '@stdlib/random-base-bernoulli' );
import beta = require( '@stdlib/random-base-beta' );
import betaprime = require( '@stdlib/random-base-betaprime' );
import binomial = require( '@stdlib/random-base-binomial' );
import boxMuller = require( '@stdlib/random-base-box-muller' );
import cauchy = require( '@stdlib/random-base-cauchy' );
import chi = require( '@stdlib/random-base-chi' );
import chisquare = require( '@stdlib/random-base-chisquare' );
import cosine = require( '@stdlib/random-base-cosine' );
import discreteUniform = require( '@stdlib/random-base-discrete-uniform' );
import erlang = require( '@stdlib/random-base-erlang' );
import exponential = require( '@stdlib/random-base-exponential' );
import f = require( '@stdlib/random-base-f' );
import frechet = require( '@stdlib/random-base-frechet' );
import gamma = require( '@stdlib/random-base-gamma' );
import geometric = require( '@stdlib/random-base-geometric' );
import gumbel = require( '@stdlib/random-base-gumbel' );
import hypergeometric = require( '@stdlib/random-base-hypergeometric' );
import improvedZiggurat = require( '@stdlib/random-base-improved-ziggurat' );
import invgamma = require( '@stdlib/random-base-invgamma' );
import kumaraswamy = require( '@stdlib/random-base-kumaraswamy' );
import laplace = require( '@stdlib/random-base-laplace' );
import levy = require( '@stdlib/random-base-levy' );
import logistic = require( '@stdlib/random-base-logistic' );
import lognormal = require( '@stdlib/random-base-lognormal' );
import minstd = require( '@stdlib/random-base-minstd' );
import minstdShuffle = require( '@stdlib/random-base-minstd-shuffle' );
import mt19937 = require( '@stdlib/random-base-mt19937' );
import negativeBinomial = require( '@stdlib/random-base-negative-binomial' );
import normal = require( '@stdlib/random-base-normal' );
import pareto1 = require( '@stdlib/random-base-pareto-type1' );
import poisson = require( '@stdlib/random-base-poisson' );
import randi = require( '@stdlib/random-base-randi' );
import randn = require( '@stdlib/random-base-randn' );
import randu = require( '@stdlib/random-base-randu' );
import rayleigh = require( '@stdlib/random-base-rayleigh' );
import reviveBasePRNG = require( '@stdlib/random-base-reviver' );
import t = require( '@stdlib/random-base-t' );
import triangular = require( '@stdlib/random-base-triangular' );
import uniform = require( '@stdlib/random-base-uniform' );
import weibull = require( '@stdlib/random-base-weibull' );

/**
* Interface describing the `base` namespace.
*/
interface Namespace {
	/**
	* Returns an arcsine distributed pseudorandom number with minimum support `a` and maximum support `b`.
	*
	* ## Notes
	*
	* -   If `a >= b`, the function returns `NaN`.
	* -   If `a` or `b` is `NaN`, the function returns `NaN`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.arcsine( 0.0, 1.0 );
	* // returns <number>
	*
	* @example
	* var myarcsine = ns.arcsine.factory( 0.0, 1.0 );
	*
	* var v = myarcsine();
	* // returns <number>
	*/
	arcsine: typeof arcsine;

	/**
	* Returns a Bernoulli distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If `p` is `NaN`, the function returns `NaN`.
	*
	* @param p - success probability
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.bernoulli( 0.7 );
	* // returns <number>
	*
	* @example
	* var mybernoulli = ns.bernoulli.factory( 0.7 );
	*
	* var v = mybernoulli();
	* // returns <number>
	*/
	bernoulli: typeof bernoulli;

	/**
	* Returns a beta distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	* -   If `alpha` or `beta` is `NaN`, the function returns `NaN`.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.beta( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var mybeta = ns.beta.factory( 1.5, 1.5 );
	*
	* var v = mybeta();
	* // returns <number>
	*/
	beta: typeof beta;

	/**
	* Returns a beta prime distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	* -   If `alpha` or `beta` is `NaN`, the function returns `NaN`.
	*
	* @param alpha - first shape parameter
	* @param beta - second shape parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.betaprime( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var mybetaprime = ns.betaprime.factory( 1.5, 1.5 );
	*
	* var v = mybetaprime();
	* // returns <number>
	*/
	betaprime: typeof betaprime;

	/**
	* Returns a binomially distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `n` is not a positive integer or `p` is not a probability, the function returns `NaN`.
	* -   If `n` or `p` is `NaN`, the function returns `NaN`.
	*
	* @param n - number of trials
	* @param p - success probability
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.binomial( 10, 0.8 );
	* // returns <number>
	*
	* @example
	* var mybinomial = ns.binomial.factory( 10, 0.8 );
	*
	* var v = mybinomial();
	* // returns <number>
	*/
	binomial: typeof binomial;

	/**
	* Returns a pseudorandom number drawn from a standard normal distribution.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.boxMuller();
	* // returns <number>
	*
	* @example
	* var rand = ns.boxMuller.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	boxMuller: typeof boxMuller;

	/**
	* Returns pseudorandom number drawn from a Cauchy distribution.
	*
	* ## Notes
	*
	* -   If `x0` or `gamma` is `NaN` or `gamma <= 0`, the function returns `NaN`.
	*
	* @param x0 - location parameter
	* @param gamma - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.cauchy( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = ns.cauchy( 0.0, -1.0 );
	* // returns NaN
	*/
	cauchy: typeof cauchy;

	/**
	* Returns a chi distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `k <= 0`, the function returns `NaN`.
	* -   If `k` is `NaN`, the function returns `NaN`.
	*
	* @param k - degrees of freedom
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.chi( 1.5 );
	* // returns <number>
	*
	* @example
	* var mychi = ns.chi.factory( 1.5 );
	*
	* var v = mychi();
	* // returns <number>
	*/
	chi: typeof chi;

	/**
	* Returns a chi-square distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `k <= 0`, the function returns `NaN`.
	* -   If `k` is `NaN`, the function returns `NaN`.
	*
	* @param k - degrees of freedom
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.chisquare( 1.5 );
	* // returns <number>
	*
	* @example
	* var mychisquare = ns.chisquare.factory( 1.5 );
	*
	* var v = mychisquare();
	* // returns <number>
	*/
	chisquare: typeof chisquare;

	/**
	* Returns pseudorandom number drawn from a raised cosine distribution.
	*
	* ## Notes
	*
	* -   If `mu` or `s` is `NaN` or `s <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param s - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.cosine( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = ns.cosine( 0.0, -1.0 );
	* // returns NaN
	*/
	cosine: typeof cosine;

	/**
	* Returns a discrete uniform distributed pseudorandom number with minimum support `a` and maximum support `b`.
	*
	* ## Notes
	*
	* -   If `a > b`, the function returns `NaN`.
	* -   If `a` or `b` is not an integer value, the function returns `NaN`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.discreteUniform( 0, 2 );
	* // returns <number>
	*
	* @example
	* var rand = ns.discreteUniform.factory( 0, 2 );
	*
	* var v = rand();
	* // returns <number>
	*/
	discreteUniform: typeof discreteUniform;

	/**
	* Returns an Erlang distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `k` is not a positive integer or `lambda <= 0`, the function returns `NaN`.
	* -   If `k` or `lambda` is `NaN`, the function returns `NaN`.
	*
	* @param k - shape parameter
	* @param lambda - rate parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.erlang( 2, 1.5 );
	* // returns <number>
	*
	* @example
	* var myerlang = ns.erlang.factory( 2, 1.5 );
	*
	* var v = myerlang();
	* // returns <number>
	*/
	erlang: typeof erlang;

	/**
	* Returns an exponential distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	* -   If `lambda` is `NaN`, the function returns `NaN`.
	*
	* @param lambda - rate parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.exponential( 1.5 );
	* // returns <number>
	*
	* @example
	* var myexponential = ns.exponential.factory( 1.5 );
	*
	* var v = myexponential();
	* // returns <number>
	*/
	exponential: typeof exponential;

	/**
	* Returns an F distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `d1 <= 0` or `d2 <= 0`, the function returns `NaN`.
	* -   If `d1` or `d2` is `NaN`, the function returns `NaN`.
	*
	* @param d1 - degrees of freedom
	* @param d2 - degrees of freedom
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.f( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var myf = ns.f.ns.factory( 1.5, 1.5 );
	*
	* var v = myf();
	* // returns <number>
	*/
	f: typeof f;

	/**
	* Returns pseudorandom number drawn from a Fréchet distribution.
	*
	* ## Notes
	*
	* -   If provided `alpha <= 0` or `s <= 0`, the function returns `NaN`.
	* -   If either `alpha`, `s`, or `m` is `NaN`, the function returns `NaN`.
	*
	* @param alpha - shape parameter
	* @param s - scale parameter
	* @param m - location parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.frechet( 2.0, 5.0, 3.33 );
	* // returns <number>
	*
	* @example
	* var rand = ns.frechet.factory({
	*     'seed': 297
	* });
	* var v = rand( 1.0, 1.0, 0.8 );
	* // returns <number>
	*/
	frechet: typeof frechet;

	/**
	* Returns a gamma distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	* -   If `alpha` or `beta` is `NaN`, the function returns `NaN`.
	*
	* @param alpha - shape parameter
	* @param beta - rate parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.gamma( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var mygamma = ns.gamma.factory( 1.5, 1.5 );
	*
	* var v = mygamma();
	* // returns <number>
	*/
	gamma: typeof gamma;

	/**
	* Returns a geometric distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If `p` is `NaN`, the function returns `NaN`.
	*
	* @param p - success probability
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.geometric( 0.7 );
	* // returns <number>
	*
	* @example
	* var mygeometric = ns.geometric.factory( 0.7 );
	*
	* var v = mygeometric();
	* // returns <number>
	*/
	geometric: typeof geometric;

	/**
	* Returns pseudorandom number drawn from a Gumbel distribution.
	*
	* ## Notes
	*
	* -   If `mu` or `beta` is `NaN` or `beta <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param beta - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.gumbel( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = ns.gumbel( 0.0, -1.0 );
	* // returns NaN
	*/
	gumbel: typeof gumbel;

	/**
	* Returns pseudorandom number drawn from a hypergeometric distribution.
	*
	* ## Notes
	*
	* -   `N`, `K`, and `n` must all be nonnegative integers; otherwise, the function returns `NaN`.
	* -   If `n > N` or `K > N`, the function returns `NaN`.
	*
	* @param N - population size
	* @param K - subpopulation size
	* @param n - number of draws
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.hypergeometric( 10, 5, 7 );
	* // returns <number>
	*
	* @example
	* var rand = ns.hypergeometric.factory({
	*     'seed': 297
	* });
	* var v = rand( 5, 3, 2 );
	* // returns <number>
	*/
	hypergeometric: typeof hypergeometric;

	/**
	* Returns a pseudorandom number drawn from a standard normal distribution.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.improvedZiggurat();
	* // returns <number>
	*
	* @example
	* var rand = ns.improvedZiggurat.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	improvedZiggurat: typeof improvedZiggurat;

	/**
	* Returns an inverse gamma distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	* -   If `alpha` or `beta` is `NaN`, the function returns `NaN`.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.invgamma( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var myinvgamma = ns.invgamma.factory( 1.5, 1.5 );
	*
	* var v = myinvgamma();
	* // returns <number>
	*/
	invgamma: typeof invgamma;

	/**
	* Returns a Kumaraswamy's double bounded distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `a <= 0` or `b <= 0`, the function returns `NaN`.
	* -   If `a` or `b` is `NaN`, the function returns `NaN`.
	*
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.kumaraswamy( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var mykumaraswamy = ns.kumaraswamy.factory( 1.5, 1.5 );
	*
	* var v = mykumaraswamy();
	* // returns <number>
	*/
	kumaraswamy: typeof kumaraswamy;

	/**
	* Returns pseudorandom number drawn from a Laplace (double exponential) distribution.
	*
	* ## Notes
	*
	* -   If `mu` or `b` is `NaN` or `b <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param b - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.laplace( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = ns.laplace( 0.0, -1.0 );
	* // returns NaN
	*/
	laplace: typeof laplace;

	/**
	* Returns pseudorandom number drawn from a Lévy distribution.
	*
	* ## Notes
	*
	* -   If `mu` or `c` is `NaN` or `c <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param c - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.levy( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = ns.levy( 0.0, -1.0 );
	* // returns NaN
	*/
	levy: typeof levy;

	/**
	* Returns pseudorandom number drawn from a logistic distribution.
	*
	* ## Notes
	*
	* -   If `mu` or `s` is `NaN` or `s <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param s - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.logistic( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = ns.logistic( 0.0, -1.0 );
	* // returns NaN
	*/
	logistic: typeof logistic;

	/**
	* Returns pseudorandom number drawn from a lognormal distribution.
	*
	* ## Notes
	*
	* -   If `mu` or `sigma` is `NaN` or `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - location parameter
	* @param sigma - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.lognormal( 0.0, 2.0 );
	* // returns <number>
	*
	* @example
	* var v = ns.lognormal( 0.0, -1.0 );
	* // returns NaN
	*/
	lognormal: typeof lognormal;

	/**
	* Returns a pseudorandom integer on the interval `[1, 2147483646]`.
	*
	* ## Notes
	*
	* -   This pseudorandom number generator (PRNG) is a linear congruential pseudorandom number generator (LCG) based on Park and Miller.
	* -   The generator has a period of approximately `2.1e9`.
	* -   An LCG is fast and uses little memory. On the other hand, because the generator is a simple LCG, the generator has recognized shortcomings. By today's PRNG standards, the generator's period is relatively short. More importantly, the "randomness quality" of the generator's output is lacking. These defects make the generator unsuitable, for example, in Monte Carlo simulations and in cryptographic applications.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.minstd();
	* // returns <number>
	*
	* @example
	* var v = ns.minstd.normalized();
	* // returns <number>
	*
	* @example
	* var rand = ns.minstd.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	minstd: typeof minstd;

	/**
	* Returns a pseudorandom integer on the interval `[1, 2147483646]`.
	*
	* ## Notes
	*
	* -   This pseudorandom number generator (PRNG) is a linear congruential pseudorandom number generator (LCG) whose output is shuffled using the Bays- Durham algorithm. The shuffle step considerably strengthens the "randomness quality" of a simple LCG's output.
	* -   The generator has a period of approximately `2.1e9`.
	* -   An LCG is fast and uses little memory. On the other hand, because the generator is a simple LCG, the generator has recognized shortcomings. By today's PRNG standards, the generator's period is relatively short. In general, this generator is unsuitable for Monte Carlo simulations and cryptographic applications.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.minstdShuffle();
	* // returns <number>
	*
	* @example
	* var v = ns.minstdShuffle.normalized();
	* // returns <number>
	*
	* @example
	* var rand = ns.minstdShuffle.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	minstdShuffle: typeof minstdShuffle;

	/**
	* Returns a pseudorandom integer on the interval `[0, 4294967295]`.
	*
	* ## Notes
	*
	* -   This pseudorandom number generator (PRNG) is a 32-bit Mersenne Twister pseudorandom number generator.
	* -   The PRNG is *not* a cryptographically secure PRNG.
	* -   The PRNG has a period of 2^19937 - 1.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.mt19937();
	* // returns <number>
	*
	* @example
	* var rand = ns.mt19937.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	mt19937: typeof mt19937;

	/**
	* Returns a negative binomial distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `p` is not in the interval `(0,1)`, the function returns `NaN`.
	* -   If `r` or `p` is `NaN`, the function returns `NaN`.
	*
	* @param r - number of successes until experiment is stopped
	* @param p - success probability
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.negativeBinomial( 11.9, 0.8 );
	* // returns <number>
	*
	* @example
	* var rand = ns.negativeBinomial.factory( 10, 0.8 );
	*
	* var v = rand();
	* // returns <number>
	*/
	negativeBinomial: typeof negativeBinomial;

	/**
	* Returns a normally distributed pseudorandom number with mean `mu` and standard deviation `sigma`.
	*
	* ## Notes
	*
	* -   If `mu` or `sigma` is `NaN` or `sigma <= 0`, the function returns `NaN`.
	*
	* @param mu - mean
	* @param sigma - standard deviation
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.normal( 0.0, 1.0 );
	* // returns <number>
	*
	* @example
	* var mynormal = ns.normal.factory( 0.0, 1.0 );
	* var v = mynormal();
	* // returns <number>
	*/
	normal: typeof normal;

	/**
	* Returns a Pareto (Type I) distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `alpha <= 0` or `beta <= 0`, the function returns `NaN`.
	* -   If `alpha` or `beta` is `NaN`, the function returns `NaN`.
	*
	* @param alpha - shape parameter
	* @param beta - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.pareto1( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var mypareto1 = ns.pareto1.factory( 1.5, 1.5 );
	*
	* var v = mypareto1();
	* // returns <number>
	*/
	pareto1: typeof pareto1;

	/**
	* Returns a Poisson distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `lambda <= 0`, the function returns `NaN`.
	* -   If `lambda` is `NaN`, the function returns `NaN`.
	*
	* @param lambda - mean
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.poisson( 1.5 );
	* // returns <number>
	*
	* @example
	* var mypoisson = ns.poisson.factory( 1.5 );
	*
	* var v = mypoisson();
	* // returns <number>
	*/
	poisson: typeof poisson;

	/**
	* Returns a pseudorandom number having an integer value.
	*
	* ## Notes
	*
	* -   The default underlying pseudorandom number generator (PRNG) *may* change in the future. If exact reproducibility is required, either use the `factory` method to explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.randi();
	* // returns <number>
	*
	* @example
	* var rand = ns.randi.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	randi: typeof randi;

	/**
	* Returns a standard normally distributed random number.
	*
	* ## Notes
	*
	* -   The default underlying pseudorandom number generator (PRNG) *may* change in the future. If exact reproducibility is required, either use the `factory` method to explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.randn();
	* // returns <number>
	*
	* @example
	* var rand = ns.randn.factory({
	*     'seed': 12345
	* });
	* var v = rand();
	* // returns <number>
	*/
	randn: typeof randn;

	/**
	* Returns a uniformly distributed random number.
	*
	* ## Notes
	*
	* -   The default underlying pseudorandom number generator (PRNG) *may* change in the future. If exact reproducibility is required, either use the `factory` method to explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
	*
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.randu();
	* // returns <number>
	*
	* @example
	* var uniform = ns.randu.factory({
	*     'seed': 12345
	* });
	* var v = uniform();
	* // returns <number>
	*/
	randu: typeof randu;

	/**
	* Returns a Rayleigh distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `sigma <= 0`, the function returns `NaN`.
	* -   If `sigma` is `NaN`, the function returns `NaN`.
	*
	* @param sigma - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.rayleigh( 1.5 );
	* // returns <number>
	*
	* @example
	* var myrayleigh = ns.rayleigh.factory( 1.5 );
	*
	* var v = myrayleigh();
	* // returns <number>
	*/
	rayleigh: typeof rayleigh;

	/**
	* Revives a JSON-serialized pseudorandom number generator.
	*
	* @param key - key
	* @param value - value
	* @returns value or PRNG
	*
	* @example
	* var parseJSON = require( '@stdlib/utils-parse-json' );
	* var mt19937 = require( '@stdlib/random-base-mt19937' );
	*
	* var str = JSON.stringify( mt19937 );
	* var rand = parseJSON( str, ns.reviveBasePRNG );
	* // returns <Function>
	*/
	reviveBasePRNG: typeof reviveBasePRNG;

	/**
	* Returns a t-distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `v <= 0`, the function returns `NaN`.
	* -   If `v` is `NaN`, the function returns `NaN`.
	*
	* @param v - degrees of freedom
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.t( 1.5 );
	* // returns <number>
	*
	* @example
	* var myt = ns.t.factory( 1.5 );
	*
	* var v = myt();
	* // returns <number>
	*/
	t: typeof t;

	/**
	* Returns pseudorandom number drawn from a triangular distribution.
	*
	* ## Notes
	*
	* -   If the condition `a <= c <= b` is not satisfied, the function returns `NaN`.
	* -   If either `a`, `b`, or `c` is `NaN`, the function returns `NaN`.
	*
	* @param a - minimum support
	* @param b - maximum support
	* @param c - mode
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.triangular( 2.0, 5.0, 3.33 );
	* // returns <number>
	*
	* @example
	* var rand = ns.triangular.factory({
	*     'seed': 297
	* });
	* var v = rand( 1.0, 2.0, 1.5 );
	* // returns <number>
	*/
	triangular: typeof triangular;

	/**
	* Returns a uniform distributed pseudorandom number with minimum support `a` and maximum support `b`.
	*
	* ## Notes
	*
	* -   If `a >= b`, the function returns `NaN`.
	* -   If `a` or `b` is `NaN`, the function returns `NaN`.
	*
	* @param a - minimum support (inclusive)
	* @param b - maximum support (exclusive)
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.uniform( 0.0, 1.0 );
	* // returns <number>
	*
	* @example
	* var myuniform = ns.uniform.factory( 0.0, 1.0 );
	*
	* var v = myuniform();
	* // returns <number>
	*/
	uniform: typeof uniform;

	/**
	* Returns a Weibull distributed pseudorandom number.
	*
	* ## Notes
	*
	* -   If `k <= 0` or `lambda <= 0`, the function returns `NaN`.
	* -   If `k` or `lambda` is `NaN`, the function returns `NaN`.
	*
	* @param k - shape parameter
	* @param lambda - scale parameter
	* @returns pseudorandom number
	*
	* @example
	* var v = ns.weibull( 1.5, 1.5 );
	* // returns <number>
	*
	* @example
	* var myweibull = ns.weibull.factory( 1.5, 1.5 );
	*
	* var v = myweibull();
	* // returns <number>
	*/
	weibull: typeof weibull;
}

/**
* Base pseudorandom number generators.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
