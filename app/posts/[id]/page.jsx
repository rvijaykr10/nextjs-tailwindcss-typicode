import Post from "@/components/Post";

async function getData(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }) {
  const post = await getData(params?.id);
  return (
    <div>
      <Post post={post} />
    </div>
  );
}
