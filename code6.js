gdjs.instrccipnes3Code = {};
gdjs.instrccipnes3Code.GDinstrucciones_953Objects1= [];
gdjs.instrccipnes3Code.GDinstrucciones_953Objects2= [];
gdjs.instrccipnes3Code.GDbtn_95playObjects1= [];
gdjs.instrccipnes3Code.GDbtn_95playObjects2= [];
gdjs.instrccipnes3Code.GDbtn_95salirObjects1= [];
gdjs.instrccipnes3Code.GDbtn_95salirObjects2= [];
gdjs.instrccipnes3Code.GDbtn_95flechaatrasObjects1= [];
gdjs.instrccipnes3Code.GDbtn_95flechaatrasObjects2= [];
gdjs.instrccipnes3Code.GDNewObjectObjects1= [];
gdjs.instrccipnes3Code.GDNewObjectObjects2= [];

gdjs.instrccipnes3Code.conditionTrue_0 = {val:false};
gdjs.instrccipnes3Code.condition0IsTrue_0 = {val:false};
gdjs.instrccipnes3Code.condition1IsTrue_0 = {val:false};
gdjs.instrccipnes3Code.condition2IsTrue_0 = {val:false};


gdjs.instrccipnes3Code.mapOfGDgdjs_46instrccipnes3Code_46GDbtn_9595playObjects1Objects = Hashtable.newFrom({"btn_play": gdjs.instrccipnes3Code.GDbtn_95playObjects1});gdjs.instrccipnes3Code.mapOfGDgdjs_46instrccipnes3Code_46GDbtn_9595salirObjects1Objects = Hashtable.newFrom({"btn_salir": gdjs.instrccipnes3Code.GDbtn_95salirObjects1});gdjs.instrccipnes3Code.mapOfGDgdjs_46instrccipnes3Code_46GDbtn_9595flechaatrasObjects1Objects = Hashtable.newFrom({"btn_flechaatras": gdjs.instrccipnes3Code.GDbtn_95flechaatrasObjects1});gdjs.instrccipnes3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_play"), gdjs.instrccipnes3Code.GDbtn_95playObjects1);

gdjs.instrccipnes3Code.condition0IsTrue_0.val = false;
gdjs.instrccipnes3Code.condition1IsTrue_0.val = false;
{
gdjs.instrccipnes3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.instrccipnes3Code.condition0IsTrue_0.val ) {
{
gdjs.instrccipnes3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instrccipnes3Code.mapOfGDgdjs_46instrccipnes3Code_46GDbtn_9595playObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.instrccipnes3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_salir"), gdjs.instrccipnes3Code.GDbtn_95salirObjects1);

gdjs.instrccipnes3Code.condition0IsTrue_0.val = false;
gdjs.instrccipnes3Code.condition1IsTrue_0.val = false;
{
gdjs.instrccipnes3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.instrccipnes3Code.condition0IsTrue_0.val ) {
{
gdjs.instrccipnes3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instrccipnes3Code.mapOfGDgdjs_46instrccipnes3Code_46GDbtn_9595salirObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.instrccipnes3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_flechaatras"), gdjs.instrccipnes3Code.GDbtn_95flechaatrasObjects1);

gdjs.instrccipnes3Code.condition0IsTrue_0.val = false;
gdjs.instrccipnes3Code.condition1IsTrue_0.val = false;
{
gdjs.instrccipnes3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.instrccipnes3Code.condition0IsTrue_0.val ) {
{
gdjs.instrccipnes3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.instrccipnes3Code.mapOfGDgdjs_46instrccipnes3Code_46GDbtn_9595flechaatrasObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.instrccipnes3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intruscciones2", false);
}}

}


};

gdjs.instrccipnes3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.instrccipnes3Code.GDinstrucciones_953Objects1.length = 0;
gdjs.instrccipnes3Code.GDinstrucciones_953Objects2.length = 0;
gdjs.instrccipnes3Code.GDbtn_95playObjects1.length = 0;
gdjs.instrccipnes3Code.GDbtn_95playObjects2.length = 0;
gdjs.instrccipnes3Code.GDbtn_95salirObjects1.length = 0;
gdjs.instrccipnes3Code.GDbtn_95salirObjects2.length = 0;
gdjs.instrccipnes3Code.GDbtn_95flechaatrasObjects1.length = 0;
gdjs.instrccipnes3Code.GDbtn_95flechaatrasObjects2.length = 0;
gdjs.instrccipnes3Code.GDNewObjectObjects1.length = 0;
gdjs.instrccipnes3Code.GDNewObjectObjects2.length = 0;

gdjs.instrccipnes3Code.eventsList0(runtimeScene);
return;

}

gdjs['instrccipnes3Code'] = gdjs.instrccipnes3Code;
