
const cats = ["Milo", "Otis", "Garfield"];

// 1. Appends a cat to the end of the cats array (destructive)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 2. Prepends a cat to the beginning of the cats array (destructive)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 3. Removes the last cat from the cats array (destructive)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 4. Removes the first cat from the cats array (destructive)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 5. Appends a cat to the cats array and returns new array (non-destructive)
function appendCat(name) {
  return [...cats, name];
}

// 6. Prepends a cat to the cats array and returns new array (non-destructive)
function prependCat(name) {
  return [name, ...cats];
}

// 7. Removes the last cat and returns new array (non-destructive)
function removeLastCat() {
  return cats.slice(0, -1);
}

// 8. Removes the first cat and returns new array (non-destructive)
function removeFirstCat() {
  return cats.slice(1);
}