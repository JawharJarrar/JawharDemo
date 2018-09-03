export class User {
    id: number ;
    name: string;
    username: string;
    email: string;
    address: {
    name: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    };

};
phone: string;
website: string;

company: {
    name: string;
    catchPhrase: string;
        city: string;
        bs: string
                   };

}
