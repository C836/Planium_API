export async function getData() {
  return fetch("http://localhost:3001/proposta")
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
}
