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
        SOCKET_NEW_ROOM(state, data){
            state.roomID = data
        },
        SOCKET_CHANGE_ROOM(state, data){
            state.roomID = data
        },
        SOCKET_NEW_MESSAGE(state, data){
            state.chat = [...state.chat, data]
        },
        SOCKET_CLEAR_CHAT(state){
            state.chat=[]
        },
        SOCKET_UPDATE_USER(state, data){
            state.user = data
        }
    },
    actions:{
        SOCKET_newRoomAction(context, data){
            context.commit('SOCKET_NEW_ROOM', data)
        },
        SOCKET_addNewMessage(context, data){
            context.commit('SOCKET_NEW_MESSAGE', data)
        },
        SOCKET_updateUser (context, data){
            context.commit('SOCKET_UPDATE_USER', data)
        }
    }
})