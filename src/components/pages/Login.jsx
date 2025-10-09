import '../organisms/Login/Login.css';
import Formulario from '../organisms/Login/Formulario';
import Footer from '../organisms/Footer';
import First from '../organisms/First';
import TopBar from '../organisms/TopBar';

export default function Login(){
    return(
        <>
            <section className="login-root">
                <TopBar/>
                <First/>
                <Formulario/>
                <Footer/>
            </section>
        </>
    )
}