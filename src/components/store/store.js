import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
export default new Vuex.Store({
    state: {
        user: "Anonymous",
        roomID:"",
        chat:[]
    },
    mutations:{
        NEW_ROOM(state, data){
            state.roomID = data
        },
        CHANGE_ROOM(state, data){
            state.roomID = data
        },
        NEW_MESSAGE(state, data){
            state.chat = [...state.chat, data]
        },
        CLEAR_CHAT(state){
            state.chat=[]
        },
        UPDATE_USER(state, data){
            state.user = data
        },
    },
    actions:{
        "SOCKET_newRoomAction"(context, data){
            context.commit('NEW_ROOM', data)
        },
        "SOCKET_addNewMessage"(context, data){
            context.commit('NEW_MESSAGE', data)
        },
        "SOCKET_updateUser" (context, data){
            context.commit('UPDATE_USER', data)
        }
    }
})