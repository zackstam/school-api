'use strict'

const Package = use('App/Models/Package')
class PackageController {

    async index ({request, response}) {

        let Packages = await Package.all()
        return response.json(Packages)
    }

    async paginate({ request, response }) {

        try {            
            let pagination = request.only(['page', 'limit', 'sortOrder', 'nameLike'])
            const page = parseInt(pagination.page, 10) || 1;
            const limit = parseInt(pagination.limit, 10) || 10;
            let query = Package.query();
            if (pagination.nameLike) {
                query = query.where('name', 'LIKE', `%${pagination.nameLike}%`)
            }
            query = query.orderBy('id', pagination.sortOrder).paginate(page, limit);
            const packages = await query;
            return response.json(packages)

        } catch (error) {
            throw error
        }
        
    }

    
}

module.exports = PackageController
