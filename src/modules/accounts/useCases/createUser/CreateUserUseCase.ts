import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private readonly userRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        driver_license,
        password,
    }: ICreateUserDTO): Promise<void> {
        const userAlreadExists = await this.userRepository.findByEmail(email);

        if (userAlreadExists) {
            throw new AppError("User Already exists");
        }

        const passawordHash = await hash(password, 8);

        await this.userRepository.create({
            name,
            email,
            driver_license,
            password: passawordHash,
        });
    }
}

export { CreateUserUseCase };
