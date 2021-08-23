gdjs.GanarCode = {};
gdjs.GanarCode.GDfondoObjects1= [];
gdjs.GanarCode.GDfondoObjects2= [];
gdjs.GanarCode.GDbtn_95jugarObjects1= [];
gdjs.GanarCode.GDbtn_95jugarObjects2= [];
gdjs.GanarCode.GDbtn_95salirObjects1= [];
gdjs.GanarCode.GDbtn_95salirObjects2= [];
gdjs.GanarCode.GDbtn_95instruccionesObjects1= [];
gdjs.GanarCode.GDbtn_95instruccionesObjects2= [];
gdjs.GanarCode.GDpersonajeObjects1= [];
gdjs.GanarCode.GDpersonajeObjects2= [];
gdjs.GanarCode.GDescudoObjects1= [];
gdjs.GanarCode.GDescudoObjects2= [];
gdjs.GanarCode.GDletras_951Objects1= [];
gdjs.GanarCode.GDletras_951Objects2= [];
gdjs.GanarCode.GDletras_952Objects1= [];
gdjs.GanarCode.GDletras_952Objects2= [];

gdjs.GanarCode.conditionTrue_0 = {val:false};
gdjs.GanarCode.condition0IsTrue_0 = {val:false};
gdjs.GanarCode.condition1IsTrue_0 = {val:false};
gdjs.GanarCode.condition2IsTrue_0 = {val:false};


gdjs.GanarCode.mapOfGDgdjs_46GanarCode_46GDbtn_9595jugarObjects1Objects = Hashtable.newFrom({"btn_jugar": gdjs.GanarCode.GDbtn_95jugarObjects1});gdjs.GanarCode.mapOfGDgdjs_46GanarCode_46GDbtn_9595salirObjects1Objects = Hashtable.newFrom({"btn_salir": gdjs.GanarCode.GDbtn_95salirObjects1});gdjs.GanarCode.eventsList0 = function(runtimeScene) {

{


gdjs.GanarCode.condition0IsTrue_0.val = false;
{
gdjs.GanarCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GanarCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sprite\\Fondo\\Sonidos\\sonido_ganador.mp3", 1, false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jugar"), gdjs.GanarCode.GDbtn_95jugarObjects1);

gdjs.GanarCode.condition0IsTrue_0.val = false;
gdjs.GanarCode.condition1IsTrue_0.val = false;
{
gdjs.GanarCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GanarCode.condition0IsTrue_0.val ) {
{
gdjs.GanarCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GanarCode.mapOfGDgdjs_46GanarCode_46GDbtn_9595jugarObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GanarCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_salir"), gdjs.GanarCode.GDbtn_95salirObjects1);

gdjs.GanarCode.condition0IsTrue_0.val = false;
gdjs.GanarCode.condition1IsTrue_0.val = false;
{
gdjs.GanarCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GanarCode.condition0IsTrue_0.val ) {
{
gdjs.GanarCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GanarCode.mapOfGDgdjs_46GanarCode_46GDbtn_9595salirObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GanarCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.GanarCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GanarCode.GDfondoObjects1.length = 0;
gdjs.GanarCode.GDfondoObjects2.length = 0;
gdjs.GanarCode.GDbtn_95jugarObjects1.length = 0;
gdjs.GanarCode.GDbtn_95jugarObjects2.length = 0;
gdjs.GanarCode.GDbtn_95salirObjects1.length = 0;
gdjs.GanarCode.GDbtn_95salirObjects2.length = 0;
gdjs.GanarCode.GDbtn_95instruccionesObjects1.length = 0;
gdjs.GanarCode.GDbtn_95instruccionesObjects2.length = 0;
gdjs.GanarCode.GDpersonajeObjects1.length = 0;
gdjs.GanarCode.GDpersonajeObjects2.length = 0;
gdjs.GanarCode.GDescudoObjects1.length = 0;
gdjs.GanarCode.GDescudoObjects2.length = 0;
gdjs.GanarCode.GDletras_951Objects1.length = 0;
gdjs.GanarCode.GDletras_951Objects2.length = 0;
gdjs.GanarCode.GDletras_952Objects1.length = 0;
gdjs.GanarCode.GDletras_952Objects2.length = 0;

gdjs.GanarCode.eventsList0(runtimeScene);
return;

}

gdjs['GanarCode'] = gdjs.GanarCode;
