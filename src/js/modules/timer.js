function timer(selector, deadline) {
    function addZero(num) {
        if (num <= 9) {
            return '0' + num
        } else {
            return num
        }
    }

    const getTimeRemaining = (endTime) => {
        const t = Date.parse(endTime) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t / 1000 / 60) % 60),
              hours = Math.floor((t / (1000 * 60 *60)) % 24),
              days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        }
    }

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
              seconds = document.querySelector('#seconds'),
              minutes = document.querySelector('#minutes'),
              hours = document.querySelector('#hours'),
              days = document.querySelector('#days'),
              timeInterval = setInterval(updateClock, 1000);

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endTime)

            seconds.textContent = addZero(t.seconds)
            minutes.textContent = addZero(t.minutes)
            hours.textContent = addZero(t.hours)
            days.textContent = addZero(t.days)

            if (t.total <= 0) {
                seconds.textContent = '00'
                minutes.textContent = '00'
                hours.textContent = '00'
                days.textContent = '00'

                clearInterval(timeInterval)
            }
        }
    }

    setClock(selector, deadline)
}

export default timer