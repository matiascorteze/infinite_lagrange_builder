export default {
  frigateList: [
    {
      // id: Math.floor(Math.random() * 9999) + 1,
      id: 1,
      name: "Ruby",
      variant: "Railgun [A]",
      picture: require("../img/frigate_ruby_a.png"),
      type: "Frigate",
      cp: 6,
      maxActive: 10,
      row: "Middle"
    },
    {
      id: 2,
      name: "Ruby",
      variant: "Ion [B]",
      picture: require("../img/frigate_ruby_b.png"),
      type: "Frigate",
      cp: 6,
      maxActive: 10,
      row: "Middle"
    },
    {
      id: 3,
      name: "Mare Serenitatis",
      variant: "Missile [A]",
      picture: require("../img/frigate_serenitatis_a.png"),
      type: "Frigate",
      cp: 6,
      maxActive: 10,
      row: "Back"
    },
    {
      id: 4,
      name: "Carilion",
      variant: "Special [C]",
      picture: require("../img/frigate_carilion_c.png"),
      type: "Frigate",
      cp: 40,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 5,
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
      id: 6,
      name: "Taurus",
      variant: "Offensive [A]",
      picture: require("../img/destroyer_taurus_a.png"),
      type: "Destroyer",
      cp: 8,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 7,
      name: "Taurus",
      variant: "Assault [B]",
      picture: require("../img/destroyer_taurus_b.png"),
      type: "Destroyer",
      cp: 8,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 8,
      name: "Eris I",
      variant: "Heavy Cannon [B]",
      picture: require("../img/destroyer_eris_b.png"),
      type: "Destroyer",
      cp: 7,
      maxActive: 10,
      row: "Front"
    },
    {
      id: 9,
      name: "Winged Hussar",
      variant: "Integrated [A]",
      picture: require("../img/destroyer_winged_a.png"),
      type: "Destroyer",
      cp: 6,
      maxActive: 10,
      row: "Front"
    },
  ],
  cruiserList: [
    {
      id: 10,
      name: "Io",
      variant: "Assault Ion Cannon [A]",
      picture: require("../img/cruiser_io_a.png"),
      type: "Cruiser",
      cp: 18,
      maxActive: 8,
      row: "Front"
    },
    {
      id: 11,
      name: "Chimera",
      variant: "Heavy [A]",
      picture: require("../img/cruiser_chimera_a.png"),
      type: "Cruiser",
      cp: 20,
      maxActive: 8,
      row: "Front"
    },
    {
      id: 12,
      name: "Callisto",
      variant: "Cluster Torpedo Raid Ship [A]",
      picture: require("../img/cruiser_callisto_a.png"),
      type: "Cruiser",
      cp: 20,
      maxActive: 8,
      row: "Back"
    },
  ]
}