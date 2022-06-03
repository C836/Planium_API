export async function getData(get) {
  return fetch(`http://localhost:3010/${get ? "get" : "proposta"}`)
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
}
