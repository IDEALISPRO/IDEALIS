import { motion, AnimatePresence } from 'framer-motion';

export const NavigateCard = ({ activeSelect, setActiveSelect, type, title, id, images }) => {
    const isActive = activeSelect === id;

    const handleClick = () => {
        setActiveSelect(id);
    };

    return (
        <div
            className={`categories-navigate__item ${isActive ? 'active' : ''}`}
            onClick={handleClick}
            style={{ minHeight: '120px', cursor: "pointer" }}
        >
            <AnimatePresence mode="wait">
                {isActive ? (
                    <motion.div
                        key="hover"
                        className="categories-navigate__hover"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="categories-navigate__hover-item">
                            <img className="categories-navigate__hover-img" src={images.first_image} alt={title} />
                            <img className="categories-navigate__hover-img" src={images.second_image} alt={title} />
                        </div>
                        <div className="categories-navigate__hover-item categories-navigate__hover-item--center">
                            <h2 className={`categories-navigate__hover-item-title ${type === 'check' ? 'categories-navigate__hover-item-title--check' : ''}`}>
                                {title}
                            </h2>
                            <a className="categories-navigate__hover-link" href="##">Посмотреть все</a>
                        </div>
                        <div className="categories-navigate__hover-item">
                            <img className="categories-navigate__hover-img" src={images.third_image} alt={title} />
                            <img className="categories-navigate__hover-img" src={images.last_image} alt={title} />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="default"
                        className="categories-navigate__default"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className={`categories-navigate__default-title ${type === 'check' ? 'categories-navigate__default-title--check' : ''}`}>
                            {title}
                        </h2>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};
