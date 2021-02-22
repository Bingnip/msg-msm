import request from '@/utils/request.js';

export default {
    getList() {
        return request({
            url: '/member/list',
            method: 'get'
        })
    },
    search(page, size, searchMap) {
        return request({
            url: `/member/list/search/${page}/${size}`,
            method: 'post',
            data: searchMap
        })
    }
}