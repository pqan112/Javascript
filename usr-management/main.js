let arr = [
  { id: 1, name: "An", company: "ABC" },
  { id: 2, name: "John", company: "XYZ" },
];

function addElement(newElement) {
  arr.push(newElement);
  console.log(arr);
}

addElement({ id: 3, name: "Alice", company: "DEF" });

function updateElement(id, updatedData) {
  // const index = arr.findIndex((el) => el.id === id);
  // const remainedUser = arr.filter((user) => user.id !== id);
  // const updatedUser = { ...arr[index], ...updatedData };
  // console.log([...remainedUser, updatedUser]);

  const newArr = [];
  arr.forEach((user) => {
    newArr.push(user.id === id ? { id, ...updatedData } : user);
  });
  arr = newArr;
  console.log(arr);
}

updateElement(2, { name: "John Doe", company: "XYZ Ltd" });

function deleteElement(id) {
  const index = arr.findIndex((el) => el.id === id);
  arr.splice(index, 1);
  console.log(arr);
}

deleteElement(1);
