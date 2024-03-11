import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
/* const name = chance.name();
const age = chance.age();
const profession = chance.profession();
const avatar = chance.avatar(); */

export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age({ type: "child" });
  const profession = chance.profession();
  const avatar = chance.avatar();
  response.statusCode = 200;
  response.end(
    `<p>Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.</p>
    <img src=${avatar}/>
    `
  );
});
