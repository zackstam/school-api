'use strict'

const Order = use('App/Models/Order')
class OrderController {

    async index ({request, response}) {

        let orders = await Order.all()
        return response.json(orders)
    }

    async paginate({ request, response }) {

        try {            
            let pagination = request.only(['page', 'pageSize', 'sortDirection', 'sortColumn', 'order_code', 'payment_status'])
            const page = parseInt(pagination.page, 10) || 1;
            const pageSize = parseInt(pagination.pageSize, 10) || 10;
            let query = Order.query();

            if (pagination.order_code) {
                query = query.where('order_code', 'LIKE', `%${pagination.order_code}%`)
            }
            if (pagination.payment_status) {
                query = query.where('payment_status', `${pagination.payment_status}`)
            }
            if (pagination.sortColumn) {
                query = query.orderBy(pagination.sortColumn, pagination.sortDirection).paginate(page, pageSize);
            } else {
                query = query.orderBy('id', pagination.sortDirection).paginate(page, pageSize);
            }
            
            const orders = await query;
            return response.json(orders)

        } catch (error) {
            throw error
        }
        
    }

    
}

module.exports = OrderController
