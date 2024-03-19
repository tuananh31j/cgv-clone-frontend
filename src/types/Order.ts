export interface IOrder {
    qr_code: string;
    user_name: string;
    movie_name: string;
    start_time: string;
    end_time: string;
    date: string;
    payment_type?: boolean;
    region_name: string;
    cinema_name: string;
    screening_format_name: string;
    seat_quantity: number;
    seat_name: string[];
    current_seat_price: number;
    current_concession_price: number;
    concession_ref: string[];
    user_ref: string;
    region_ref: string;
    format_ref: string;
    movie_ref: string;
    cinema_ref: string;
    showtime_ref: string;
}
