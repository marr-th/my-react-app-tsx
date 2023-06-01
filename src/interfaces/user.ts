enum fieldsNameEnum {
    firstName = 'firstName',
    lastName = 'lastName',
    email = 'email',
}
enum loginFieldsNameEnum {
    username = 'username',
    password = 'password',
}


const fieldsNames = [
    { name: fieldsNameEnum.firstName, opts: {
          defaultValue: 'Aa1@aaaa',} },
    { name: fieldsNameEnum.lastName, opts: {
          defaultValue: 'Aa1@aaaa',} },
    { name: fieldsNameEnum.email, opts: {
          defaultValue: 'Aa1@aaaa',} },
    { name: loginFieldsNameEnum.username, opts: {
          defaultValue: 'Aa1@aaaa',} },
    {
        name: loginFieldsNameEnum.password,
        opts: {
            /* at least: */
            /* (?=.*[a-z]) one uppercase letter
          (?=.*[A-Z]) one uppercase letter
          (?=.*\d) one number 
          (?=.*[@$!%*?&]) one special character
          [A-Za-z\d@$!%*?&]{8,} length: 8
           */
          defaultValue: 'Aa1@aaaa',
            pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}',
            type: 'password'
        }
    },
]
const loginFieldsNames = [
    { name: loginFieldsNameEnum.username, opts: {
          defaultValue: 'Aa1@aaaa',} },
    {
        name: loginFieldsNameEnum.password,
        opts: {
            /* at least: */
            /* (?=.*[a-z]) one uppercase letter
          (?=.*[A-Z]) one uppercase letter
          (?=.*\d) one number 
          (?=.*[@$!%*?&]) one special character
          [A-Za-z\d@$!%*?&]{8,} length: 8
           */
          defaultValue: 'Aa1@aaaa',
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
    [loginFieldsNameEnum.username]: string;
    [loginFieldsNameEnum.password]: string;
}
interface ResponseAuth {
    user: User,
    msg: string
}
export { fieldsNames, loginFieldsNames }
export type { UserLogin, User, ResponseAuth, fieldsNameEnum }