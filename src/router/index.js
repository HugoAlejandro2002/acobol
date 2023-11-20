import { createRouter, createWebHistory } from 'vue-router';
import FaseInicio from '../views/FaseInicio.vue';
import FaseCierre from '../views/FaseCierre.vue';
import FasePlanificacion from '../views/FasePlanificacion.vue';
import FaseControlCalidad from '../views/FaseControlCalidadImpl.vue';
import FaseDisenioDesarrollo from '../views/FaseDisenioDesarrollo.vue';



const routes = [
  {
    path: '/',
    name: 'FaseInicio',
    component: FaseInicio,
  },
  {
    path: '/fase-planificacion',
    name: 'FasePlanificacion',
    component: FasePlanificacion,
  },
  {
    path: '/fase-diseno-desarrollo',
    name: 'FaseDisenioDesarrollo',
    component: FaseDisenioDesarrollo,
  },
  {
    path: '/fase-control-calidad-implementacion',
    name: 'FaseControlCalidad',
    component: FaseControlCalidad,
  },
  {
    path: '/fase-cierre',
    name: 'FaseCierre',
    component: FaseCierre,
  },


];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;