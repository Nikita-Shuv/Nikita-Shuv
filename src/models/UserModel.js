
export async function fetchUsers() {
  try {
// Отправляем GET-запрос на указанный URL
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }// Если ответ не успешен (HTTP статус не в диапазоне 200-299), выбрасываем ошибку
    const data = await response.json();
    return data.users;
  } catch (error) {
    console.error("Failed to fetch users data:", error);
    throw error;
  }
}