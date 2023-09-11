sap.ui.define([
   "sap/ui/core/UIComponent",
   "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
   "sap/ui/Device",
   "project1/model/models"
],
function (UIComponent, JSONModel, ResourceModel, Device, models) {
   "use strict";

   return UIComponent.extend("project1.Component", {
       metadata: {
           manifest: "json",
           "interfaces": ["sap.ui.core.IAsyncContentCreation"],
           "rootView": {
            "viewName": "project1.view.app",
            "type": "XML",
            /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
            "id": "app"
         }
       },

       /**
        * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
        * @public
        * @override
        */
       init: function () {
           // call the base component's init function
           UIComponent.prototype.init.apply(this, arguments);

           // enable routing
           this.getRouter().initialize();

           // set the device model
           this.setModel(models.createDeviceModel(), "device");

           var oData = {
                         recipient : {
                            name : "World"
                         }
                      };
                      var oModel = new JSONModel(oData);
                      this.setModel(oModel);
             
                      var i18nModel = new ResourceModel({
                         bundleName: "project1.i18n.i18n"
                      });
                      this.setModel(i18nModel, "i18n");
            
       }
   });
}
);