import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { database } from 'firebase/firebase';
import { FETCH_ALL_CHAT_USER, FETCH_ALL_CHAT_USER_CONVERSATION, FETCH_ALL_LOCATIONS, FETCH_ALL_LOCATIONS_SUCCESS } from 'constants/ActionTypes';
import { fetchChatUserConversationSuccess, fetchChatUserSuccess, showChatMessage } from 'actions/Chat';
import { fetchAllLocationsSuccess } from 'actions/Location';
import { POST_LOCATION_DATA } from 'constants/ActionTypes';

const getLocationsData = async () =>
    await database.ref ('locations/office').once ('value')
        .then((snapshot) => {
            const locations = [];
            snapshot.forEach((rawData) => {
                locations.push (rawData.val());
            });
            return locations;
        })
        .catch(error => error);

const postLocationData = async (locations) => {
    await database.ref ('locations/office').push (locations.payload)
}

const getChatUsers = async () =>
    await database.ref ('chat/users').once ('value')
        .then ((snapshot) => {
            const chatUsers = [];
            snapshot.forEach ((rawData) => {
                chatUsers.push (rawData.val ());
            });
            return chatUsers;
        })
        .catch (error => error);

const getUsersConversation = async () =>
    await database.ref ('chat/conversation').once ('value')
        .then ((snapshot) => {
            const conversations = [];
            snapshot.forEach ((rawData) => {
                const conversation = rawData.val ();

                // change object to array
                const conversationDatas = [];
                if (conversation.conversationData) {
                    conversation.conversationData.forEach ((conversationData) =>
                        conversationDatas.push (conversationData)
                    );
                }
                conversation.conversationData = conversationDatas;
                conversations.push (conversation);
            });

            return conversations;
        })
        .catch (error => error);


function* fetchLocationsRequest () {
    try {
        const fetchedLocations = yield call (getLocationsData);
        yield put (fetchAllLocationsSuccess (fetchedLocations));
    } catch (error) {
        yield put (showChatMessage (error));
    }
}

function* fetchChatUserRequest () {
    try {
        const fetchedTodo = yield call (getChatUsers);
        yield put (fetchChatUserSuccess (fetchedTodo));
    } catch (error) {
        yield put (showChatMessage (error));
    }
}

function* fetchChatUserConversationRequest () {
    try {
        const fetchedTodoConversation = yield call (getUsersConversation);
        yield put (fetchChatUserConversationSuccess (fetchedTodoConversation));
    } catch (error) {
        yield put (showChatMessage (error));
    }
}

export function* fetchChatUser () {
    yield takeEvery (FETCH_ALL_CHAT_USER, fetchChatUserRequest);
}

export function* fetchChatUserConversation () {
    yield takeEvery (FETCH_ALL_CHAT_USER_CONVERSATION, fetchChatUserConversationRequest);
}

// custom
export function* fetchAllLocations () {
    yield takeEvery (FETCH_ALL_LOCATIONS, fetchLocationsRequest);
}

export function* postLocations () {
    yield takeEvery (POST_LOCATION_DATA, postLocationData);
}

export default function* rootSaga () {
    yield all ([fork (fetchChatUserConversation), fork (fetchChatUser), fork(fetchAllLocations), fork(postLocations)]);
}