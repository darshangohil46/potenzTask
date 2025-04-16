import React from 'react';
import { useLocation } from 'react-router-dom';
import Barcode from 'react-barcode';

export default function Product() {
  const loc = useLocation()
  const { item } = loc.state || {}

  if (!item) {
    return <h4 className="text-center mt-5">Go to Product</h4>;
  }

  return (
    <>
      <div className="card">
        <div className="row text-center">
          {item.images.map((pic, index) => (
            <div className="col" key={index}>
              <img src={pic} className="card-img-top" alt="product" style={{ height: "200px", width: "200px", objectFit: "cover" }} />
            </div>
          ))}
        </div>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>

          <hr />

          <div className='text-center' style={{ fontWeight: "bold" }}>Tags</div>
          {item.tags.map((item, index) => (
            <div className="text-center" key={index}>
              {item}
            </div>
          ))}

          <hr />
          <div className="row text-success">
            <div className="col"><strong>Category: </strong>{item.category}</div>
            <div className="col"><strong>Price: </strong>{item.price}</div>
            <div className="col"><strong>Discount: </strong>{item.discountPercentage}</div>
            <div className="col"><strong>Rating: </strong>{item.rating}</div>
          </div>

          <hr />
          <div className="row text-secondary">
            <div className="col-3"><strong>Brand: </strong>{item.brand}</div>
            <div className="col-3"><strong>SKU: </strong>{item.sku}</div>
            <div className="col-3"><strong>Weight: </strong>{item.weight}</div>
          </div>

          <hr />
          <div className="row text-info">
            <div className="col-3"><strong>Width: </strong>{item.dimensions.width}</div>
            <div className="col-3"><strong>Height: </strong>{item.dimensions.height}</div>
            <div className="col-3"><strong>Depth: </strong>{item.dimensions.depth}</div>
          </div>

          <hr />
          <div className="row text-warning">
            <div className="col-3"><strong>Warranty: </strong>{item.warrantyInformation}</div>
            <div className="col-3"><strong>Shipping: </strong>{item.shippingInformation}</div>
            <div className="col-3"><strong>Availability: </strong>{item.availabilityStatus}</div>
            <div className="col-3"><strong>Return Policy: </strong>{item.returnPolicy}</div>
          </div>

          <hr />
          <h4 className='text-center text-primary'>Review</h4>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            {item.reviews.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed text-success" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls={index}>
                    {item.reviewerName}
                  </button>
                </h2>
                <div id={index} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body text-info">
                    <div className="col-3">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} style={{ color: i <= Math.round(item.rating) ? "orange" : "grey" }}>
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="col-3">{item.comment}</div>
                    <div className="col-3">{item.date}</div>
                    <div className="col-3 text-info"><strong>Email: </strong>{item.reviewerEmail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div className="row text-center">
            <div className="col-3">
              For other details you can scan this...
              <img src={item.meta.qrCode} className="card-img-top" alt="product" style={{ height: "125px", width: "125px", objectFit: "cover" }} />
            </div>
            <div className="col-3">
              <div style={{ height: "100px", width: "100px", objectFit: "cover" }}>
                <Barcode value={item.meta.barcode.toString()} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
