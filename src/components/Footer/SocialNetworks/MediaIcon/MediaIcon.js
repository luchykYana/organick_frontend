import css from './MediaIcon.module.sass'

const MediaIcon = ({network, link}) => {
    const open = () => window.open(`${link}`, '_blank');

    return (
        <button className={`${css.icon} ${css[`icon_${network}`]}`} onClick={open}></button>
    );
};

export {MediaIcon};