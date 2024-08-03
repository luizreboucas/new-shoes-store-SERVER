type UserDtoInterface = {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  adress?: string;
};

export class UserDto {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  adress?: string;

  constructor(partial: Partial<UserDtoInterface>) {
    Object.assign(this, partial);
  }

  public makeFromInput() {
    const returnedUserDto = {};
    Object.keys(this).forEach((key) => {
      if (this[key] !== undefined || this[key] !== null) {
        returnedUserDto[key] = this[key];
      }
    });

    return returnedUserDto;
  }
}
