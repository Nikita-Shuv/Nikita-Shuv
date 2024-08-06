import { fetchUsers } from '../models/UserModel';

// Асинхронная функция для получения пользователей
export async function getUsers(setUsers, setFilterUsers, setError) {
  try {
    const users = await fetchUsers();
    setUsers(users);
    setFilterUsers(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);
    setError(error.message);
  }
}
