export interface ResponseAPI {
    results: Result[];
}

export interface Result {
    id: string;
    description: null | string;
    alt_description: null | string;
    urls: Urls ;
}

export interface Urls {
    small: string;
}