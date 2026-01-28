import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import ProjectsView from './views/ProjectsView.vue'
import ArticlesView from './views/ArticlesView.vue'
import ArticleDetailView from './views/ArticleDetailView.vue'
import SpeakingView from './views/SpeakingView.vue'
import UsesView from './views/UsesView.vue'
import ThankYouView from './views/ThankYouView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/projects', name: 'projects', component: ProjectsView },
    { path: '/articles', name: 'articles', component: ArticlesView },
    { path: '/articles/:slug', name: 'article', component: ArticleDetailView },
    { path: '/speaking', name: 'speaking', component: SpeakingView },
    { path: '/uses', name: 'uses', component: UsesView },
    { path: '/thank-you', name: 'thank-you', component: ThankYouView }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
