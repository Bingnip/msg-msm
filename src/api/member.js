import request from '@/utils/request.js';

export default {
    getList() {
        return request({
            url: '/member/list',
            method: 'get'
        })
    }
}