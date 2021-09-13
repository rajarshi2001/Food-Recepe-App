import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { alldish } from "../redux/actions";
import { useEffect } from "react";
import {Link} from 'react-router-dom'
const Mutton = ()=>{
    const dispatch = useDispatch()
    const muttons = useSelector((state)=>{
        return state.recepe
    })
    const {dishes} = muttons
    const fetchmutton = async()=>{
        await axios.get('http://127.0.0.1:8000/catapi/mutton').then(res => dispatch(alldish(res.data.mydish))).catch(
            err => console.log(err)
        )
    }
    useEffect(()=>{
        fetchmutton()
    },[])
    return(
        <>
            <div className="container my-2">
                <div className="row">
                {
                        dishes.map((currEle) => {
                            return (
                                <>
                                    <div className="col-12 col-lg-4">
                                        <div className="card shadow">
                                            <img src={currEle.foodimg} alt="image" className="img-fluid" />
                                            <div className="card-body">
                                                <h2 className="text-center"><u><i>Recepe: {currEle.name}</i></u></h2>
                                                <p className="text-center"><i>Written by: </i><i>{currEle.created_by}</i></p>
                                                <div className="text-center">
                                                    <Link className="btn btn-outline-success w-100" to={`/detail/${currEle.name}`} >View</Link>
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
export default Mutton