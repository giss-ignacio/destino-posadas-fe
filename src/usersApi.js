const url = "http://localhost:3009/api";
const usersRoute = "users";

async function sendRequest(url, method, body) {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Token", sessionStorage.getItem("token"));

  const requestOptions = {
    method: method,
    headers: headers,
    body: body ? JSON.stringify(body) : null,
  };

  return fetch(url, requestOptions).then((resp) => {
    if (!resp.ok) {
      throw resp.statusText;
    }
    return resp.json();
  });
}


export async function login(email, password) {
  let body = { email: email, password: password };
  return sendRequest(`${url}/${usersRoute}/login`, "POST", body);
}

export async function register(email, name, password) {
  let body = { nombre: name, email: email, password: password };
  return sendRequest(`${url}/${usersRoute}`, "POST", body);
}

export async function getUsers() {
  return sendRequest(`${url}/${usersRoute}`, "GET", null);
}