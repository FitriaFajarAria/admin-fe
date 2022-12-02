import React from 'react'
import UserList from '../pages/UserList'
// import {Link} from 'react-router-dom'


function AdminUser() {
  return (
    <div>
      <UserList/>      
        {/* <Link
          to={`edit/${user.id}`}
          className="button is-small is-info mr-2">
          Edit
        </Link>  */}

    </div>
  )
}

export default AdminUser