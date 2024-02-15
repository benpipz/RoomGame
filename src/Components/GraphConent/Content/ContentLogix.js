export const CreateLeaderArray = (arr, leadersArray) => {
  const resultArr = [...leadersArray];
  let maxValue = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == maxValue) {
      resultArr[i] = true;
    } else {
      resultArr[i] = false;
    }
  }
  return resultArr;
};

export const Random = () => Math.floor(Math.random() * 3);
