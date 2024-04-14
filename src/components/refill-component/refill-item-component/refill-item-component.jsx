import styles from './refill-item-component.module.css'
import { useParams } from "react-router-dom";
import { refillData } from '../../../utils/refill';
import Tabs from '../../tabs/tabs';
import ImageBox from '../refill-item-component/image-box/image-box'
import DescriptionBox from './description-box/description-box'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function RefillItemComponent() {

    const location = useLocation();
    const canonicalUrl = `https://printridge.ru${location.pathname}`;

    const { vendor, model } = useParams()
    const data = refillData.find((i) => i.modelCart === model)

    useEffect(() => {
        document.querySelector('link[rel="canonical"]').setAttribute('href', canonicalUrl);
        document.title = `Заправка картриджей ${vendor.toUpperCase()} ${model.toUpperCase()} в Санкт-Петербурге`;
        document.querySelector('meta[name="title"]').setAttribute('content', `Заправка картриджей ${vendor.toUpperCase()} ${model.toUpperCase()} для ${data.devices} в Санкт-Петербурге`);
        document.querySelector('meta[name="description"]').setAttribute('content', `Заправка ${data.modelCart} - ${data.refill_price} Восстановление ${data.modelCart} ${data.recovery_price}`);
        document.querySelector('meta[name="keywords"]').setAttribute('content', `заправка картриджа ${vendor.toUpperCase()} ${model.toUpperCase()}, заправить картридж ${vendor.toUpperCase()} ${model.toUpperCase()}, для ${data.devices}, восстановление картриджа ${vendor.toUpperCase()} ${model.toUpperCase()}, в Санкт-Петербурге, выезд, на выезде`);
    }, [vendor, model]);

    return (
        <div>
            <div className={styles.container}>
                <h2 className={styles.name}>Заправка картриджа {`${data.vendor.toUpperCase()} ${data.modelCart}`}</h2>
                <div className={styles.img_desc_box}>
                    <div className={styles.left_box}>
                        <div className={styles.text_box}>
                            <p className={styles.blue_text}>Совместимые модели</p>
                            <p className={styles.black_text}>{data.devices}</p>
                        </div>
                        <div className={styles.text_box}>
                            <p className={styles.blue_text}>Ресурс картриджа:</p>
                            <p className={styles.black_text}>{`${data.resource} стр., при заполнении страницы 5%`}</p>
                        </div>

                        <p className={styles.boxes_title}>Цены</p>
                        <div className={styles.text_box}>
                            <p className={styles.blue_text}>{`Заправка ${data.modelCart}`}</p>
                            <p className={styles.black_text}>{data.refill_price}</p>
                        </div>
                        <div className={styles.text_box}>
                            <p className={styles.blue_text}>{`Восстановление ${data.modelCart}`}</p>
                            <p className={styles.black_text}>{data.recovery_price}</p>
                        </div>
                        <div className={styles.text_box}>
                            <p className={styles.blue_text}>Замена чипа</p>
                            <p className={styles.black_text}>{data.chip ? 'уточняйте' : 'не требуется'}</p>
                        </div>
                    </div>
                    <ImageBox />
                    <h2 className={styles.name_mobile}>Заправка картриджа {`${data.vendor.toUpperCase()} ${data.modelCart}`}</h2>
                </div>
                <DescriptionBox />
            </div>
            {data.examples.length !== 0 && <Tabs items={data.examples} />}
        </div>
    );
}

export default RefillItemComponent;