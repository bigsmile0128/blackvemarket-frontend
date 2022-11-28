import { useEffect, useState } from 'react';

export default function CustomImage(props) {
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);
    const [imgStyle, setImgStyle] = useState({});
    
    const onErrorHandle = () => {
        if (!loaded) {
            setErrored(true);
        }
    }

    useEffect(() => {
        if (loaded === true) {
            setImgStyle({ display: 'block' });
            setErrored(false);
        } else {
            setImgStyle({ display: 'none' });
        }
    }, [loaded])

    return (
        <div className={props.customClassName?(props.customClassName + " custom-image"):"custom-image"}>
            {!loaded && !errored && 
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
            }
            {errored && <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>}
            {<img alt='' src={props.src} className={props.className?props.className:""} style={imgStyle} onLoad={() => setLoaded(true)} onError={onErrorHandle} />}
        </div>
    );
}
