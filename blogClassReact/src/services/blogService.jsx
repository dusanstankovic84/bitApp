const mainEndpoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
    return fetch(mainEndpoint)
        .then(response => {
            return response.json()
        })
        .then(blogs => {
            return blogs.map(blog => {
                return {
                    title: blog.title,
                    body: blog.body
                }
            })
        })
}