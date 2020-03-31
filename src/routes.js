/*!

=========================================================
* Argon Dashboard PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import Clientes from "views/pages/clientes/Clientes.jsx";
import Usuarios from "views/pages/administrador/usuarios/Usuarios.jsx";
import Bases from "views/pages/administrador/bases/Bases.jsx";
import Cupons from "views/pages/campanhas/cupons/Cupons.jsx";
// import Eventos from "views/pages/campanhas/eventos/Eventos.jsx";
import Inicio from "views/pages/overview/Inicio.jsx";
import Campanhas from "views/pages/overview/Campanhas.jsx";
import Visitantes from "views/pages/overview/Visitantes.jsx";



const routes = [
  // {
  //   collapse: true,
  //   name: "Visão Geral",
  //   icon: "ni ni-shop text-primary",
  //   state: "dashboardsCollapse",
  //   views: [
  //     {
  //       path: "/overview",
  //       name: "Geral",
  //       component: Inicio,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/overview/campanhas",
  //       name: "Campanhas",
  //       component: Campanhas,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/overview/visitantes",
  //       name: "Visitantes",
  //       component: Visitantes,
  //       layout: "/admin"
  //     }
  //   ]
  // },
  {
    collapse: true,
    name: "Campanhas",
    icon: "ni ni-ui-04 text-info",
    state: "componentsCollapse",
    views: [
      {
        path: "/campanhas/cupons",
        name: "Cupons",
        component: Cupons,
        layout: "/admin"
      },
      // {
      //   path: "/campanhas/eventos",
      //   name: "Eventos",
      //   component: Eventos,
      //   layout: "/admin"
      // }
    ]
  },
  // Clientes - Start
  {
    path: "/clientes",
    name: "Clientes",
    icon: "ni ni-archive-2 text-green",
    component: Clientes,
    layout: "/admin"
  },
  // Clientes - End
  // {
  //   collapse: true,
  //   name: "Administrador",
  //   icon: "ni ni-single-copy-04 text-pink",
  //   state: "formsCollapse",
  //   views: [
  //     {
  //       path: "/administrador/usuarios",
  //       name: "Usuários",
  //       component: Usuarios,
  //       layout: "/admin"
  //     },
  //     {
  //       path: "/administrador/bases",
  //       name: "Bases",
  //       component: Bases,
  //       layout: "/admin"
  //     }
  //   ]
  // }
  
];

export default routes;
