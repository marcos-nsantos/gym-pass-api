import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";
import { GetUserProfileUseCase } from "@/use-cases/get-user-profile";

export function makeGetUserProfileUseCase() {
  const usersRepository = new PrismaUsersRepository();
  return new GetUserProfileUseCase(usersRepository);
}
