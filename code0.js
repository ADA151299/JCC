gdjs.PortadaCode = {};
gdjs.PortadaCode.GDfondoObjects1= [];
gdjs.PortadaCode.GDfondoObjects2= [];
gdjs.PortadaCode.GDbtn_95jugarObjects1= [];
gdjs.PortadaCode.GDbtn_95jugarObjects2= [];
gdjs.PortadaCode.GDbtn_95salirObjects1= [];
gdjs.PortadaCode.GDbtn_95salirObjects2= [];
gdjs.PortadaCode.GDbtn_95instruccionesObjects1= [];
gdjs.PortadaCode.GDbtn_95instruccionesObjects2= [];
gdjs.PortadaCode.GDescudoObjects1= [];
gdjs.PortadaCode.GDescudoObjects2= [];
gdjs.PortadaCode.GDpersonajeObjects1= [];
gdjs.PortadaCode.GDpersonajeObjects2= [];

gdjs.PortadaCode.conditionTrue_0 = {val:false};
gdjs.PortadaCode.condition0IsTrue_0 = {val:false};
gdjs.PortadaCode.condition1IsTrue_0 = {val:false};
gdjs.PortadaCode.condition2IsTrue_0 = {val:false};


gdjs.PortadaCode.mapOfGDgdjs_46PortadaCode_46GDbtn_9595jugarObjects1Objects = Hashtable.newFrom({"btn_jugar": gdjs.PortadaCode.GDbtn_95jugarObjects1});gdjs.PortadaCode.mapOfGDgdjs_46PortadaCode_46GDbtn_9595instruccionesObjects1Objects = Hashtable.newFrom({"btn_instrucciones": gdjs.PortadaCode.GDbtn_95instruccionesObjects1});gdjs.PortadaCode.mapOfGDgdjs_46PortadaCode_46GDbtn_9595salirObjects1Objects = Hashtable.newFrom({"btn_salir": gdjs.PortadaCode.GDbtn_95salirObjects1});gdjs.PortadaCode.eventsList0 = function(runtimeScene) {

{


gdjs.PortadaCode.condition0IsTrue_0.val = false;
{
gdjs.PortadaCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PortadaCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sprite\\Fondo\\Sonidos\\victory-sonic.mp3", 0, false, 50, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jugar"), gdjs.PortadaCode.GDbtn_95jugarObjects1);

gdjs.PortadaCode.condition0IsTrue_0.val = false;
gdjs.PortadaCode.condition1IsTrue_0.val = false;
{
gdjs.PortadaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PortadaCode.condition0IsTrue_0.val ) {
{
gdjs.PortadaCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PortadaCode.mapOfGDgdjs_46PortadaCode_46GDbtn_9595jugarObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PortadaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_instrucciones"), gdjs.PortadaCode.GDbtn_95instruccionesObjects1);

gdjs.PortadaCode.condition0IsTrue_0.val = false;
gdjs.PortadaCode.condition1IsTrue_0.val = false;
{
gdjs.PortadaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PortadaCode.condition0IsTrue_0.val ) {
{
gdjs.PortadaCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PortadaCode.mapOfGDgdjs_46PortadaCode_46GDbtn_9595instruccionesObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PortadaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instrucciones", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_salir"), gdjs.PortadaCode.GDbtn_95salirObjects1);

gdjs.PortadaCode.condition0IsTrue_0.val = false;
gdjs.PortadaCode.condition1IsTrue_0.val = false;
{
gdjs.PortadaCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PortadaCode.condition0IsTrue_0.val ) {
{
gdjs.PortadaCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PortadaCode.mapOfGDgdjs_46PortadaCode_46GDbtn_9595salirObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PortadaCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}{gdjs.evtTools.window.openURL("www.google.com", runtimeScene);
}}

}


};

gdjs.PortadaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PortadaCode.GDfondoObjects1.length = 0;
gdjs.PortadaCode.GDfondoObjects2.length = 0;
gdjs.PortadaCode.GDbtn_95jugarObjects1.length = 0;
gdjs.PortadaCode.GDbtn_95jugarObjects2.length = 0;
gdjs.PortadaCode.GDbtn_95salirObjects1.length = 0;
gdjs.PortadaCode.GDbtn_95salirObjects2.length = 0;
gdjs.PortadaCode.GDbtn_95instruccionesObjects1.length = 0;
gdjs.PortadaCode.GDbtn_95instruccionesObjects2.length = 0;
gdjs.PortadaCode.GDescudoObjects1.length = 0;
gdjs.PortadaCode.GDescudoObjects2.length = 0;
gdjs.PortadaCode.GDpersonajeObjects1.length = 0;
gdjs.PortadaCode.GDpersonajeObjects2.length = 0;

gdjs.PortadaCode.eventsList0(runtimeScene);
return;

}

gdjs['PortadaCode'] = gdjs.PortadaCode;
