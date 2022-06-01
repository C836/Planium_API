export async function getData() {
  return fetch("https://planium-api.herokuapp.com/proposta")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}
