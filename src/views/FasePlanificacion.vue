<template>
    <div class="container mx-auto px-10 py-8 rounded-3xl bg-slate-50">
        <TitleComponent text="TÉRMINOS DE REFERENCIA" text1="Fase de Inicio / Términos de Referencia" />

        <h2 class="text-2xl font-bold text-left text-primary uppercase py-4">Antecedentes y Justificación</h2>
        <h3 class="text-xl font-light text-left">La Asociación de Concejalas y Alcaldesas de Bolivia (ACOBOL)
            es una entidad nacional sin fines de lucro, fundada en 1999, que forma parte del Sistema
            Asociativo Municipal (SAM). Conformada por nueve Asociaciones Departamentales, ACOBOL tiene como
            objetivo principal promover y posicionar políticamente a las mujeres en el ámbito municipal.
            Esta entidad representa a sus asociadas, alcaldesas y concejalas, en la defensa de sus derechos
            e intereses, sin discriminación de raza, cultura, etnia o instrucción. ACOBOL trabaja en
            fortalecer la gestión hacia la equidad y el desarrollo humano sostenible, respaldando a sus
            miembros para lograr una participación política equitativa, empoderando a las mujeres y fomentando
            la incorporación de la perspectiva de género en la planificación y desarrollo municipal, con el fin
            de contribuir a la construcción de una sociedad equitativa entre hombres y mujeres.
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
    name: 'FasePlanificacionView',
    components: {
        TitleComponent, // Registra el componente TitleComponent
    },
};
</script>
  