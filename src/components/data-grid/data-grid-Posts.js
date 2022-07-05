import React, { useEffect, useState } from 'react'

function DataGridPosts() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        loadData()
    }, [])



    const loadData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(Response => Response.json())
            .then(Response => {
                setPosts(Response)
            })
    }

    const renderBody = () => {
        return (
            <>
                {posts.map((post, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>
                        </tr>
                    )

                })}
            </>
        )
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tittle</th>
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </>
    )
}
export default DataGridPosts;

