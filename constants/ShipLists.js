export default {
  frigateList: [
    {
      // id: Math.floor(Math.random() * 9999) + 1,
      id: 101,
      name: "Ruby",
      variant: "Railgun [A]",
      picture: require("../img/frigate_ruby_a.png"),
      type: "Frigate",
      cp: 6,
      maxActive: 10,
      row: "Middle"
    },
    {
      id: 102,
      name: "Ruby",
      variant: "Ion [B]",
      picture: require("../img/frigate_ruby_b.png"),
      type: "Frigate",
      cp: 6,
      maxActive: 10,
      row: "Middle"
    },
    {
      id: 103,
      name: "Mare Serenitatis",
      variant: "Missile [A]",
      picture: require("../img/frigate_serenitatis_a.png"),
      type: "Frigate",
      cp: 6,
      maxActive: 10,
      row: "Back"
    },
    {
      id: 104,
      name: "Carilion",
      variant: "Special [C]",
      picture: require("../img/frigate_carilion_c.png"),
      type: "Frigate",
      cp: 40,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 105,
      name: "NOMA",
      variant: "Support [B]",
      picture: require("../img/frigate_noma_b.png"),
      type: "Frigate",
      cp: 5,
      maxActive: 10,
      row: "Back"
    },
  ],
  destroyerList: [
    {
      id: 201,
      name: "Taurus",
      variant: "Offensive [A]",
      picture: require("../img/destroyer_taurus_a.png"),
      type: "Destroyer",
      cp: 8,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 202,
      name: "Taurus",
      variant: "Assault [B]",
      picture: require("../img/destroyer_taurus_b.png"),
      type: "Destroyer",
      cp: 8,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 203,
      name: "Eris I",
      variant: "Heavy Cannon [B]",
      picture: require("../img/destroyer_eris_b.png"),
      type: "Destroyer",
      cp: 7,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 204,
      name: "Winged Hussar",
      variant: "Integrated [A]",
      picture: require("../img/destroyer_winged_a.png"),
      type: "Destroyer",
      cp: 6,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 205,
      name: "Aldabra",
      variant: "Heavy Cannon [A]",
      picture: require("../img/destroyer_aldabra_a.png"),
      type: "Destroyer",
      cp: 8,
      maxActive: 10,
      row: "Front"
    },
  ],
  cruiserList: [
    {
      id: 301,
      name: "Io",
      variant: "Assault Ion Cannon [A]",
      picture: require("../img/cruiser_io_a.png"),
      type: "Cruiser",
      cp: 18,
      maxActive: 8,
      row: "Front"
    },
    {
      id: 302,
      name: "Chimera",
      variant: "Heavy [A]",
      picture: require("../img/cruiser_chimera_a.png"),
      type: "Cruiser",
      cp: 20,
      maxActive: 8,
      row: "Front"
    },
    {
      id: 303,
      name: "Callisto",
      variant: "Cluster Torpedo Raid Ship [A]",
      picture: require("../img/cruiser_callisto_a.png"),
      type: "Cruiser",
      cp: 20,
      maxActive: 8,
      row: "Back"
    },
    {
      id: 304,
      name: "Conamara Chaos",
      variant: "Railgun [A]",
      picture: require("../img/cruiser_conamara_a.png"),
      type: "Cruiser",
      cp: 20,
      maxActive: 8,
      row: "Middle"
    },
    {
      id: 305,
      name: "Predator",
      variant: "Aircraft [A]",
      picture: require("../img/cruiser_predator_a.png"),
      type: "Cruiser",
      cp: 18,
      maxActive: 8,
      row: "Back"
    }
  ]
}