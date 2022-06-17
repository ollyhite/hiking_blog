const articleFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const short_describe = document.querySelector('#short_describe').value.trim();
    const article = document.querySelector('#article').value.trim();
    const filename = document.querySelector('#filename').value.trim();
    const create_date = `${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()
    }`;
        console.log({title});
        console.log({short_describe});
        console.log({article});
        console.log({filename});
        console.log({create_date});
    if (title && short_describe && article && filename &&create_date) {
        const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({ title, short_describe,article,filename,create_date }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
        document.location.replace('/blog');
        } else {
        alert('Failed to add new article.');
        }
    }
};


document
    .querySelector('.article-form')
    .addEventListener('submit', articleFormHandler);