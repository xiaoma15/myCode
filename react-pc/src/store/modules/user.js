import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from "@/utils";
import { logInAPI, userInfoAPI } from "@/apis/user";


const name = 'user'
const token = getToken()
const userInfo = null
const initialState = {
    token,
    userInfo
};

const reducers = {
    setToken: (state, action) => {
        state.token = action.payload
        _setToken(action.payload)
    },
    setUserInfo: (state, action) => {
        state.userInfo = action.payload
    },
    logout: (state, action) => {
        state.token = null
        state.userInfo = null
        removeToken()
    }
};

const userStore = createSlice({
    name,
    initialState,
    reducers
})

//获取actioncreater
const { setToken, setUserInfo, logout } = userStore.actions

//异步方法
const fetchLogin = (LoginData) => {
    return async dispatch => {
        const res = await logInAPI(LoginData)
        dispatch(setToken(res.data.data.token))
    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        // let res = await request.get('/user/profile')
        let res = await userInfoAPI()
        dispatch(setUserInfo(res.data))
    }
}

//导出actioncreater
export { fetchLogin, fetchUserInfo, logout }

//获取reducer
const userReducer = userStore.reducer
//默认导出reducer
export default userReducer