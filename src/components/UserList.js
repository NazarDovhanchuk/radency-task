import React from "react";
import "./UserList.scss";
import classNames from 'classnames';

const UserList = ({userList}) => {

  console.log(userList);
  return (
    <table>
      <thead>
        <tr>
          <th className="table__row">ID</th>
          <th className="table__row">Full Name</th>
          <th className="table__row">Phone</th>
          <th className="table__row">Email</th>
          <th className="table__row">Age</th>
          <th className="table__row">Experience</th>
          <th className="table__row">Yearly Income</th>
          <th className="table__row">Has children</th>
          <th className="table__row">License states</th>
          <th className="table__row">Expiration date</th>
          <th className="table__row">License number</th>
          <th className="table__row">Dublicate with</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((user,index) => (
          <tr key={user.id}>
            <td className="table__row">{user.id}</td>
            <td className="table__row">{user.fullName}</td>
            <td className="table__row">{user.phone}</td>
            <td
              className={classNames({
                "table__row": true,
                "table__row--invalid": !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(user.email),
                })}
            >
              {user.email}
            </td>
            <td
              className={classNames({
                "table__row": true,
                "table__row--invalid": (user.age < 21),
            })}
            >{user.age}</td>
            <td className="table__row">{user.experience}</td>
            <td className="table__row">{user.income}</td>
            <td className="table__row">{user.hasChildren}</td>
            <td className="table__row">{user.licenseStates}</td>
            <td className="table__row">{user.expirationDate}</td>
            <td className="table__row">{user.licenseNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>

  )
}

export default UserList;