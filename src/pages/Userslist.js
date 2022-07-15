import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Userslist = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(data => setPosts(data))
    .catch(error => console.log(error))
  }, []);

  return (
    <section className="users users-list">
      <h2>List of Users</h2>
      <h5># of posts: {posts.length}</h5>
      <div className="user__list">
        {posts.length > 0 && posts.map((post, index) => (
          <div className="user__name" key={post.id}>
            <div className="name">
              <Link to={`/${post.id}`}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Userslist;