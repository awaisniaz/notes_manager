import hassPassword from 'password-hash'
export function convertPassword(password) {

    return hassPassword.generate(password)

}