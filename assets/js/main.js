document.getElementById("navbar-open").addEventListener("click", function(){
  var navbar = document.getElementById("navbar-id");
  var navbarContain = document.getElementById("nav-contain");
  var navbarClose = document.getElementById("nav-close");
  var body = document.getElementById("body");
  navbar.classList.toggle("navbar-mobile-open");
  navbarContain.classList.toggle("navbar-container-mobile");
  navbarClose.classList.toggle("navbar-close-button");
  body.classList.toggle("body-mobile-open");
});
document.getElementById("navbar-close").addEventListener("click", function(){
  var navbar = document.getElementById("navbar-id");
  var navbarContain = document.getElementById("nav-contain");
  var body = document.getElementById("body");
  var navbarClose = document.getElementById("nav-close");
  navbar.classList.remove("navbar-mobile-open");
  navbarContain.classList.remove("navbar-container-mobile");
  navbarClose.classList.remove("navbar-close-button");
  body.classList.remove("body-mobile-open");
});
$( document ).ready(function() {
  var proyectos = {
    venta: [
      {img: "proyectos/venta/altamar-caribe/altamar-portada2-mobile.jpg",link: "en-venta/altamar.html",texto: "Altamar Caribe"},
      {img: "proyectos/venta/miradordelpuerto/comunes1-min.jpeg",link: "en-venta/miradordelpuerto.html",texto: "Mirador del Puerto"},
    ],
    todos: [
      {img: "proyectos/residenciales/aguamarina-beach-resort/DJI_0713.jpg",link: "en-venta/altamar.html",texto: "Altamar Caribe"},
      {img: "proyectos/comercial/country-plaza/DSC_0093.JPG",link: "comercial/country-plaza.html",texto: "Country Plaza"},
      {img: "proyectos/comercial/exito51b/exito51b.jpeg",link: "comercial/exito51b.html",texto: "Exito 51b"},
      {img: "proyectos/comercial/ocean-mall-sta-marta/P1030266.JPG",link: "comercial/ocean-mall-sta-marta.html",texto: "Ocean Mall Sta Marta"},
      {img: "proyectos/educativo/colegio-san-jose/Portada.JPG",link: "colegio-san-jose.html",texto: "Colegio San Jose"},
      {img: "proyectos/educativo/colegio-santa-lucia/mp-proyectos-educativo-santalucia-5.jpeg",link: "colegio-santa-lucia.html",texto: "colegio Santa Lucia"},
      {img: "proyectos/educativo/edificio-multiproposito/UNINORTE-2.jpg",link: "edificio-multiproposito.html",texto: "Edificio Multiproposito"},
      {img: "proyectos/educativo/pies-descalzos-bquilla/portadapiesdescalzos.jpg",link: "pies-descalzos-bquilla.html",texto: "Pies Descalzos B/quilla"},
      {img: "proyectos/educativo/pies-descalzos-ctg/portadapdc.jpg",link: "pies-descalzos-ctg.html",texto: "Pies Descalzos Ctg"},
      {img: "proyectos/educativo/unisur/universidad_del_sur_8.jpg",link: "unisur.html",texto: "Unisur"},

      {img: "proyectos/empresarial/bc-empresarial/47.jpg",link: "oficinas/bc-empresarial.html",texto: "Bc Empresarial"},
      {img: "proyectos/empresarial/las-americas1/portadaamericas.jpg",link: "oficinas/las-americas1.html",texto: "Las Americas 1"},

      {img: "proyectos/residenciales/55cien/_CK84240-AV2.jpg",link: "residenciales/cien55.html",texto: "Cien 55"},
      {img: "proyectos/residenciales/verdi-74/_CK93616-A.JPG",link: "residenciales/verdi74.html",texto: "Verdi 74"},
      {img: "proyectos/residenciales/rincon-94/DSC_0021.JPG",link: "residenciales/rincon94.html",texto: "Rincon 94"},
      {img: "proyectos/residenciales/aguamarina-beach-resort/Aguamarina Beach Resort.jpg",link: "residenciales/aguamarina_beach_resort.html",texto: "Aguamarina Beach Resort"},
      {img: "proyectos/residenciales/betania/01.JPG",link: "residenciales/betania.html",texto: "Betania"},
      {img: "proyectos/residenciales/el-encanto/DSC_0145.JPG",link: "residenciales/el_encanto.html",texto: "El Encanto"},
      {img: "proyectos/residenciales/gardens-view/_CKP7824-Edit-B.jpg",link: "residenciales/gardens_view.html",texto: "Gradens View"},
      {img: "proyectos/residenciales/puntawa/img 3 edit.jpg",link: "residenciales/puntawa.html",texto: "Puntawa"},
      {img: "proyectos/residenciales/winds-21/portadawinds.jpg",link: "residenciales/winds21.html",texto: "Winds 21"},

      {img: "proyectos/salud/clinica-porto-azul/12-Clinica Porto Azul.JPG",link: "salud/clinica-porto-azul.html",texto: "Clinica Porto Azul"},
      {img: "proyectos/turismo/balcones-costa-azul/portada.jpg",link: "turismo/balcones-costa-azul.html",texto: "Balcones Costa Azul"},
      {img: "proyectos/turismo/costa-azul-suites/portada.jpg",link: "turismo/costa-azul-suites.html",texto: "Costa Azul Suites"},
    ],
    comercial: [
      {img: "proyectos/comercial/country-plaza/DSC_0093.JPG",link: "comercial/country-plaza.html",texto: "Country Plaza"},
      {img: "proyectos/comercial/exito51b/exito51b.jpeg",link: "comercial/exito51b.html",texto: "Exito 51b"},
      {img: "proyectos/comercial/ocean-mall-sta-marta/P1030266.JPG",link: "comercial/ocean-mall-sta-marta.html",texto: "Ocean Mall Sta Marta"},
    ],
    educativos: [
      {img: "proyectos/educativo/colegio-san-jose/Portada.JPG",link: "educativos/colegio-san-jose.html",texto: "Colegio San Jose"},
      {img: "proyectos/educativo/colegio-santa-lucia/mp-proyectos-educativo-santalucia-5.jpeg",link: "educativos/colegio-santa-lucia.html",texto: "colegio Santa Lucia"},
      {img: "proyectos/educativo/edificio-multiproposito/UNINORTE-2.jpg",link: "educativos/edificio-multiproposito.html",texto: "Edificio Multiproposito"},
      {img: "proyectos/educativo/pies-descalzos-bquilla/portadapiesdescalzos.jpg",link: "educativos/pies-descalzos-bquilla.html",texto: "Pies Descalzos B/quilla"},
      {img: "proyectos/educativo/pies-descalzos-ctg/portadapdc.jpg",link: "educativos/pies-descalzos-ctg.html",texto: "Pies Descalzos Ctg"},
    ],
    oficinas: [
      {img: "proyectos/empresarial/bc-empresarial/47.jpg",link: "oficinas/bc-empresarial.html",texto: "Bc Empresarial"},
      {img: "proyectos/empresarial/las-americas1/portadaamericas.jpg",link: "oficinas/las-americas1.html",texto: "Las Americas 1"},
    ],
    residenciales: [
      {img: "proyectos/residenciales/puntamar/000-EXTERIOR.jpg",link: "residenciales/puntamar.html",texto: "Puntamar"},
      {img: "proyectos/residenciales/gardens-view/_CKP7824-Edit-B.jpg",link: "residenciales/gardens_view.html",texto: "Gradens View"},
      {img: "proyectos/residenciales/brisas-del-caribe/BDC-slider5.jpeg",link: "residenciales/brisas-del-caribe.html",texto: "Brisas del Caribe"},
      {img: "proyectos/residenciales/aguamarina-beach-resort/DJI_0761.jpg",link: "residenciales/aguamarina_beach_resort.html",texto: "Aguamarina Beach Resort"},
      {img: "proyectos/residenciales/puntawa/img 3 edit.jpg",link: "residenciales/puntawa.html",texto: "Puntawa"},
      {img: "proyectos/residenciales/55cien/_CK84240-AV2.jpg",link: "residenciales/cien55.html",texto: "55 Cien"},
      {img: "proyectos/residenciales/verdi-74/_CK93616-A.JPG",link: "residenciales/verdi74.html",texto: "Verdi 74"},
      {img: "proyectos/residenciales/rincon-94/DSC_0021.JPG",link: "residenciales/rincon94.html",texto: "Rincon 94"},
      {img: "proyectos/residenciales/winds-21/portadawinds.jpg",link: "residenciales/winds21.html",texto: "Winds 21"},
      {img: "proyectos/residenciales/el-encanto/DSC_0145.JPG",link: "residenciales/el_encanto.html",texto: "El Encanto"},
    ],
    salud: [
      {img: "proyectos/salud/clinica-porto-azul/12-Clinica Porto Azul.JPG",link: "salud/clinica-porto-azul.html",texto: "Clinica Porto Azul"},
    ],
    turismo: [
      {img: "proyectos/turismo/balcones-costa-azul/portada.jpg",link: "turismo/balcones-costa-azul.html",texto: "Balcones Costa Azul"},
      {img: "proyectos/turismo/costa-azul-suites/portada.jpg",link: "turismo/costa-azul-suites.html",texto: "Costa Azul Suites"},
    ],
  };
  $(".filter-sel").on("click", function(){
    $("#proyecto-container").empty();
    var filter = $(this).attr("data-filter");
    for(const element of proyectos[filter]){
      $("#proyecto-container").append(
        `<div class="col position-relative" style="padding: 2px;">
            <p class="position-absolute text-overlay text-white">${element.texto}</p>
            <a href="${element.link}"><img src="../assets/img/${element.img}" class="d-block img-portada" alt="...">
            </a>
        </div>`
      );
    }
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
});
