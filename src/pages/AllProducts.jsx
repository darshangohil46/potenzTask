import React, { useState } from 'react'
import Products from '../components/Product';
import { Link } from 'react-router-dom';

export default function AllProducts({ product }) {
    const [page, setPage] = useState(1);
    const product_in_page = 10;

    const last = page * 10;
    const first = last - 10;
    const show_product = product.slice(first, last);
    console.log(show_product);

    const totalPages = Math.ceil(product.length / product_in_page);
    console.log(totalPages);

    const handlePagination = (num) => {
        setPage(num);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                {show_product.map((item) => (
                    <div key={item.id} className="col-md-4 mb-4">
                        <Link to="/product-data" style={{ textDecoration: "none" }} state={{ item: item }}>
                            <div className="card h-100 shadow">
                                <img
                                    src={item.thumbnail}
                                    className="card-img-top"
                                    alt={item.title}
                                    style={{ height: "170px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-center">{item.title}</h5>
                                    <p className="card-text">
                                        <strong>Price:</strong> ${item.price}
                                    </p>
                                    <p className="card-text">
                                        <strong>Rating:</strong> {item.rating} / 5
                                    </p>
                                    <p className="card-text">
                                        <strong>Stock:</strong> {item.stock} left
                                    </p>
                                    <p className="card-text">
                                        <strong>Category:</strong> {item.category}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <nav>
                <ul className="pagination justify-content-center">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map(num => (
                        <li key={num} className={`page-item ${num === page ? 'active' : ''}`}>
                            <button className="page-link" onClick={() => handlePagination(num)}>
                                {num}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
