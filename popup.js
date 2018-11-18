document.getElementById('button').addEventListener('click', function(){
    console.log('helloworld');
    
    document.getElementById('box').style.display='block';
});

document.getElementById('button1').addEventListener('click', function () {
    console.log('submit');

    document.getElementById('submit_box').style.display = 'block';
});

document.getElementById('button2').addEventListener('click', function () {
    console.log('share_button');

    document.getElementById('share_box').style.display = 'block';
});

document.getElementById('button3').addEventListener('click', function () {
    console.log('help_button');

    document.getElementById('help_box').style.display = 'block';
});