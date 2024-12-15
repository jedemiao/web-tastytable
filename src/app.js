import { createApp } from 'vue';

const app = createApp({
    data() {
        return {
            search: '',
            userName: 'John Doe',
            profilePicture: 'https://via.placeholder.com/40',
            newPostContent: '',
            posts: []
        };
    },
    methods: {
        createPost() {
            if (this.newPostContent.trim() === '') {
                alert('Post cannot be empty!');
                return;
            }
            this.posts.unshift(this.newPostContent);
            this.newPostContent = '';
        }
    }
});

app.mount('#app');
