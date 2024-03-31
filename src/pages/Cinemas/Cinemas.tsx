import clsx from 'clsx';
import classStyle from './Cinemas.module.scss';
import useAsync from '~/hooks/useAsync';
import { IRegion } from '~/types/Region';
import regionApi from '~/api/regionApi';
import Loading from '~/components/Loading';
import { useCallback, useState } from 'react';
import cinemaApi from '~/api/cinemaApi';
import { ICinema } from '~/types/Cinema';
import Animation from '~/components/Animation';
import Movies from './Movies';
const CinemasList = () => {
    const [regionID, setRegionID] = useState<string>();
    const [cinemaID, setCinemaID] = useState<string>();
    const getRegionsList = async () => {
        try {
            const { data } = await regionApi.getAll();
            return data;
        } catch (error) {
            console.log(error);

            return [];
        }
    };
    const getCinemasList = useCallback(async () => {
        try {
            if (regionID) {
                const { data } = await cinemaApi.getCinemasByRegionID(regionID);
                return data;
            }
            return [];
        } catch (error) {
            console.log(error);
            return [];
        }
    }, [regionID]);

    const handleGetRegion = (id: string) => {
        setRegionID(id);
        setCinemaID('');
    };
    const handleGetCinema = (id: string) => {
        setCinemaID(id);
    };
    const { value: cinemas, loading: loadingCinemas } = useAsync<ICinema[] | []>(getCinemasList, [regionID]);

    const { value: regions, loading: loadingRegions } = useAsync<IRegion[]>(getRegionsList);
    return (
        <div className='container-box'>
            <div className={clsx(classStyle.bg, 'my-10 p-10')}>
                <div>
                    <h1 className='my- mb-10 text-center text-[30px] font-extrabold uppercase shadow-md'>
                        CGV Cinemas
                    </h1>
                </div>
                <div className='flex flex-col justify-center border-y-2 border-white py-5 font-semibold text-white'>
                    <ul className='mx-auto grid grid-cols-5 grid-rows-4 justify-evenly gap-x-20 gap-y-4 text-[18px]'>
                        {loadingRegions && <Loading />}
                        {regions &&
                            regions.map((item, i) => (
                                <li className='' key={i}>
                                    <button
                                        onClick={() => handleGetRegion(item._id)}
                                        className='rounded-md border-s-transparent px-1 hover:text-red-400 data-[status=active]:bg-red-800'
                                        data-status={regionID === item._id ? 'active' : ''}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ))}
                    </ul>
                </div>
                <div>
                    {loadingCinemas && (
                        <Animation>
                            <Loading />
                        </Animation>
                    )}
                    <ul className='mx-auto my-4 grid grid-cols-4  justify-evenly gap-x-20 gap-y-4 text-[18px] font-extralight italic text-white'>
                        {cinemas &&
                            cinemas.map((item) => (
                                <li key={item._id}>
                                    <Animation>
                                        <button
                                            onClick={() => handleGetCinema(item._id)}
                                            data-status={item._id === cinemaID ? 'active' : ''}
                                            className='inline text-nowrap  rounded-md border-s-transparent px-1 font-bold hover:text-red-400 data-[status=active]:bg-red-800'
                                        >
                                            {item.name}
                                        </button>
                                    </Animation>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
            {regionID && cinemaID && <Movies cinemaID={cinemaID} />}
        </div>
    );
};
export default CinemasList;
