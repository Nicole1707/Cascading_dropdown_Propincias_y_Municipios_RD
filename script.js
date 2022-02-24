const ProvObject ={
    "Azua":[
        "Azua de Compostela",
        "Estebanía",
        "Guayabal",
        "Las Charcas",
        "Las Yayas de Viajama",
        "Padre Las Casas",
        "Peralta",
        "Pueblo Viejo",
        "Sabana Yegua",
        "Tábara Arriba"
     ],
    "Bahoruco":[
        "Neiba",
        "Galván",
        "Los Ríos",
        "Tamayo",
        "Villa Jaragua"
    ],
    "Barahona":[
        "Barahona",
        "Cabral",
        "El Peñón",
        "Enriquillo",
        "Fundación",
        "Jaquimeyes",
        "La Ciénaga",
        "Las Salinas",
        "Paraíso",
        "Polo",
        "Vicente Noble"
    ],
    "Dajabon":[
        "Dajabón",
        "El Pino",
        "Loma de Cabrera",
        "Partido",
        "Restauración"
    ],
    "Distrito Nacional":[
        "Distrito Nacional",
    ],
    "Duarte":[
        "San Francisco de Macorís",
        "Arenoso",
        "Castillo",
        "Eugenio María de Hostos",
        "Las GuáranaS",
        "Pimentel",
        "Villa Riva"
    ],
    "Elías Piña":[

        "Comendador",
        "Bánica",
        "El Llano",
        "Hondo Valle",
        "Juan Santiago",
        "Pedro Santana"
    ],
    "El Seibo":[
        "El Seibo",
        "Miches"
    ],
    "Espaillat":[
        "Moca",
        "Cayetano Germosén",
        "Gaspar Hernández",
        "Jamao al Norte"
    ],
    "Hato Mayor":[
        "Hato Mayor del Rey",
        "El Valle",
        "Sabana de la Mar"
    ],
    "Hermanas Mirabal":[
        "Salcedo",
        "Tenares",
        "Villa Tapia"
    ],
    "Independencia":[
        "Jimaní",
        "Cristóbal",
        "Duvergé",
        "La Descubierta",
        "Mella",
        "Postrer Río"
    ],
    "La Altagracia":[
        "Higüey",
        "San Rafael del Yuma"
    ],
    "La Romana":[
        "La Romana",
        "Guaymate",
        "Villa Hermosa"
    ],
    "La Vega":[
        "La Concepción de La Vega",
        "Constanza",
        "Jarabacoa",
        "Jima Abajo"
    ],
    "María Trinidad Sánchez":[
        "Nagua",
        "Cabrera",
        "El Factor",
        "Río San Juan"
    ],
    "Monseñor Nouel":[
        "Bonao",
        "Maimón",
        "Piedra Blanca"
    ],
    "Monte Cristi":[
        "Montecristi",
        "Castañuela",
        "Guayubín",
        "Las Matas de Santa Cruz",
        "Pepillo Salcedo",
        "Villa Vásquez"
    ],
    "Monte Plata":[
        "Monte Plata",
        "Bayaguana",
        "Peralvillo",
        "Sabana Grande de Boyá",
        "Yamasá"
    ],
    "Pedernales":[
        "Pedernales",
        "Oviedo"
    ],
    "Peravia":[
        "Baní",
        "Nizao"
    ],
    "Puerto Plata":[
        "Puerto Plata",
        "Altamira",
        "Guananico",
        "Imbert",
        "Los Hidalgos",
        "Luperón",
        "Sosúa",
        "Villa Isabela",
        "Villa Montellano"
    ],
    "Samaná":[
        "Samaná",
        "Las Terrenas",
        "Sánchez"
    ],
    "Sánchez Ramírez":[
        "Cotuí",
        "Cevicos",
        "Fantino",
        "La Mata"
    ],
    "San Cristóbal":[
        "San Cristóbal",
        "Bajos de Haina",
        "Cambita Garabito",
        "Los Cacaos",
        "Sabana Grande de Palenque",
        "San Gregorio de Nigua",
        "Villa Altagracia",
        "Yaguate"
    ],
    "San José de Ocoa":[
        "San José de Ocoa",
        "Rancho Arriba",
        "Sabana Larga"
    ],
    "San Juan":[
        "San Juan de la Maguana",
        "Bohechío",
        "El Cercado",
        "Juan de Herrera",
        "Las Matas de Farfán",
        "Vallejuelo"
    ],
    "San Pedro de Macorís":[
        "San Pedro de Macorís",
        "Consuelo",
        "Guayacanes",
        "Quisqueya",
        "Ramón Santana",
        "San José de Los Llanos"
    ],
    "Santiago":[
        "Santiago",
        "Bisonó",
        "Jánico",
        "Licey al Medio",
        "Puñal",
        "Sabana Iglesia",
        "San José de las Matas",
        "Tamboril",
        "Villa González"
    ],
    "Santiago Rodríguez":[
        "San Ignacio de Sabaneta",
        "Los Almácigos",
        "Monción"
    ],
    "Santo Domingo":[

        "Santo Domingo Este",
        "Boca Chica",
        "Los Alcarrizos",
        "Pedro Brand",
        "San Antonio de Guerra",
        "Santo Domingo Norte",
        "Santo Domingo Oeste",
    ],
    "Valverde":[
        "Mao",
        "Esperanza",
        "Laguna Salada"],
}

window.onload = function() {
    const provinciaSel = document.getElementById("provincia"),
    municipioSel = document.getElementById("municipio");
    for (var x in ProvObject) {
        provinciaSel.options[provinciaSel.options.length] = new Option(x, x);
    }
    provinciaSel.onchange = function() {
      municipioSel.length = 1;
      for (var y in ProvObject[this.value]) {
          const text=ProvObject[this.value][y]
        municipioSel.options[municipioSel.options.length] = new Option(text,text);
        console.log(municipioSel);
      }
    }
  }