import bcrypt from 'bcrypt';

export class Crypt {
  static hashPassword(plainTextPassword: string) {
    let hashed: string;
    bcrypt.hash(plainTextPassword, 10, (err, hash) => {
      if (err) throw new Error(`Não foi possível encriptar senha: ${err}`);
      hashed = hash;
    });
    return hashed;
  }

  static comparePassword(plainTextPassword: string, hashedPassWord: string) {
    return bcrypt.compare(plainTextPassword, hashedPassWord, (err, result) => {
      if (err) throw new Error('não foi possível comparar as senhas');
      return result;
    });
  }
}
