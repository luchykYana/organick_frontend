import css from './ContactUs.module.sass';

const ContactUs = () => {
    return (
        <section className={css['contact-us']}>
            <header className={`heading-h5`}>Contact Us</header>
            <div className={css['contact-us__links']}>
                <div>
                    <p className={`nav`}>Email</p>
                    <a href="mailto:needhelp@Organia.com" className={`paragraph`}>needhelp@Organia.com</a>
                </div>
                <div>
                    <p className={`nav`}>Phone</p>
                    <a href="tel:+38(066)6888888" className={`paragraph`}>666 888 888</a>
                </div>
                <div>
                    <p className={`nav`}>Address</p>
                    <a href="https://goo.gl/maps/XcUz6tJa6QShnTyUA" className={`paragraph`}>88 road, bruin street, USA</a>
                </div>
            </div>
        </section>
    );
};

export {ContactUs};