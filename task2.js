const foo = (obj) => {
  const changeValue = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
      typeof value === "object" ? changeValue(value) : (obj[key] = 1 - value);
    }
  };
  changeValue(obj);
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
foo(d);
console.log(d);
console.log(Object.entries(d));

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
