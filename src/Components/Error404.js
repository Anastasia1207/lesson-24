import errorImg from '../Assets/Img/404.png';

function Error404() {

    return (
        <div className="col mt-3 text-center">
            <h4>Page not found</h4>
            <img src={errorImg} alt="Page not found" />
        </div>
    )
}

export default Error404;