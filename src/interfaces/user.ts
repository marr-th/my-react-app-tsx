enum fieldsNameEnum {
    firstName = 'firstName',
    lastName = 'lastName',
    email = 'email',
    username = 'username',
    password = 'password',
}

const fieldsNames = [
    { name: fieldsNameEnum.firstName, opts: {
          value: 'Aa1@aaaa',} },
    { name: fieldsNameEnum.lastName, opts: {
          value: 'Aa1@aaaa',} },
    { name: fieldsNameEnum.email, opts: {
          value: 'Aa1@aaaa',} },
    { name: fieldsNameEnum.username, opts: {
          value: 'Aa1@aaaa',} },
    {
        name: fieldsNameEnum.password,
        opts: {
            /* at least: */
            /* (?=.*[a-z]) one uppercase letter
          (?=.*[A-Z]) one uppercase letter
          (?=.*\d) one number 
          (?=.*[@$!%*?&]) one special character
          [A-Za-z\d@$!%*?&]{8,} length: 8
           */
          value: 'Aa1@aaaa',
            pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}',
            type: 'password'
        }
    },
]

interface User extends UserLogin {
    [fieldsNameEnum.firstName]: string;
    [fieldsNameEnum.lastName]: string;
    [fieldsNameEnum.email]: string;
}

interface UserLogin {
    [fieldsNameEnum.username]: string;
    [fieldsNameEnum.password]: string;
}
interface ResponseAuth {
    user: User,
    msg: string
}
export { fieldsNames }
export type { UserLogin, User, ResponseAuth, fieldsNameEnum }