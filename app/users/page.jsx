import Users from "@/components/Users";

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default async function page() {
  const users = await getData();
  return (
    <div>
      <Users users={users} />
    </div>
  );
}
