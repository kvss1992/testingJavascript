module.exports = async function test(title, callback) {
  try {
    await callback();

    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✗ ${title}`);
    console.error(error);
  }
};

module.exports = function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {
      if (actual <= expected) {
        throw new Error(`${actual} is not GREATER than ${expected}`);
      }
    }
  };
};
