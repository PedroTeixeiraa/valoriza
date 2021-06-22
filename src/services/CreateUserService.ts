import { UsersRepositories } from "../repositories/UsersRepositories"

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({email, name, admin} : IUserRequest) {
      const usersRepository = new UsersRepositories()

      if (!email) {
        throw new Error("Email incorrect")
      }

      const userAlreadyExists = await usersRepository.findOne({ email })

      if (userAlreadyExists) {
        throw new Error("User already exists!")
      }

      const user = usersRepository.create({
        email,
        name,
        admin,
      })

      await usersRepository.save(user)

      return user
  }
}

export { CreateUserService }