import * as request from '~/utils/request';

export const homeProductApi = async () => {
    try {
        const res = await request.get('/products', {
            params: {
                _limit: 5,
                s: 1
            }
        })
        return res
    }
    catch (error) {
        console.log(error);
    }
}