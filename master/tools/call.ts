export default <T extends object>(fn: string, data?: T): Promise<any> => {
  const f = fn.split(".");

  let uri = `http://localhost:8000/${f[0]}/${f[1]}.ts?`;
  for (let k in data) {
    uri += `${k}=${data[k]}&`;
  }

  return import(uri);
};
