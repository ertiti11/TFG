import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import Post from "./Post";
export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const pb = new PocketBase("https://esciclismomalaga.pockethost.io");
      const resultList = await pb.collection("posts").getList(1, 5);
      setPosts(resultList);
      console.log(resultList);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Post/>
    </>
  );
}
