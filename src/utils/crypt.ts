import bcrypt from 'bcrypt';

export class Crypt {
  static hashPassword(plainTextPassword: string) {
    return bcrypt.hash(plainTextPassword, 10, (err, hash) => {
      if (err) throw new Error(`Não foi possível encriptar senha: ${err}`);
      return hash;
    });
  }
}
