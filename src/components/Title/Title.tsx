import clsx from 'clsx';
import styles from './Title.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '~/store/store';

const Title = ({ name, img }: { name: string; img: string }) => {
    const pinkTheme = useSelector((state: RootState) => state.theme);
    return (
        <>
            <div className={clsx(styles.bg_line, 'relative')}>
                {!pinkTheme && (
                    <h2
                        className={clsx(
                            styles.text,
                            styles[img],
                            `text-center -mt-6   absolute bottom-7 will-change-auto transition-colors borde-solid box-border -translate-x-1/2 border-x-8 bg-white border-white`
                        )}
                    >
                        {name}
                    </h2>
                )}

                {pinkTheme && (
                    <h2
                        className={clsx(
                            styles.text,
                            styles[img],
                            `text-center -mt-6  absolute bottom-7 will-change-auto transition-colors  borde-solid box-border -translate-x-1/2 border-x-8 bg-[#ff9592] border-[#ff9592]`
                        )}
                    >
                        {name}
                    </h2>
                )}
            </div>
        </>
    );
};

export default Title;
