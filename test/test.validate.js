/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var validate = require( './../lib/validate.js' );


// VARIABLES //

var DTYPES = [
	'float64',
	'float32',
	'generic'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.equal( typeof validate, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns an error if provided an options argument which is not an object', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, DTYPES, values[ i ] );
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function returns an error if provided a `dtype` option which is not a supported data type', function test( t ) {
	var values;
	var err;
	var i;

	values = [
		'5',
		-5,
		NaN,
		true,
		false,
		void 0,
		null,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		err = validate( {}, DTYPES, {
			'dtype': values[ i ]
		});
		t.equal( err instanceof TypeError, true, 'returns a type error when provided '+values[i] );
	}
	t.end();
});

tape( 'the function supports the `order` array creation option', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'order': 'row-major'
	};
	opts = {};
	err = validate( opts, DTYPES, options );

	t.equal( err, null, 'returns expected value' );
	t.deepEqual( opts, options, 'returns expected value' );

	t.end();
});

tape( 'the function supports the `mode` array creation option', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'mode': 'throw'
	};
	opts = {};
	err = validate( opts, DTYPES, options );

	t.equal( err, null, 'returns expected value' );
	t.deepEqual( opts, options, 'returns expected value' );

	t.end();
});

tape( 'the function supports the `submode` array creation option', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'submode': [ 'throw' ]
	};
	opts = {};
	err = validate( opts, DTYPES, options );

	t.equal( err, null, 'returns expected value' );
	t.deepEqual( opts, options, 'returns expected value' );

	t.end();
});

tape( 'the function supports the `readonly` array creation option', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'readonly': true
	};
	opts = {};
	err = validate( opts, DTYPES, options );

	t.equal( err, null, 'returns expected value' );
	t.deepEqual( opts, options, 'returns expected value' );

	t.end();
});

tape( 'the function returns null if all options are valid', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'dtype': 'float64',
		'order': 'row-major',
		'mode': 'throw',
		'submode': [ 'throw' ],
		'readonly': true
	};
	opts = {};
	err = validate( opts, DTYPES, options );

	t.equal( err, null, 'returns expected value' );
	t.deepEqual( opts, options, 'returns expected value' );

	t.end();
});

tape( 'the function ignores unrecognized/unsupported options', function test( t ) {
	var options;
	var opts;
	var err;

	options = {
		'beep': true,
		'boop': 'bop'
	};
	opts = {};
	err = validate( opts, DTYPES, options );

	t.equal( err, null, 'returns expected value' );
	t.deepEqual( opts, {}, 'does not set any option values' );
	t.end();
});
