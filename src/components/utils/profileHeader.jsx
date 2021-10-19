import React from 'react'

const ProfileHeader = ({ titleText })=>{
    return(
        <div className="breadcumb_area">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <h5>Login &amp; Register</h5>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">{titleText}</li>
                            <li className="breadcrumb-item active">Login &amp; Register</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;