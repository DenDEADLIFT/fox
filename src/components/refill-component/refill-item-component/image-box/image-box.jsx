import styles from './image-box.module.css'
import { useParams } from "react-router-dom";

const ImageBox = () => {

    const { model, vendor } = useParams()
    const images = require.context('../../../../images/refill', true);
    const img = images.keys().includes(`./${vendor}/${model}.png`) ? images(`./${vendor}/${model}.png`) : null;

    return (
        img && (
            <img
                className={styles.image}
                src={img}
                alt={model}
            />
        )
    )
}

export default ImageBox