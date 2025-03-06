import { createApp } from 'vue'

import App from './App.vue'
import Header from './components/Header.vue'
import AboutMe from './components/AboutMe.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import HobbiesInterests from './components/HobbiesInterests.vue'
import GoalsDreams from './components/GoalsDreams.vue'
import ImageGallery from './components/ImageGallery.vue'
import Links from './components/Links.vue'
import InteractSection from './components/InteractSection.vue'
import Footer from './components/Footer.vue'
import CommentSection from './components/CommentSection.vue'
import CommentForm from './components/CommentForm.vue'

const app = createApp(App)
app.component('header', Header)
app.component('about-me', AboutMe)
app.component('education', Education)
app.component('experience', Experience)
app.component('hobbies-interests', HobbiesInterests)
app.component('goals-dreams', GoalsDreams)
app.component('image-gallery', ImageGallery)
app.component('links', Links)
app.component('interact-section', InteractSection)
app.component('footer', Footer)
app.component('comment-section', CommentSection)
app.component('comment-form', CommentForm)
app.mount('#app')