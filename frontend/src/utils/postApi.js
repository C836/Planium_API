export async function postApi(data) {
  fetch(`http://localhost:3010/post`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
    body: JSON.stringify(data),
  })
    .catch((error) => {
      throw error;
    })
    .then(() => console.log("Cadastrado"));
}
