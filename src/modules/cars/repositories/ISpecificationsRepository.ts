import { Specification } from "../entities/Specification";

/* eslint-disable @typescript-eslint/method-signature-style */
interface ICreateSpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
