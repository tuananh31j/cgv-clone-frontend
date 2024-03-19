import { motion } from 'framer-motion';

const Animation = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} transition={{ duration: 1, ease: 'easeInOut' }}>
            {children}
        </motion.div>
    );
};

export default Animation;
