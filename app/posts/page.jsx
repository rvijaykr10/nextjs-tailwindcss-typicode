import Posts from "@/components/Posts";

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  const posts = await getData();
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
