import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">Secure Chat</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                <span>Username</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar