gdjs.InstruccionesCode = {};
gdjs.InstruccionesCode.GDfondo_951Objects1= [];
gdjs.InstruccionesCode.GDfondo_951Objects2= [];
gdjs.InstruccionesCode.GDbtn_95playObjects1= [];
gdjs.InstruccionesCode.GDbtn_95playObjects2= [];
gdjs.InstruccionesCode.GDbtn_95salirObjects1= [];
gdjs.InstruccionesCode.GDbtn_95salirObjects2= [];
gdjs.InstruccionesCode.GDflechaObjects1= [];
gdjs.InstruccionesCode.GDflechaObjects2= [];

gdjs.InstruccionesCode.conditionTrue_0 = {val:false};
gdjs.InstruccionesCode.condition0IsTrue_0 = {val:false};
gdjs.InstruccionesCode.condition1IsTrue_0 = {val:false};
gdjs.InstruccionesCode.condition2IsTrue_0 = {val:false};


gdjs.InstruccionesCode.mapOfGDgdjs_46InstruccionesCode_46GDbtn_9595playObjects1Objects = Hashtable.newFrom({"btn_play": gdjs.InstruccionesCode.GDbtn_95playObjects1});gdjs.InstruccionesCode.mapOfGDgdjs_46InstruccionesCode_46GDbtn_9595salirObjects1Objects = Hashtable.newFrom({"btn_salir": gdjs.InstruccionesCode.GDbtn_95salirObjects1});gdjs.InstruccionesCode.mapOfGDgdjs_46InstruccionesCode_46GDflechaObjects1Objects = Hashtable.newFrom({"flecha": gdjs.InstruccionesCode.GDflechaObjects1});gdjs.InstruccionesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("btn_play"), gdjs.InstruccionesCode.GDbtn_95playObjects1);

gdjs.InstruccionesCode.condition0IsTrue_0.val = false;
gdjs.InstruccionesCode.condition1IsTrue_0.val = false;
{
gdjs.InstruccionesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.InstruccionesCode.condition0IsTrue_0.val ) {
{
gdjs.InstruccionesCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstruccionesCode.mapOfGDgdjs_46InstruccionesCode_46GDbtn_9595playObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.InstruccionesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_salir"), gdjs.InstruccionesCode.GDbtn_95salirObjects1);

gdjs.InstruccionesCode.condition0IsTrue_0.val = false;
gdjs.InstruccionesCode.condition1IsTrue_0.val = false;
{
gdjs.InstruccionesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.InstruccionesCode.condition0IsTrue_0.val ) {
{
gdjs.InstruccionesCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstruccionesCode.mapOfGDgdjs_46InstruccionesCode_46GDbtn_9595salirObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.InstruccionesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("flecha"), gdjs.InstruccionesCode.GDflechaObjects1);

gdjs.InstruccionesCode.condition0IsTrue_0.val = false;
gdjs.InstruccionesCode.condition1IsTrue_0.val = false;
{
gdjs.InstruccionesCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.InstruccionesCode.condition0IsTrue_0.val ) {
{
gdjs.InstruccionesCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstruccionesCode.mapOfGDgdjs_46InstruccionesCode_46GDflechaObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.InstruccionesCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "intruscciones2", false);
}}

}


};

gdjs.InstruccionesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InstruccionesCode.GDfondo_951Objects1.length = 0;
gdjs.InstruccionesCode.GDfondo_951Objects2.length = 0;
gdjs.InstruccionesCode.GDbtn_95playObjects1.length = 0;
gdjs.InstruccionesCode.GDbtn_95playObjects2.length = 0;
gdjs.InstruccionesCode.GDbtn_95salirObjects1.length = 0;
gdjs.InstruccionesCode.GDbtn_95salirObjects2.length = 0;
gdjs.InstruccionesCode.GDflechaObjects1.length = 0;
gdjs.InstruccionesCode.GDflechaObjects2.length = 0;

gdjs.InstruccionesCode.eventsList0(runtimeScene);
return;

}

gdjs['InstruccionesCode'] = gdjs.InstruccionesCode;
