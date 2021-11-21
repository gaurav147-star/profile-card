import React, { useState } from 'react'
import Alert from './Alert';

import '../components/profile.css';
const Profile = () => {


    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500)
    }
    const [user, setUser] = useState({
        name: "",
        skill: "",
        email: "",
        github: "",
        twitter: "",
        insta: "",
    });

    let name, value;
    const getUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUser({ ...user, [name]: value })
    };
 



    const postData = async (e) => {
        e.preventDefault();
        const {
            name,
            skill,
            email,
            github,
            twitter,
            insta,
        } = user;
        if (name && skill && email && github && twitter && insta) {
            const res = await fetch("https://profilecard-4ed40-default-rtdb.firebaseio.com//profilecard.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    skill,
                    email,
                    github,
                    twitter,
                    insta,
                }),
            });
            if (res) {
                setUser({
                    name: "",
                    skill: "",
                    email: "",
                    github: "",
                    twitter: "",
                    insta: "",
                });
                showAlert("Thanks", "success");
            }
        } else {
            showAlert("Please Fill the form", "danger");
        }
    };

    return (
        <>
            <Alert alert={alert} />
            <form className="f" method="POST">
                <div className="form-row m-3">
                    <div className="col">
                        <h1 className='text-center'>Profile Form</h1>
                    </div>

                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <input type="text" className="form-control py-3" name="name" placeholder="Enter your name " value={user.name} onChange={getUserData} autoComplete="off" required />
                    </div>

                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <input type="text" className="form-control py-3" name="skill" placeholder="Enter your skill" value={user.skill} onChange={getUserData} autoComplete="off" required />
                    </div>
                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <input type="email" className="form-control py-3" name="email" placeholder="Enter your email" value={user.email} onChange={getUserData} autoComplete="off" required />
                    </div>

                    <div className="col">
                        <input type="link" className="form-control py-3" name="github" placeholder="Enter your github link" value={user.github} onChange={getUserData} autoComplete="off" required />
                    </div>

                </div>
                <div className="form-row m-4">
                    <div className="col">
                        <input type="link" className="form-control py-3" name="twitter" placeholder="Enter your twitter id" value={user.twitter} onChange={getUserData} autoComplete="off" />
                    </div>

                    <div className="col">
                        <input type="link" className="form-control py-3" name="insta" placeholder="Enter your instagram id" value={user.insta} onChange={getUserData} autoComplete="off" />
                    </div>

                </div>

                <div className="form-row m-4">
                    <div className="col">
                        <button type="submit" className="btn btn-dark py-2  px-5" onClick={postData}>Submit</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Profile
