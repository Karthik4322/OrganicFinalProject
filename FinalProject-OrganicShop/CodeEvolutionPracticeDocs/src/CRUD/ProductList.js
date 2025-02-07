import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

export default function ProductList() {
    const [productList, setProductList] = useState([]);
    const [recordForEdit, setRecordForEdit] = useState(null);

    useEffect(() => {
        refreshProductList();
    }, []);

    const productAPI = (url = `http://localhost:5062/api/products/`) => {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        };
    };

    const refreshProductList = () => {
        productAPI().fetchAll()
            .then(res => setProductList(res.data))
            .catch(err => console.log(err));
    };

    const addOrEdit = (formData, onSuccess) => {
        if (formData.get('productID') === "0")
            productAPI().create(formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err));
        else
            productAPI().update(formData.get('productID'), formData)
                .then(res => {
                    onSuccess();
                    refreshProductList();
                })
                .catch(err => console.log(err));
    };

    const showRecordDetails = data => {
        setRecordForEdit(data);
    };

    const onDelete = (e, id) => {
        e.stopPropagation();
        if (window.confirm('Are you sure to delete this record?'))
            productAPI().delete(id)
                .then(res => refreshProductList())
                .catch(err => console.log(err));
    };

    const imageCard = data => {
        if (!data) return null; // Handle undefined/null values
        return (
            <div className="card" onClick={() => showRecordDetails(data)}>
                <img src={data.imageSrc} className="card-img-top" alt="Product" />
                <div className="card-body">
                    <h5>{data.title}</h5>
                    <span>{data.category}</span> <br />
                    <button className="btn btn-light delete-button" onClick={e => onDelete(e, data.productId)}>
                        <i className="far fa-trash-alt"></i>
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="jumbotron jumbotron-fluid py-4">
                    <div className="container text-center">
                        <h1 className="display-4">Product Register</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <Product addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
            </div>
            <div className="col-md-8">
                <div className="row">
                    {productList.map((product, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            {imageCard(product)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}