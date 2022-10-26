import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div style={{ paddingLeft: "100px" }}>
      <h1>User Details</h1>
      {loading && <h4>Loading...</h4>}
      <ul>
        {loading && <div>Loading...</div>}
        {!loading && <li> Name: {JSON.stringify(user.name)}</li>}
        {!loading && <li> E-Mail: {JSON.stringify(user.email)}</li>}
        {!loading && <li> Street: {JSON.stringify(user.address.street)}</li>}
        {!loading && <li> Company: {JSON.stringify(user.company.name)}</li>}
        {/* Loading halindeyken boş obje göstermeyi engeller. */}
      </ul>
      <br />

      <Link
        style={{ padding: "0 2rem" }}
        to={`/users/${
          parseInt(id) === 10 ? parseInt((id = 1)) : parseInt(id) + 1
        }`}
      >
        Next User- ({parseInt(id) + 1})
      </Link>
    </div>
  );
}