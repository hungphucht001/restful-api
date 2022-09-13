import * as request from '~/utils/request';

export const getStudentListApi = async () => {
    try {
        const res = await request.get('students')
        return res
    }
    catch (error) {
        console.log(error);
    }
}

export const createStudentApi = async () => {
    try {
        const res = await request.post('students')
        return res
    }
    catch (error) {
        console.log(error);
    }
}


export const searchStudentApi = async (name) => {
    try {
        const res = await request.get(`students`, {
            params: {
                name: name
            }
        })
        return res
    }
    catch (error) {
        console.log(error);
    }
}

export const getStudentApi = async (id) => {
    try {
        const res = await request.get(`students/${id}`)
        return res
    }
    catch (error) {
        console.log(error);
    }
}

export const updateStudentApi = async (id) => {
    try {
        const res = await request.get(`students/${id}`)
        return res
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteStudentApi = async (id) => {
    try {
        const res = await request.delete(`students/${id}`)
        return res
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteAllStudentApi = async () => {
    try {
        const res = await request.delete(`students`)
        return res
    }
    catch (error) {
        console.log(error);
    }
}