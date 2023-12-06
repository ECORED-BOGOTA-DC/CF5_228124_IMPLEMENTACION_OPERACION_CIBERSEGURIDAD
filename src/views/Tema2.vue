<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Entrenamiento y concienciación en ciberseguridad
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.svg")
      .col(data-aos="fade-left" style="place-self:center;")
        p La ciberseguridad se define como la capacidad de minimizar el nivel de riesgo al que están expuestos los sistemas informáticos y sus usuarios, ante amenazas de naturaleza cibernética o digital.
        p.mb-0.mt-4 Algunos elementos fundantes del entrenamiento y la concienciación en ciberseguridad, que se deben tener presentes son:
    
    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-9
        .h-100.p-4.p-lg-5.text-white.cont_tarjeta1(style="background: linear-gradient(0deg, rgba(80,12,117,1) 70%, rgba(255,255,255,1) 70%);" data-aos="zoom-in-up")
          figure.col-lg-10.col-md-7.col-7.m-auto
            img(src="@/assets/curso/tema2/2.svg")
          h5.mt-5 Ciber-resiliencia
          p.mt-4 La ciberseguridad brinda a los gobiernos y a las organizaciones la ciber-resiliencia como la capacidad de resistir, proteger y defender los sistemas de ciberataques.
      .col-lg.mb-4.mb-lg-0.col-md-9
        .h-100.p-4.p-lg-5.text-white.cont_tarjeta1(style="background: linear-gradient(0deg, rgba(80,12,117,1) 70%, rgba(255,255,255,1) 70%);" data-aos="zoom-in-up")
          figure.col-lg-10.col-md-7.col-7.m-auto
            img(src="@/assets/curso/tema2/3.svg")
          h5.mt-5 Personal y recursos
          p.mt-4 Para poder apropiar la ciberseguridad en las organizaciones es importante que se cuente con el personal capacitado y los recursos necesarios.
      .col-lg.mb-4.mb-lg-0.col-md-9
        .h-100.p-4.p-lg-5.text-white.cont_tarjeta1(style="background: linear-gradient(0deg, rgba(80,12,117,1) 70%, rgba(255,255,255,1) 70%);" data-aos="zoom-in-up")
          figure.col-lg-10.col-md-7.col-7.m-auto
            img(src="@/assets/curso/tema2/4.svg")
          h5.mt-5 Formación permanente
          p.mt-4 Apropiar la ciberseguridad en la organizaciones implica mantener la formación y concienciación permanentes, en ciberseguridad, como estrategia para el cumplimiento y mejora continua.
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_1 2.1 Fundamentos del entrenamiento en ciberseguridad

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p Realizar el entrenamiento y los procesos de formación permanente con el personal de la organización, en busca de la mejora continua de la ciberseguridad, vincula la comprensión de algunos conceptos orientadores y regentes, con esto claro, como soporte inicial, se garantiza un buen comienzo de procesos de concienciación.
        p.mt-4 A continuación se presenta información como un excelente punto de partida para aprender sobre los conceptos esenciales del entrenamiento y la concienciación en ciberseguridad. Tómese el tiempo para leer detenidamente y tomar notas para que pueda mejorar su comprensión de este importante tema.
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-8.col-lg-12
          img(src="@/assets/curso/tema2/5.png")
    
    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-lg-11.m-auto(titulo="Activo de Información")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p "Es cualquier información o sistema relacionado con el tratamiento de la misma que tenga valor para la organización, pueden ser procesos de negocio, datos, aplicaciones, equipos informáticos, personal, soportes de información, redes, equipamiento auxiliar o instalaciones. Es susceptible de ser atacado deliberada o accidentalmente con consecuencias para la organización “. Incibe (2021).
        .col-md-6.col-lg-4
          figure.col-7.m-auto
            img(src='@/assets/curso/tema2/6.png')
      .row.col-lg-11.m-auto(titulo="Vulnerabilidad y Amenaza")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p La vulnerabilidad es una "Debilidad o fallo de un sistema que puede ser aprovechado con fines maliciosos".
          p.mt-3 La amenaza, es aquella #[strong ]"Circunstancia desfavorable que puede ocurrir y que cuando sucede tiene consecuencias negativas sobre los activos provocando su indisponibilidad, funcionamiento incorrecto o pérdida de valor. Si una amenaza acontece, a la vez que existe una vulnerabilidad aprovechando su existencia, puede derivar en un incidente de seguridad."] Incibe (2021).
        .col-md-6.col-lg-4
          figure.col-7.m-auto
            img(src='@/assets/curso/tema2/7.png')
      .row.col-lg-11.m-auto(titulo="Amenaza avanzada persistente (APT)")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p "También conocido como APT, acrónimo en inglés de Advanced Persistent Threat, consiste en un tipo de ataque informático que se caracteriza por realizarse con sigilo, permaneciendo activo y oculto durante mucho tiempo, utilizando diferentes formas de ataque. Suelen estar patrocinados por compañías, mafias o un estado “. Incibe (2021)
        .col-md-6.col-lg-4
          figure.col-7.m-auto
            img(src='@/assets/curso/tema2/8.png')
      .row.col-lg-11.m-auto(titulo="Ciberataque")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p "Intento deliberado de un ciberdelincuente de obtener acceso a un sistema informático sin autorización, sirviéndose de diferentes técnicas y vulnerabilidades para la realización de actividades con fines maliciosos, como el robo de información, extorsión del propietario o simplemente daños al sistema." Incibe (2021)
        .col-md-6.col-lg-4
          figure.col-7.m-auto
            img(src='@/assets/curso/tema2/9.png')
      .row.col-lg-11.m-auto(titulo="Ciberdelincuente")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p "Persona que realiza actividades delictivas en la red contra personas o sistemas informáticos, pudiendo provocar daños económicos o reputacionales mediante robo, filtrado de información, deterioro de #[em software] o #[em hardware], fraude y extorsión. Casi siempre están orientados a la obtención de fines económicos." Incibe (2021)
        .col-md-6.col-lg-4
          figure.col-7.m-auto
            img(src='@/assets/curso/tema2/10.png')
      .row.col-lg-11.m-auto(titulo="<em>Malware</em>")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p "Es un tipo de #[em software] que tiene como objetivo dañar o infiltrarse sin el consentimiento de su propietario en un sistema de información. Palabra que nace de la unión de los términos en inglés de #[em software] malintencionado: #[em malicious software]. Dentro de esta definición tiene cabida un amplio elenco de programas maliciosos: virus, gusanos, troyanos, #[em backdoors, spyware], etc. La nota común a todos estos programas es su carácter dañino o lesivo." Incibe (2021)
        .col-md-6.col-lg-4
          figure.col-7.m-auto
            img(src='@/assets/curso/tema2/11.png')
      .row.col-lg-11.m-auto(titulo="<em>Phishing</em>")
        .col-md-6.mb-4.mb-md-0.col-lg-8
          p "Técnica o tipo de ataque en el que alguien suplanta a una entidad/servicio mediante un correo electrónico o mensaje instantáneo para conseguir las credenciales o información de la tarjeta de crédito de un usuario. Ese correo/mensaje suele tener un enlace (o fichero que contiene ese enlace) a un sitio web que suplanta al legítimo y que usan para engañarlo.” Incibe (2021)
        .col-md-6.col-lg-4
          figure.col-7.m-auto
            img(src='@/assets/curso/tema2/12.png')
    
    .cont_2_1.mt-5.pt-4.pt-lg-5.pb-4.pt-lg-5
      .col-xl-10.m-auto
        .row
          .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
            figure.col-6.col-md-7.col-lg-12.m-auto
              img(src="@/assets/curso/tema2/13.svg")
          .col-lg-8(data-aos="fade-left")
            .titulo-segundo.titulo_segundo_1
              h3 Glosario de ciberseguridad
            p Consulte otros conceptos relacionados con el entrenamiento en ciberseguridad, emitidos por el Instituto Nacional de Ciberseguridad de España – INCIBE, en el enlace:
            a.boton.color-acento-botones.mt-4(href="https://www.incibe.es/empresas/guias/glosario-de-terminos-de-ciberseguridad-una-guia-de-aproximacion-para-el" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
    
    br
    h4.mt-5.p-3.pe-5.mb-5(style="background: linear-gradient(90deg, rgba(255,178,6,1) 0%, rgba(255,255,255,1) 100%);max-width:fit-content;border-left:8px #500C75 solid;" data-aos="fade-right") Generalidades del entrenamiento

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        p El entrenamiento en el marco de la aplicación de estrategias de ciberseguridad, consiste en el proceso de enseñanza estratégica que busca que, además de impartir conocimientos teóricos y prácticos, los mismos sean apropiados estratégicamente por los participantes para que cumplan eficazmente las tareas asociadas a sus actividades, desempeñadas dentro de un entorno (trabajo, sociedad, escuela, universidad, etc.).
        p.mt-4 La importancia del entrenamiento en ciberseguridad radica en su capacidad para abordar una variedad de aspectos cruciales. Este incluye la gestión, las operaciones, la capacitación de usuarios y las entidades facilitadoras, así como diferentes formas y modalidades de enfoque.
        p.mt-4 A continuación, se pueden observar los aspectos en los que se enfoca el entrenamiento, en el marco de la aplicación de estrategias de ciberseguridad:
      .col-lg-4(data-aos="fade-left" style="place-self:center;")
        figure.m-auto.col-7.col-md-8.col-lg-12
          img(src="@/assets/curso/tema2/14.png")

    TabsB.color-secundario.mt-5
      .py-4.py-md-5(titulo="Gestión" :icono="require('@/assets/curso/tema2/15.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            p Busca mejorar las habilidades y conocimientos para la gestión de la ciberseguridad por medio del entrenamiento en la adopción de estándares y marcos de referencia de ciberseguridad. Se enfoca en fortalecer el liderazgo de la ciberseguridad.
          .col-lg-4
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/16.png')
      .py-4.py-md-5(titulo="Operativo" :icono="require('@/assets/curso/tema2/17.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            p Fortalecimiento de los conocimientos teórico-prácticos con un enfoque técnico que permita mejorar el desempeño operativo de herramientas, #[em software] o #[em hardware], pudiendo mejorar las configuraciones para el rendimiento y eficacia de las mismas. En este sentido, el entrenamiento operativo permite conocer las mejores prácticas técnicas para aplicar controles de ciberseguridad.
          .col-lg-4
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/18.png')
      .py-4.py-md-5(titulo="Usuarios" :icono="require('@/assets/curso/tema2/19.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            p Así mismo, el entrenamiento operativo puede estar enfocado a los usuarios para que tengan el conocimiento práctico y las habilidades para detectar y reportar posibles vulnerabilidades, eventos e incidentes de seguridad digital.
          .col-lg-4
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/20.png')
      .py-4.py-md-5(titulo="Entes facilitadores" :icono="require('@/assets/curso/tema2/21.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            p El entrenamiento puede darse por medio de terceros especializados en la materia y con la acreditación respectiva, tales como instituciones de educación superior profesional, tecnológica y técnica, institutos de educación no formal y profesionales capacitados y certificados.
          .col-lg-4
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/22.png')
      .py-4.py-md-5(titulo="Forma o modalidad" :icono="require('@/assets/curso/tema2/23.svg')")
        .row.col-xl-11.m-auto
          .col-lg-8.mb-4.mb-lg-0
            p El entrenamiento puede realizarse en forma de cursos, certificaciones, talleres, asesorías y consultorías.
          .col-lg-4
            figure.m-auto.col-7.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/24.png')
    
    .col-xl-8.mt-5.m-auto
      .p-4.cajon.color-acento-contenido(style="background-color:#FFE8B3;" data-aos="flip-up")
        p.mb-0 El entrenamiento en ciberseguridad es importante que se desarrolle previamente, durante y después de la aplicación de estrategias de ciberseguridad según las necesidades. 
    
    br
    h4.mt-5.p-3.pe-5.mb-5(style="background: linear-gradient(90deg, rgba(255,178,6,1) 0%, rgba(255,255,255,1) 100%);max-width:fit-content;border-left:8px #500C75 solid;" data-aos="fade-right") Generalidades de la concienciación

    .col-xl-8.m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/25.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Consiste en la acción de apropiar una responsabilidad directa o indirecta sobre algo que sucede en el entorno; en cierto modo es educar moralmente sobre algo, por ejemplo, sobre la mala alimentación, la tala indiscriminada de árboles, el consumo de sustancias psicoactivas, entre otras muchas realidades.
    
    p.mt-5(data-aos="fade-right") En ciberseguridad la concienciación se enfoca en la acción de asumir la responsabilidad directa o indirecta por la confidencialidad, la integridad y la disponibilidad de la información.
    p.mt-4(data-aos="fade-left") En este sentido, la concienciación se enfoca a tres grupos de interés claves:

    .col-xl-10.m-auto.mt-5
      .row.justify-content-center
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#500C75;")
            h5.mb-0.w-100.text-white Los dueños de negocio
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#8F52F5;")
            h5.mb-0.w-100.text-white Los operadores técnicos 
        .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
          .h-100.cont_flecha1.p-4.text-center.d-flex.align-content-center.flex-wrap(style="background-color:#FFB206;")
            h5.mb-0.w-100 Los usuarios de los sistemas de información
    
    br
    .row.mt-5
      .col-xl-2.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-4.col-md-5.col-lg-12
          img(src="@/assets/curso/tema2/26.png")
      .col-xl-10.col-lg-9(data-aos="fade-left" style="place-self:center;")
        h5 Los dueños del negocio
        p.mt-4 Los dueños de negocio están representados por los gerentes, presidentes y todos los altos cargos de una organización con poder de decisión e influencia sobre todas o ciertas áreas de la misma.
        p.mt-4 Sobre los dueños del negocio, importa reconocer que hay:
        .row.mt-4.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8
            .h-100.p-4(style="background-color:#966DAC;border-radius:10px;")
              h5.text-center Principales implicados
              p.mt-4.mb-0 Son el primer grupo de interés para concienciar en la importancia de la ciberseguridad.
          .col-lg.mb-4.mb-lg-0.col-md-8
            .h-100.p-4(style="background-color:#B99DC8;border-radius:10px;")
              h5.text-center Con facultad de decisión
              p.mt-4.mb-0 Considerando su autoridad para aprobar los recursos esenciales, tienen la capacidad de respaldar la implementación efectiva de estrategias de seguridad digital.
          .col-lg.mb-4.mb-lg-0.col-md-8
            .h-100.p-4(style="background-color:#DCCEE3;border-radius:10px;")
              h5.text-center Apoyo fundamental
              p.mt-4.mb-0 Juegan un papel crucial como soporte fundamental para implementar políticas de ciberseguridad y asegurar su cumplimiento en toda la organización.
    br
    .row.mt-5
      .col-xl-2.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-4.col-md-5.col-lg-12
          img(src="@/assets/curso/tema2/27.png")
      .col-xl-10.col-lg-9(data-aos="fade-left" style="place-self:center;")
        h5 Operadores técnicos
        p.mt-4 Se trata del grupo o equipo de técnicos, tecnólogos e ingenieros que se encargan de desarrollar, implementar y operar o mantener los sistemas de información. 
        p.mt-4 Este grupo se debe mantener muy consciente de la importancia de la ciberseguridad debido a que son responsables por la apropiación de las tecnologías y si no aplican las mejores prácticas, pueden generar brechas o vulnerabilidad de seguridad digital.
        .p-4.mt-4(style="background-color:#D2B9FB;border-radius:10px;")
          .col-lg-10.m-auto
            p.fw-bold.mb-0 Los operadores técnicos, por principio, han de ser los agentes de la organización más comprometidos con la formación y concienciación permanente en pro de la ciberseguridad.
    br
    .row.mt-5
      .col-xl-2.col-lg-3.mb-4.mb-lg-0(data-aos="fade-right" style="place-self:center;")
        figure.m-auto.col-4.col-md-5.col-lg-12
          img(src="@/assets/curso/tema2/28.png")
      .col-xl-10.col-lg-9(data-aos="fade-left" style="place-self:center;")
        h5 Usuarios
        p.mt-4 Los usuarios son el elemento con mayor susceptibilidad de ser atacados por los ciberdelincuentes, por lo tanto, deben recibir una atención especial en la concienciación de ciberseguridad, pues estos tienen accesos y privilegios para la manipulación de información en los sistemas de información, dentro de una organización. 
        p.mt-4 En relación con los usuarios, en el marco de la concienciación de ciberseguridad, se debe recordar:
        .row.mt-4.justify-content-center
          .col-lg.mb-4.mb-lg-0.col-md-8
            .h-100.p-4(style="background-color:#FFD169;border-radius:10px;")
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/tema2/29.svg")
                .col
                  h5 Lograr vías de concienciación
                  p.mt-4.mb-0 Es importante que se apliquen estrategias de concienciación de usuarios por medio de charlas, cursos, talleres prácticos, boletines, entre otras estrategias de comunicación para la concienciación.
          .col-lg.mb-4.mb-lg-0.col-md-8
            .h-100.p-4(style="background-color:#FFE8B3;border-radius:10px;")
              .row
                .col-auto
                  figure
                    img(src="@/assets/curso/tema2/30.svg")
                .col
                  h5 Fortalecer el conocimiento en las personas
                  p.mt-4.mb-0 En ciberseguridad se dice que uno de los eslabones más débiles de la cadena son las personas, haciendo alusión a que se pueden tener los mejores controles de seguridad a nivel técnico, pero un error humano por falta de conocimientos o concienciación, puede hacer vulnerable a los sistemas más robustos y protegidos.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_2_2 2.2 Características del entrenamiento
    
    p(data-aos="fade-left") Las características comunes del entrenamiento y concienciación en ciberseguridad se centran en que ambos son elementos claves para instaurar una cultura de ciberseguridad en una organización; ambas se pueden aplicar a cualquier parte interna o externa de la compañía, comparten conceptos de formación y los propósitos de fortalecer el factor humano y la aplicación de mejores prácticas de seguridad en la apropiación de las tecnologías.
    p.mt-4(data-aos="fade-right") A continuación, se detallan algunas características.

    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="Asesoría o consultoría") La asesoría o consultoría externa es una herramienta que puede ser utilizada por los equipos líderes de ciberseguridad para brindar entrenamiento y concienciación. Permite la adquisición rápida de conocimientos de formación, gestión y operación, además de facilitar el despliegue de la toma de conciencia a los grupos de interés claves, los dueños de negocio, los operadores técnicos y los usuarios de los sistemas de información.
          p.text-small(numero="2" titulo="Recursos formativos") Consisten en materiales de texto y multimedia de apoyo para el entrenamiento y concienciación, pudiendo abordar diversas temáticas de ciberseguridad y tecnología en formatos de documentos de texto, presentaciones y recursos multimedia (imagen, audio y video).
          p.text-small(numero="3" titulo="Emulación de ataques dirigidos controlados") Permite entrenar y concientizar por medio de la práctica de emulación controlada de ataques dirigidos a sistemas y personas, entre estas prácticas se aplican técnicas de la ingeniería social para poder medir el nivel de concienciación de las personas, así como la capacidad de respuesta de los operadores de tecnología.
          p.text-small(numero="4" titulo="Tips y comunicados") Es una característica que permite preparar y generar conciencia en ciberseguridad de manera ágil y dinámica, de tal forma que los participantes aprenden poco a poco por medio de pequeñas cápsulas informativas de gran valor y fácil de comprender.
          p.text-small(numero="5" titulo="Encuestas de satisfacción") Cuando se realizan actividades de entrenamiento y concientización, se hace útil realizar mediciones para ver el nivel de satisfacción para determinar si las actividades están siendo adecuadas y no suponen una carga más para los grupos de interés. De esta manera se pueden generar actividades dinámicas y eficientes en función de un adecuado entrenamiento y concienciación en ciberseguridad.
          p.text-small(numero="6" titulo="Test de evaluación y retroalimentación") Permiten reflejar el nivel de conocimientos y concienciación que tienen los grupos de interés, dueños de negocio, los operadores técnicos y los usuarios de los sistemas de información, de tal forma que se pueda realizar la retroalimentación pertinente en los temas de ciberseguridad que se deben fortalecer, así como también permite tomar acciones para certificar, felicitar y motivar a los grupos de interés en la aplicación de las políticas y buenas prácticas en ciberseguridad.
          p.text-small(numero="7" titulo="Proceso continuo") Otra característica fundamental es que tanto para la concienciación y el entrenamiento en ciberseguridad, se debe mantener como un proceso continuo, debido a los constantes cambios en los factores tecnológicos, los procesos y del personal dentro de la organización.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-6.col-lg-12
          img(src="@/assets/curso/tema2/31.svg")






</template>

<script>
export default {
  name: 'Tema2',
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
.cont_tarjeta1:hover
  background: linear-gradient(0deg, rgba(143,82,245,1) 70%, rgba(255,255,255,1) 70%) !important
.acordion .tarjeta--azul
  background-color: #FFF0CD
.acordion__accion__btn--a i, .acordion__accion__btn--b i
  color: #E01650
.cont_2_1, .cont_2_1 *
  position: relative
.cont_2_1:before
  content: ''
  position: absolute
  height: 100%
  width: 125%
  left: -15%
  top: 0
  background-color: #EEE5FE
.titulo_segundo_1:after
  border-left-color: #3C3FA7 !important
  background-color: #AFC6DE
.tabs-b__tab
  background-color: #F4EDFE
  border-bottom: 0px !important
.tabs-b.color-secundario .tabs-b__tab--active
  background-color: #fff
.cont_flecha1
  clip-path: polygon(93% 0, 100% 48%, 93% 100%, 0% 100%, 9% 51%, 0% 0%)
.linea-tiempo-d__item.row.linea-tiempo-d__item--selected .tarjeta--gris
  background-color: #FFECC1
</style>
