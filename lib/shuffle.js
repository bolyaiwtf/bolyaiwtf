const shuffle = (arr) => {
  let i = arr.length;

  while (i) {
    const j = Math.floor(Math.random() * i);
    const t = arr[--i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  return arr;
};

export default shuffle;
