export default function Queuedisplay({ queue, onUpdateStatus, onRemove }) {

    const getStatusColor = (status) => {
        switch (status) {
            case 'waiting': return 'gray';
            case 'in-service': return 'blue';
            case 'completed': return 'green';
            default: return 'black';
        }
    }
  return (
    <>
      <div className="queue-display">
        <h2>Queue Display</h2>
        {queue.length === 0 ? (
          <p className="empty-queue">No customers in queue.</p>
        ) : (
          <div className="queue-list">
            {queue.map((customer) => (
              <div key={customer.id} className="queue-item">
                <div className="customer-info">
                  <h3>{customer.customerName}</h3>
                  <p>Service: {customer.serviceType}</p>
                  <p>Added: {new Date(customer.timestamp).toLocaleString()}</p>
                </div>
                <div className="status" style={{ color: getStatusColor(customer.status) }}>
                  {customer.status}
                </div>
                <div className="actions">
                  {customer.status === "waiting" && (
                    <button
                      className="serve-btn"
                      onClick={() => onUpdateStatus(customer.id, "in-service")}
                    >
                      Serve
                    </button>
                  )}
                  {customer.status === "in-service" && (
                    <button
                      className="complete-btn"
                      onClick={() => onUpdateStatus(customer.id, "completed")}
                    >
                      Complete
                    </button>
                  )}
                  {(customer.status === "waiting" || customer.status === "in-service") && (
                    <button
                      className="remove-btn"
                      onClick={() => onRemove(customer.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      </>
  )
}
