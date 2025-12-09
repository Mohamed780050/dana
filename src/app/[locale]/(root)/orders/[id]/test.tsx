export default function test() {
  return (
    <div>
       <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {notification && (
          <div className={`mb-4 p-4 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${notification.type === 'success' ? 'bg-emerald-100 border border-emerald-300 text-emerald-700' : 'bg-red-100 border border-red-300 text-red-700'}`}>
            {notification.type === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="font-medium">{notification.message}</span>
          </div>
        )}

        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Orders
        </button>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white p-4 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Order #{order.id.slice(0, 8).toUpperCase()}</h1>
                  <p className="text-emerald-50 mt-1 sm:mt-2 text-xs sm:text-sm break-all">Full ID: {order.id}</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold">${Number(order.total_amount).toFixed(2)}</div>
                  <p className="text-emerald-50 mt-1 text-xs sm:text-sm">Total Amount</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-emerald-400/30">
                <div>
                  <p className="text-emerald-50 text-xs sm:text-sm">Order Status</p>
                  <p className={`inline-flex px-2 sm:px-3 py-1 text-xs font-bold rounded-full mt-2 ${getStatusBadge(order.status)}`}>
                    {order.status.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-emerald-50 text-xs sm:text-sm">Payment Status</p>
                  <p className={`inline-flex px-2 sm:px-3 py-1 text-xs font-bold rounded-full mt-2 ${getPaymentBadge(order.payment_status)}`}>
                    {order.payment_status.toUpperCase()}
                  </p>
                </div>
                <div>
                  <p className="text-emerald-50 text-xs sm:text-sm">Date</p>
                  <p className="font-semibold text-sm mt-2">{new Date(order.created_at).toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}</p>
                </div>
                <div>
                  <p className="text-emerald-50 text-xs sm:text-sm">Time</p>
                  <p className="font-semibold text-sm mt-2">{new Date(order.created_at).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-emerald-400/30">
                <button
                  onClick={markAsPaid}
                  disabled={updating || order.payment_status === 'paid'}
                  className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <Check className="w-5 h-5" />
                  {order.payment_status === 'paid' ? 'Already Paid' : 'Mark as Paid'}
                </button>
                <button
                  onClick={markAsCompleted}
                  disabled={updating || order.status === 'completed'}
                  className="w-full flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  {order.status === 'completed' ? 'Already Completed' : 'Mark as Completed'}
                </button>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8">
                <div className="space-y-4">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-emerald-600" />
                    Customer Information
                  </h2>
                  <div className="bg-slate-50 rounded-lg p-4 space-y-3 border border-slate-200">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Name</p>
                      <p className="text-base sm:text-lg font-semibold text-slate-900 mt-1">{order.customer_name || 'N/A'}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Phone</p>
                      <a
                        href={`tel:${order.customer_phone}`}
                        className="text-emerald-600 hover:text-emerald-700 font-medium mt-1 flex items-center gap-2 text-sm sm:text-base"
                      >
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        {order.customer_phone || 'N/A'}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                    Order Dates
                  </h2>
                  <div className="bg-slate-50 rounded-lg p-4 space-y-3 border border-slate-200">
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Created At</p>
                      <p className="text-xs sm:text-sm text-slate-900 mt-1">
                        {new Date(order.created_at).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Last Updated</p>
                      <p className="text-xs sm:text-sm text-slate-900 mt-1">
                        {new Date(order.updated_at).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {order.notes && (
                <div className="mb-8">
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    Notes
                  </h2>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm sm:text-base text-slate-700">{order.notes}</p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <Package className="w-5 h-5 text-emerald-600" />
                  Order Items ({orderItems.length})
                </h2>

                {orderItems.length === 0 ? (
                  <div className="bg-slate-50 rounded-lg p-8 text-center border border-slate-200">
                    <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-600">No items in this order</p>
                  </div>
                ) : (
                  <div className="border border-slate-200 rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm sm:text-base">
                        <thead className="bg-slate-100 border-b border-slate-200">
                          <tr>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                              Item
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs font-semibold text-slate-700 uppercase tracking-wider">
                              Qty
                            </th>
                            <th className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 text-left text-xs font-semibold text-slate-700 uppercase tracking-wider">
                              Unit Price
                            </th>
                            <th className="px-3 sm:px-6 py-3 sm:py-4 text-right text-xs font-semibold text-slate-700 uppercase tracking-wider">
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {orderItems.map((item) => (
                            <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                              <td className="px-3 sm:px-6 py-3 sm:py-4">
                                <div>
                                  <p className="font-semibold text-slate-900 text-sm sm:text-base">
                                    {item.menu_item?.name || 'Unknown Item'}
                                  </p>
                                  {item.menu_item?.description && (
                                    <p className="text-xs sm:text-sm text-slate-600 mt-1">{item.menu_item.description}</p>
                                  )}
                                  <p className="text-xs sm:hidden text-slate-500 mt-1">
                                    ${Number(item.price).toFixed(2)} × {item.quantity}
                                  </p>
                                </div>
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-center font-semibold text-slate-900 text-sm sm:text-base">
                                {item.quantity}
                              </td>
                              <td className="hidden sm:table-cell px-3 sm:px-6 py-3 sm:py-4 font-semibold text-slate-900">
                                ${Number(item.price).toFixed(2)}
                              </td>
                              <td className="px-3 sm:px-6 py-3 sm:py-4 text-right">
                                <div className="font-bold text-emerald-600 text-sm sm:text-lg">
                                  ${(Number(item.price) * item.quantity).toFixed(2)}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-slate-50 px-4 sm:px-6 py-4 sm:py-6 border-t border-slate-200">
                      <div className="flex justify-end">
                        <div className="w-full max-w-xs space-y-3">
                          <div className="flex justify-between text-slate-700 text-sm sm:text-base">
                            <span>Subtotal:</span>
                            <span className="font-semibold">
                              ${orderItems.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0).toFixed(2)}
                            </span>
                          </div>
                          <div className="border-t border-slate-300 pt-3 flex justify-between text-base sm:text-lg">
                            <span className="font-bold text-slate-900">Total:</span>
                            <span className="font-bold text-emerald-600 text-lg sm:text-2xl">
                              ${Number(order.total_amount).toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
