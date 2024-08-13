var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_CotaInundao_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cota Inundação",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/CotaInundao_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-6451072.719953, -1541300.645458, -6438765.731866, -1528921.867383]
                            })
                        });
var format_SetordeRisco_2 = new ol.format.GeoJSON();
var features_SetordeRisco_2 = format_SetordeRisco_2.readFeatures(json_SetordeRisco_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SetordeRisco_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SetordeRisco_2.addFeatures(features_SetordeRisco_2);
var lyr_SetordeRisco_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SetordeRisco_2, 
                style: style_SetordeRisco_2,
                popuplayertitle: "Setor de Risco",
                interactive: true,
                title: 'Setor de Risco'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_CotaInundao_1.setVisible(true);lyr_SetordeRisco_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_CotaInundao_1,lyr_SetordeRisco_2];
lyr_SetordeRisco_2.set('fieldAliases', {'fid': 'fid', 'Setor de Risco': 'Setor de Risco', 'Descrição': 'Descrição', 'Fotos': 'Fotos', 'Videos': 'Videos', });
lyr_SetordeRisco_2.set('fieldImages', {'fid': 'Hidden', 'Setor de Risco': 'ValueMap', 'Descrição': 'TextEdit', 'Fotos': 'ExternalResource', 'Videos': 'ExternalResource', });
lyr_SetordeRisco_2.set('fieldLabels', {'Setor de Risco': 'no label', 'Descrição': 'no label', 'Fotos': 'no label', 'Videos': 'no label', });
lyr_SetordeRisco_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});