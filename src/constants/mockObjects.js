const mockMaps = {
  granChaco: {
    name: "Gran Chaco",
    type: "map",
    favorite: true,
    imageLink: "gran_chaco_map.png",
    imageName: "granChacoMap",
    uploadStatus: "Uploaded",
    settings: {
      dummySetting: null,
    },
    ownerName: "DanielMaas",
    collaborators: [
      "FlorianLangelaar",
      "MinghaiJiang",
      "RosalieMaas",
      "PierreOuannes",
    ],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
  spotAmazon: {
    name: "Spot Amazon",
    type: "map",
    favorite: false,
    imageLink: "spot_amazon_map.png",
    imageName: "spotAmazonMap",
    uploadStatus: "Uploaded",
    settings: {
      dummySetting: null,
    },
    ownerName: "DanielMaas",
    collaborators: ["FlorianLangelaar", "MinghaiJiang", "RosalieMaas"],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
  harborSkySat: {
    name: "Harbor Sky Sat",
    type: "map",
    favorite: true,
    imageLink: "harbor_sky_sat_map.png",
    imageName: "harborSkySatMap",
    uploadStatus: "Uploading",
    settings: {
      dummySetting: null,
    },
    ownerName: "FlorianLangelaar",
    collaborators: ["PierreOuannes"],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
  radarAmplitudeAmsterdam: {
    name: "Harbor Sky Sat",
    type: "map",
    favorite: false,
    imageLink: "radar_amplitude_amsterdam_map.png",
    imageName: "radarAmplitudeAmsterdamMap",
    uploadStatus: "Uploading",
    settings: {
      dummySetting: null,
    },
    ownerName: "FlorianLangelaar",
    collaborators: ["FlorianLangelaar", "RosalieMaas"],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
};

const mockShapes = {
  france: {
    name: "France",
    type: "shape",
    favorite: true,
    imageLink: "france_shape.png",
    imageName: "franceShape",
    uploadStatus: "Uploading",
    settings: {
      dummySetting: null,
    },
    ownerName: "RosalieMaas",
    collaborators: [],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
  theNetherlands: {
    name: "The Netherlands",
    type: "shape",
    favorite: false,
    imageLink: "the_netherlands_shape.png",
    imageName: "theNetherlandsShape",
    uploadStatus: "Uploading",
    settings: {
      dummySetting: null,
    },
    ownerName: "RosalieMaas",
    collaborators: [],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
  granChaco: {
    name: "Gran Chaco",
    type: "shape",
    favorite: false,
    imageLink: "gran_chaco_shape.png",
    imageName: "granChacoShape",
    uploadStatus: "Uploaded",
    settings: {
      dummySetting: null,
    },
    ownerName: "DanielMaas",
    collaborators: [],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
  spotAmazon: {
    name: "Spot Amazon",
    type: "shape",
    favorite: true,
    imageLink: "spot_amazon_shape.png",
    imageName: "spotAmazonShape",
    uploadStatus: "Uploaded",
    settings: {
      dummySetting: null,
    },
    ownerName: "DanielMaas",
    collaborators: [],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
  harborSkySat: {
    name: "Harbor Sky Sat",
    type: "shape",
    favorite: false,
    imageLink: "harbor_sky_sat_shape.png",
    imageName: "harborSkySatShape",
    uploadStatus: "Uploading",
    settings: {
      dummySetting: null,
    },
    ownerName: "FlorianLangelaar",
    collaborators: [],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
  radarAmplitudeAmsterdam: {
    name: "Radar Amplitude Amsterdam",
    type: "shape",
    favorite: true,
    imageLink: "radar_amplitude_amsterdam_shape.png",
    imageName: "radarAmplitudeAmsterdamShape",
    uploadStatus: "Uploading",
    settings: {
      dummySetting: null,
    },
    ownerName: "FlorianLangelaar",
    collaborators: [],
    lastEdited: "12/12/2020",
    created: "11/12/2020",
  },
};

export { mockMaps, mockShapes };
