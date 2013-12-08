/**
 * Extensible grid table.
 *
 * @author Albert Bikeev
 */

var greddApp = greddApp || {};

require.config({
    baseUrl: './js',
    paths: {
        controller: 'controllers/base-controller',
        model: 'models/base-model',
        view: 'views/base-view'
    }
});

require(['controller', 'model', 'view'], function() {

    var view  = new greddApp.gridView(),
        model = new greddApp.gridModel(),
        controller = new greddApp.gridController(view, model);

    controller.init();

    console.log(greddApp);

});