
const factory = function factory($browser) {
    /**
     * @param {Trip} trip
     * @constructor
     */
    const TripFacade = function (trip) {
        this.start = function () {
            $browser.notifyWhenNoOutstandingRequests(function () {
                trip.start();
            });
            return this;
        };
    };

    /**
     * @public
     * @static
     * @param {Trip} trip
     */
    TripFacade.$new = function (trip) {
        return new this(trip);
    };

    return TripFacade;
};

factory.$inject = ['$browser'];

module.exports = (ng) => {
    ng.factory('TripFacade', factory);
};