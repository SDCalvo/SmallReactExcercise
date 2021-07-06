import './Contacto.css';
//make a component for a contact page using react that has a link to instagram with its icon, link to facebook with facebook icon
export default function Contacto (props){
    
    return (
        <div className="container bg-light rounded my-5">
            <div className="row">
                <div className="col-md-12 text-center my-5">
                    <h1>Contacto</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                    <a className="mx-2" href="https://www.instagram.com/santiago.d.calvo/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png" alt="Santiago Calvo" className="insta-icon" /></a>
                    <a className="mx-2" href="https://www.facebook.com"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png" alt="Santiago Calvo" className="facebook-icon" /></a>    
                </div>
                <div className="col-md-12 text-center my-3">
                    <h4>Santiago Calvo</h4>
                    <p>Teléfono: 123456789</p>
                    <p>Correo: santiago.d.cavlo@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
