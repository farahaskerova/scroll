window.onload = function(){
    document.getElementById('whats').onclick = function() {
        window.scroll({
            top: 10,
            left: 10,
            behavior: 'smooth'
        })
    }

    document.getElementById('mains').onclick = function() {
        window.scroll({
            top: 800,
            left: 800,
            behavior: 'smooth'
        })
    }

    document.getElementById('job').onclick = function() {
        window.scroll({
            top: 1600,
            left: 1600,
            behavior: 'smooth'
        })
    }

    document.getElementById('new').onclick = function() {
        window.scroll({
            top: 2400,
            left: 2400,
            behavior: 'smooth'
        })
    }
}
