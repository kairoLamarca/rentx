import { Specification } from "../entities/Specification";

/* eslint-disable @typescript-eslint/method-signature-style */
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationDTO): Promise<void>;
    findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };