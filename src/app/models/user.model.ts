export interface User {
    id: Float32Array;

    name: string;
    username: string;

    email: string;
    phone: string;
    company: {
        name: string;
    }
    address: {
        street: string;
        city:string;
    }

    website:string
}