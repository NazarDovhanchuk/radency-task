import React, { useState, useRef } from 'react';
import { parse } from 'papaparse';
import UserList from './components/UserList';

function App() {
  const [contacts, setContacts] = useState([]);
  const fileRef = useRef(undefined);

  const handleChange = (event) => {

    const reader = new FileReader();
    reader.onload = function () {
      const text = reader.result.toLowerCase();
      const result = parse(text, {header: true});

      setContacts(result.data
        .filter(list => (list['full name']))
        .map((item, index) => ({
          id: index + 1,
          fullName: item['full name'].trim(),
          phone: (item['phone'].trim().length >= 10) ? item['phone'].trim().padStart(12, '+1') : "Wrong number",
          email: item['email'],
          age: +item['age'],
          experience: item['experience'],
          income: item['yearly income'],
          hasChildren: item['has children'].toLowerCase(),
          licenseStates: item['license states'].substring(0,2).toUpperCase(),
          expirationDate: item['expiration date'],
          licenseNumber: item['license number'],
      })));
    }

    reader.readAsText(event.target.files[0]);
    }
  return (
    <div className="App">
      <main className="main">
        <h1 className="main__title">List of Users</h1>
        <input
          type="file"
          accept=".csv"
          ref={fileRef}
          style={{display: "none"}}
          onChange={handleChange}
        />
        <button
          className="main__file-selector"
          onClick={() => {
            fileRef.current.click()
          }}
        >
          Import users
        </button>
        
        <UserList userList={contacts}/>  
      </main>      
    </div>
  );
}

export default App;
