import { usersList } from "../data/data";


interface User {
    id: number,
    name: string,
    lastname: string,
    fullname: string,
    gender: string,
    age: number,
    city: string,
}

export class UserController {
    private users: User[];

    constructor(){
        this.users = usersList;
    }

    getAllUsers(){
        return this.users;
    }

    getUsers(){
        const shuffled = this.users.sort(() => 0.5 - Math.random());
        const randomTenUsers = shuffled.slice(0, 10);
        return randomTenUsers
    }

    getUserById(id: number): User | null{
        return this.users.find((user) => user.id == id) || null;
    }

    updateUserById(id: number, updatedFeilds: Partial<User>): User | null {
        const index = this.users.findIndex(user => user.id == id);
        if(index !== -1){
            this.users[index] = {...this.users[index], ...updatedFeilds};
            return this.users[index];
        }
        return null;
    }
}


