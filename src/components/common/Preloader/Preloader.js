import preloaderGIF from '../Preloader/loading.gif';
import s from './Preloader.module.css';

let Preloader = (props) => {
    return <div className={s.preload_image} img={preloaderGIF}>
    </div>

}

export default Preloader;