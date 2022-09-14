import { UserService } from "./user.service";
import createUserDto from "./dto/createUserDto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    creating(User: createUserDto): Promise<import("./user.entity").UserEntity>;
    getAll(): Promise<import("./user.entity").UserEntity[]>;
}
