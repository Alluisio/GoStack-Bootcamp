/**
 * Para criar usuario: name, email, password
 */

/**
 * Para [] de tipo único string[] ====
 * Para [] de tipo misto Array< tipo1 | tipo2>;
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({
  name = "",
  email,
  password,
}: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
