import React from 'react';

const OnBoarding = ({validateUser, userInfo}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        validateUser()
    }

    console.log("userInfo", userInfo);
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"/>
                <button type="submit">Next</button>
            </form>
        </>
    )
}

export default OnBoarding;