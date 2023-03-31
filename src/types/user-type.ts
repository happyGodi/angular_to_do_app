interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  tasks: Array<string>
}
interface Res {
  name: string;
  username: string;
  email: string;
  token: string;
}

export { User, Res}

