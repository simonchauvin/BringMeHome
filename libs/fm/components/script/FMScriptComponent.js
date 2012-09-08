/**
 * Under Creative Commons Licence
 * @author Simon Chauvin
*/
function fmScriptComponent(owner) {
    "use strict";
    var that_ = fmComponent(fmComponentTypes.script, owner);

    /**
     * Add the script component to the owner
     */
    owner.addComponent(that_);

    /**
     * Post initialization to ensure that all components are initialized
     */
    that_.postInit = function () {
        
    }

    that_.update = function (game) {
        owner.update(game);
    };

    return that_;
}