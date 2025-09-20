// Search.jsx
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Implement your search logic here

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4 text-center">Search</h2>
      <InputGroup className="mb-3">
        <InputGroup.Text id="search-icon">
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="search"
          placeholder="Search by singer, genre, or song name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ outline: 'none', boxShadow: 'none', border: '1px solid #ced4da', borderRadius: '0.25rem' }}
          className="search-input"
        />
      </InputGroup>
      <br />
      <div style={{ width: '960px', display: 'grid', gridTemplateColumns: 'auto auto auto auto', gap: '30px' }}>
        {searchResults.map((result) => (
          <div key={result._id} className="bg-white p-4 rounded shadow">
            {/* Display search result information here */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
