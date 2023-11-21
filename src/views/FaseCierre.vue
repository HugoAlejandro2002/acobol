<template>
    <div class="container mx-auto px-10 py-8 rounded-3xl bg-slate-50">

        <!-- Sección de Manuales -->
        <TitleComponent text="MANUALES" text1="Fase de Cierre / Manuales" />
        <div class="py-4">
            <h3 class="text-xl font-light">Manual de Usuario</h3>
            <ul class="list-disc pl-6 text-xl font-light py-4">
                <li>Objetivo: Instruir al cliente sobre la arquitectura del sistema, funcionalidades de la página web,
                    seguridad, mantenimiento, actualización y soporte técnico.</li>
                <li>Funcionalidades del Sistema: Detalles de las secciones como Página de Inicio, Quiénes Somos, Líneas
                    Estratégicas, Proyectos, Publicaciones y Contactos.</li>
                <li>Arquitectura del Sistema: Uso de Vue.js para el front-end, Express.js para el back-end, y MySQL para la
                    base de datos.</li>
                <li>Seguridad del Sistema: Protección contra ataques y estrategias de seguridad implementadas.</li>
            </ul>
            <h3 class="text-xl font-light">Mantenimiento del Sistema</h3>
            <ul class="list-disc pl-6 text-xl font-light py-4">
                <li>Revisión y actualización regular de la infraestructura de TI cada tres meses.</li>
                <li>Incluye revisión de hardware y software, análisis de seguridad, rendimiento y planificación de mejoras
                    futuras.</li>
            </ul>
            <a href="https://docs.google.com/document/d/1NRZeFOgupcZP_-8eqn74uzVkhmaFFzOMN9FYUNVoLk0/edit" 
               class="text-primary underline hover:text-secondary">
                Ver Manuales
            </a>
        </div>

        <!-- Sección de Carta de Entrega de Producto -->
        <TitleComponent text="CARTA DE ENTREGA DEL PRODUCTO" text1="Fase de Cierre / Carta de Entrega de Producto" />
        <div class="py-4">
            <h3 class="text-xl font-light">Carta de Entrega del Producto - Acobol</h3>
            <p class="text-xl font-light py-4">
                Formalización de la entrega del sistema de la página web de ACOBOL, incluyendo software, documentación y
                equipos informáticos. El sistema está operativo en el dominio www.acobol.org.bo, cumpliendo con los
                requisitos y objetivos establecidos. Ofrecemos un período de tres meses de soporte y mantenimiento
                post-entrega.
            </p>
            <a href="https://docs.google.com/document/d/1-zX1I_5QZp_A7n7_gGCH_-ez67XgTnobZCj0u2ONCDM/edit" 
               class="text-primary underline hover:text-secondary">
                Ver Carta de Entrega
            </a>
        </div>
    </div>
</template>

  
<script>
import TitleComponent from '../components/TittleComponent.vue'; // Asegúrate de que la ruta sea correcta

export default {
    name: 'FaseCierreView',
    components: {
        TitleComponent, // Registra el componente TitleComponent
    },
};
</script>
  