import React from "react";
import './CurrentUser.css'

function CurrentUser({user}) {
    return (
        <div id={'current-user'}>
            <img src={user.url} width={'100px'} height={'100px'}/>
            <p><a href={user.href}>{user.displayName}</a></p>
        </div>
    )

}

export default CurrentUser