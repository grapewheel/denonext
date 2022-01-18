export interface P {
  who: string;
  num: Array<number>;
}

export default (p: P) => {
  const str = Deno.readTextFileSync("./user/test.txt");
  return str + ", " + p.who;
};
