
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "hibrido_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "turismo_sev_booking_1": {
            "type": "geojson",
            "data": json_turismo_sev_booking_1
        }
                    ,
        "Localizacin_2": {
            "type": "image",
            "url": "./data/Localizacin_2.png",
            "coordinates": [
                [233749.538352, 4131113.712950],
                [246341.438352, 4131113.712950],
                [246341.438352, 4144404.312950],
                [233749.538352, 4144404.312950]
            ]
        },
        "Contornoslocalizacin_3": {
            "type": "geojson",
            "data": json_Contornoslocalizacin_3
        }
                    ,
        "precios_4": {
            "type": "image",
            "url": "./data/precios_4.png",
            "coordinates": [
                [233699.538352, 4131066.812950],
                [246393.438352, 4131066.812950],
                [246393.438352, 4144454.312950],
                [233699.538352, 4144454.312950]
            ]
        },
        "bics_5": {
            "type": "geojson",
            "data": json_bics_5
        }
                    ,
        "Contornosprecios_6": {
            "type": "geojson",
            "data": json_Contornosprecios_6
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_hibrido_0_0",
            "type": "raster",
            "source": "hibrido_0"
        },
        {
            "id": "lyr_turismo_sev_booking_1_0",
            "type": "circle",
            "source": "turismo_sev_booking_1",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#85b66f', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Localizacin_2_2",
            "type": "raster",
            "source": "Localizacin_2",
            "minzoom": 0,
            "maxzoom": 22
        },
        {
            "id": "lyr_Contornoslocalizacin_3_0",
            "type": "line",
            "source": "Contornoslocalizacin_3",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'ELEV'], 25], 0.9285714285714285, ['==', ['get', 'ELEV'], 50], 2.357142857142857, ['==', ['get', 'ELEV'], 75], 3.071428571428571, ['==', ['get', 'ELEV'], 100], 4.5, 0.9285714285714285], 'line-opacity': ['case', ['==', ['get', 'ELEV'], 25], 1.0, ['==', ['get', 'ELEV'], 50], 1.0, ['==', ['get', 'ELEV'], 75], 1.0, ['==', ['get', 'ELEV'], 100], 1.0, 1.0], 'line-color': ['case', ['==', ['get', 'ELEV'], 25], '#fb9a99', ['==', ['get', 'ELEV'], 50], '#33a02c', ['==', ['get', 'ELEV'], 75], '#a6cee3', ['==', ['get', 'ELEV'], 100], '#e31a1c', '#e958e9']}
        }
,
        {
            "id": "lyr_precios_4_4",
            "type": "raster",
            "source": "precios_4",
            "minzoom": 0,
            "maxzoom": 22
        },
        {
            "id": "lyr_bics_5_0",
            "type": "circle",
            "source": "bics_5",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#c43c39', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Contornosprecios_6_0",
            "type": "line",
            "source": "Contornosprecios_6",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'ELEV'], 550], 0.9285714285714285, ['==', ['get', 'ELEV'], 1100], 3.071428571428571, ['==', ['get', 'ELEV'], 1650], 4.5, ['==', ['get', 'ELEV'], 2200], 5.928571428571428, 0.9285714285714285], 'line-opacity': ['case', ['==', ['get', 'ELEV'], 550], 1.0, ['==', ['get', 'ELEV'], 1100], 1.0, ['==', ['get', 'ELEV'], 1650], 1.0, ['==', ['get', 'ELEV'], 2200], 1.0, 1.0], 'line-color': ['case', ['==', ['get', 'ELEV'], 550], '#fdbf6f', ['==', ['get', 'ELEV'], 1100], '#a6cee3', ['==', ['get', 'ELEV'], 1650], '#33a02c', ['==', ['get', 'ELEV'], 2200], '#e31a1c', '#9ed531']}
        }
],
}