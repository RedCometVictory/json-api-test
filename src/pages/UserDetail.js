import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"

const UserDetail = () => {
  let [post, setPost] = useState([]);
  let {user_id} = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${user_id}`)
    .then(response => response.json())
    .then(data => {
      console.log("data")
      console.log(data)
      setPost(data)
    })
    .catch(error => console.log(error))
  }, []);
  return (
    <section className="user-detail">
      <h2>User Details</h2>
      <div className="user-info">
        <h4>ID#: {post.id}</h4>
        <div className="user-desc">{post.title}</div>
      </div>
    </section>
  )
}
export default UserDetail;