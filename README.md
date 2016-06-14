Angular wrapper for [Trip.js](https://github.com/EragonJ/Trip.js)
===

Example:
```
ng.controller('MyController', function ($trip, $log) {

    const setupTrip = () => {
        return $trip.$new(
            // blocks
            [
                {
                    sel: '#someId',
                    content: 'Hello',
                    position: $trip.PositionEnum.Bottom
                },
                {
                    sel: '#anotherId',
                    content: 'World',
                    position: $trip.PositionEnum.Top
                }
            ],
            // options
            {
                onEnd: () => {
                    $log.info('trip is ended');
                }
            }
        );
    };

    this.$onInit = () => {
        const trip = setupTrip();
        trip.start();
    });

});
```

License
====
MIT