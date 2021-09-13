import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'
import { getdish, getingredients } from "../redux/actions";
const Details = () => {
    const params = useParams()
    const {id} = params
    const dispatch = useDispatch()

    const item = useSelector((state)=>{
        return state.recepe
    })
    const {dish, ingredients} = item

    const fetchdish = async () =>{
        await axios.get(`http://127.0.0.1:8000/dishapi/${id}`).then((res) => {
            dispatch(getdish(res.data))
            dispatch(getingredients(res.data.ingredient))}).catch(
            err => console.log(err)
        )
    }
    useEffect(()=>{
        fetchdish()
    }, [id])

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <div className="row">
                            <div className="col-12 col-lg-5">
                                <img src={dish.foodimg} alt="image" className="img-fluid" />
                                <hr />
                                <h2 className="alert alert-danger text-center"><i>{dish.name}</i></h2>
                            </div>
                            <div className="col-12 col-lg-7">
                                <div className="card">
                                    <div className="card-body">
                                        <h2 className="alert alert-info"><i>Description</i></h2>
                                        <p><i>{dish.desc}</i></p>
                                        <h2 className="alert alert-info"><i>Created by</i></h2>
                                        <h4><i className="text-dark">Name: {dish.created_by}</i></h4>
                                        <br />
                                        <h2 className="alert alert-info"><i>All Ingredients</i></h2>
                                        {
                                
                                            ingredients.map((currItem, index)=>{
                                                return(
                                                    <>
                                                        <p><i>{index+1}. {currItem.rules}</i></p>
                                                    </>
                                                )
                                            })
                                        }
                                        <br />
                                        <Link to={`/ingredient/${dish.id}`} className="btn btn-outline-primary w-100">Add Ingredients</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};
export default Details