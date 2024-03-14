export interface IShowtime {
    _id: string;
    date: string;
    start_time: string;
    end_time: string;
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
        region: string;
        cinema: string;
        format: string;
        createdAt: string;
        updatedAt: string;
        __v: number;
    };
    movie: {
        _id: string;
        name: string;
        thumbnail: string;
        author: string;
        actors: string;
        categories: string;
        show_duration: number;
        rated_id: string;
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
