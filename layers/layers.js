var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'ที่ตั้งตลาดในกทม.',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> ที่ตั้งตลาดในกทม.'
            });

lyr_GoogleMaps_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr__1];
lyr__1.set('fieldAliases', {'id_market': 'id_market', 'mar_name': 'mar_name', 'dcode': 'dcode', 'address': 'address', 'manage': 'manage', });
lyr__1.set('fieldImages', {'id_market': 'TextEdit', 'mar_name': 'TextEdit', 'dcode': 'TextEdit', 'address': 'TextEdit', 'manage': 'TextEdit', });
lyr__1.set('fieldLabels', {'id_market': 'inline label - always visible', 'mar_name': 'inline label - always visible', 'dcode': 'no label', 'address': 'inline label - visible with data', 'manage': 'no label', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});