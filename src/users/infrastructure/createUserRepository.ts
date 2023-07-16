import { createPool } from "../../mysql";
import { User } from "../domain/user";
import { UserRepository } from "../domain/user-repository";

export class InMemoryUserRepository implements UserRepository {
  async getAll(): Promise<User[]> {
    console.log("Entered InMemoryUserRepository getAll");
    try{
      const connection = await createPool();
      const result: any[] = await connection.query("SELECT * FROM users");
      if (result.length === 0) {
        return [];
      }
      const users: any[] = result[0];
      console.log(`User ${JSON.stringify(users)}`);
      return users.map((user) => {
        return new User(
          user.id,
          user.username,
          user.password,
        );
      });
    }catch(error){
      console.log(error);
    }
    return[]
}
}