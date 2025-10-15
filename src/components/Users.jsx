import {useState,useEffect} from 'react';
import axios from 'axios';
import img from '../assets/delete.png'
import img2 from '../assets/edit icon.png'

function Users() {
    const [Users,setUsers] = useState([]);
    const [client,setClient] = useState('');

    const getUsers = async () => {
        const Response = await axios.get("http://localhost:7000/api/user");
       console.log(Response.data.datas); 
       setUsers(Response.data.datas); 
    };

    const handleDelete = async (id) => {
        if (window.confirm("Do you want delete the user?")){
          try {
            await axios.delete(`http://localhost:7000/api/delete/${id}`)
            setUsers((prev) => prev.filter((user) => user._id !==id ));
          } catch (error) {
            console.log("Error",error)
          }
        }
        

    }

    useEffect(() => {
        getUsers();
    }, []);
  return (
    <div>
    
       
          
        
        
      
    <section className="d-flex align-items-center justify-content-center text-center bg-light" style={{ minWidth: "100vw" }}>

    <div className="container">
        <h1 className="display-4 fw-bold text-primary">Welcome to My Website</h1>
      
        <input
        placeholder='Search User'
        value={client}
        onChange={(e) => setClient (e.target.value)}
        style={{width:"50%"}}
        />
      <table className="table table-bordered  table-hover" >
        <thead>
          <tr>
            <th>S.No</th>
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
      
           {Users
        .filter((search) => 
        search.name.toLowerCase().includes(client.toLowerCase()))

          .map((user, index) => (
            
                <tr>
                  <td>{index + 1}</td>
                  <td> <img src={img} style={{height:"20px"}} onClick={() => handleDelete(user._id)}/> </td>
                  <td> <img src={img2} style={{height:"20px"}}/> </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                </tr>
            
          ))}
        </tbody>
      </table>
    </div>
    </section>
    </div>

  )
}

export default Users