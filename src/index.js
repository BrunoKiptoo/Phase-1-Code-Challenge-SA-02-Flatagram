const flatagramAPI = "http://localhost:3000";
const cardImage =el('card-image')
const cardTitle =el('card-title')
const likeCount =el('like-count')
const commentList =el('comments-list')
let likes;

el('like-button').addEventListener('click', () => {

    likes += 1;
    renderLikes();
})

el('comment-form').addEventListener('submit', addComment);

fetch(flatagramAPI)
 .then(res => res.json())
 .then(renderGram);

function renderGram(data){
    likes = data.likes;

    cardImage.src = data.image;
    cardTitle.textContent = data.title
    renderLikes();

renderComments(data.comments);



}
function renderLikes(){
    document.getElementById('like-count').textContent=`${likes} likes`;
}

function renderComments(comments){
commentList.innerHTML='';
comments.forEach(renderComments)
}

function renderComment(comment){
    const li =document.createElement('li');
    li.textContent =comment.content;
    commentList. append(li);
}

function addComment(event){
event.preventDefault();
const commentText = event.target.comment.value;
event.target.reset();
renderComment({content:commentText});
}

function el(id){
    return document.getElementById(id);
}
