//import footer css from Footer.css
import './Footer.css';


export default function Footer(){

    return(

        <footer className="footer d-flex justify-content-center align-items-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-4">
                                <strong>Santiago Calvo</strong>
                            </div>
                            <div className="col-4">
                                <strong>Copyright © 2020-2021</strong>
                            </div>
                            <div className="col-4">
                                <strong>Teléfono: 123456789</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}