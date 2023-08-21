export const hasSupport = () => Boolean("EyeDropper" in window);

const eyeDropperApi = () => ({
  run({ setColorSelected }) {
    const eyeDropper = new window.EyeDropper();

    eyeDropper
      .open()
      .then((result) => {
        setColorSelected(result.sRGBHex);
      })
      .catch((e) => {
        console.log(e);
        setColorSelected(null);
      });
  },
});

export { eyeDropperApi };
