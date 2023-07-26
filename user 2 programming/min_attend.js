

// attend(7, 6);

// function  attend(m , n){
//     let required = 0.75 * m;
//     let needed = 0;
//     if(n < required){
//         needed = required - n;
//         return needed;
//     }else{
//         return needed;
//     }
// }

// let result = attend(7, 6);
// console.log(result);

//Its my method.

function attend(m, n){
    if(n < m * 0.75){
        console.log(0.75 ,"attendance");
    }else{
        console.log("attendace is", 0);
    }

}

attend(7, 6);

//Its ans from relevel

// function minimumLectures(m, n)
// 	{
// 		let ans = 0;

// 		// Formula to compute
// 		if (n < Math.ceil(0.75 * m))
// 			ans = Math.ceil(((0.75 * m) - n) / 0.25);
// 		else
// 			ans = 0;

// 		return ans;
// 	}
	
// 	let M = 7, N = 6;
// 	console.log(minimumLectures(M, N));



