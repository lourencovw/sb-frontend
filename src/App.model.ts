export interface IDataPeople {
    people: IPerson[];
    isFetching: boolean;
}

export interface IPerson {
    _id: string;
    picture: string;
    birthday: string;
    name: string;
    address: string;
    phone_number: string;
    age: string;
}

export interface IDataSuggestion {
    suggestion: string;
    isFetching: boolean;
}