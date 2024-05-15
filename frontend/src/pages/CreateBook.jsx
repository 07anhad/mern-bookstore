import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [borrower, setBorrower] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const isValidYear = (year) => {
    const currentYear = new Date().getFullYear();
    return year >= 0 && year <= currentYear;
  };

  const handleSaveBook = () => {
    if (!isValidYear(publishYear)) {
      alert('Please enter a valid publish year.');
      return;
    }

    const data = {
      title,
      author,
      publishYear,
      borrower
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Book</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col max-w-md mx-auto border-2 border-sky-400 rounded-xl p-4'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-300'>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full text-black'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-300'>Author</label>
          <input
            type='text'
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full text-black'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-300'>Publish Year</label>
          <input
            type='number'
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full text-black'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-300'>Borrower</label>
          <input
            type='text'
            value={borrower}
            onChange={(e) => setBorrower(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full text-black'
          />
        </div>
        <button className='p-2 bg-sky-500 m-8' onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateBooks;
