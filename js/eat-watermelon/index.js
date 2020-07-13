// https://www.codewars.com/kata/570db6dade4dc8966600051c

// short version
// prettier-ignore
export
function sc(w,j,e,s=[0,0,0,0],r=0,i=8){
for(;i--;)for(j=8;j--;)(s[(i>3)*2+(j>3)]+=w[i][j])
for(e of s){r+=(e>5)*e}return r}

// formatted version
// export function sc(w, j, e, s = [0, 0, 0, 0], r = 0, i = 8) {
//     for (; i--; ) for (j = 8; j--; ) s[(i > 3) * 2 + (j > 3)] += w[i][j];
//     for (e of s) {
//         r += (e > 5) * e;
//     }
//     return r;
// }
