export default async function fetchData(url) {
    let response = await fetch(`http://127.0.0.1:5000/api/${url}`, {
      cache: "no-store",
    });
    response = await response.json();
    return response;
  }
  