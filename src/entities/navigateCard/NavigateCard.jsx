import { motion, AnimatePresence } from 'framer-motion';

export const NavigateCard = ({ activeSelect, setActiveSelect, type, title, id, images }) => {
    return (
        <div
            className={`categories-navigate__item 
                ${activeSelect === id ? 'active' : ''}`}
            onMouseEnter={() => setActiveSelect(id)}
            onMouseLeave={() => setActiveSelect(null)}
            style={{ minHeight: '120px' }}
        >
            <AnimatePresence mode="wait">
                {activeSelect === id ? (
                    <motion.div
                        key="hover"
                        className="categories-navigate__hover"
                        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
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
                        initial={{ opacity: 0, y: -10, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, filter: "blur(6px)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <h2 className={`categories-navigate__default-title ${type === 'check' ? 'categories-navigate__default-title--check' : ''}`}>
                            {title}
                        </h2>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
