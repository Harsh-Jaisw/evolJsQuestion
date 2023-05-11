let defaultarrvalue = ["astra", "book", "paper", "bus", "deep", "nehal"];
let inputField = document.getElementById("inputField");
let resultContainer = document.getElementById("resultContainer");
let getAnswer = document.getElementById("getAnswer");
let lowerAnswer=document.getElementById("lowerCase")
let upperAnswer=document.getElementById("upperCase")
let inputData;
getAnswer.addEventListener("click", () => {
  inputData = inputField.value;
  resultContainer.innerHTML = inputData;
});

lowerAnswer.addEventListener("click", () => {
  inputData = inputField.value;
  resultContainer.innerHTML = inputData;
});

upperAnswer.addEventListener("click", toUpperCase);

// 1) Short the array in ascending and descending order
const sortAscending = () => {
  let sortedArr = defaultarrvalue.slice().sort();
  resultContainer.textContent = sortedArr.toString();
};

const sortDescending = () => {
  let sortedArr = defaultarrvalue.slice().sort().reverse();
  resultContainer.textContent = sortedArr.toString();
};

// 2) Return the array in all upper and lower cases
const toUpperCase = () => {
  let upperCaseArr = inputData.toUpperCase()
  resultContainer.innerHTML = upperCaseArr
};

const toLowerCase = () => {
  let lowerCaseArr = defaultarrvalue.map((item) => item.toLowerCase());
  resultContainer.textContent = lowerCaseArr.toString();
};

// 3) Return the items which have 'B' as the first alphabet
const startsWithB = () => {
  let filteredArr = defaultarrvalue.filter(
    (item) => item.charAt(0).toUpperCase() === "B"
  );
  resultContainer.textContent = filteredArr.toString();
};

// 4) Return the index of the entered value from the array
const findIndex = () => {
  let searchValue = inputField.value.toLowerCase();
  let index = defaultarrvalue.findIndex(
    (item) => item.toLowerCase() === searchValue
  );
  resultContainer.textContent = `Index: ${index}`;
};

// 5) Create the dummy array and merge it with the main array using spread and reducer
const mergeArrays = () => {
  let dummyArr = ["apple", "banana", "cat", "dog"];
  let mergedArr = [...defaultarrvalue, ...dummyArr];
  resultContainer.textContent = mergedArr.toString();
};
