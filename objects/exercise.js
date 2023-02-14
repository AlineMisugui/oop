let start = 0; // 0-off 1-on

function StopWatch() {
    let duration, startTime, endTime = 0;
    this.reset = function() {
        start = 0;
        duration = 0;
        startTime = null;
        endTime = null;
    }

    this.start = function() {
        if (start > 0) {

            throw new Error('StopWatch já foi iniciado!');

        } else if (start === 0) {

            console.log(start);
            start = 1;
            startTime = new Date();

        }
    }

    this.stop = function() {
        if (start === 1) {

            console.log('parou');
            start = 0;
            endTime = new Date();

            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;

        } else if (start === 0) {

            throw new Error('StopWatch não foi iniciado!');

        }
    }

    Object.defineProperty(this, 'duration', {
        get: function() {
            return duration;
        }
    })
}

const sw = new StopWatch();
sw.start();
sw.stop();
sw.stop();