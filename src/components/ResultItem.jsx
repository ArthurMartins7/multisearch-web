function ResultItem({ item }) {
  return (
    <div className="result-item d-flex justify-content-between gap-3 py-2 border-bottom">
      <div className="d-flex gap-3 flex-grow-1 align-items-start">
        <button type="button" className="btn btn-link p-0 result-id">
          #{item.id}
        </button>
        <span>{item.description}</span>
      </div>

      {item.individualQuantity !== null && (
        <span className="text-nowrap result-quantity">Qtd: {item.individualQuantity} pç</span>
      )}
    </div>
  )
}

export default ResultItem
