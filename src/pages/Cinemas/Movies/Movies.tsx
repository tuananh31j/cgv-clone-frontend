import cinemaApi from '~/api/cinemaApi';
import showtimeApi from '~/api/showtimeApi';
import Loading from '~/components/Loading';
import MovieShowcase from '~/components/MovieShowcase';
import NoData from '~/components/NoData';
import useAsync from '~/hooks/useAsync';
import { ICinema } from '~/types/Cinema';
import { IMoviesShow } from '~/types/Showtime';

const Movies = ({ cinemaID }: { cinemaID: string }) => {
    const getMoviesOfCinema = async () => {
        try {
            const { data } = await showtimeApi.getMoviesNowShowingByCinema();
            return data.filter((item) => item._id.cinema === cinemaID);
        } catch (error) {
            console.log(error);

            return [];
        }
    };
    const getCinema = async () => {
        try {
            const { data } = await cinemaApi.getOne(cinemaID);
            return data;
        } catch (error) {
            console.log(error);
            return { _id: '', name: '' };
        }
    };
    const { value: cinema } = useAsync<ICinema>(getCinema, [cinemaID]);
    const { value: moviesOfCiema, loading } = useAsync<IMoviesShow[]>(getMoviesOfCinema, [cinemaID]);
    return (
        <div>
            <h2 className='mx-auto my-4 text-center text-[30px] font-bold uppercase'>{cinema?.name}</h2>
            <div>
                {loading && <Loading />}
                {moviesOfCiema && <MovieShowcase title='Danh sách phim đang chiếu tại rạp' data={moviesOfCiema} />}
                {moviesOfCiema && moviesOfCiema.length === 0 && <NoData title='Hiện rạp chưa có lịch chiếu' />}
            </div>
        </div>
    );
};

export default Movies;
