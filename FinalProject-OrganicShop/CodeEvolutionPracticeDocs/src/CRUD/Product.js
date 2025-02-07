import React, { useState, useEffect } from 'react';

const defaultImageSrc = './images/imageplaceholder.png';

const initialFieldValues = {
    productID: 0,
    title: '',
    description: '',
    price: 0,
    quantityInStock: 0,
    category: '',
    imageFile: null,
    imageSrc: defaultImageSrc,
    imageName: ''
};

export default function Product({ addOrEdit, recordForEdit }) {
    const [values, setValues] = useState(initialFieldValues);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (recordForEdit != null)
            setValues(recordForEdit);
    }, [recordForEdit]);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const showPreview = e => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = x => {
                setValues({
                    ...values,
                    imageFile,
                    imageSrc: x.target.result
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setValues({
                ...values,
                imageFile: null,
                imageSrc: defaultImageSrc
            });
        }
    };

    const validate = () => {
        let temp = {};
        temp.title = values.title === "" ? false : true;
        temp.imageSrc = values.imageSrc === defaultImageSrc ? false : true;
        setErrors(temp);
        return Object.values(temp).every(x => x === true);
    };

    const resetForm = () => {
        setValues(initialFieldValues);
        document.getElementById('image-uploader').value = null;
        setErrors({});
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append('productId', values.productId);
            formData.append('title', values.title);
            formData.append('description', values.description);
            formData.append('price', values.price);
            formData.append('quantityInStock', values.quantityInStock);
            formData.append('category', values.category);
            formData.append('imageFile', values.imageFile);
            addOrEdit(formData, resetForm);
        }
    };

    const applyErrorClass = field => ((field in errors && errors[field] === false) ? ' invalid-field' : '');

    return (
        <>
            <div className="container text-center">
                <p className="lead">Add/Edit Product</p>
            </div>
            <form autoComplete="off" noValidate onSubmit={handleFormSubmit}>
                <div className="card">
                    <img src={values.imageSrc} className="card-img-top" alt="Product" />
                    <div className="card-body">
                        <div className="form-group">
                            <input
                                type="file"
                                accept="image/*"
                                className={"form-control-file" + applyErrorClass('imageSrc')}
                                onChange={showPreview}
                                id="image-uploader"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className={"form-control" + applyErrorClass('title')}
                                placeholder="Title"
                                name="title"
                                value={values.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                placeholder="Description"
                                name="description"
                                value={values.description}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Price"
                                name="price"
                                type="number"
                                value={values.price}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Quantity in Stock"
                                name="quantityInStock"
                                type="number"
                                value={values.quantityInStock}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                placeholder="Category"
                                name="category"
                                value={values.category}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-light">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}