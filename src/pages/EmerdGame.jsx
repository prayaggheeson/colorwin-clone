import React, { useState, useEffect } from 'react';

const EmerdGame = () => {
  const initialUsers = [
    { memberID: '001', regDate: '2023-01-01', mobileNumber: '1234567890', status: 'active', memberName: 'John Doe', email: 'john@example.com' },
    { memberID: '002', regDate: '2023-02-01', mobileNumber: '9876543210', status: 'inactive', memberName: 'Jane Doe', email: 'jane@example.com' },
    { memberID: '003', regDate: '2023-03-01', mobileNumber: '5555555555', status: 'active', memberName: 'Alice Smith', email: 'alice@example.com' },
    { memberID: '004', regDate: '2023-04-01', mobileNumber: '9999999999', status: 'inactive', memberName: 'Bob Johnson', email: 'bob@example.com' },
    { memberID: '005', regDate: '2023-05-01', mobileNumber: '1231231234', status: 'active', memberName: 'Eva Williams', email: 'eva@example.com' },
    { memberID: '006', regDate: '2023-06-01', mobileNumber: '5556667777', status: 'inactive', memberName: 'Chris Brown', email: 'chris@example.com' },
    { memberID: '007', regDate: '2023-07-01', mobileNumber: '9879879876', status: 'active', memberName: 'Grace Miller', email: 'grace@example.com' },
    { memberID: '008', regDate: '2023-08-01', mobileNumber: '1112223333', status: 'inactive', memberName: 'David Smith', email: 'david@example.com' },
    { memberID: '009', regDate: '2023-09-01', mobileNumber: '7778889999', status: 'active', memberName: 'Emma Johnson', email: 'emma@example.com' },
    { memberID: '010', regDate: '2023-10-01', mobileNumber: '4443332222', status: 'inactive', memberName: 'Frank White', email: 'frank@example.com' },
    // ... Add more entries up to 50
  ];
  
  const [users, setUsers] = useState(initialUsers);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Logic for pagination and filtering based on search term
    const indexOfLastEntry = currentPage * entriesPerPage;
    const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

    const filteredUsers = initialUsers.filter(user =>
      user.memberID.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.memberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setUsers(filteredUsers.slice(indexOfFirstEntry, indexOfLastEntry));
  }, [currentPage, entriesPerPage, searchTerm]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEntriesChange = (e) => {
    setEntriesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing entries per page
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when performing a new search
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold my-4">Emerd Game</h1>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md mr-2"
        />
        <label className="mr-2">Show entries:</label>
        <select value={entriesPerPage} onChange={handleEntriesChange} className="px-2 py-1 border border-gray-300 rounded-md">
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Member ID</th>
            <th className="py-2 px-4 border">Registration Date</th>
            <th className="py-2 px-4 border">Mobile Number</th>
            <th className="py-2 px-4 border">Status</th>
            <th className="py-2 px-4 border">Member Name</th>
            <th className="py-2 px-4 border">Email ID</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border">{user.memberID}</td>
              <td className="py-2 px-4 border">{user.regDate}</td>
              <td className="py-2 px-4 border">{user.mobileNumber}</td>
              <td className="py-2 px-4 border">{user.status}</td>
              <td className="py-2 px-4 border">{user.memberName}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-2 px-4 border"></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        {/* Pagination component */}
        <Pagination
          currentPage={currentPage}
          entriesPerPage={entriesPerPage}
          totalEntries={initialUsers.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, entriesPerPage, totalEntries, onPageChange }) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex justify-end mt-4">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-100 hover:bg-blue-200 mr-2"
      >
        Previous
      </button>
      <span className="mr-2">Page {currentPage} of {totalPages}</span>
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-100 hover:bg-blue-200"
      >
        Next
      </button>
    </div>
  );
};

export default EmerdGame;
