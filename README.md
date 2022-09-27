# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jeongj99/lotide`

**Require it:**

`const _ = require('@jeongj99/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of the array input. Returns undefined if there are no elements in the array.
* `tail(array)`: Returns a new array with all the elements except the first one without modifying the input array. Returns an empty array if input array is empty.
* `middle(array)`: Returns a new array with the element at the middle index without modifying the input array. Returns a new array with the two middle elements if the length of the input array is even without modifying the input array.