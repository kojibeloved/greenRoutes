let listOfNodes = [
    {
        "id":0,
        "lat":55.697532,
        "lon":12.543144,
        "connectedTo":[81, 51, 1],
        "greenness":1
    },

    {
        "id":1,
        "lat":55.697672,
        "lon":12.543780,
        "connectedTo":[0, 2],
        "greenness":1
    },

    {
        "id":2,
        "lat":55.697418,
        "lon":12.544190,
        "connectedTo":[1, 51, 3],
        "greenness":1
    },

    {
        "id":3,
        "lat":55.696994,
        "lon":12.544812,
        "connectedTo":[2, 53, 4],
        "greenness":1
    },

    {
        "id":4,
        "lat":55.696779,
        "lon":12.545148,
        "connectedTo":[3, 54, 5],
        "greenness":1
    },

    {
        "id":5,
        "lat":55.696095,
        "lon":12.546153,
        "connectedTo":[4, 55, 6],
        "greenness":1
    },

    {
        "id":6,
        "lat":55.695731,
        "lon":12.546727,
        "connectedTo":[5, 58, 7],
        "greenness":1
    },

    {
        "id":7,
        "lat":55.695365,
        "lon":12.547231,
        "connectedTo":[6, 61, 8],
        "greenness":1
    },

    {
        "id":8,
        "lat":55.694357,
        "lon":12.548833,
        "connectedTo":[7, 9],
        "greenness":1
    },

    {
        "id":9,
        "lat":55.693022,
        "lon":12.547305,
        "connectedTo":[8, 64, 10],
        "greenness":1
    },

    {
        "id":10,
        "lat":55.692458,
        "lon":12.546681,
        "connectedTo":[9, 59, 11],
        "greenness":1
    },

    {
        "id":11,
        "lat":55.691957,
        "lon":12.546118,
        "connectedTo":[10, 62, 12],
        "greenness":1
    },

    {
        "id":12,
        "lat":55.691541,
        "lon":12.545624,
        "connectedTo":[11, 63, 13],
        "greenness":1
    },

    {
        "id":13,
        "lat":55.691145,
        "lon":12.545176,
        "connectedTo":[12, 66, 14],
        "greenness":1
    },

    {
        "id":14,
        "lat":55.690284,
        "lon":12.544178,
        "connectedTo":[13, 86, 70, 15],
        "greenness":1
    },

    {
        "id":15,
        "lat":55.689812,
        "lon":12.543653,
        "connectedTo":[14, 70, 49, 16],
        "greenness":1
    },

    {
        "id":16,
        "lat":55.689021,
        "lon":12.542759,
        "connectedTo":[15, 17],
        "greenness":1
    },

    {
        "id":17,
        "lat":55.689317,
        "lon":12.541948,
        "connectedTo":[16, 67, 18],
        "greenness":1
    },

    {
        "id":18,
        "lat":55.690521,
        "lon":12.539925,
        "connectedTo":[17, 68, 19],
        "greenness":1
    },

    {
        "id":19,
        "lat":55.690925,
        "lon":12.539275,
        "connectedTo":[18, 44, 20],
        "greenness":1
    },

    {
        "id":20,
        "lat":55.691160,
        "lon":12.538906,
        "connectedTo":[19, 21],
        "greenness":1
    },

    {
        "id":21,
        "lat":55.692467,
        "lon":12.538542,
        "connectedTo":[20, 42, 22],
        "greenness":1
    },

    {
        "id":22,
        "lat":55.693760,
        "lon":12.538285,
        "connectedTo":[21, 35, 23],
        "greenness":1
    },

    {
        "id":23,
        "lat":55.694628,
        "lon":12.538271,
        "connectedTo":[22, 32, 24],
        "greenness":1
    },

    {
        "id":24,
        "lat":55.696001,
        "lon":12.538334,
        "connectedTo":[23, 28, 25],
        "greenness":1
    },

    {
        "id":25,
        "lat":55.696980,
        "lon":12.538448,
        "connectedTo":[24, 26],
        "greenness":1
    },

    {
        "id":26,
        "lat":55.697142,
        "lon":12.539798,
        "connectedTo":[25, 28, 27],
        "greenness":1
    },

    {
        "id":27,
        "lat":55.697263,
        "lon":12.540782,
        "connectedTo":[26, 30, 81, 0],
        "greenness":1
    },

    {
        "id":28,
        "lat":55.695984,
        "lon":12.539733,
        "connectedTo":[26, 24, 32, 29],
        "greenness":1
    },

    {
        "id":29,
        "lat":55.695973,
        "lon":12.540233,
        "connectedTo":[28, 31, 30],
        "greenness":1
    },

    {
        "id":30,
        "lat":55.695977,
        "lon":12.540627,
        "connectedTo":[27, 29, 82, 84],
        "greenness":0.9
    },

    {
        "id":31,
        "lat":55.695836,
        "lon":12.540244,
        "connectedTo":[29, 33, 34],
        "greenness":1
    },

    {
        "id":32,
        "lat":55.694614,
        "lon":12.539728,
        "connectedTo":[28, 23, 36],
        "greenness":1
    },

    {
        "id":33,
        "lat":55.694629,
        "lon":12.540157,
        "connectedTo":[31, 34, 38],
        "greenness":1
    },

    {
        "id":34,
        "lat":55.694626,
        "lon":12.540428,
        "connectedTo":[33, 31, 39],
        "greenness":1
    },

    {
        "id":35,
        "lat":55.693768,
        "lon":12.539382,
        "connectedTo":[22, 42, 36],
        "greenness":1
    },

    {
        "id":36,
        "lat":55.693768,
        "lon":12.539717,
        "connectedTo":[32, 35, 37],
        "greenness":1
    },

    {
        "id":37,
        "lat":55.693754,
        "lon":12.540058,
        "connectedTo":[36, 43, 38],
        "greenness":1
    },

    {
        "id":38,
        "lat":55.693765,
        "lon":12.540179,
        "connectedTo":[33, 37, 39],
        "greenness":1
    },

    {
        "id":39,
        "lat":55.693768,
        "lon":12.540690,
        "connectedTo":[34, 38, 40],
        "greenness":1
    },

    {
        "id":40,
        "lat":55.693757,
        "lon":12.541115,
        "connectedTo":[88, 39, 41],
        "greenness":1
    },

    {
        "id":41,
        "lat":55.693174,
        "lon":12.541532,
        "connectedTo":[40, 76, 65, 44],
        "greenness":1
    },

    {
        "id":42,
        "lat":55.692580,
        "lon":12.539363,
        "connectedTo":[21, 35, 43],
        "greenness":1
    },

    {
        "id":43,
        "lat":55.692588,
        "lon":12.540060,
        "connectedTo":[42, 37, 44],
        "greenness":1
    },

    {
        "id":44,
        "lat":55.692382,
        "lon":12.540720,
        "connectedTo":[43, 41, 45, 19],
        "greenness":1
    },

    {
        "id":45,
        "lat":55.692271,
        "lon":12.541048,
        "connectedTo":[44, 47],
        "greenness":1
    },

    {
        "id":46,
        "lat":55.691684,
        "lon":12.542416,
        "connectedTo":[47, 85, 49],
        "greenness":0.9
    },

    {
        "id":47,
        "lat":55.691497,
        "lon":12.541551,
        "connectedTo":[45, 46, 48],
        "greenness":1
    },

    {
        "id":48,
        "lat":55.691155,
        "lon":12.541752,
        "connectedTo":[47, 68, 50],
        "greenness":1
    },

    {
        "id":49,
        "lat":55.690382,
        "lon":12.543191,
        "connectedTo":[46, 15, 50],
        "greenness":1
    },

    {
        "id":50,
        "lat":55.690190,
        "lon":12.542382,
        "connectedTo":[48, 49, 67],
        "greenness":1
    },

    {
        "id":51,
        "lat":55.696986,
        "lon":12.543118,
        "connectedTo":[0, 2, 52],
        "greenness":1
    },

    {
        "id":52,
        "lat":55.696376,
        "lon":12.543075,
        "connectedTo":[51, 53, 69],
        "greenness":1
    },

    {
        "id":53,
        "lat":55.696316,
        "lon":12.543341,
        "connectedTo":[52, 3, 54],
        "greenness":1
    },

    {
        "id":54,
        "lat":55.695789,
        "lon":12.544149,
        "connectedTo":[53, 4, 55, 56],
        "greenness":1
    },

    {
        "id":55,
        "lat":55.695440,
        "lon":12.544763,
        "connectedTo":[54, 5, 58],
        "greenness":1
    },

    {
        "id":56,
        "lat":55.695340,
        "lon":12.543698,
        "connectedTo":[54, 60, 57],
        "greenness":1
    },

    {
        "id":57,
        "lat":55.695043,
        "lon":12.543389,
        "connectedTo":[56, 69, 59],
        "greenness":1
    },

    {
        "id":58,
        "lat":55.695075,
        "lon":12.545372,
        "connectedTo":[55, 6, 61, 60],
        "greenness":1
    },

    {
        "id":59,
        "lat":55.694860,
        "lon":12.543206,
        "connectedTo":[57, 10, 62],
        "greenness":1
    },

    {
        "id":60,
        "lat":55.694740,
        "lon":12.544631,
        "connectedTo":[56, 58, 64],
        "greenness":1
    },

    {
        "id":61,
        "lat":55.694588,
        "lon":12.546152,
        "connectedTo":[58, 7],
        "greenness":1
    },

    {
        "id":62,
        "lat":55.694368,
        "lon":12.542718,
        "connectedTo":[59, 11, 63],
        "greenness":1
    },

    {
        "id":63,
        "lat":55.693903,
        "lon":12.542260,
        "connectedTo":[62, 12, 65],
        "greenness":1
    },

    {
        "id":64,
        "lat":55.693630,
        "lon":12.546345,
        "connectedTo":[60, 9],
        "greenness":1
    },

    {
        "id":65,
        "lat":55.693511,
        "lon":12.541885,
        "connectedTo":[63, 66, 76, 41],
        "greenness":1
    },

    {
        "id":66,
        "lat":55.693044,
        "lon":12.542531,
        "connectedTo":[65, 13, 86],
        "greenness":0.9
    },

    {
        "id":67,
        "lat":55.689872,
        "lon":12.542563,
        "connectedTo":[50, 17],
        "greenness":1
    },

    {
        "id":68,
        "lat":55.690976,
        "lon":12.540850,
        "connectedTo":[18, 48],
        "greenness":1
    },

    {
        "id":69,
        "lat":55.695140,
        "lon":12.543181,
        "connectedTo":[52, 78, 57],
        "greenness":1
    },

    {
        "id":70,
        "lat":55.690046,
        "lon":12.543856,
        "connectedTo":[14, 15, 71],
        "greenness":0.9
    },

    {
        "id":71,
        "lat":55.690184,
        "lon":12.543550,
        "connectedTo":[70, 72],
        "greenness":0.7
    },

    {
        "id":72,
        "lat":55.690898,
        "lon":12.543239,
        "connectedTo":[71, 73],
        "greenness":0.7
    },

    {
        "id":73,
        "lat":55.691044,
        "lon":12.543016,
        "connectedTo":[72, 74],
        "greenness":0.7
    },

    {
        "id":74,
        "lat":55.692836,
        "lon":12.541907,
        "connectedTo":[73, 75],
        "greenness":0.7
    },

    {
        "id":75,
        "lat":55.693206,
        "lon":12.541924,
        "connectedTo":[74, 66, 76],
        "greenness":0.7
    },

    {
        "id":76,
        "lat":55.693319,
        "lon":12.541683,
        "connectedTo":[75, 41, 65, 77],
        "greenness":0.9
    },

    {
        "id":77,
        "lat":55.693418,
        "lon":12.541492,
        "connectedTo":[76, 87],
        "greenness":0.7
    }  ,

    {
        "id":78,
        "lat":55.694941,
        "lon":12.540951,
        "connectedTo":[83, 69, 82],
        "greenness":0.7
    },

    {
        "id":79,
        "lat":55.696558,
        "lon":12.540916,
        "connectedTo":[82, 80],
        "greenness":0.7
    },

    {
        "id":80,
        "lat":55.696816,
        "lon":12.541414,
        "connectedTo":[79, 51, 81],
        "greenness":0.7
    },

    {
        "id":81,
        "lat":55.697350,
        "lon":12.541438,
        "connectedTo":[80, 27, 0],
        "greenness":0.9
    },

    {
        "id":82,
        "lat":55.695964,
        "lon":12.540882,
        "connectedTo":[78, 30, 79],
        "greenness":0.7
    },

    {
        "id":83,
        "lat":55.694697,
        "lon":12.541005,
        "connectedTo":[87, 84, 78],
        "greenness":0.7
    },

    {
        "id":84,
        "lat":55.694614,
        "lon":12.540784,
        "connectedTo":[88, 30, 83],
        "greenness":0.9
    },

    {
        "id":85,
        "lat":55.691623,
        "lon":12.542647,
        "connectedTo":[73, 46, 86, 74],
        "greenness":0.7
    },

    {
        "id":86,
        "lat":55.691824,
        "lon":12.543228,
        "connectedTo":[14, 85, 66],
        "greenness":0.9
    },

    {
        "id":87,
        "lat":55.693987,
        "lon":12.541213,
        "connectedTo":[77, 88, 83],
        "greenness":0.7
    },

    {
        "id":88,
        "lat":55.693886,
        "lon":12.541021,
        "connectedTo":[40, 87, 84],
        "greenness":0.9
    }
]
export {listOfNodes};