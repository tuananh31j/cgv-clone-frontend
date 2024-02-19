import './GlobalStyles.scss';

interface GlobalStylesProps {
    children: React.ReactElement;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
    return children;
};

export default GlobalStyles;
