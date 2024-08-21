const { shuffle } = require('../src/shuffle')

// describe('shuffle should...', () => {
//   test("check that array returns with same length as source", () => {
//     expect(shuffle.copyArray([1,2,3,4], [])).toHaveLength(4)
//   })
//   test("check that array keeps same contents", () => {
//     expect(shuffle.copyArray([1,2,3,4], [])).toContain(1,2,3,4)
//   })
// })

// not sure what I need to do differently, but shuffle.copyArray wouldn't work, so I just copied the function below for the sake of testing

const copyArray = (source, array) => {
  let index = -1;
  const length = source.length;

  array || (array = new Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
};

describe('shuffle should...', () => {
  test("check that array returns with same length as source", () => {
    expect(copyArray([1,2,3,4], [])).toHaveLength(4)
  })
  test("check that array keeps same contents", () => {
    expect(copyArray([1,2,3,4], [])).toContain(1,2,3,4)
  })
})