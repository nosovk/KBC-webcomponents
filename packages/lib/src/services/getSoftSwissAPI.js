const DOMAIN_FULLNAME = document.location.host,
BASE_URL = `https://www.${DOMAIN_FULLNAME.replace(/^[^.]*\.(?=\w+\.\w+$)/, '')}`;


function getAPIFetchInitObject() {
  return {
    credentials: "include",
    headers: {
      accept: "application/vnd.softswiss.v1+json",
      "accept-language": `EN, en;q=0.9`,
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    referrer: `${BASE_URL}`,
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
  };
}
function getFetch(url, init) {
  return fetch(url, init).then(function (res) {
    return res.json();
  });
}

export {getAPIFetchInitObject, getFetch, BASE_URL};