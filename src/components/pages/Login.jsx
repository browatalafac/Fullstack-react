import '../organisms/Login/Login.css';
import Formulario from '../organisms/Login/Formulario';
import Footer from '../organisms/Footer';
import FirstLogin from '../organisms/Login/FirstLogin';
import YouHave from '../organisms/Login/YouHave';

export default function Login(){
    return(
        <>
            <section className="login-root">
                <FirstLogin/>
                <Formulario/>
                <YouHave/>
                <Footer/>
            </section>
        </>
    )
}