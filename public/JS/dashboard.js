// ----------------------DropDown menu --------------

    
document.addEventListener('DOMContentLoaded', function() {
    var drop = document.getElementById('drop');
    var dropdown = document.getElementById('dropdown');

    drop.addEventListener('mouseover', function() {
        dropdown.style.display = 'block';
    });

    drop.addEventListener('mouseout', function() {
        dropdown.style.display = 'none';
    });
});

// --------------------Account Show------------
    var account = document.getElementById('acc');
    var acct = document.getElementById('men');

    account.addEventListener('mouseover', function() {
        // Show the account menu
        acct.style.display = 'block';
    });

    account.addEventListener('mouseout', function(event) {
        if (!event.relatedTarget || !event.relatedTarget.closest('#men')) {
            acct.style.display = 'none';
        }
    });


    function toogleAccount(){
        if(acct.style.display === 'block'){
            acct.style.display = 'none';
        }else{
            acct.style.display = 'block';
        }
    }
    account.addEventListener('click', function(){
        toogleAccount();
    })


    // slide content
    const slide = document.querySelectorAll(".firstsecond");
    var counter = 0
    slide.forEach(
        (slide, index)=>{
            slide.style.left = `${index*100}%`;
        }
    )

    const slideContent = ()=>{
        slide.forEach(
            (slide)=>{
                slide.style.transform = `translateX(-${counter*100}%)`;
            }
        )
    }

    const goNext = () =>{
        counter++;
        if (counter >= slide.length) {
            counter = 0; // Reset counter if at the end
        }
        slideContent();
    }
    const goPrevious =()=>{
        counter--;
        if (counter < 0) {
            counter = slide.length - 1; // Go to the last slide if at the beginning
        }
        slideContent();
    }

    const nextIcon = document.getElementById("nextIcon");
    const previousIcon = document.getElementById("previousIcon");

    nextIcon.addEventListener("click", goNext);
    previousIcon.addEventListener("click", goPrevious);