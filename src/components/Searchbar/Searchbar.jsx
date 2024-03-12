import { useState } from 'react';

import { ImSearch } from 'react-icons/im';

import css from './Searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const handleTermChange = event => setTerm(event.target.value.toLowerCase());

  const handleSubmit = event => {
    event.preventDefault();

    if (term.trim() === '') {
      alert('Empty string');
      return;
    }
    onSubmit(term);
    setTerm('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          <span className={css['button-label']}>
            <ImSearch size="20" />
          </span>
        </button>

        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={term}
          onChange={handleTermChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;