export interface IShowtime {
    _id: string;
    date: string;
    start_time: string;
    end_time: string;
    price: number;
    re_showing: boolean;
    cinema: {
        _id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    theater: {
        _id: string;
        name: string;
        colums: number;
        rows: number;
        region: {
            _id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
            __v: number;
        };
        cinema: string;
        format: {
            _id: string;
            name: string;
            createdAt: string;
            updatedAt: string;
            __v: number;
        };
    };
    movie: {
        _id: string;
        name: string;
        thumbnail: string;
        author: string;
        actors: string;
        categories: string;
        show_duration: number;
        rated_id: {
            _id: string;
            name: string;
            icon: string;
            description: string;
            createdAt: string;
            updatedAt: string;
            __v: 0;
        };
        liked: number;
        description: string;
        language: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    createdAt: string;
    updatedAt: string;
    __v: number;
}
