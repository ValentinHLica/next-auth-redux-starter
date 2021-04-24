const fakeRequest = (time: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(null);
    }, time);
  });
};

export default fakeRequest;
