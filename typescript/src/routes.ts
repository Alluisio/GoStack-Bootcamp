import { Request, Response } from "express";
import createUser from "./services/CreateUser";

// string, number, boolean, object, Array
// interfaces (definir tipagem para conjunto de dados) / definir formato de um objeto

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "alluisio.silva@ipdec.org",
    password: "123456",
    techs: ["Node.js", "ReactJS", "React Native"],
  });

  return response.json({ message: "Hello World" });
}
