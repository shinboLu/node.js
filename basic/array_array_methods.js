const hobbies = ["movie", "game", "skating"];

// for i in arr
for (let hobby of hobbies) {
  console.log(hobby);
}

// for i in range(len(array))
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

console.log(
  hobbies.map((hobby) => {
    return "Hobby:" + hobby;
  })
);
