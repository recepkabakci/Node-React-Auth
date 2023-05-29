import React from 'react'
import {Link} from 'react-router-dom'


const Home = () => {

  const posts=[
    {
      id:1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tenetur nemo sint consequatur quis sunt nulla enim, placeat facilis corporis dolorum, repellat beatae accusantium, impedit quisquam repudiandae voluptate iure ipsam?Sit, qui nesciunt eos impedit beatae natus molestias porro dolores illum vitae minima officia, sapiente officiis veritatis voluptates labore ducimus nobis odio aspernatur ab, dicta accusamus voluptatem. In, atque veritatis.",
      img : "https://images.pexels.com/photos/2666598/pexels-photo-2666598.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id:2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tenetur nemo sint consequatur quis sunt nulla enim, placeat facilis corporis dolorum, repellat beatae accusantium, impedit quisquam repudiandae voluptate iure ipsam?Sit, qui nesciunt eos impedit beatae natus molestias porro dolores illum vitae minima officia, sapiente officiis veritatis voluptates labore ducimus nobis odio aspernatur ab, dicta accusamus voluptatem. In, atque veritatis.",
      img : "https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }, {
      id:3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, sint? ",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tenetur nemo sint consequatur quis sunt nulla enim, placeat facilis corporis dolorum, repellat beatae accusantium, impedit quisquam repudiandae voluptate iure ipsam?Sit, qui nesciunt eos impedit beatae natus molestias porro dolores illum vitae minima officia, sapiente officiis veritatis voluptates labore ducimus nobis odio aspernatur ab, dicta accusamus voluptatem. In, atque veritatis.",
      img : "https://images.pexels.com/photos/87009/earth-soil-creep-moon-lunar-surface-87009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.mg} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  )
}

export default Home