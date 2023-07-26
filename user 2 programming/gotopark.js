

function canDoToPark(temp, isRaining){
    if(temp>=20 && temp<=25 && !isRaining){
        console.log("Children can go to park");
    }else if(temp>=18 && temp<=20 && isRaining){
        console.log("children can't play");
    }else{
        console.log("can't step out of home");
    }
}

canDoToPark(18, );
canDoToPark(26);
canDoToPark(14);