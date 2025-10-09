import '../organisms/Login/Login.css';
import FirstLogin from '../organisms/Login/FirstLogin';
import Formulario from '../organisms/Login/Formulario';
import Footer from '../organisms/Footer';

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