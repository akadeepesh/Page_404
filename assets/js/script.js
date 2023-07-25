const sr = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: '2500',
    delay: '400',
})

sr.reveal(`.image`)
sr.reveal(`.text`, {origin: 'right'})