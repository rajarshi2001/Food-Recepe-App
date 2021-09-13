import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { alldish } from "../redux/actions";
import {Link} from 'react-router-dom'
const All = () => {
    const dispatch = useDispatch()
    const recepeItems = useSelector((state) => {
        return state.recepe
    })
    const { dishes } = recepeItems

    const fetchalldishes = async () => {
        await axios.get('http://127.0.0.1:8000/dishapi/').then(
            res => dispatch(alldish(res.data))
        ).catch(err => console.log(err))
    }
    useEffect(() => {
        fetchalldishes()
    }, [])
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    {
                        dishes.map((currEle) => {
                            return (
                                <>
                                    <div className="col-12 col-lg-4" key={currEle.id}>
                                        <div className="card shadow mb-2">
                                            <img src={currEle.foodimg} alt="image" className="img-fluid" />
                                            <div className="card-body">
                                                <h2 className="text-center"><u><i>Recepe: {currEle.name}</i></u></h2>
                                                <p className="text-center"><i>Written by: </i><i>{currEle.created_by}</i></p>
                                                <div className="text-center">
                                                    <Link className="btn btn-outline-success w-100" to={`/detail/${currEle.id}`} >View</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default All