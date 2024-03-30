import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import Post from "./Post";
import BigPost from "./BigPost";
export default function PostList() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const pb = new PocketBase("https://esciclismomalaga.pockethost.io");
      const resultList = await pb.collection("posts").getList(1, 4);
      setPosts(resultList.items);
    };
    fetchPosts();
  }, []);

  return posts ? (
    <section className="w-[1245px] mt-24">
      <h1 className="text-center font-bold text-5xl">Nuevas Noticias</h1>
      <BigPost
        title={posts[0].title}
        category={posts[0].category}
        date={posts[0].date}
        thumbnail={`https://esciclismomalaga.pockethost.io/api/files/${posts[0].collectionId}/${posts[0].id}/${posts[0].thumbnail}`}
      />
      <div className="flex justify-between mt-10">
        {posts.slice(1).map((post) => (
          <Post
            title={post.title}
            category={post.category}
            date={post.date}
            thumbnail={`https://esciclismomalaga.pockethost.io/api/files/${post.collectionId}/${post.id}/${post.thumbnail}`}
          />
        ))}
      </div>
    </section>
  ) : null;
}
