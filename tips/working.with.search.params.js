// ?post=1234&action=edit

const params = new URLSearchParams(window.location.search) //1234

const postID = params.get('post')

if (postID && params.has('action')) {
    params.append('active', '1')
}

const newParameters = params.toString() // ?post=1234&action=edit&active=1