// Crop to selection, please  make sure you have a SELECTION chosen!!
// Original solve here: https://community.adobe.com/t5/photoshop/crop-to-selection-action/td-p/9035702?page=1

var doc = activeDocument;

// set ruler variables:
var savedRuler = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;


try{

    var bound = doc.selection.bounds

    cropToSelection (bound[1], bound[0], bound[3], bound[2])

}

catch(e){}

function cropToSelection(top, left, bottom, right){

    var idCrop = charIDToTypeID( "Crop" );

        var desc11 = new ActionDescriptor();

        var idT = charIDToTypeID( "T   " );

            var desc12 = new ActionDescriptor();

            var idTop = charIDToTypeID( "Top " );

                var idPxl = charIDToTypeID( "#Pxl" );

            desc12.putUnitDouble( idTop, idPxl, top );

            var idLeft = charIDToTypeID( "Left" );

            var idPxl = charIDToTypeID( "#Pxl" );

            desc12.putUnitDouble( idLeft, idPxl,left );

            var idBtom = charIDToTypeID( "Btom" );

            var idPxl = charIDToTypeID( "#Pxl" );

            desc12.putUnitDouble( idBtom, idPxl, bottom );

            var idRght = charIDToTypeID( "Rght" );

            var idPxl = charIDToTypeID( "#Pxl" );

            desc12.putUnitDouble( idRght, idPxl, right );

        var idRctn = charIDToTypeID( "Rctn" );

        desc11.putObject( idT, idRctn, desc12 );

        var idAngl = charIDToTypeID( "Angl" );

        var idAng = charIDToTypeID( "#Ang" );

        desc11.putUnitDouble( idAngl, idAng, 0.000000 );

        var idDlt = charIDToTypeID( "Dlt " );

        desc11.putBoolean( idDlt, false );

        var idcropAspectRatioModeKey = stringIDToTypeID( "cropAspectRatioModeKey" );

        var idcropAspectRatioModeClass = stringIDToTypeID( "cropAspectRatioModeClass" );

        var idtargetSize = stringIDToTypeID( "targetSize" );

        desc11.putEnumerated( idcropAspectRatioModeKey, idcropAspectRatioModeClass, idtargetSize );

    executeAction( idCrop, desc11, DialogModes.NO );

    }

    // return everything to normal

    app.preferences.rulerUnits = savedRuler;
