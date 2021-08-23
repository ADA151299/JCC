gdjs.intruscciones2Code = {};
gdjs.intruscciones2Code.GDinstrcciones_952Objects1= [];
gdjs.intruscciones2Code.GDinstrcciones_952Objects2= [];
gdjs.intruscciones2Code.GDbtn_95playObjects1= [];
gdjs.intruscciones2Code.GDbtn_95playObjects2= [];
gdjs.intruscciones2Code.GDbtn_95salirObjects1= [];
gdjs.intruscciones2Code.GDbtn_95salirObjects2= [];
gdjs.intruscciones2Code.GDflacheatrasObjects1= [];
gdjs.intruscciones2Code.GDflacheatrasObjects2= [];
gdjs.intruscciones2Code.GDflecha_95nextObjects1= [];
gdjs.intruscciones2Code.GDflecha_95nextObjects2= [];

gdjs.intruscciones2Code.conditionTrue_0 = {val:false};
gdjs.intruscciones2Code.condition0IsTrue_0 = {val:false};
gdjs.intruscciones2Code.condition1IsTrue_0 = {val:false};
gdjs.intruscciones2Code.condition2IsTrue_0 = {val:false};


gdjs.intruscciones2Code.mapOfGDgdjs_46intruscciones2Code_46GDflacheatrasObjects1Objects = Hashtable.newFrom({"flacheatras": gdjs.intruscciones2Code.GDflacheatrasObjects1});gdjs.intruscciones2Code.mapOfGDgdjs_46intruscciones2Code_46GDflecha_9595nextObjects1Objects = Hashtable.newFrom({"flecha_next": gdjs.intruscciones2Code.GDflecha_95nextObjects1});gdjs.intruscciones2Code.mapOfGDgdjs_46intruscciones2Code_46GDbtn_9595playObjects1Objects = Hashtable.newFrom({"btn_play": gdjs.intruscciones2Code.GDbtn_95playObjects1});gdjs.intruscciones2Code.mapOfGDgdjs_46intruscciones2Code_46GDbtn_9595salirObjects1Objects = Hashtable.newFrom({"btn_salir": gdjs.intruscciones2Code.GDbtn_95salirObjects1});gdjs.intruscciones2Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("flacheatras"), gdjs.intruscciones2Code.GDflacheatrasObjects1);

gdjs.intruscciones2Code.condition0IsTrue_0.val = false;
gdjs.intruscciones2Code.condition1IsTrue_0.val = false;
{
gdjs.intruscciones2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.intruscciones2Code.condition0IsTrue_0.val ) {
{
gdjs.intruscciones2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.intruscciones2Code.mapOfGDgdjs_46intruscciones2Code_46GDflacheatrasObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.intruscciones2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instrucciones", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("flecha_next"), gdjs.intruscciones2Code.GDflecha_95nextObjects1);

gdjs.intruscciones2Code.condition0IsTrue_0.val = false;
gdjs.intruscciones2Code.condition1IsTrue_0.val = false;
{
gdjs.intruscciones2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.intruscciones2Code.condition0IsTrue_0.val ) {
{
gdjs.intruscciones2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.intruscciones2Code.mapOfGDgdjs_46intruscciones2Code_46GDflecha_9595nextObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.intruscciones2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "instrccipnes3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_play"), gdjs.intruscciones2Code.GDbtn_95playObjects1);

gdjs.intruscciones2Code.condition0IsTrue_0.val = false;
gdjs.intruscciones2Code.condition1IsTrue_0.val = false;
{
gdjs.intruscciones2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.intruscciones2Code.condition0IsTrue_0.val ) {
{
gdjs.intruscciones2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.intruscciones2Code.mapOfGDgdjs_46intruscciones2Code_46GDbtn_9595playObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.intruscciones2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_salir"), gdjs.intruscciones2Code.GDbtn_95salirObjects1);

gdjs.intruscciones2Code.condition0IsTrue_0.val = false;
gdjs.intruscciones2Code.condition1IsTrue_0.val = false;
{
gdjs.intruscciones2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.intruscciones2Code.condition0IsTrue_0.val ) {
{
gdjs.intruscciones2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.intruscciones2Code.mapOfGDgdjs_46intruscciones2Code_46GDbtn_9595salirObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.intruscciones2Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};

gdjs.intruscciones2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.intruscciones2Code.GDinstrcciones_952Objects1.length = 0;
gdjs.intruscciones2Code.GDinstrcciones_952Objects2.length = 0;
gdjs.intruscciones2Code.GDbtn_95playObjects1.length = 0;
gdjs.intruscciones2Code.GDbtn_95playObjects2.length = 0;
gdjs.intruscciones2Code.GDbtn_95salirObjects1.length = 0;
gdjs.intruscciones2Code.GDbtn_95salirObjects2.length = 0;
gdjs.intruscciones2Code.GDflacheatrasObjects1.length = 0;
gdjs.intruscciones2Code.GDflacheatrasObjects2.length = 0;
gdjs.intruscciones2Code.GDflecha_95nextObjects1.length = 0;
gdjs.intruscciones2Code.GDflecha_95nextObjects2.length = 0;

gdjs.intruscciones2Code.eventsList0(runtimeScene);
return;

}

gdjs['intruscciones2Code'] = gdjs.intruscciones2Code;
