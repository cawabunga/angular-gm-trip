const Trip = require('trip.js');

/**
 * Trip Factory
 * @constructor
 */
const $trip = function $trip(TripFacade) {
    const defaults = {
        animation: 'fadeInUp',
        delay: -1,
        showNavigation: true,
        showCloseBox: true,
        prevLabel: '<< Назад',
        nextLabel: 'Дальше >>',
        finishLabel: 'Закрыть X'
    };

    /**
     * @public
     * @param {Array.<$trip.Block>} tripBlocks
     * @param {Object} options
     */
    this.$new = function (tripBlocks, _options = {}) {
        const options = Object.assign({}, defaults, _options);
        const trip = new Trip(tripBlocks, options);
        return TripFacade.$new(trip);
    };

    /**
     * @enum {string}
     */
    this.PositionEnum = {
        Right: 'e',
        Left: 'w',
        Top: 'n',
        Bottom: 's',
        ScreenNE: 'screen-ne',
        ScreenSE: 'screen-se',
        ScreenSW: 'screen-sw',
        ScreenNW: 'screen-nw',
        ScreenCenter: 'screen-center'
    };

};

$trip.$inject = ['TripFacade'];

/**
 * @typedef {{
 *   content: string,
 *   [sel]: (string|jQuery),
 *   [position]: string,
 *   [expose]: (string|boolean|jQuery),
 *   [animation]: (boolean|string)
 * }}
 */
$trip.Block; // eslint-disable-line no-unused-expressions

module.exports = (ng) => {
    ng.service('$trip', $trip);
};