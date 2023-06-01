enum fieldsNameEnum {
    firstName = 'firstName',
    lastName = 'lastName',
    email = 'email',
}
enum loginFieldsNameEnum {
    username = 'username',
    password = 'password',
}



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

const fieldsNames = [
    {
        name: fieldsNameEnum.firstName, opts: {
        }
    },
    {
        name: fieldsNameEnum.lastName, opts: {
        }
    },
    {
        name: fieldsNameEnum.email, opts: {
        }
    },
    {
        name: loginFieldsNameEnum.username, opts: {
        }
    },
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
            pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}',
            type: 'password'
        }
    },
]
const loginFieldsNames = [
    {
        name: loginFieldsNameEnum.username, opts: {
        }
    },
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
            pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}',
            type: 'password'
        }
    },
]
export { fieldsNames, loginFieldsNames }
export type { UserLogin, User, ResponseAuth, fieldsNameEnum }