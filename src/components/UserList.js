import React from "react";
import "./UserList.scss";
import classNames from 'classnames';

const isInteger = (num) => {
  return (num ^ 0) === num;
}

const validDate = (date) => {
  let currentDate = new Date();
  let someDate = new Date(date);
  const correctDate = (/\d{2}[/]\d{2}[/]\d{4}/.test(date)) || (/\d{4}-\d{2}-\d{2}/.test(date));

  return ((someDate.getTime() > currentDate.getTime())) && correctDate;
}

const UserList = ({userList}) =>
  userList.length > 0 &&
  (
      <table className="table">
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
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td className="table__row">{user.id}</td>
              <td className="table__row">{user.fullName}</td>
              <td
                className={classNames({
                  "table__row": true,
                  "table__row--invalid": user.phone === "Wrong number",
                })}
              >
                {user.phone}
              </td>
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
                  "table__row--invalid": (user.age < 21 || !isInteger(user.age)),
                })}
              >{user.age}</td>
              <td
                className={classNames({
                  "table__row": true,
                  "table__row--invalid": (user.experience < 0 || user.experience > user.age) ,
                })}
              >
                {user.experience}
              </td>
              <td
               className={classNames({
                "table__row": true,
                "table__row--invalid": (user.income > 1000000 || user.income < 0),
              })}
              >{user.income}</td>
              <td
                className={classNames({
                  "table__row": true,
                  "table__row--invalid": user.hasChildren !== "false" && user.hasChildren !== "true"
                })}
              >
                {user.hasChildren}
              </td>
              <td className="table__row">{user.licenseStates}</td>
              <td
                className={classNames({
                  "table__row": true,
                  "table__row--invalid": !validDate(user.expirationDate),
                })}
              >
                {user.expirationDate}
              </td>
              <td
                className={classNames({
                  "table__row": true,
                  "table__row--invalid": (!/\w{6}/.test(user.licenseNumber) || user.licenseNumber.length !== 6),
                })}>{user.licenseNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
)


export default UserList;