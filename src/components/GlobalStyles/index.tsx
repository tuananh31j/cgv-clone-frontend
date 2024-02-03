import './GlobalStyles.scss';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';
type GlobalStylesProps = {
    children: React.ReactElement;
};

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
    return children;
};

export default GlobalStyles;
