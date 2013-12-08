/**
 * Create by Albert on 08.12.13
 */

var greddApp = greddApp || {};

(function () {

    greddApp.gridView = function () {

        function Field(rows, cols) {

        }
        Field.prototype.setSize = function (rows, cols) {};

        function Cell(x, y) {
            this.x = x;
            this.y = y;
        }
        Cell.prototype.edit = function () {};
        Cell.prototype.select = function () {};

        return {
            field: Field
        };
    }

}());