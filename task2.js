"use strict";

const foo = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    typeof value === "object" ? foo(value) : (obj[key] = 1 - value);
  }
};

const d = {
  left: {
    left: {
      left: 1,
      right: { left: 0, right: 1 },
    },
    right: {
      left: 0,
      right: 1,
    },
  },
  right: 1,
};

// !Important console.log shows an [Object] value in d.left.left.right but it seems it's cause console.log() trying to make results shorter, if You check
// d.left.left.right value after foo() function completed it will show inverted values.

foo(d);
console.log(d);
/*
{
left: {
left: {
left: 0,
right: {
left: 1,
right: 0,
},
},
right: {
left: 1,
right: 0,
},
},
right: 0,
}
*/
