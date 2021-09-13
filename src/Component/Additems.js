import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addish } from "../redux/actions";

const Additems = () => {
    const [foods, setFoods] = useState({
        cat: null,
        name: "",
        desc: "",
        created_by: "",
        foodimg: ""
    })
    const dispatch = useDispatch()
    const history = useHistory()
    const subdata = (e)=>{
        e.preventDefault()
        const data = new FormData()
        const {cat, name, desc, created_by, foodimg} = foods
        data.append('cat', cat)
        data.append('name', name)
        data.append('desc', desc)
        data.append('created_by', created_by)
        data.append('foodimg', foodimg)
        axios.post('http://127.0.0.1:8000/itemapi/', data).then(res => dispatch(addish(res.data))).catch(err=>console.log(err))
        setFoods({
            cat: null,
            name: "",
            desc: "",
            created_by: "",
            foodimg: ""
        })
        history.push('/')
    }
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <form onSubmit={subdata} className="shadow p-3">
                            <h2 className="text-center alert alert-danger">Add Recepe Items</h2>
                            <div className="form-group mb-3">
                                <label>Select Category</label>
                                <select class="form-control form-select" onChange={(e)=>{setFoods({
                                    ...foods,
                                    cat: parseInt(e.target.value)
                                })}}>
                                    <option selected>Choose Category</option>
                                    <option value="3">Chicken</option>
                                    <option value="4">Mutton</option>
                                    <option value="5">Fish</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <label>Item Name:</label>
                                <input type="text" className="form-control" value={foods.name} onChange={(e)=>{setFoods({
                                    ...foods,
                                    name: e.target.value
                                })}}  />
                            </div>
                            <div className="form-group mb-3">
                                <label>Description</label>
                                <textarea className="form-control" value={foods.desc} onChange={(e)=>{
                                    setFoods({
                                        ...foods,
                                        desc: e.target.value
                                    })
                                }}></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label>Your Name:</label>
                                <input type="text" className="form-control" value={foods.created_by} onChange={(e)=>{
                                    setFoods({
                                        ...foods,
                                        created_by: e.target.value
                                    })
                                }} />
                            </div>
                            <div className="form-group mb-3">
                                <label>Upload Image</label>
                                <input type="file" className="form-control" onChange={(e)=>{
                                    setFoods({
                                        ...foods,
                                        foodimg: e.target.files[0]
                                    })
                                }}  />
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-outline-success w-100" value="Add Your Item" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Additems