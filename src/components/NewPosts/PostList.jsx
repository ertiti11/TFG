import { useEffect, useState } from "react";
import PocketBase from "pocketbase";
import Post from "./Post";
import BigPost from "./BigPost";
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
    <section className="w-[1245px] mt-24">
        <h1 className="text-center font-bold text-5xl">Nuevas Noticias</h1>
      <BigPost
        title="como ser mejor persona"
        category={"carrera"}
        date="12/12/2024"
        thumbnail={
          "https://www.ciclismoafondo.es/uploads/s1/12/52/84/6/5dc6b0680de694c7403493c1-10-ciclistas-a-seguir-en-2020.jpeg"
        }
      />
      <div className="flex justify-between mt-10">
        <Post
          title="como ser mejor persona"
          category={"carrera"}
          date="12/12/2024"
          thumbnail={
            "https://www.ciclismoafondo.es/uploads/s1/12/52/84/6/5dc6b0680de694c7403493c1-10-ciclistas-a-seguir-en-2020.jpeg"
          }
        />
        <Post
          title="como ser mejor persona"
          category={"carrera"}
          date="12/12/2024"
          thumbnail={
            "https://www.ciclismoafondo.es/uploads/s1/12/52/84/6/5dc6b0680de694c7403493c1-10-ciclistas-a-seguir-en-2020.jpeg"
          }
        />
        <Post
          title="como ser mejor persona"
          category={"carrera"}
          date="12/12/2024"
          thumbnail={
            "https://www.ciclismoafondo.es/uploads/s1/12/52/84/6/5dc6b0680de694c7403493c1-10-ciclistas-a-seguir-en-2020.jpeg"
          }
        />
      </div>
    </section>
  );
}
