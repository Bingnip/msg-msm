import request from '@/utils/request.js'

export default {
    search (page, size, searchMap) {
        return request({
            url: `/member/list/search/${page}/${size}`,
            data: searchMap,
            method: 'post'
        })
    }
}