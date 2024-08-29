// ! How to Iterrate on object:- {for in Loop}

const Friends = {
  friends1: "Awash",
  friends2: "Abhishek",
  friends3: "Battery",
  friends4: "Jyoti",
};

for (const key in Friends) {
  console.log(`${key} is name of ${Friends[key]}`);
}
