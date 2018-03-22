//lazy loading
const feedback = () => import('./feedback.vue')

// import feedback from './feedback.vue'

export default [
    {
        path: 'feedback', 
        name: 'feedback', 
        component: feedback,
    }
]