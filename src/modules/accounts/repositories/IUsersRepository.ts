import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

/* eslint-disable @typescript-eslint/method-signature-style */
interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
