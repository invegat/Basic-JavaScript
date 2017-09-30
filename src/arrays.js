// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems

const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each
};

const reduce = (elements, cb, memo = elements.shift()) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.
  if (memo === undefined) {
    return undefined
  }
  let acc = memo
  for (let i = 0; i < elements.length; i++) {
    acc = cb(acc, elements[i], i)
  }
  return acc
}

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  return reduce(elements, (acc, v) => {
    acc.push(cb(v))
    return acc
  }, [])
}
const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) {
      return elements[i]
    }
  }
  return undefined
}

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
  return reduce(elements, (acc, v) => {
    if (cb(v)) {
      acc.push(v)
    }
    return acc
  }, [])
}

function isArray(elements) {
  return (Object.prototype.toString.call(elements) === '[object Array]')
}

/* Extra Credit */
const flatten = (elements) => {
  if (!isArray(elements)) {
    return elements
  }
  while (elements.length === 1 && Array.isArray(elements[0])) {
    elements = elements[0]
  }
  let r = []
  r.push(flatten(elements[0]))
  let next = elements.slice(1)
  while (next.length === 1 && Array.isArray(next[0])) {
    next = next[0]
  }
  if (next.length > 0) {
    while (r.length === 1 && Array.isArray(r[0])) {
      r = r[0]
    }
    r = r.concat(flatten(next))
  }
  return r
}

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
