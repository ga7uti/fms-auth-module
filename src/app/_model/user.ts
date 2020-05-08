export class User {
  fullName: string;
  userName: string;
  email: string;
  token: string;
  type: string;
  userPhone: string;
  role: Array<string>;
  userPassword: string;

  constructor(fullName: string, userName: string, email: string, userPassword: string, userPhone: string) {
    this.fullName = fullName;
    this.userName = userName;
    this.email = email;
    this.userPassword = userPassword;
    this.userPhone = userPhone;
  }
}
