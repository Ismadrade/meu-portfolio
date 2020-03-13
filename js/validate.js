$(()=>{
    $('form').on('submit', e => {

        const form = e.target;
        if(form.checkValidity() === false){
            e.preventDefault();
            e.stopPropagation();

        }

        $(form).addClass('was-validated');
    })
})