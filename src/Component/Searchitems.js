import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { searchallitems } from "../redux/actions";
import {Link} from 'react-router-dom'

const Searchitem = () => {
    const params = useParams()
    console.log(params.name)
    const searchdishes = useSelector((state) => {
        return state.recepe
    })
    const { dishes } = searchdishes
    const dispatch = useDispatch()
    const searchall = async () => {
        await axios.get('http://127.0.0.1:8000/dishapi/').then(res => dispatch(searchallitems({ items: res.data, food: params.name }))).catch(err => console.log(err))
    }
    useEffect(() => {
        searchall()
    }, [params.name])
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    {
                        dishes.length === 0 ? <h2 className="text-center">No such items found</h2>:
                        dishes.map((currEle) => {
                            return (
                                <>
                                    <div className="col-12 col-lg-4" key={currEle.id}>
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
};
export default Searchitem