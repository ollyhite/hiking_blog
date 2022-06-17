const commentsFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const comment = document.querySelector('#comment').value.trim();
    const create_date = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()
    }`;
    const submitBtn = document.querySelector('.submit')
    const blog_id = submitBtn.dataset.blogId;

    // const blog_id = Number(submitBtn.value);
        console.log({username});
        console.log({comment});
        console.log({blog_id});
        console.log({create_date});
    if (username && comment && blog_id && create_date) {
        const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ username, comment,blog_id,create_date }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace(`/blog/${blog_id}`);
        } else {
        alert('Failed to add comments.');
        }
    }
};


document
    .querySelector('.comment-form')
    .addEventListener('submit', commentsFormHandler);

