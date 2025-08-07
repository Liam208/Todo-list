import "./card.css";

function Card() {
  return (
    <>
      <div className="card mt-4 ms-3" style={{ width: "15rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            Programming
            <a href="#">
              <i className="fa-solid fa-pencil fs-6 me-2 ms-4"></i>
              <i className="fa-solid fa-trash text-danger fs-6 ms-2"></i>
            </a>
          </h5>
          <ul className="list-group list-group-numbered list-group-flush long-border mt-3">
            <li className="list-group-item d-flex align-items-center">
              An Item
              <a href="" className="ms-auto">
                <i className="fa-solid fa-pencil fs-6 me-2"></i>
                <i className="fa-solid fa-trash text-danger fs-6 ms-2"></i>
              </a>
            </li>
            <li className="list-group-item">An Item</li>
            <li className="list-group-item">An Item</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Card;
