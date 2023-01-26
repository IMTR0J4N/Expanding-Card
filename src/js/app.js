const sections = document.getElementsByTagName('section');

sections.forEach(i => {
    i.onclick = () => {
        i.classList.toggle('expanded-card');
    }
})