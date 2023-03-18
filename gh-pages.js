var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/6momo1/svelte-todo-app.git', // Update to point to your repository  
        user: {
            name: 'tomi', // update to use your name
            email: 'email@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)