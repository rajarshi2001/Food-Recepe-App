import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import { getingredient} from "../redux/actions";

const Addingredient = () => {
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const { id } = params
    const [item, setItem] = useState({
        dish: null,
        rules: ""
    })
    const subitems = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("dish", item.dish)
        data.append("rules", item.rules)
        axios.post('http://127.0.0.1:8000/ingredientapi/', data).then(res => dispatch(getingredient(res.data))).catch(err=>console.log(err))
        setItem({
            dish: null,
            rules: ""
        })
        history.push(`/detail/${id}`)
    }

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-lg-12">
                        <form className="shadow p-3" onSubmit={subitems}>
                            <div className="form-group mb-3">
                                <label>Add Ingredient:</label>
                                <input type="text" value={item.rules} className="form-control" onChange={(e) => {
                                    setItem({
                                        dish: parseInt(id),
                                        rules: e.target.value
                                    })
                                }} />
                            </div>
                            <div className="text-center">
                                <input type="submit" className="btn btn-outline-danger w-100" value="Add all ingredients" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Addingredient