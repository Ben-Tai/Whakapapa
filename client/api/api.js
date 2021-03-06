import request from 'superagent'

const url = 'http://localhost:3000/api/v1/router'

export function getPeople (callback) {
  console.log('api call hit:get People')
  return request
    .get(url)
    .end((err, res) => {
      callback(err, res.body)
    })
}


export function getPerson(id, callback){
  console.log({"id":id})
  return request.get(url + '/person/' + id)
  .end((err, res) => {
    callback(err, res.body)
  })

}


// export function addPost (post) {
//   return request.post('/v1/posts')
//     .send(post)
//     .then(data => {
//       const returnedPost = data.body
//       return returnedPost
//     })
//     .catch(err => {
//       throw Error('Cannot POST a new Post!')
//     })
// }

// export function updatePost (post) {
//   return request.put(`/v1/posts/${post.id}`)
//     .send(post)
//     .then(data => {
//       const returnedPost = data.body
//       return returnedPost
//     })
//     .catch(err => {
//       throw Error('Cannot PUT a Post!')
//     })
// }

// export function deletePost (postId) {
//   return request.del(`/v1/posts/${postId}`)
//   .then(data => {
//     const returnedPost = data.body
//     return returnedPost
//   })
//   .catch(err => {
//     throw Error('Cannot DELETE a Post!')
//   })
// }

// export function getCommentsByPostId(postId) {
//   return request.get(`/v1/posts/${postId}/comments`)
//     .then(data => {
//       const returnedComments = data.body
//       return returnedComments
//     })
//     .catch(err => {
//       throw Error('Cannot GET Comments By Post Id!')
//     })
// }

// export function addCommentByPostId(postId, comment) {
//   return request.post(`/v1/posts/${postId}/comments`)
//     .send(comment)
//     .then(data => {
//       const returnedComment = data.body
//       return returnedComment
//     })
//     .catch(err => {
//       throw Error('Cannot POST Comment By Post Id!')
//     })
// }

// export function updateComment (comment) {
//   return request.put(`/v1/comments/${comment.id}`)
//     .send(comment)
//     .then(data => {
//       const returnedComment = data.body
//       return returnedComment
//     })
//     .catch(err => {
//       throw Error('Cannot PUT Comment!')
//     })
// }

// export function deleteComment (commentId) {
//   return request.del(`/v1/comments/${commentId}`)
//   .then(data => {
//     const returnedComment = data.body
//     return returnedComment
//   })
//   .catch(err => {
//     throw Error('Cannot DELETE Comment!')
//   })
// }