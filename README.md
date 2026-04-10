<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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

# Random

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Constructor for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/random-tools-unary
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
var Random = require( '@stdlib/random-tools-unary' );
```

#### Random( prng, idtypes, odtypes, policies\[, options] )

Returns an interface for creating ndarrays filled with pseudorandom values drawn from a unary PRNG.

```javascript
var dtypes = require( '@stdlib/ndarray-dtypes' );
var exponential = require( '@stdlib/random-base-exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var rand = new Random( exponential, idt, odt, policies, options );
```

The constructor has the following parameters:

-   **prng**: unary pseudorandom value generator.

-   **idtypes**: list of supported input data types.

-   **odtypes**: list of supported output data types.

-   **policies**: interface policies. Must have the following properties:

    -   **output**: output data type [policy][@stdlib/ndarray/policies].

-   **options**: function options (_optional_).

The constructor supports the following options:

-   **order**: default [memory layout][@stdlib/ndarray/orders].

#### Random.prototype.generate( shape, param1\[, options] )

Returns an ndarray filled with pseudorandom values drawn from a unary PRNG.

```javascript
var dtypes = require( '@stdlib/ndarray-dtypes' );
var exponential = require( '@stdlib/random-base-exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var rand = new Random( exponential, idt, odt, policies, options );

var v = rand.generate( [ 2, 2 ], 2.0 );
// returns <ndarray>
```

The method has the following parameters:

-   **shape**: output ndarray shape.
-   **param1**: PRNG parameter. May be either a scalar or an ndarray. If an ndarray, must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the specified output ndarray shape.
-   **options**: function options (_optional_).

The method accepts the following options:

-   **dtype**: output ndarray data type. Setting this option overrides the output data type policy.
-   **order**: memory layout. Setting this option overrides the default memory layout.
-   **mode**: specifies how to handle indices which exceed ndarray dimensions.
-   **submode**: specifies how to handle subscripts which exceed ndarray dimensions on a per dimension basis.
-   **readonly**: boolean indicating whether an ndarray should be read-only.

By default, the method returns an ndarray having a data type determined by the output data type policy. To override the default behavior, set the `dtype` option.

```javascript
var dtypes = require( '@stdlib/ndarray-dtypes' );
var getDType = require( '@stdlib/ndarray-dtype' );
var exponential = require( '@stdlib/random-base-exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var rand = new Random( exponential, idt, odt, policies, options );

var v = rand.generate( [ 2, 2 ], 2.0, {
    'dtype': 'generic'
});
// returns <ndarray>

var dt = String( getDType( v ) );
// returns 'generic'
```

#### Random.prototype.assign( param1, out )

Fills an ndarray with pseudorandom values drawn from a unary PRNG.

```javascript
var dtypes = require( '@stdlib/ndarray-dtypes' );
var ndzeros = require( '@stdlib/ndarray-zeros' );
var exponential = require( '@stdlib/random-base-exponential' );

var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );

var policies = {
    'output': 'real_floating_point_and_generic'
};
var options = {
    'order': 'row-major'
};

var rand = new Random( exponential, idt, odt, policies, options );

var out = ndzeros( [ 2, 2 ] );
var v = rand.assign( 2.0, out );
// returns <ndarray>

var bool = ( v === out );
// returns true
```

The method has the following parameters:

-   **param1**: PRNG parameter. May be either a scalar or an ndarray. If an ndarray, must be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes] with the output ndarray.
-   **out**: output ndarray.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The output data type policy only applies to the `generate` method. For the `assign` method, the output ndarray is allowed to have any supported output data type.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var exponential = require( '@stdlib/random-base-exponential' );
var dtypes = require( '@stdlib/ndarray-dtypes' );
var ndarray = require( '@stdlib/ndarray-ctor' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var Random = require( '@stdlib/random-tools-unary' );

// Create a new PRNG instance...
var idt = dtypes( 'real_and_generic' );
var odt = dtypes( 'real_floating_point_and_generic' );
var policies = {
    'output': 'real_floating_point_and_generic'
};
var random = new Random( exponential, idt, odt, policies );

// Generate a 3x3 matrix of pseudorandom numbers:
var x = random.generate( [ 3, 3 ], 2.0 );
console.log( ndarray2array( x ) );

// Generate another matrix with a specified data type:
x = random.generate( [ 3, 3 ], 2.0, {
    'dtype': 'float32'
});
console.log( ndarray2array( x ) );

// Define an array of distribution parameters:
var param = new ndarray( 'generic', [ 2.0, 20.0, 200.0 ], [ 3, 1 ], [ 1, 1 ], 0, 'row-major' );

// Broadcast the parameters to generate another 3x3 matrix of pseudorandom numbers:
x = random.generate( [ 3, 3 ], param );
console.log( ndarray2array( x ) );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-tools-unary.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-tools-unary

[test-image]: https://github.com/stdlib-js/random-tools-unary/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-tools-unary/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-tools-unary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-tools-unary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-tools-unary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-tools-unary/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-tools-unary/tree/deno
[deno-readme]: https://github.com/stdlib-js/random-tools-unary/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/random-tools-unary/tree/umd
[umd-readme]: https://github.com/stdlib-js/random-tools-unary/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/random-tools-unary/tree/esm
[esm-readme]: https://github.com/stdlib-js/random-tools-unary/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/random-tools-unary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-tools-unary/main/LICENSE

[@stdlib/ndarray/policies]: https://github.com/stdlib-js/ndarray-policies

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes

</section>

<!-- /.links -->
