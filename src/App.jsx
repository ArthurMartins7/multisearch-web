import { useState } from 'react'
import axios from 'axios'
import './App.css'
import SearchBar from './components/SearchBar'
import ResultsContainer from './components/ResultsContainer'
import { filterMultisearch } from './services/api'

function App() {
  const [searchText, setSearchText] = useState('')
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    const trimmedQuery = searchText.trim()
    if (!trimmedQuery) {
      return
    }

    setLoading(true)
    setError('')
    setResults(null)

    try {
      const data = await filterMultisearch(trimmedQuery)
      setResults(data)
    } catch (requestError) {
      if (axios.isAxiosError(requestError)) {
        const status = requestError.response?.status
        const apiMessage =
          requestError.response?.data?.message ||
          requestError.response?.data?.error ||
          requestError.message

        setError(
          status
            ? `Erro ${status}: ${apiMessage}`
            : `Falha de conexao com a API: ${apiMessage}`,
        )
      } else {
        setError('Nao foi possivel carregar os resultados.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="app-shell">
      <section className="erp-layout" aria-label="Tela de busca MultiSearch">
        <header className="chrome-strip" aria-hidden="true"></header>

        <section className="search-panel">
          <div className="search-content">
            <header className="text-center app-header">
              <img
                src="/logo_multisearch.png"
                className="multisearch-logo"
                alt="MultiSearch"
              />
            </header>

            <SearchBar
              searchText={searchText}
              setSearchText={setSearchText}
              onSearch={handleSearch}
              loading={loading}
            />

            {error && <p className="text-danger mt-3 mb-0">{error}</p>}

            <ResultsContainer loading={loading} results={results} />
          </div>
        </section>

        <footer className="chrome-strip" aria-hidden="true"></footer>
      </section>
    </main>
  )
}

export default App
