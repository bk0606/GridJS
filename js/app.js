/**
 * Extensible grid table.
 *
 * @author Albert Bikeev
 */

var GridJS = GridJS || {};

require.config({
    baseUrl: './js',
    paths: {
        controller: 'controllers/grid-controller',
        model: 'models/grid-model',
        view: 'views/grid-view'
    }
});

require(['controller', 'model', 'view'], function() {
    var view  = new GridJS.gridView(),
        model = new GridJS.gridModel(),
        controller = new GridJS.gridController(view, model);

    controller.init();

    console.log(GridJS);
});