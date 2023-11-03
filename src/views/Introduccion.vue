<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cont_intro1.pt-4
      p(data-aos="fade-right") La ciberseguridad se fundamenta en la seguridad de la información en el ciberespacio, mundo digital o cibernético, que apropia la seguridad informática o digital, abarcando aspectos de la geopolítica con alcances, incluso, sociales. Esta es otra razón más por la que es importante realizar una adecuada planificación, entrenamiento y concienciación en ciberseguridad para una adecuada implementación posterior de las estrategias de seguridad digital.
      p.mt-4(data-aos="fade-left") La planeación es un elemento transversal para una mejor administración y gestión, en cualquier tipo de proceso o proyecto. Luego, ha de abordarse la planeación como un aspecto importante de la aplicación de estrategias de ciberseguridad. En este componente de formación se obtendrá una amplia y detallada explicación de los elementos requeridos para los procesos de Planificación, Entrenamiento y Concienciación en la implementación de estrategias de ciberseguridad.
      figure.mt-5(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
<style lang="sass">
.cont_intro1, .cont_intro1 *
  position: relative
.cont_intro1:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 50%
  top: 0
  background-color: #DCCEE3
</style>
