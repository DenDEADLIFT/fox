import styles from './header.module.css'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useLocation, useParams } from 'react-router-dom'
import MainMenu from '../main-menu/main-menu'
import imageCall from '../../images/call.svg'
import imageEarth from '../../images/language.svg'
import {
    MENU_MOBILE_BUTTON,
} from "../../services/actions/buttons";

function HeaderComponent() {

    const { mobileMenuButton } = useSelector((state) => state.buttons);
    const dispatch = useDispatch();

    const location = useLocation();
    const { vendor } = useParams()

    const handleClick = () => {
        if (!mobileMenuButton) {
            dispatch({
                type: MENU_MOBILE_BUTTON,
                mobileMenuButton: true
            })
        } else {
            dispatch({
                type: MENU_MOBILE_BUTTON,
                mobileMenuButton: false
            })
        }
    }
    //console.log(mobileMenuButton)
    return (
        <div className={styles.container}>
            <div className={styles.logo_container}>
                <div className={styles.info_box}>
                    <div className={styles.logo_and_menu}>
                        <NavLink
                            className={styles.link}
                            to="/" />
                        <MainMenu position={'header'} />
                    </div>
                    <div className={styles.logo_and_menu_mobile}>
                        <div className={styles.logo_and_menu_mobile_button}>
                            <NavLink
                                className={styles.link}
                                to="/" />
                            <NavLink
                                className={styles.mobile_menu_button}
                                onClick={handleClick} />
                        </div>
                    </div>
                    <div className={styles.slogan_box}>
                        <p className={styles.slogan_big}>{
                            location.pathname.includes('refill') && `Заправка картриджей ${vendor === undefined ? '' : vendor.toUpperCase()}` ||
                            location.pathname.includes('repair') && 'Ремонт принтеров и МФУ' ||
                            location.pathname.includes('remont-noutbukov') && 'Ремонт ноутбуков' ||
                            'Printridge — решение проблем с компьютерной техникой'
                        }</p>
                        <p className={styles.slogan_small}>{
                            location.pathname.includes('refill') && 'Заправка картриджей помогает существенно экономить на печати' ||
                            location.pathname.includes('repair') && 'Ремонт принтеров и МФУ осуществляется на выезде и в нашем офисе' ||
                            location.pathname.includes('remont-noutbukov') && 'Ремонт ноутбуков осуществляется на выезде и в нашем офисе' ||
                            'Заправка картриджей всех видов и ремонт принтеров любой модели и любой сложности'
                        }</p>
                    </div>
                </div>
            </div>
            <div className={styles.images_box}>
                <div className={styles.mail_box}>
                    <div className={styles.phone_box}>
                        <img className={styles.phone_box_image} src={imageCall} alt="Трубка" />
                        <NavLink
                            className={styles.phone_text}
                            to={`tel:+79944390149`}
                        >+7 994 439-01-49</NavLink>
                    </div>
                    <div className={styles.phone_box}>
                        <img className={styles.phone_box_image} src={imageEarth} alt="Трубка" />
                        <NavLink
                            className={styles.phone_text}
                            to={`mailto:sales@printridge.ru`}
                        >sales@printridge.ru</NavLink>
                    </div>
                </div>
                <div className={styles.image}> </div>
            </div>
        </div>
    );
}

export default HeaderComponent;