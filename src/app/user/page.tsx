type UserListProps = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<UserListProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ]);
    }, 2000);
  });
}

async function UserList() {
  const users = await fetchUsers();

  return (
    <div className="mt-20 text-white">
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default function UserListPage() {
  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-4">User Page</h1>
      <p>Welcome to the user page!</p>

      <UserList />
    </div>
  );
}
