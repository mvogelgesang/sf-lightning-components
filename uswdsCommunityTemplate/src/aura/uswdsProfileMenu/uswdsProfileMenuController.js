({
	doInit : function(component, event, helper) {
		var userId = $A.get("$SObjectType.CurrentUser.Id");
        if (userId) {
            component.set("v.loggedIn", true);
        }
	},
    handleMenuSelect: function(cmp, event, helper) {
        console.log("handling menu select");
    	var selectedMenuItemValue = event.getParam("value");
	}
})