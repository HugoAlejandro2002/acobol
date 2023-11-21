<template>
    <div class="container mx-auto px-10 py-8 rounded-3xl bg-slate-50">
        <TitleComponent text="Fase de Control de Calidad e Implementación"
            text1="Fase de Control de Calidad e Implementación / Fase de Control de Calidad" />
        <h3 class="text-xl font-light text-left">El proyecto ACOBOL involucra crear un portal web informativo manejado por
            un equipo de desarrolladores especializados en tecnologías web como HTML, CSS, JavaScript y Vue.js, y
            herramientas de diseño UI/UX. Se actualizará el hardware necesario y se contratará un servicio de Internet
            empresarial de alta velocidad. Las licencias para software esenciales serán adquiridas y se enfocará en la
            formación continua del equipo.
            <br>
            La planificación del proyecto abarca desde la definición del alcance hasta el diseño de la arquitectura de la
            información, con un enfoque en la responsividad y accesibilidad. La gestión de riesgos incluirá estrategias de
            mitigación y un plan de contingencia.
        </h3>
        <TitleComponent text="Fase de Control de Calidad e Implementación"
            text1="Fase de Control de Calidad e Implementación / Fase de Implementación" />

        <h3 class="text-xl font-light text-left">Para el hosting del portal web de ACOBOL se ha seleccionado un
            servidor Dell PowerEdge R630 con las siguientes características:
            <br>
            - 2 x Intel Xeon E5-2640 V3
            <br>
            - 64GB de RAM
            <br>
            - Controlador RAID PERC H730
            <br>
            - 300GB de almacenamiento
            <br>
            El dominio elegido es acobol.org.bo, obtenido a través de ofertas oficiales del gobierno boliviano con un
            costo
            de 280 Bs. al año.
            <br>

            El proceso de DNS se llevará a cabo mediante el panel WHM, proporcionado con la compra del dominio .org.bo,
            enlazando la IP pública del servidor con el nombre de dominio. Se implementará un certificado SSL para
            asegurar
            la conexión con los clientes.
            <br>
            El despliegue de frontend, backend y base de datos se realizará en el servidor. El backend (Express) y la
            base
            de datos (MySQL) serán servidos con sus entornos por defecto. El frontend se desplegará públicamente
            utilizando
            el servidor web Nginx para servir archivos estáticos en el puerto 80 de la IP pública, resuelta en el nombre
            de
            dominio acobol.org.bo.
        </h3>

    </div>
</template>
  
<script>
import TitleComponent from '../components/TittleComponent.vue'; // Asegúrate de que la ruta sea correcta

export default {
    name: 'FaseControlCalidadView',
    components: {
        TitleComponent, // Registra el componente TitleComponent
    },
};
</script>
  