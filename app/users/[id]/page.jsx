import User from "@/components/User";

async function getData(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page({ params }) {
  const user = await getData(params?.id);
  return (
    <div>
      <User user={user} />
    </div>
  );
}
