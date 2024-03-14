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
                            `borde-solid absolute   bottom-7 -mt-6 box-border -translate-x-1/2 border-x-8 border-white bg-white text-center transition-colors will-change-auto`
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
                            `borde-solid absolute  bottom-7 -mt-6 box-border -translate-x-1/2  border-x-8 border-[#ff9592] bg-[#ff9592] text-center transition-colors will-change-auto`
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
