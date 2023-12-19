<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Defensa en profundidad
    
    .col-xl-10.m-auto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Según Raggi (2021):
          |
          br
          br
          | #[strong Este concepto, al igual que muchos otros, tiene su origen etimológico en el mundo militar siendo, la defensa en profundidad, una estrategia que pretende dilatar y ralentizar el avance de un enemigo en lugar de pensar solo en un único método para detenerlo de forma absoluta. Esta defensa en profundidad puede retrasar, lo suficiente, el avance de un ejército enemigo, haciendo que pierda fuerza e impulso, y proporcionado, además, valioso tiempo adicional para elaborar una respuesta más efectiva.]
    
    p.mt-5(data-aos="fade-right") La defensa en profundidad permite minimizar la probabilidad de ocurrencia de riesgos, causados por ciberataques; permite la apropiación de controles y buenas prácticas de ciberseguridad para el aseguramiento de la infraestructura tecnológica.

    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_1 3.1 Conceptos de Defensa en Profundidad DID
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        p El CIS (Center of Internet Security) define la defensa en profundidad de la siguiente manera:
        .cont_3_1.pb-1
          p.mt-4 #[strong "Se refiere a un enfoque de seguridad de la información en el que una serie de mecanismos y controles de seguridad se colocan cuidadosamente en una red de computadoras para proteger la confidencialidad, integridad y disponibilidad de la red y los datos que contienen. Si bien ninguna mitigación individual puede detener todas las amenazas cibernéticas, juntas proporcionan mitigaciones contra una amplia variedad de amenazas, al tiempo que incorporan redundancia en caso de que un mecanismo falle. Cuando tiene éxito, este enfoque refuerza significativamente la seguridad de la red contra muchos vectores de ataque".] CIS (2021).
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/2.png" alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-right") Una estrategia eficaz de defensa en profundidad (DID), incluye estas (y otras) mejores prácticas, herramientas y políticas de seguridad:

    .tarjeta.tarjeta--gris.p-4.p-lg-5.mt-5.pt-lg-4(style="background-color:#FFF7E5;")
      LineaTiempoC.color-secundario(text-small)
        .row(titulo="1")
          .col-md-6.mb-4.mb-md-0.col-lg-4
            figure
              img(src='@/assets/curso/tema3/3.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8
            h5 Descubrimiento y gestión de activos
            p.mt-4 "Identificar los dispositivos y activos (incluyendo los datos) que deben ser protegidos y monitorearlos. No es posible proteger un activo si no se conoce su existencia, por ello es indispensable tener visibilidad de todos los activos que pertenecen a la organización y que tienen acceso a los recursos de esta. Esto ayudará a identificar la superficie de ataque que se debe proteger y cómo se debe proteger." Raggi (2021).
        .row(titulo="2")
          .col-md-6.mb-4.mb-md-0.col-lg-4
            figure
              img(src='@/assets/curso/tema3/4.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8
            h5 Protocolo y servicios
            p.mt-4 En la apropiación de la tecnología se debe aplicar protocolos y servicios seguros tales como SSL/TLS, HTTPS, SSH, SFTP, DoH/DNSSEC, SMTP, POP3, entre otros.
        .row(titulo="3")
          .col-md-6.mb-4.mb-md-0.col-lg-4
            figure
              img(src='@/assets/curso/tema3/5.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8
            h5 Sistemas de correlación de eventos o #[em Logs], Security Information and Event Management – SIEM
            p.mt-4 Los SIEM son herramientas o soluciones que se enfocan en gestionar los eventos, con capacidades para detectar de manera centralizada los #[em logs] o registros de los diversos dispositivos en la red, esto ayuda a responder y neutralizar ciberamenazas. También permite tener una visión global de la seguridad de las tecnologías.
        .row(titulo="4")
          .col-md-6.mb-4.mb-md-0.col-lg-4
            figure
              img(src='@/assets/curso/tema3/6.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8
            h5 #[em Firewalls]
            p.mt-4 Los cortafuegos son dispositivos de #[em software] o #[em hardware] que controlan el tráfico de la red a través del acceso o niegan políticas o reglas. Estas reglas incluyen direcciones IP, direcciones MAC y puertos negros o de listas blancas. También hay #[em firewalls] específicos de aplicaciones, como #[em firewalls] de aplicaciones web (WAF) y pasarelas de correo electrónico seguras que se enfocan en detectar actividad maliciosa, dirigida a una aplicación en particular.
        .row(titulo="5")
          .col-md-6.mb-4.mb-md-0.col-lg-4
            figure
              img(src='@/assets/curso/tema3/7.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8
            h5 Sistemas IDS/IPS
            p.mt-4 Sistemas de detección o prevención de intrusiones (IDS / IPS), un IDS envía una alerta cuando se detecta tráfico de red malicioso, mientras que un IPS intenta prevenir y alertar sobre la actividad maliciosa identificada en la red o en la estación de trabajo de un usuario. Estas soluciones basan el reconocimiento de ataques en firmas de actividad de red maliciosa conocida.
        .row(titulo="6")
          .col-md-6.mb-4.mb-md-0.col-lg-4
            figure
              img(src='@/assets/curso/tema3/8.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8
            h5 Endpoint Detection and Response – EDR
            p.mt-4 El #[em software] o los agentes de EDR residen en el sistema cliente (por ejemplo, la computadora portátil o el teléfono móvil de un usuario) y brindan protección antivirus, alertas, detección, análisis, clasificación de amenazas e inteligencia de amenazas. Estas soluciones se ejecutan en conjuntos de reglas, es decir, firmas o reglas de #[em firewall] o heurísticas, es decir, detección de comportamientos anómalos o maliciosos.
        .row(titulo="7")
          .col-md-6.mb-4.mb-md-0.col-lg-4
            figure
              img(src='@/assets/curso/tema3/9.png' alt="Imagen decorativa")
          .col-md-6.col-lg-8
            h5 Segmentación de Red
            p.mt-4 Es la práctica de dividir una red en múltiples subredes diseñadas en torno a las necesidades comerciales. Por ejemplo, esto a menudo incluye tener subredes para ejecutivos, finanzas, operaciones y recursos humanos. Dependiendo del nivel de seguridad requerido, es posible que estas redes no puedan comunicarse directamente. La segmentación, a menudo, se logra mediante el uso de conmutadores de red o reglas de #[em firewall].
    
    p.mt-5(data-aos="fade-right") En la era digital, donde la información es un activo invaluable, la seguridad cobra una relevancia sin precedentes. Para salvaguardar datos sensibles y sistemas cruciales, tres principios esenciales han surgido como pilares de la ciberseguridad moderna:
    .row.mt-5.justify-content-center
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
        .h-100.p-4(style="background-color:#FFB206;border-radius:10px;")
          figure
            img(src="@/assets/curso/tema3/10.svg" style="max-width:80px;" alt="Imagen decorativa")
          h5.mt-4 Principio de mínimo privilegio
          p.mt-3 Se requieren políticas y controles técnicos para asignar solo a los usuarios, sistemas y procesos de acceso a los recursos (redes, sistemas y archivos) que son absolutamente necesarios para realizar su función asignada.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
        .h-100.p-4.text-white(style="background-color:#8F52F5;border-radius:10px;")
          figure
            img(src="@/assets/curso/tema3/11.svg" style="max-width:80px;" alt="Imagen decorativa")
          h5.mt-4 Contraseñas seguras
          p.mt-3 Son un mecanismo de autenticación fundamental en la seguridad de la información. La guía moderna de contraseñas implica el uso de la autenticación multifactor para cualquier cuenta de valor, el uso de una frase con varias palabras y la no reutilización de contraseñas.
      .col-lg.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in-up")
        .h-100.p-4.text-white(style="background-color:#8F52F5;border-radius:10px;")
          figure
            img(src="@/assets/curso/tema3/12.svg" style="max-width:80px;" alt="Imagen decorativa")
          h5.mt-4 Gestión de parches o #[em patch management]
          p.mt-3 Es el proceso de aplicar actualizaciones a un sistema operativo, #[em software], #[em hardware] o complemento. A menudo, estos parches abordan las vulnerabilidades identificadas que podrían permitir a los CTA el acceso no autorizado a los sistemas o redes de información. CIS (2021).
    
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_2 3.2 Capas de la defensa en profundidad
    
    p(data-aos="fade-right") La defensa en profundidad aborda la ciberseguridad en capas: en cada capa se aplican controles de seguridad determinados para abarcar todos los aspectos necesarios de proteger, de manera particular y adecuada.
    p.mt-4(Data-aos="fade-left") Las capas se pueden representar de distintas maneras y las organizaciones pueden adoptar esta estrategia de ciberseguridad, de acuerdo con su contexto, sus recursos y sus propias necesidades de ciberseguridad.

    .titulo-sexto.color-acento-contenido.mt-5(data-aos="zoom-in-down")
      h5 Figura 1.
      span  Representación global del método de defensa en profundidad por capas
    ImagenInfografica.color-acento-contenido.mt-5(data-aos="zoom-in-up")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema3/13.svg' alt="Imagen que ilustra la representación del método de defensa en profundidad y por capas que esta explicado también luego de la imagen.")
      .tarjeta.color-acento-botones.p-3(x="7%" y="97%" numero="+" style="background-color:#FFF7E5;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
        p.mb-0.text-center(style="color:inherit;") Programa de aprendizaje para los usuarios.
      .tarjeta.color-acento-botones.p-3(x="21.5%" y="97%" numero="+" style="background-color:#FFF7E5;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
        p.mb-0.text-center(style="color:inherit;") Guardias de seguridad, bloqueos, dispositivos de seguimiento.
      .tarjeta.color-acento-botones.p-3(x="36%" y="97%" numero="+" style="background-color:#FFF7E5;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
        p.mb-0.text-center(style="color:inherit;") Servidores de seguridad, sistemas de cuarentena de VPN.
      .tarjeta.color-acento-botones.p-3(x="50%" y="97%" numero="+" style="background-color:#FFF7E5;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
        p.mb-0.text-center(style="color:inherit;") Segmentos de red, IPSec, NIDS.
      .tarjeta.color-acento-botones.p-3(x="65%" y="97%" numero="+" style="background-color:#FFF7E5;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
        p.mb-0.text-center(style="color:inherit;") Refuerzo del sistema operativo, administración de revisiones, autenticación, HIDS.
      .tarjeta.color-acento-botones.p-3(x="79%" y="97%" numero="+" style="background-color:#FFF7E5;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
        p.mb-0.text-center(style="color:inherit;") Refuerzo de aplicaciones, antivirus.
      .tarjeta.color-acento-botones.p-3(x="93%" y="97%" numero="+" style="background-color:#FFF7E5;box-shadow:0px 0px 15px rgba(0,0,0,.15);")
        p.mb-0.text-center(style="color:inherit;") ACL, Cifrado.
    figcaption.fw-normal.mt-5(style="background-color:#E5E9EA;" data-aos="zoom-in") #[strong Nota.] Rodríguez, Yépez, Peralta y Ortiz (2018).
    
    p.mt-5(data-aos="fade-right") En la figura anterior se muestran diversas capas con controles de seguridad asociados, es importante saber que la defensa en profundidad debe ser aplicada considerando las codependencias entre dispositivos, servicios y elementos de una red.
    p.mt-4(data-aos="fade-left") Es esencial comprender las capas de la defensa en profundidad. Para asegurar una protección sólida contra amenazas cibernéticas, explore a detalle en qué consisten estas capas.

    .cont_3_2.mt-5.pt-2.pb-4.pb-lg-5
      .col-xl-8.col-lg-10.m-auto
        ImagenInfografica.color-acento-contenido.mt-5(data-aos="zoom-in-up")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/14.svg' alt="Representa infografía, que está descrita posterior a la imagen.")
          .tarjeta.color-acento-botones.p-3(x="50%" y="12.5%" numero="+" style="background-color:#FFB206;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
            p.mb-0.text-center.fw-bold(style="color:inherit;") Datos, usuarios y equipos
            p.mb-0.mt-2.text-center(style="color:inherit;") La seguridad de usuarios y equipos es crítica, ya que son vulnerables a ataques de ingeniería social y #[em(style="color:inherit;") malware]. Se requiere una combinación de controles técnicos y capacitación para proteger los datos y los equipos, considerando clasificación, almacenamiento y cifrado. Medidas como antimalware, Data Loss Prevention - DLP, cifrado y gestión de comunicaciones son esenciales.
          .tarjeta.color-acento-botones.p-3(x="50%" y="27%" numero="+" style="background-color:#FFB206;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
            p.mb-0.text-center.fw-bold(style="color:inherit;") Aplicaciones
            p.mb-0.mt-2.text-center(style="color:inherit;") Las aplicaciones son vitales en las operaciones empresariales y deben protegerse para garantizar confidencialidad, integridad y disponibilidad. La ciberseguridad en esta capa requiere esfuerzos tanto en el desarrollo como en la operación. Es crucial integrar la ciberseguridad de forma transversal en el proceso de desarrollo de #[em software] interno.
          .tarjeta.color-acento-botones.p-3(x="50%" y="41.5%" numero="+" style="background-color:#FFB206;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
            p.mb-0.text-center.fw-bold(style="color:inherit;") Servidores / #[em(style="color:inherit;") Hosts]
            p.mb-0.mt-2.text-center(style="color:inherit;") Esta capa protege servidores según la importancia de los datos que manejan, empleando buenas prácticas y políticas de acceso para minimizar riesgos. El #[em(style="color:inherit;") Hardening] o endurecimiento, una técnica clave, implica la aplicación cuidadosa de prácticas para personalizar servidores, considerando #[em hardware] y #[em software], fortaleciendo así su seguridad.
          .tarjeta.color-acento-botones.p-3(x="50%" y="56%" numero="+" style="background-color:#FFB206;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
            p.mb-0.text-center.fw-bold(style="color:inherit;") Red Interna y segmentación
            p.mb-0.mt-2.text-center(style="color:inherit;") La seguridad de la red corporativa implica una estructura segmentada que incluye redes de servidores, comunicaciones, bases de datos y usuarios. Estos segmentos pueden dividirse por niveles, áreas o pisos. La interconexión se controla mediante #[em(style="color:inherit;") firewalls] y servicios de seguridad como IDS/IPS y #[em(style="color:inherit;") Antimalware] para garantizar una composición segura.
          .tarjeta.color-acento-botones.p-3(x="50%" y="70.5%" numero="+" style="background-color:#FFB206;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
            p.mb-0.text-center.fw-bold(style="color:inherit;") Perímetro y seguridad perimetral
            p.mb-0.mt-2.text-center(style="color:inherit;") El perímetro representa el límite digital de la red corporativa y la internet. Implementar dispositivos de ciberseguridad en este borde es esencial para controlar y asegurar la red. Aunque también se refiere al límite físico, este aspecto se aborda en la capa de seguridad física.
          .tarjeta.color-acento-botones.p-3(x="50%" y="85%" numero="+" style="background-color:#FFB206;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
            p.mb-0.text-center.fw-bold(style="color:inherit;") Seguridad física
            p.mb-0.mt-2.text-center(style="color:inherit;") La seguridad física es crucial en la estrategia de ciberseguridad para proteger las instalaciones de sistemas informáticos contra riesgos como robo, ocupación enemiga y denegación de servicios. También implica preparación ante desastres naturales y ataques terroristas, asegurando una respuesta efectiva y protegiendo los activos digitales.
          .tarjeta.color-acento-botones.p-3(x="50%" y="99.5%" numero="+" style="background-color:#FFB206;box-shadow:0px 0px 15px rgba(0,0,0,.2);")
            p.mb-0.text-center.fw-bold(style="color:inherit;") Políticas, procedimientos y concienciación
            p.mb-0.mt-2.text-center(style="color:inherit;") En esta capa, se establecen pautas para la gestión, operación y concienciación de la ciberseguridad, incluyendo seguridad física, control de acceso, gestión de redes y cumplimiento legal, entre otros aspectos clave de la seguridad digital.
    
    figure.mt-5(data-aos="zoom-in-up")
      img(src="@/assets/curso/tema3/15.svg" alt="Imagen que menciona aspectos que tienen que ver con las capas de la defensa en profundidad.")
  
    Separador

    .titulo-segundo(data-aos="zoom-in-right")
      h2#t_3_3 3.3 Características de la defensa en profundidad
    
    .row
      .col-auto.d-none.d-md-block(data-aos="fade-right" style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.svg" alt="Imagen decorativa")
      .col(data-aos="fade-left" style="place-self:center;")
        p La ciberseguridad es el resultado de los procesos ejecutados por las personas haciendo uso de las tecnologías y en defensa en profundidad estos tres elementos (personas, procesos y tecnología) son claves para que la estrategia de defensa en profundidad cumpla con sus objetivos.
        p.mb-0.mt-4 A continuación, podrá revisar algunas características clave de la defensa en profundidad en ciberseguridad. Es fundamental comprender estos conceptos para fortalecer la protección de sistemas y datos ante las crecientes amenazas cibernéticas.
    
    .row.mt-5
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-right")
        TabsA.color-acento-contenido
          .tarjeta.color-acento-botones.p-4(titulo="<em>Frameworks</em>" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") La apropiación de controles de ciberseguridad para la defensa en profundidad puede apalancarse en estándares, marcos de referencia o #[em(style="color:inherit;") frameworks].
          .tarjeta.color-acento-botones.p-4(titulo="Capas o <br>barreras de <br>seguridad" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") Dificultar el avance del agresor, si una barrera falla entonces debe entrar una segunda barrera de protección, y así en la medida de lo posible dentro del contexto, de esta forma se aplica el concepto de defensa en profundidad.
          .tarjeta.color-acento-botones.p-4(titulo="Monitoreo, <br>detección y <br> respuesta" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") Se debe aplicar en todos los controles de defensa y servicios de red, con el fin de detectar eventos extraños y responder ante posibles ciberataques. Se pueden implementar controles o hacer uso de las funcionalidades de las tecnologías de la red corporativa.
          .tarjeta.color-acento-botones.p-4(titulo="Aislamiento" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") Cuando las ciberamenazas avancen, rompiendo la seguridad de las capas de protección, en cualquiera de las capas se pueden aplicar aislamientos parciales o totales según sea necesario, para contener la amenaza. Esto podría indisponer algunas aplicaciones y servicios para algunos o todos los usuarios, pero ayuda a mantener la integridad y la privacidad de la información. Por otra parte, los aislamientos pueden ayudar a reencaminar la amenaza en un lugar de cuarentena controlado.
          .tarjeta.color-acento-botones.p-4(titulo="Comunicación" style="background-color:#FFF4D9;")
            p.mb-0(style="color:inherit;") La comunicación es un elemento clave para informar sobre el estado de la ciberseguridad en cada fase o capa de la defensa. Así, los equipos y responsables de la infraestructura y controles de la red podrán tomar acciones respectivas de defensa y respuesta a posibles ataques de ciberseguridad.
      .col-lg-4(data-aos="fade-left")
        figure.m-auto.col-7.col-md-7.col-lg-12
          img(src="@/assets/curso/tema3/16.png" alt="Imagen decorativa")







</template>

<script>
export default {
  name: 'Tema3',
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
.cont_3_1, .cont_3_1 *
  position: relative
.cont_3_1:before
  content: ''
  position: absolute
  width: 50%
  right: 0
  bottom: 0
  height: 65%
  background-color: #EEE5FE
.img-infografica.color-acento-contenido .img-infografica__item__dot:before, .img-infografica.color-acento-contenido .img-infografica__item__dot:after, .img-infografica.color-acento-contenido .img-infografica-b__item__dot:before, .img-infografica.color-acento-contenido .img-infografica-b__item__dot:after, .img-infografica-b.color-acento-contenido .img-infografica__item__dot:before, .img-infografica-b.color-acento-contenido .img-infografica__item__dot:after, .img-infografica-b.color-acento-contenido .img-infografica-b__item__dot:before, .img-infografica-b.color-acento-contenido .img-infografica-b__item__dot:after
  background-color: #ffffff
  opacity: 1
.img-infografica__item, .img-infografica-b__item
  width: 3.5%
  box-shadow: 0px 0px 10px rgba(0,0,0,.25)
  border-radius: 100%
.img-infografica.color-acento-contenido .img-infografica__item__numero, .img-infografica-b.color-acento-contenido .img-infografica__item__numero
  color: #E01650
  font-size: 30px
.cont_3_2
  position: relative
.cont_3_2:before
  content: ''
  position: absolute
  width: 125%
  left: -15%
  top: 0
  height: 100%
  background-color: #F6F6F6
.tabs-a__tab
  background-color: #E8E8E8
</style>
