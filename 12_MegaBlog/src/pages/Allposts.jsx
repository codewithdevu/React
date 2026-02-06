import React, { useState, useEffect } from "react";
import { Container, Postcard } from "../components";
import service from "../appwrite/confService";
import { useSelector } from "react-redux";

function Allposts() {
    const [posts, setPosts] = useState([]);

    // ✅ logged-in user
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        // user login nahi hai → kuch fetch mat karo
        if (!userData?.$id) return;

        service
            .getPosts(userData.$id)
            .then((response) => {
                if (response) {
                    setPosts(response.documents);
                }
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, [userData]);

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <Postcard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Allposts;