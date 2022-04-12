const myPromise = () =>
  new Promise((resolve, reject) => {
    const err = true;
    if (!err) {
      setTimeout(() => {
        resolve({ data: "FULFILLED" });
      }, 3000);
    } else {
      setTimeout(() => {
        reject({ message: "REJECTED" });
      }, 1500);
    }
  });

// myPromise()
//   .then(successMessage => console.log("SUCCESS!", successMessage))
//   .catch(errMessage => console.log("ERROR HAPPENED", errMessage));

const rollTheDice = () =>
  new Promise((resolve, reject) => {
    const randTime = Math.floor(Math.random() * 3000);

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 10);
      if (randomNum < 7) {
        resolve("We've got a winner! The number is: " + randomNum + ", it took: " + randTime / 1000 + " seconds");
      } else {
        reject(
          "The number is too high, you lose. The number was " + randomNum + ", it took: " + randTime / 1000 + " seconds"
        );
      }
    }, randTime);
  });

rollTheDice()
  .then(successMessage => console.log(successMessage))
  .catch(rejectionMessage => console.log(rejectionMessage));
