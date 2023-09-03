import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/VoteView.vue')
		},
		{
			path: '/classement',
			name: 'ranking',
			component: () => import('../views/RankingView.vue')
		}
	]
});

export default router;
