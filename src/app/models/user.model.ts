export class UserModel {
  constructor (
    public username: string,
    public name: string,
    public image: string,
    public email: string,
    public token: string,
    public roles: string[]
  ) {

  }
}
