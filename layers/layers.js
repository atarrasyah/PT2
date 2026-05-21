ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([690595.999838, 9195608.919478, 695197.889641, 9198712.197872]);
var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_KecamatanGenteng_1 = new ol.format.GeoJSON();
var features_KecamatanGenteng_1 = format_KecamatanGenteng_1.readFeatures(json_KecamatanGenteng_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KecamatanGenteng_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanGenteng_1.addFeatures(features_KecamatanGenteng_1);
var lyr_KecamatanGenteng_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanGenteng_1, 
                style: style_KecamatanGenteng_1,
                popuplayertitle: 'Kecamatan Genteng',
                interactive: true,
                title: '<img src="styles/legend/KecamatanGenteng_1.png" /> Kecamatan Genteng'
            });
var format_ServiceAreaGenteng_2 = new ol.format.GeoJSON();
var features_ServiceAreaGenteng_2 = format_ServiceAreaGenteng_2.readFeatures(json_ServiceAreaGenteng_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_ServiceAreaGenteng_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaGenteng_2.addFeatures(features_ServiceAreaGenteng_2);
var lyr_ServiceAreaGenteng_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaGenteng_2, 
                style: style_ServiceAreaGenteng_2,
                popuplayertitle: 'Service Area Genteng',
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaGenteng_2.png" /> Service Area Genteng'
            });
var format_ServiceAreaPeneleh_3 = new ol.format.GeoJSON();
var features_ServiceAreaPeneleh_3 = format_ServiceAreaPeneleh_3.readFeatures(json_ServiceAreaPeneleh_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_ServiceAreaPeneleh_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaPeneleh_3.addFeatures(features_ServiceAreaPeneleh_3);
var lyr_ServiceAreaPeneleh_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaPeneleh_3, 
                style: style_ServiceAreaPeneleh_3,
                popuplayertitle: 'Service Area Peneleh',
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaPeneleh_3.png" /> Service Area Peneleh'
            });
var format_ServiceAreaEmbongKaliasin_4 = new ol.format.GeoJSON();
var features_ServiceAreaEmbongKaliasin_4 = format_ServiceAreaEmbongKaliasin_4.readFeatures(json_ServiceAreaEmbongKaliasin_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_ServiceAreaEmbongKaliasin_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaEmbongKaliasin_4.addFeatures(features_ServiceAreaEmbongKaliasin_4);
var lyr_ServiceAreaEmbongKaliasin_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaEmbongKaliasin_4, 
                style: style_ServiceAreaEmbongKaliasin_4,
                popuplayertitle: 'Service Area Embong Kaliasin',
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaEmbongKaliasin_4.png" /> Service Area Embong Kaliasin'
            });
var format_ServiceAreaKetabang_5 = new ol.format.GeoJSON();
var features_ServiceAreaKetabang_5 = format_ServiceAreaKetabang_5.readFeatures(json_ServiceAreaKetabang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_ServiceAreaKetabang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiceAreaKetabang_5.addFeatures(features_ServiceAreaKetabang_5);
var lyr_ServiceAreaKetabang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ServiceAreaKetabang_5, 
                style: style_ServiceAreaKetabang_5,
                popuplayertitle: 'Service Area Ketabang',
                interactive: true,
                title: '<img src="styles/legend/ServiceAreaKetabang_5.png" /> Service Area Ketabang'
            });
var format_JaringanJalan_6 = new ol.format.GeoJSON();
var features_JaringanJalan_6 = format_JaringanJalan_6.readFeatures(json_JaringanJalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanJalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_6.addFeatures(features_JaringanJalan_6);
var lyr_JaringanJalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_6, 
                style: style_JaringanJalan_6,
                popuplayertitle: 'Jaringan Jalan',
                interactive: false,
                title: '<img src="styles/legend/JaringanJalan_6.png" /> Jaringan Jalan'
            });
var format_JalanyangTerlayani_7 = new ol.format.GeoJSON();
var features_JalanyangTerlayani_7 = format_JalanyangTerlayani_7.readFeatures(json_JalanyangTerlayani_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JalanyangTerlayani_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanyangTerlayani_7.addFeatures(features_JalanyangTerlayani_7);
var lyr_JalanyangTerlayani_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanyangTerlayani_7, 
                style: style_JalanyangTerlayani_7,
                popuplayertitle: 'Jalan yang Terlayani',
                interactive: true,
                title: '<img src="styles/legend/JalanyangTerlayani_7.png" /> Jalan yang Terlayani'
            });
var format_Halte_8 = new ol.format.GeoJSON();
var features_Halte_8 = format_Halte_8.readFeatures(json_Halte_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Halte_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_8.addFeatures(features_Halte_8);
var lyr_Halte_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_8, 
                style: style_Halte_8,
                popuplayertitle: 'Halte',
                interactive: true,
                title: '<img src="styles/legend/Halte_8.png" /> Halte'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_KecamatanGenteng_1.setVisible(true);lyr_ServiceAreaGenteng_2.setVisible(true);lyr_ServiceAreaPeneleh_3.setVisible(true);lyr_ServiceAreaEmbongKaliasin_4.setVisible(true);lyr_ServiceAreaKetabang_5.setVisible(true);lyr_JaringanJalan_6.setVisible(false);lyr_JalanyangTerlayani_7.setVisible(true);lyr_Halte_8.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_KecamatanGenteng_1,lyr_ServiceAreaGenteng_2,lyr_ServiceAreaPeneleh_3,lyr_ServiceAreaEmbongKaliasin_4,lyr_ServiceAreaKetabang_5,lyr_JaringanJalan_6,lyr_JalanyangTerlayani_7,lyr_Halte_8];
lyr_KecamatanGenteng_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas m2': 'Luas m2', });
lyr_ServiceAreaGenteng_2.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'RUTE': 'RUTE', 'Destinasi': 'Destinasi', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas total': 'Luas total', 'Terlayani': 'Terlayani', });
lyr_ServiceAreaPeneleh_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'RUTE': 'RUTE', 'Destinasi': 'Destinasi', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luas': 'luas', });
lyr_ServiceAreaEmbongKaliasin_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'RUTE': 'RUTE', 'Destinasi': 'Destinasi', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luas': 'luas', });
lyr_ServiceAreaKetabang_5.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'RUTE': 'RUTE', 'Destinasi': 'Destinasi', 'type': 'type', 'start': 'start', 'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'luastot': 'luastot', 'luassum': 'luassum', });
lyr_JaringanJalan_6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_JalanyangTerlayani_7.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'RUTE': 'RUTE', 'Destinasi': 'Destinasi', 'type': 'type', 'start': 'start', });
lyr_Halte_8.set('fieldAliases', {'Nama Halte': 'Nama Halte', 'Keterangan': 'Keterangan', 'Foto': 'Foto', });
lyr_KecamatanGenteng_1.set('fieldImages', {'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas m2': '', });
lyr_ServiceAreaGenteng_2.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'RUTE': '', 'Destinasi': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'Luas total': '', 'Terlayani': '', });
lyr_ServiceAreaPeneleh_3.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'RUTE': '', 'Destinasi': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'luas': '', });
lyr_ServiceAreaEmbongKaliasin_4.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'RUTE': '', 'Destinasi': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'luas': '', });
lyr_ServiceAreaKetabang_5.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'RUTE': '', 'Destinasi': '', 'type': '', 'start': '', 'full_id': '', 'Kecamatan': '', 'Kelurahan': '', 'luastot': '', 'luassum': '', });
lyr_JaringanJalan_6.set('fieldImages', {'fid': '', 'osm_id': '', 'bridge': '', 'tunnel': '', 'width': '', 'highway': '', 'surface': '', 'railway': '', 'layer': '', 'oneway': '', 'name': '', 'smoothness': '', });
lyr_JalanyangTerlayani_7.set('fieldImages', {'Nama_Halte': '', 'Keterangan': '', 'Sumber': '', 'RUTE': '', 'Destinasi': '', 'type': '', 'start': '', });
lyr_Halte_8.set('fieldImages', {'Nama Halte': '', 'Keterangan': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_KecamatanGenteng_1.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'hidden field', 'Kelurahan': 'hidden field', 'Luas m2': 'hidden field', });
lyr_ServiceAreaGenteng_2.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'RUTE': 'inline label - always visible', 'Destinasi': 'inline label - always visible', 'type': 'hidden field', 'start': 'hidden field', 'full_id': 'hidden field', 'Kecamatan': 'hidden field', 'Kelurahan': 'hidden field', 'Luas total': 'hidden field', 'Terlayani': 'hidden field', });
lyr_ServiceAreaPeneleh_3.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'RUTE': 'inline label - always visible', 'Destinasi': 'inline label - always visible', 'type': 'hidden field', 'start': 'hidden field', 'full_id': 'hidden field', 'Kecamatan': 'hidden field', 'Kelurahan': 'hidden field', 'luas': 'hidden field', });
lyr_ServiceAreaEmbongKaliasin_4.set('fieldLabels', {'Nama_Halte': 'no label', 'Keterangan': 'inline label - always visible', 'Sumber': 'hidden field', 'RUTE': 'inline label - always visible', 'Destinasi': 'inline label - always visible', 'type': 'hidden field', 'start': 'hidden field', 'full_id': 'hidden field', 'Kecamatan': 'hidden field', 'Kelurahan': 'hidden field', 'luas': 'hidden field', });
lyr_ServiceAreaKetabang_5.set('fieldLabels', {'Nama_Halte': 'hidden field', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'RUTE': 'inline label - always visible', 'Destinasi': 'inline label - always visible', 'type': 'hidden field', 'start': 'hidden field', 'full_id': 'hidden field', 'Kecamatan': 'hidden field', 'Kelurahan': 'hidden field', 'luastot': 'hidden field', 'luassum': 'hidden field', });
lyr_JaringanJalan_6.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_JalanyangTerlayani_7.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'RUTE': 'hidden field', 'Destinasi': 'inline label - always visible', 'type': 'hidden field', 'start': 'hidden field', });
lyr_Halte_8.set('fieldLabels', {'Nama Halte': 'inline label - always visible', 'Keterangan': 'inline label - always visible', 'Foto': 'inline label - always visible', });
lyr_Halte_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});