<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="zoom-in-down") En la implementación de ciberseguridad, se enfatizó la planificación utilizando técnicas cualitativas y cuantitativas, considerando pronósticos y el contexto organizacional. Además, se profundizó en la concienciación sobre defensa en profundidad (DID), explorando las capas y características. Esto se traduce en aplicaciones y estrategias efectivas para fortalecer nuestra seguridad cibernética en la empresa.

    .row.justify-content-center(data-aos="zoom-in-up")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Imagen que resume los temas abordados dentro del componente formativo como son las técnicas de planificación, entrenamiento y concientización en seguridad y la defensa en seguridad.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
