gdjs.PerderCode = {};
gdjs.PerderCode.GDfondoObjects1= [];
gdjs.PerderCode.GDfondoObjects2= [];
gdjs.PerderCode.GDbtn_95jugarObjects1= [];
gdjs.PerderCode.GDbtn_95jugarObjects2= [];
gdjs.PerderCode.GDbtn_95salirObjects1= [];
gdjs.PerderCode.GDbtn_95salirObjects2= [];
gdjs.PerderCode.GDbtn_95instruccionesObjects1= [];
gdjs.PerderCode.GDbtn_95instruccionesObjects2= [];
gdjs.PerderCode.GDpersonajeObjects1= [];
gdjs.PerderCode.GDpersonajeObjects2= [];
gdjs.PerderCode.GDescudoObjects1= [];
gdjs.PerderCode.GDescudoObjects2= [];
gdjs.PerderCode.GDletras_951Objects1= [];
gdjs.PerderCode.GDletras_951Objects2= [];
gdjs.PerderCode.GDletras_952Objects1= [];
gdjs.PerderCode.GDletras_952Objects2= [];

gdjs.PerderCode.conditionTrue_0 = {val:false};
gdjs.PerderCode.condition0IsTrue_0 = {val:false};
gdjs.PerderCode.condition1IsTrue_0 = {val:false};
gdjs.PerderCode.condition2IsTrue_0 = {val:false};


gdjs.PerderCode.mapOfGDgdjs_46PerderCode_46GDbtn_9595jugarObjects1Objects = Hashtable.newFrom({"btn_jugar": gdjs.PerderCode.GDbtn_95jugarObjects1});gdjs.PerderCode.mapOfGDgdjs_46PerderCode_46GDbtn_9595salirObjects1Objects = Hashtable.newFrom({"btn_salir": gdjs.PerderCode.GDbtn_95salirObjects1});gdjs.PerderCode.eventsList0 = function(runtimeScene) {

{


gdjs.PerderCode.condition0IsTrue_0.val = false;
{
gdjs.PerderCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PerderCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sprite\\Fondo\\Sonidos\\mario-kart-lose-1.mp3", 0, false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jugar"), gdjs.PerderCode.GDbtn_95jugarObjects1);

gdjs.PerderCode.condition0IsTrue_0.val = false;
gdjs.PerderCode.condition1IsTrue_0.val = false;
{
gdjs.PerderCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PerderCode.condition0IsTrue_0.val ) {
{
gdjs.PerderCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PerderCode.mapOfGDgdjs_46PerderCode_46GDbtn_9595jugarObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PerderCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_salir"), gdjs.PerderCode.GDbtn_95salirObjects1);

gdjs.PerderCode.condition0IsTrue_0.val = false;
gdjs.PerderCode.condition1IsTrue_0.val = false;
{
gdjs.PerderCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PerderCode.condition0IsTrue_0.val ) {
{
gdjs.PerderCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PerderCode.mapOfGDgdjs_46PerderCode_46GDbtn_9595salirObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PerderCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.PerderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PerderCode.GDfondoObjects1.length = 0;
gdjs.PerderCode.GDfondoObjects2.length = 0;
gdjs.PerderCode.GDbtn_95jugarObjects1.length = 0;
gdjs.PerderCode.GDbtn_95jugarObjects2.length = 0;
gdjs.PerderCode.GDbtn_95salirObjects1.length = 0;
gdjs.PerderCode.GDbtn_95salirObjects2.length = 0;
gdjs.PerderCode.GDbtn_95instruccionesObjects1.length = 0;
gdjs.PerderCode.GDbtn_95instruccionesObjects2.length = 0;
gdjs.PerderCode.GDpersonajeObjects1.length = 0;
gdjs.PerderCode.GDpersonajeObjects2.length = 0;
gdjs.PerderCode.GDescudoObjects1.length = 0;
gdjs.PerderCode.GDescudoObjects2.length = 0;
gdjs.PerderCode.GDletras_951Objects1.length = 0;
gdjs.PerderCode.GDletras_951Objects2.length = 0;
gdjs.PerderCode.GDletras_952Objects1.length = 0;
gdjs.PerderCode.GDletras_952Objects2.length = 0;

gdjs.PerderCode.eventsList0(runtimeScene);
return;

}

gdjs['PerderCode'] = gdjs.PerderCode;
