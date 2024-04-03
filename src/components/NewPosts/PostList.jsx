
import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import Post from "./Post";
import BigPost from "./BigPost";
import { getThumb, dateFormater } from '@/lib/utils';
export default function PostList() {
  const [posts, setPosts] = useState(null);
  const date = new Date();
  

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
        key={posts[0].id}
        title={posts[0].title}
        category={posts[0].category}
        date={dateFormater(date)}
        thumbnail={getThumb(posts[0])}
      
      />
      <div className="flex justify-between mt-10">
        {posts.slice(1).map((post) => (
          <Post
            key={post.id}
            title={post.title}
            category={post.category}
            date={dateFormater(date)}
            thumbnail={getThumb(post)}
          />
        ))}
      </div>
    </section>
  ) : (
    <div>cargando...</div>
  );
}
