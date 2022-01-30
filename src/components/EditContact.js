import React, { useState, useEffect } from 'react'           //rafce
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
    const { id } = useParams();
    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (currentContact)
            setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);

        const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number))

        if (!email || !number || !name) {
            return toast.warning("Please fill in all details")
        }
        if (checkEmail) {
            return toast.error("This Email already Exist !")
        }
        if (checkNumber) {
            return toast.error("This Phone Number Already Exist!")
        }

        const data = {
            id: parseInt(id) ,
            name,
            email,
            number
        };

        dispatch({ type: "UPDATE_CONTACT", payload: data });
        toast.success("Student Updated Successfully !");
        navigate("/");
    };

    return (
        <div className='container'>
            {
                currentContact ? (
                    <>
                        <div className="row p-5">
                            <h1 className="display-3 my-2 text-center">
                                Edit Student {id}
                            </h1>
                            <div className="col-md-6 shadow mx-auto p-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            placeholder='Name'
                                            className='form-control'
                                            value={name}
                                            onChange={e => setName(e.target.value)} /><br />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            placeholder='Email'
                                            className='form-control'
                                            value={email}
                                            onChange={e => setEmail(e.target.value)} /><br />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            placeholder='Phone Number'
                                            className='form-control'
                                            value={number}
                                            onChange={e => setNumber(e.target.value)} /><br />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value='Update Student'
                                            className='btn btn-dark' />
                                        <Link
                                            to="/"
                                            className='btn btn-danger left-space' >
                                            Cancel
                                        </Link>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1 className="display-3 my-5 text-center">Student Not found with {id} contact id. </h1>
                )}
        </div>
    )
}

export default EditContact
