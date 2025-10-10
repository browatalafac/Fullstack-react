import '../organisms/Login/Login.css';
import Formulario from '../organisms/Login/Formulario';
import Footer from '../organisms/Footer';
import FirstLogin from '../organisms/Login/FirstLogin';

export default function Login(){
    return(
        <>
            <section className="login-root">
                <FirstLogin/>
                <Formulario/>
                <Footer/>
            </section>
        </>
    )
}