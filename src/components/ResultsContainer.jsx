import ResultGroup from './ResultGroup'

const CATEGORY_LABELS = {
  SALES_ORDER: 'Pedidos de Venda',
  PURCHASE_ORDER: 'Pedidos de Compra',
  MATERIAL: 'Produtos',
  EQUIPMENT: 'Equipamentos',
  WORKFORCE: 'Mão de obra',
}

const CATEGORY_ORDER = ['SALES_ORDER', 'PURCHASE_ORDER', 'MATERIAL', 'EQUIPMENT', 'WORKFORCE']

function ResultsContainer({ loading, results }) {
  if (loading) {
    return (
      <div className="text-center py-4">
        <div className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
        <span>Carregando resultados...</span>
      </div>
    )
  }

  if (!results) {
    return null
  }

  const totalLabel = results.totalQuantity === 1 ? 'resultado' : 'resultados'

  return (
    <section className="results-section">
      <p className="results-total">
        Foram encontrados {results.totalQuantity} {totalLabel}:
      </p>

      {CATEGORY_ORDER.map((categoryKey) => {
        const group = results.categories?.[categoryKey] ?? {
          categoryQuantity: 0,
          items: [],
        }

        return (
          <ResultGroup
            key={categoryKey}
            title={CATEGORY_LABELS[categoryKey] ?? categoryKey}
            categoryQuantity={group.categoryQuantity}
            items={group.items}
          />
        )
      })}
    </section>
  )
}

export default ResultsContainer
