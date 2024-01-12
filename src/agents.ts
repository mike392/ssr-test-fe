// import superagentPromise from "superagent-promise"
// import _superagent from "superagent"
// import {ACCESS_TOKEN, API_BASE_URL} from "./config/constants";
//
// const superagent = superagentPromise(_superagent, global.Promise)
// // const MAIN_API_ROOT = "http://39c0709.online-server.cloud/api"
// export const MAIN_API_ROOT = `${API_BASE_URL}/api`;
// const responseBody = res => {
//     return res.text
// }
// const responseFile = res => res
//
// const tokenPlugin = req => {
//     let token = localStorage.getItem(ACCESS_TOKEN) || "";
//     if (token) {
//         req.set('authorization', `Bearer ${token}`)
//     }
// }
// const customHeaderPlugin = req => {
//     req.set('Content-Type', `application/json`)
//     req.set('x-custom-auth', `true`)
//     req.set('Access-Control-Allow-Origin', window.location.origin)
//     req.set('redirect_uri', window.location.origin + '/authredirect')
// }
//
// const requests = {
//     del: (API, url, body) =>
//         superagent
//             .del(`${API}${url}`)
//             .send(body)
//             .use(customHeaderPlugin)
//             .use(tokenPlugin)
//             .then(responseBody),
//     get: (API, url) =>
//         superagent
//             .get(`${API}${url}`)
//             .use(customHeaderPlugin)
//             .use(tokenPlugin)
//             .then(responseBody),
//     getFile: (API, url) =>
//         superagent
//             .get(`${API}${url}`)
//             .use(customHeaderPlugin)
//             .use(tokenPlugin)
//             .then(responseFile),
//     put: (API, url, body) =>
//         superagent
//             .put(`${API}${url}`, body)
//             .use(customHeaderPlugin)
//             .use(tokenPlugin)
//             .then(responseBody),
//     post: (API, url, body) =>
//         superagent
//             .post(`${API}${url}`, body)
//             .use(customHeaderPlugin)
//             .use(tokenPlugin)
//             .then(responseBody)
// }
//
// const Card = {
//     getCards: () => requests.get(MAIN_API_ROOT, `/cards`),
//     removeCard: (id) => requests.del(MAIN_API_ROOT, `/cards/${id}`),
//     saveCard: (card) => requests.post(MAIN_API_ROOT, `/cards`, card),
// }
//
// const Share = {
//     getShares: () => requests.get(MAIN_API_ROOT, `/shares`),
//     getShare: (id) => requests.get(MAIN_API_ROOT, `/shares/${id}`),
//     receiveShare: (id) => requests.post(MAIN_API_ROOT, `/shares/${id}`, {}),
//     answerShare: (share) => requests.put(MAIN_API_ROOT, `/shares`, share),
//     removeShare: (id) => requests.del(MAIN_API_ROOT, `/shares/${id}`),
//     saveShare: (share) => requests.post(MAIN_API_ROOT, `/shares`, share),
// }
//
// const CardList = {
//     getCardLists: () => requests.get(MAIN_API_ROOT, `/cardlists`),
//     removeCardList: (id) => requests.del(MAIN_API_ROOT, `/cardlists/${id}`),
//     saveCardList: (cardList) => requests.post(MAIN_API_ROOT, `/cardlists`, cardList),
// }
//
// const Profile = {
//     getProfile: () => requests.get(MAIN_API_ROOT, `/userprofile`)
// }
//
// const Auth = {
//     logout: () => requests.post(API_BASE_URL, `/oauth/logout`, {})
// }
//
// // eslint-disable-next-line import/no-anonymous-default-export
// export default {
//     Card, CardList, Profile, Auth, Share
// }
export default {}