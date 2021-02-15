import request from '@/utils/request'

export default {
    getList() {
        const ret = request({
            method: 'get',
            url: '/db.json'
        })
        return ret
    }
}