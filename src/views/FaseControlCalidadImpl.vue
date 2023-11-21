<template>
    <div class="container mx-auto px-10 py-8 rounded-3xl bg-slate-50">
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
            El dominio elegido es acobol.org.bo, obtenido a través de ofertas oficiales del gobierno boliviano con un costo
            de 280 Bs. al año.
            <br>

            El proceso de DNS se llevará a cabo mediante el panel WHM, proporcionado con la compra del dominio .org.bo,
            enlazando la IP pública del servidor con el nombre de dominio. Se implementará un certificado SSL para asegurar
            la conexión con los clientes.
            <br>
            El despliegue de frontend, backend y base de datos se realizará en el servidor. El backend (Express) y la base
            de datos (MySQL) serán servidos con sus entornos por defecto. El frontend se desplegará públicamente utilizando
            el servidor web Nginx para servir archivos estáticos en el puerto 80 de la IP pública, resuelta en el nombre de
            dominio acobol.org.bo.
        </h3>
        <h2 class="text-2xl font-bold text-left text-primary uppercase py-4">objetivo</h2>
        <h3 class="text-xl font-light text-left">La consultoría tiene como objetivo realizar el diseño, desarrollo,
            pruebas, mantenimiento y despliegue de una nueva página web para la Asociación de Concejalas y Alcaldesas
            de Bolivia (ACOBOL).
        </h3>

        <TitleComponent text="PLAN DE INICIO - ACOBOL" text1="Fase de Inicio / Plan de inicio" />

        <p class="text-xl text-center mt-6">
            Esta es una página de información sobre nuestra aplicación y equipo.
        </p>
        <p class="text-center mt-4">
            Aquí puedes agregar más información acerca de los valores, misión y visión de tu proyecto o empresa.
        </p>
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
  