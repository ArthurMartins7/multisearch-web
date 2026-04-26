import ResultItem from './ResultItem'

function ResultGroup({ title, categoryQuantity, items }) {
  const quantityLabel =
    categoryQuantity === 0
      ? 'nenhum item encontrado'
      : `${categoryQuantity} ${categoryQuantity === 1 ? 'item encontrado' : 'itens encontrados'}`

  return (
    <article className="card result-group mb-3">
      <header className="card-header d-flex justify-content-between align-items-center">
        <h2 className="h5 mb-0 group-title">{title}</h2>
        <small className="group-meta">({quantityLabel})</small>
      </header>

      <div className="card-body py-2">
        {categoryQuantity === 0 ? (
          <p className="empty-message text-center mb-1">nenhum item encontrado</p>
        ) : (
          items.map((item) => <ResultItem key={`${item.category}-${item.id}`} item={item} />)
        )}
      </div>
    </article>
  )
}

export default ResultGroup
