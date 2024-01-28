export interface CreateUserRequest {
    phone: string;
    email: string;
    nickname: string;
    name: string;
    surname: string;
    sex: string;
    advantages: string[];
    checkboxes: number[];
    radioOption: number;
}
