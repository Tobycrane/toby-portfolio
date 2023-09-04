import apple from "../Images/apple-logo-removebg-preview.png"
import anything from "../Images/cisco-logo-removebg-preview.png"
import element from "../Images/google-logo-removebg-preview.png"



function Section() {
  return (
    <div className="container"style={{background: "blue"}}>
     <div className="">
       <div className="d-flex flex-wrap mt-5">
       
          <div className="card m-2" style={{width: "18rem"}}>
            <img src={apple} classNaame="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card m-2" style={{width: "18rem"}}>
            <img src={anything} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div className="card m-2" style={{width: "18rem"}}>
            <img src={element} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
      </div>
      
     </div>
    </div>
  );
}

export default Section;
