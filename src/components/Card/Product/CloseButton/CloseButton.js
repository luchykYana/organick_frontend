import css from './CloseButton.module.sass';

const CloseButton = ({click}) => {
    return (
        <div className={css['close-button']} onClick={click}>
            <h6>X</h6>
        </div>
    );
};

export {CloseButton};