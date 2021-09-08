import React from 'react'

const ProfileHeader = ()=>{
    return(
        <div className="breadcumb_area">
        <div className="container h-100">
            <div className="row h-100 align-items-center">
                <div className="col-12">
                    <h5>My Account</h5>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active">My Account</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProfileHeader;