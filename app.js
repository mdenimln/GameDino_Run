

    let isMoving = true;
    function setBackgroundMoving() {
        if(isMoving == true){
            setTimeout(function() {
                var bg = document.getElementById('board');
                bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';
        
                document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
                setBackgroundMoving();
            }, 3.5);
        }
        
    }
    setBackgroundMoving();

    // 

    function setBoxMoving() {
        var box  = document.getElementById('box'),
            dino = document.getElementById('dino')

        setTimeout(function() {
            box.style.marginLeft = (parseInt(box.style.marginLeft.replace('px', '')) -1) +'px';
            if(parseInt(box.style.marginLeft.replace('px', '')) < -70){
                box.style.marginLeft = '700px';
            }

            if(dino.offsetTop + 50 >= box.offsetTop &&
                dino.offsetLeft + 50 >= box.offsetLeft &&
                dino.offsetTop + 50 <= box.offsetTop + 50 &&
                dino.offsetLeft <= box.offsetLeft + 50) {
                    dino.setAttribute('class', 'freeze');
                    isMoving = false;
                    alert('game over')
            } else {
                setBoxMoving();
            }
            
        }, 3.5);
    }
    setBoxMoving();

    // 

    window.addEventListener('keyup', function(e) {
        if (e.keyCode == 32){
            this.document.getElementById('dino').style.marginTop = '100px';
            this.document.getElementById('dino').setAttribute('class' , 'freeze');
            this.setTimeout(function(){
                this.document.getElementById('dino').style.marginTop = '250px';
                this.document.getElementById('dino').setAttribute('class' , '');
            }, 1000)
        }
        
    });
