import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import Landing from './views/landing'
import GrowthIntegraes from './views/growth-integraes'
import ComunicaoCampanhas from './views/comunicao-campanhas'
import GrowthContatos from './views/growth-contatos'
import ComunicaoDashboard from './views/comunicao-dashboard'
import StepByStepGrowth from './views/step-by-step-growth'
import LandingGrowth from './views/landing-growth'
import GrowthSettings from './views/growth-settings'
import GrowthChamadoStatus from './views/growth-chamado-status'
import FlashGrowthReset from './views/flash-growth-reset'
import GrowthHelpdesk from './views/growth-helpdesk'
import ComunicaoColaboradores from './views/comunicao-colaboradores'
import TemplatesFlashvolve from './views/templates-flashvolve'
import NotFound from './views/not-found'
import './style.css'

Vue.use(Router)
Vue.use(Meta)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'Landing',
      path: '/landing',
      component: Landing,
    },
    {
      name: 'Growth-Integraes',
      path: '/growth-integraes',
      component: GrowthIntegraes,
    },
    {
      name: 'Comunicao-Campanhas',
      path: '/comunicao-campanhas',
      component: ComunicaoCampanhas,
    },
    {
      name: 'Growth-Contatos',
      path: '/growth-contatos',
      component: GrowthContatos,
    },
    {
      name: 'Comunicao-Dashboard',
      path: '/',
      component: ComunicaoDashboard,
    },
    {
      name: 'Step-by-Step-Growth',
      path: '/step-by-step-growth',
      component: StepByStepGrowth,
    },
    {
      name: 'Landing-Growth',
      path: '/landing-growth',
      component: LandingGrowth,
    },
    {
      name: 'Growth-Settings',
      path: '/growth-settings',
      component: GrowthSettings,
    },
    {
      name: 'Growth-Chamado-Status',
      path: '/growth-chamado-status',
      component: GrowthChamadoStatus,
    },
    {
      name: 'Flash-Growth-Reset',
      path: '/flash-growth-reset',
      component: FlashGrowthReset,
    },
    {
      name: 'Growth-Helpdesk',
      path: '/growth-helpdesk',
      component: GrowthHelpdesk,
    },
    {
      name: 'Comunicao-Colaboradores',
      path: '/comunicao-colaboradores',
      component: ComunicaoColaboradores,
    },
    {
      name: 'Templates-Flashvolve',
      path: '/templates-flashvolve',
      component: TemplatesFlashvolve,
    },
    {
      name: '404 - Not Found',
      path: '**',
      component: NotFound,
      fallback: true,
    },
  ],
})
