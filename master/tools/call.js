const __default = (fn, data) => {
  const f = fn.split(".");
  let uri = `http://localhost:8000/${f[0]}/${f[1]}.js?`;
  for (let k in data) {
    uri += `${k}=${data[k]}&`;
  }
  return import(uri);
};
export { __default as default };
