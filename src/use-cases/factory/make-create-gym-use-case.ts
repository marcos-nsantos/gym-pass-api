import { PrismaGymsRepository } from "@/repositories/prisma/prisma-gyms-repository";
import { FetchNearbyGymsUseCase } from "@/use-cases/fetch-near-by-gyms";

export function makeFetchNearbyGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository();
  return new FetchNearbyGymsUseCase(gymsRepository);
}
