export async function fetchUsers() {
  const res = await fetch('https://dummyjson.com/users?limit=20');
  const data = await res.json();
  return data.users.map((user: any) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    age: user.age,
    department: ['HR', 'Engineering', 'Sales', 'Marketing'][Math.floor(Math.random() * 4)],
    performance: Math.ceil(Math.random() * 5),
    bio: "A passionate team member.",
    address: `${user.address.address}, ${user.address.city}`,
    phone: user.phone,
    history: Array.from({ length: 5 }, () => Math.ceil(Math.random() * 5))
  }));
}
