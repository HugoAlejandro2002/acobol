<template>
    <div class="container mx-auto px-10 py-8 rounded-3xl bg-slate-50">
        <!-- Plan del Proyecto: Cronogramas -->
        <TitleComponent text=" PLAN DEL PROYECTO “CRONOGRAMAS”" text1="Fase de Planificación / Cronogramas" />
        <p class="text-xl font-light text-left py-4">
            En la fase de planificación, se establece un cronograma detallado que abarca todas las etapas del desarrollo del
            sitio web. Este cronograma incluye:
        </p>

        <ul class="list-disc pl-6 text-xl font-light pb-4">
            <li>Fase de Inicio: Definición de objetivos, análisis de requisitos y asignación de recursos.</li>
            <li>Fase de Diseño: Elaboración de wireframes y mockups en Figma, con revisiones y ajustes periódicos.</li>
            <li>Fase de Desarrollo: Implementación del front-end usando Vue.js y desarrollo del back-end con Express.js,
                siguiendo un enfoque iterativo.</li>
            <li>Fase de Pruebas: Realización de pruebas unitarias y de integración utilizando Jest, Cypress y Mocha,
                asegurando la calidad y la funcionalidad del sitio.</li>
            <li>Fase de Implementación: Despliegue del sitio web y su puesta en marcha.</li>
            <li>Fase de Cierre: Evaluación del proyecto, documentación y transición a operaciones.</li>
        </ul>
        <div class="text-center mb-9">
            <h2 class="text-2xl font-bold text-left text-primary uppercase py-4">Descripción de Cada Etapa del Proyecto</h2>
            <img src="../assets/DescripcionEtapaProyecto.png" alt="Descripción de Etapa del Proyecto"
                class="w-1/2 h-auto mx-auto mb-4">
            <h2 class="text-2xl font-bold text-left text-primary uppercase py-4">Plan General del Proyecto</h2>
            <img src="../assets/GeneralPlanProyecto.png" alt="Plan General del Proyecto" class="w-1/2 h-auto mx-auto mb-4">
            <h2 class="text-2xl font-bold text-left text-primary uppercase py-4">Plan General Web Backend</h2>
            <img src="../assets/GeneralWebBackend.png" alt="General Web Backend" class="w-1/2 h-auto mx-auto mb-4">
            <h2 class="text-2xl font-bold text-left text-primary uppercase py-4">Plan General Web Frontend</h2>
            <img src="../assets/GeneralWebPlan.png" alt="General Web Plan" class="w-1/2 h-auto mx-auto mb-4">
            <h2 class="text-2xl font-bold text-left text-primary uppercase py-4">Tablero Backend</h2>
            <img src="../assets/TableroBackend.png" alt="Tablero Backend" class="w-1/2 h-auto mx-auto mb-4">
            <h2 class="text-2xl font-bold text-left text-primary uppercase py-4">Tablero Frontend</h2>
            <img src="../assets/TableroFrontend.png" alt="Tablero Frontend" class="w-1/2 h-auto mx-auto mb-4">
        </div>

        <!-- Uso de Herramientas -->
        <TitleComponent text="USO DE HERRAMIENTAS" text1="Fase de Planificación / Uso de Herramientas" />
        <p class="text-xl font-light text-left py-4">
            Para la gestión del proyecto, se utilizan diversas herramientas especializadas:
        </p>
        <ul class="list-disc pl-6 text-xl font-light pb-4">
            <li>Planificación y Seguimiento: Uso de Notion para la gestión de tareas, seguimiento del progreso y
                documentación del proyecto.</li>
            <li>Diseño y Prototipado: Figma para el diseño de wireframes y mockups, facilitando la colaboración y el
                feedback.</li>
            <li>Desarrollo: Vue.js para el front-end y Express.js para el back-end, proporcionando un marco sólido para el
                desarrollo ágil.</li>
            <li>Pruebas: Jest, Cypress y Mocha para pruebas unitarias y de integración, garantizando la calidad y el
                rendimiento del sitio web.</li>
        </ul>
        <div class="grid grid-cols-3 gap-4 justify-center items-center">
            <div class="text-center">
                <img src="https://th.bing.com/th/id/R.b6b42b0d08c8685ae401ce792a9b58fc?rik=57IEh7EFsxXmRA&pid=ImgRaw&r=0" alt="Logo de Notion"
                    class="w-20 h-20 mx-auto">
                <p>Notion</p>
            </div>
            <div class="text-center">
                <img src="https://th.bing.com/th/id/OIP.akV9KjAtdaROFei8n8dnowHaHw?rs=1&pid=ImgDetMain" alt="Logo de Figma"
                    class="w-20 h-20 mx-auto">
                <p>Figma</p>
            </div>
            <div class="text-center">
                <img src="https://th.bing.com/th/id/R.f9643e3c26e737d9f213efc1c5557f6f?rik=iBZPb7HbgSYKJA&pid=ImgRaw&r=0" alt="Logo de Vue.js"
                    class="w-20 h-20 mx-auto">
                <p>Vue.js</p>
            </div>
            <div class="text-center">
                <img src="https://riseuplabs.com/wp-content/uploads/2021/04/express.js-icon.png" alt="Logo de Express.js"
                    class="w-20 h-20 mx-auto">
                <p>Express.js</p>
            </div>
            <div class="text-center">
                <img src="https://th.bing.com/th/id/R.cfa3a32613483a1ee48fac169aeb6359?rik=Lxp1uM0Qxn40kA&pid=ImgRaw&r=0" alt="Logo de Jest" class="w-20 h-20 mx-auto">
                <p>Jest</p>
            </div>
            <div class="text-center">
                <img src="https://th.bing.com/th/id/R.a89c871423e0845750d27cf4ea910e53?rik=JvWxlJgKBtnUyQ&pid=ImgRaw&r=0" alt="Logo de Cypress"
                    class="w-20 h-20 mx-auto">
                <p>Cypress</p>
            </div>
            <div class="text-center">
                <img src="https://th.bing.com/th/id/R.55b112b344a5cb45a6becf64bf5a5cf2?rik=sAaXelEMUzQDrw&pid=ImgRaw&r=0" alt="Logo de Mocha JS"
                    class="w-20 h-20 mx-auto">
                <p>Mocha JS</p>
            </div>
        </div>

        <!-- Gestión de Riesgos -->
        <TitleComponent text="GESTIÓN DE RIESGO" text1="Fase de Planificación / Gestión de Riesgos" />
        <p class="text-xl font-light text-left py-4">
            La gestión de riesgos en el proyecto incluye:
        </p>

        <ul class="list-disc pl-6 text-xl font-light pb-4">
            <li>Identificación de Riesgos: Riesgos técnicos, de recursos y de tiempo evaluados en impacto y probabilidad.
            </li>
            <li>Análisis y Evaluación: Uso de una escala del 1 al 5 para evaluar probabilidad e impacto de cada riesgo.</li>
            <li>Estrategias de Mitigación: Desarrollo de planes de acción para cada riesgo identificado.</li>
            <li>Plan de Contingencia: Medidas para enfrentar los riesgos, como tener equipos de desarrollo de respaldo.</li>
            <li>Monitoreo y Comunicación: Revisión periódica de los riesgos y comunicación constante con el equipo y los
                stakeholders.</li>
        </ul>
    </div>
</template>
  
<script>
import TitleComponent from '../components/TittleComponent.vue'; // Asegúrate de que la ruta sea correcta

export default {
    name: 'FasePlanificacionView',
    components: {
        TitleComponent, // Registra el componente TitleComponent
    },
};
</script>
  