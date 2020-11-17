import '../styles/style.css';
import logo from './image.jpg';


export const Banner = () => {
    return (
        <div class="banner">
            <img src={logo}/>
                <div class="name">
                    <h2>DIVYA SRI</h2>
                </div>
        </div>
    );
}
