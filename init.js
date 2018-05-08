$(function(){

    $('.search-input').on(input, function(e){
        e.preventDefault();
        let mod = new searchBar('.searchBar');  //now plug into the div  
        let searchString = e.target.value.toLowerCase(); //make sure returned results are in lowercase
        //now call searchBar and input the searchString into the API

    });

    })
