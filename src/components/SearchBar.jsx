function SearchBar({ searchText, setSearchText, onSearch, loading }) {
  const isDisabled = !searchText.trim() || loading

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Pesquise por pedidos, produtos ou equipamentos..."
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          disabled={loading}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary search-icon-button"
          disabled={isDisabled}
          aria-label="Buscar"
          title="Buscar"
        >
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <path
              fill="currentColor"
              d="M11.742 10.344a6 6 0 1 0-1.398 1.398l3.858 3.858 1.06-1.06-3.52-4.196zM6.5 11A4.5 4.5 0 1 1 6.5 2a4.5 4.5 0 0 1 0 9z"
            />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
