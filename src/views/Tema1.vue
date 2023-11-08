<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Técnicas de planificación

    p(data-aos="fade-right") Según Robbins y Couter (2005), la planificación consiste en #[strong “definir metas, establecer estrategias para alcanzarlas y trazar planes para integrar y coordinar el trabajo de la organización. Se ocupa tanto de los fines, lo que hay que hacer, como de los medios, como hay que hacerlo."](p. 158).
    p.mt-4(data-aos="fade-left") La planificación implica llevar a cabo un análisis detallado y definir los objetivos deseados, teniendo en cuenta los recursos fundamentales necesarios para alcanzarlos; los cuales, incluyen las habilidades y conocimientos de las personas, así como la tecnología, los materiales y otros elementos que se consideren esenciales para el logro de dichos objetivos.
    p.mt-4(data-aos="fade-right") En razón a ello, es crucial prestar atención a los siguientes aspectos clave sobre la técnicas de planificación, como se presentan a continuación:

    .tarjeta.tarjeta--azul.p-4.p-lg-5.mt-5(style="background-color:#DCCEE3;border-radius:0px;" data-aos="zoom-in-up")
      SlyderA(tipo="b")
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5 Utilidad de la planificación
            p.mt-4 La planificación traza las metas u objetivos en tiempos específicos ya sean en el corto, mediano y largo plazo, en donde se establecen las actividades a realizar con los respectivos responsables, y los medios necesarios para el cumplimiento de las mismas.
          .col-lg-5
            figure.m-auto.col
              img(src='@/assets/curso/tema1/1.png')
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5 Reconocimiento del entorno
            p.mt-4 Planificar implica, entre otras cosas, una #[strong "revisión de grandes volúmenes de información para anticipar e interpretar los cambios del ambiente. Un reconocimiento externo, tal vez revele problemas y preocupaciones que incidan en las actividades actuales o planeadas de la organización."] Robbins y Couter (2005).
          .col-lg-5
            figure.m-auto.col
              img(src='@/assets/curso/tema1/2.png')
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5 FODA
            p.mt-4 El reconocimiento del entorno puede llevarse a cabo mediante herramientas como la Matriz FODA, que evalúa las Fortalezas, Oportunidades, Debilidades y Amenazas, o mediante el análisis de los aspectos políticos, económicos, sociales, tecnológicos, ecológicos y legales, conocidos como (Análisis PEST-EL).
          .col-lg-5
            figure.m-auto.col
              img(src='@/assets/curso/tema1/3.png')
        .row
          .col-lg-7.mb-4.mb-lg-0
            h5 Pronósticos
            p.mt-4 Los pronósticos hacen referencia a las #[strong "predicciones de resultados; su objetivo es dar a los directivos información que facilite la toma de decisiones. Cuánto más turbulento sea el entorno menos fiable será el pronóstico que se plantee”] Robbins y Couter (2005).
          .col-lg-5
            figure.m-auto.col
              img(src='@/assets/curso/tema1/4.png')
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_1 1.1. Pronósticos cualitativos y cuantitativos
    
    p(data-aos="fade-left") Para Robbins y Couter (2005), #[strong “en los pronósticos cuantitativos se aplican reglas matemáticas a conjuntos de datos para predecir resultados. Mientras que los cualitativos están basados en el buen juicio y las opiniones de conocedores para predecir resultados"] (p. 208).
    p.mt-4(data-aos="fade-right") Analice la siguiente tabla en la que se identifican las técnicas tanto cuantitativas como cualitativas de los pronósticos en la planeación:

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Tabla 1.
      span Técnicas cuantitativas y cualitativas de pronósticos
    .tabla-a.color-acento-secundario.mt-4(data-aos="zoom-in-up")
      table
        caption.fw-normal(style="background-color:#F6F6F6;") #[strong Nota,] Nota. Robbins y Couter (2005)
        thead(style="border-color:#8F52F5;")
          tr(style="background-color:#500C75;")
            th.text-white Técnica
            th.text-white Descripción
            th.text-white Aplicación
        tbody
          tr(style="background-color:#FAEFD5;")
            td.fw-bold.text-center(colspan="3") Cuantitativas
          tr
            td.p-4.text-center Análisis de series temporales
            td.p-4.text-center Establece una ecuación para una tendencia y la proyecta al futuro.
            td.p-4.text-center Pronosticar las ventas del siguiente trimestre con datos de ventas de los cuatro años anteriores.
          tr
            td.p-4.text-center Modelos de regresión
            td.p-4.text-center Pronostica una variable a partir de los que se sabe o supone de otras.
            td.p-4.text-center Buscar factores que pronostiquen cierto monto de ventas (por ejemplo, precio, gastos en publicidad).
          tr
            td.p-4.text-center Modelos econométricos
            td.p-4.text-center Simula con ecuaciones de regresión segmentos de la economía.
            td.p-4.text-center Pronosticar el cambio de ventas de autos como resultado de los cambios en las leyes fiscales.
          tr
            td.p-4.text-center Indicadores económicos
            td.p-4.text-center Pronostica con uno o más indicadores el estado futuro de la economía.
            td.p-4.text-center Pronosticar con cambios en el PIB el ingreso discrecional.
          tr
            td.p-4.text-center Efecto de sustitución
            td.p-4.text-center Predice con una fórmula matemática cómo, cuándo y en qué circunstancias un nuevo producto o tecnología sustituirá al actual.
            td.p-4.text-center Pronosticar el efecto de los reproductores de DVD en la venta de reproductores de VHS.
          tr(style="background-color:#FAEFD5;")
            td.fw-bold.text-center(colspan="3") Cualitativas
          tr
            td.p-4.text-center Jurado de opinión
            td.p-4.text-center Reúne y promedia opiniones de expertos.
            td.p-4.text-center Reunir a los gerentes de recursos humanos de la compañía para pronosticar las necesidades de reclutamiento de universitarios el año entrante.
          tr
            td.p-4.text-center Composición de la fuerza de ventas
            td.p-4.text-center Combina estimaciones de los vendedores sobre las compras esperadas de los clientes.
            td.p-4.text-center Pronosticar las ventas de aparatos de láser individuales el año entrante.
          tr
            td.p-4.text-center Evaluación de los clientes
            td.p-4.text-center Combina estimaciones de los clientes habituales.
            td.p-4.text-center Un fabricante de entrevistas a los principales distribuidores de autos para determinar los modelos y cantidades de productos deseados.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_1_2 1.2. Planificación, necesidades y contexto organizacional
    
    p(data-aos="fade-left") Las técnicas para la planificación pueden ser aplicadas según las necesidades y el contexto de la organización. De la misma forma en que se aplica el análisis del punto de equilibrio, la programación lineal o la planeación de escenarios.

    .cont_1_1.pt-4
      p(data-aos="fade-right") A continuación, se analizarán otras técnicas de planificación, teniendo en cuenta las necesidades y el contexto organizacional.
      figure.mt-4(data-aos="zoom-in")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)




      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.slyder-a__btn--sigt, .slyder-a__btn--atrs
  background-color: #E01650
  background-image: url(../assets/curso/tema1/arrow_white.svg)
.slyder-a__bullets__item
  background-color: #DD8EB0
  border-color: #DD8EB0
.slyder-a__bullets__item--active
  background-color: #E01650 !important
  border-color: #E01650
.cont_1_1, .cont_1_1 *
  position: relative
.cont_1_1:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 50%
  top: 0
  background-color: #DCCEE3
</style>
