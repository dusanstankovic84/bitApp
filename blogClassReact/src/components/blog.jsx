import React, { useState, useEffect, Component } from "react";
import { getBlogs } from "../services/blogService";

export class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogs: []
        };
    }

    componentDidMount() {
        getBlogs()
        .then(blogs => {
            this.setState({blogs})
        })
    }

    render() {
        return (
            <div className="blog">
                {this.state.blogs.map((post, index) => (
                    <div className="blogPost" key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}

            </div>
        )
    }

}


// export const Blog = () => {
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         getBlogs().then((blogs) => {
//             setBlogs(blogs);
//         });
//     })

//     if (blogs.length === 0) return <div>Loading...</div>;

//     return(
//         <div className="blog">
//             {this.state.blogs.map((post, index) => (
//                 <div className="blogPost" key={index}>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                 </div>
//             ))}
//         </div>
//     ) 
// }
