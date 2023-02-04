

    let isMoving = true;
    function setBackgroundMoving() {
        if(isMoving == true){
            setTimeout(function() {
                var bg = document.getElementById('board');
                bg.style.backgroundPosition = (parseInt(bg.style.backgroundPosition.replace('px', ''))-1) + 'px';
        
                document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
                setBackgroundMoving();
            }, 3);
        }
        
    }
    setBackgroundMoving();

    // 

    function setBoxMoving() {
        var box  = document.getElementById('box'),
            dino = document.getElementById('dino')

        setTimeout(function() {
            box.style.marginLeft = (parseInt(box.style.marginLeft.replace('px', '')) -1) +'px';
            if(parseInt(box.style.marginLeft.replace('px', '')) < -60){
                box.style.marginLeft = '1500px';
            }

            if(dino.offsetTop + 70 >= box.offsetTop &&
                dino.offsetLeft + 70 >= box.offsetLeft &&
                dino.offsetTop + 70 <= box.offsetTop + 70 &&
                dino.offsetLeft <= box.offsetLeft + 70) {
                    dino.setAttribute('class', 'freeze');
                    isMoving = false;
                    alert('game over score kamu : '+ document.getElementById('score').innerHTML)
            } else {
                setBoxMoving();
            }
            
        }, 3);
    }
    setBoxMoving();

    // 

    window.addEventListener('keyup', function(e) {
        if (e.keyCode == 32){
            this.document.getElementById('dino').style.marginTop = '70px';
            this.document.getElementById('dino').setAttribute('class' , 'freeze');
            this.setTimeout(function(){
                this.document.getElementById('dino').style.marginTop = '350px';
                this.document.getElementById('dino').setAttribute('class' , '');
            }, 1000)
        }
        
    });
