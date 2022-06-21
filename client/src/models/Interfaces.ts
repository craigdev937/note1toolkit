export interface IData {
    title: string,
    first: string,
    last: string,
    age: number,
    info: string
};

export interface INote extends IData {
    _id?: string,
};


