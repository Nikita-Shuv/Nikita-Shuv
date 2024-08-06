import React, { useEffect, useState } from 'react';
import Table from './components/Table';
import Modal from './components/Modal';
import { getUsers } from './controllers/UserController';
import './styles/AppStyles.css'

function App() {
  const [users, setUsers] = useState([]); // Состояние для хранения списка пользователей

  const [filterUsers, setFilterUsers] = useState([]);
   // Состояние для фильтрованного списка пользователей
  const [selectedUser, setSelectedUser] = useState(null);
   // Состояние для выбранного пользователя

  useEffect(() => {
    getUsers(setUsers, setFilterUsers);
  }, []);
 
  // Фильтрация данных на основе поискового запроса

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();// Получение значения поискового запроса и приведение к нижнему регистру

 // Фильтрация данных на основе поискового запрос
    const newData = filterUsers.filter(row =>
      row.firstName.toLowerCase().includes(searchTerm) ||
      row.gender.toLowerCase().includes(searchTerm) ||
      row.maidenName.toLowerCase().includes(searchTerm) ||
      row.lastName.toLowerCase().includes(searchTerm) ||
      row.address.address.toLowerCase().includes(searchTerm) ||
      row.address.city.toLowerCase().includes(searchTerm) ||
      row.phone.toLowerCase().includes(searchTerm) ||
      (typeof row.age === 'number' && row.age >= parseInt(searchTerm, 10))
    );
    setUsers(newData);
  };
// Рендеринг компонента
  return (
    <div className="app-container">
      <div className="search-container">
        <input type="text" onChange={handleFilter} placeholder="Поиск..." />
      </div>
      <Table data={users} onRowClick={setSelectedUser} />
      {selectedUser && <Modal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
}

export default App;