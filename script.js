/****************************menu************************/

((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector('.menu');

    $btnMenu.addEventListener('click' , e => {
        $btnMenu.firstElementChild.classList.toggle('none');
        $btnMenu.lastElementChild.classList.toggle('none');

        $menu.classList.toggle('isactive');
    });

    d.addEventListener('click', e => {
        if(!e.target.matches('.menu a')) return false;
        $menu.classList.remove('isactive');
        $btnMenu.firstElementChild.classList.remove('none');
        $btnMenu.lastElementChild.classList.add('none');
    });

})(document);


/********** COnctact form */

((d) => {
    const $form = d.getElementById('conctact-form'),
    $loader = d.querySelector('.conctact-form-loader'),
    $response = d.querySelector('.conctact-form-response');

    $form.addEventListener('submit' , e => {
        e.preventDefault();
        $loader.classList.remove('none');
        fetch('https://formsubmit.co/ajax/anino79@misena.edu.co',{
            method: 'POST',
            body: new FormData(e.target)
        })
         .then( res => res.ok ? res.json() : Promise.reject(res))
         .then( data => {
            console.log(data);
            location.hash = '#gracias';
            $form.reset();
         })
         .catch( err => {
            console.error(err);
            let messague = err.statusText || "ocurrio un error";
            $response.querySelector('h3').innerHTML = `Error ${err.status} ${messague}`;
         })
         .finally(() => {
            $loader.classList.add('none'); 
            setTimeout(() => {
                location.hash = "#close";
            });
         })

    });
})(document);