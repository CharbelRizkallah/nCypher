
var arr1 = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9',',','.','/',';',':','"','[',']','{','}','(',')','*','&','^','%','$','#','@','!','`','~','-','_','=','+','|','<','>','?',"'",'\\',' '];

var arr2 = ['"','3','$','8','m','>',' ','z','\\',']','q','<','t','\'','s','a','j','i',';','9','p','n','&','o','=','+','#','l','y','%','0','u','`','4','|','5','7','(','2','.','{','~','g','w','r','b','h','-','@','x',')',':','/','?','v','c',',','_','[','1','6','e','!','^','f','k','}','d','*'];

var arr3 = ['x','c','[',' ','q','%','$','=','k',',','>','&','5','r','|','g','}','n','^','v','t','o','f','@','b','2','d','8','{','j','(','z',';','6','/','l','e',':','7','1','s','<','h','p','\\','0','-','i','\'','?','#','"','4','.','`','_','m','w','~',']','a',')','*','!','+','3','u','y','9'];

var arr4 = ['y','*','!','\\','[','(','>','z','5','6','f','e','b','a','`','q','t','g','$','v',')','d',',','?','k','.','1','/','l','0','w','~','8',']','"','<','+','7','4','-','3','{','%','^','r','h','x','p','n','=',' ','i','u','#','c','@','o','j','2',':','m','\'','|','}',';','9','s','&','_'];

var arr5 = ['-','#','{','%','e','!','s','3','0','9','6','?','c','"','p','b','8','$','q','2','y','k','h','v','[','d','x','>','~','&','\'','_','5','z','u','o',']','1','@','i','j',';',',','<','7',':','`','a','4','t','g',')','.','\\','}','*','+',' ','=','|','w','n','(','m','/','^','l','f','r'];

var arr6 = ['i',':','p','r','l','n','z','k','6','\'','g','1','b','|','<','}','x',';','*','{','0','c','^','+','`','a','$','~','%',']','@','o','&','e','.','!','w','2','s','j','[','d','u','m','9','#',')','_','>',',','-','h','3','t','"','/','\\','?','=','q','7','f','5','y','8',' ','(','4','v'];

var arr7 = ['"','\'','<','}','%','h','b',')','@','l','t','#','e','!','0','w','o','/','2','5','{','?','[','z','c','a','1','6','n','m','f','p','&','8',' ','9','_','j','i','3','y',':','k','.',']',',','-','g','*','4','v','\\','7','s','|','=','$','~','^',';','q','x','(','d','+','`','>','u','r'];

var arr8 = [':',';',',','b','y','<','|','a','+','[','_','0','}','q','s','3','%','&','2','-','l',')','u','7','x','d','*','v','9','8','?','=','`','c','j','p','o','>','.','\\','{','1','r','k','h','f','@','#','~','$','g','!',']',' ','e','w','/','i','(','^','"','5','n','t','4','m','z','6','\''];

var arr9 = ['}','?','3','\\','2','g','#','+','e','1',']','\'','i','d','f','c',':','s','!','o','v','$','|',';','0','r','k','@','6','j','b','{','^','h','"','5','&','*','<','a','_','m','(','y','x','/','`','=','w','>',' ','-','[','u','n','.','z',',','l','t','%','8','4','q','9','7','p',')','~'];


export const ncypher = ( text, key ) => {
    var cyphered = text;

    for(var i = 0 ; i < key.length ; i++){
        switch (key[i]) {
            case 'a':
            case '0':
            case '$':
                cyphered = cypher1(cyphered);
                break;
        
            case 'b':
            case '1':
            case '#':
                cyphered = cypher2(cyphered);
                break;
        
            case 'c':
            case '2':
            case '@':
                cyphered = cypher3(cyphered);
                break;
        
            case 'd':
            case '3':
            case '!':
                cyphered = cypher4(cyphered);
                break;
        
            case 'e':
            case '4':
            case '`':
                cyphered = cypher5(cyphered);
                break;
        
            case 'f':
            case '5':
            case '~':
                cyphered = cypher6(cyphered);
                break;
        
            case 'g':
            case '6':
            case '-':
                cyphered = cypher7(cyphered);
                break;
        
            case 'h':
            case '7':
            case '_':
                cyphered = cypher8(cyphered);
                break;
        
            case 'i':
            case '8':
            case '=':
                cyphered = cypher9(cyphered);
                break;
        
            case 'j':
            case '9':
            case '+':
                cyphered = cypher10(cyphered);
                break;
        
            case 'k':
            case ',':
            case '<':
                cyphered = cypher11(cyphered);
                break;
        
            case 'l':
            case '.':
            case '>':
                cyphered = cypher12(cyphered);
                break;
        
            case 'm':
            case '/':
            case '?':
                cyphered = cypher13(cyphered);
                break;
        
            case 'n':
            case ';':
            case "'":
                cyphered = cypher14(cyphered);
                break;
        
            case 'o':
            case ':':
            case'\\':
                cyphered = cypher15(cyphered);
                break;
        
            case 'p':
            case '"':
            case ' ':
                cyphered = cypher16(cyphered);
                break;
        
            case 'q':
            case '[':
            case '|':
                cyphered = cypher17(cyphered);
                break;
        
            case 'r':
            case ']':
                cyphered = cypher18(cyphered);
                break;
        
            case 's':
            case '{':
                cyphered = cypher19(cyphered);
                break;
        
            case 't':
            case '}':
                cyphered = cypher20(cyphered);
                break;
        
            case 'u':
            case '(':
                cyphered = cypher21(cyphered);
                break;
        
            case 'v':
            case ')':
                cyphered = cypher22(cyphered);
                break;
        
            case 'w':
            case '*':
                cyphered = cypher23(cyphered);
                break;
        
            case 'x':
            case '&':
                cyphered = cypher24(cyphered);
                break;
        
            case 'y':
            case '^':
                cyphered = cypher25(cyphered);
                break;
        
            case 'z':
            case '%':
                cyphered = cypher26(cyphered);
                break;
        
            default:
                break;
        }
    }

    return cyphered;
}

export const ndecypher = ( text, key ) => {
    var decyphered = text;

    for(var i = key.length-1 ; i >= 0  ; i--){
        switch (key[i]) {
            case 'a':
            case '0':
            case '$':
                decyphered = decypher1(decyphered);
                break;
        
            case 'b':
            case '1':
            case '#':
                decyphered = decypher2(decyphered);
                break;
        
            case 'c':
            case '2':
            case '@':
                decyphered = decypher3(decyphered);
                break;
        
            case 'd':
            case '3':
            case '!':
                decyphered = decypher4(decyphered);
                break;
        
            case 'e':
            case '4':
            case '`':
                decyphered = decypher5(decyphered);
                break;
        
            case 'f':
            case '5':
            case '~':
                decyphered = decypher6(decyphered);
                break;
        
            case 'g':
            case '6':
            case '-':
                decyphered = decypher7(decyphered);
                break;
        
            case 'h':
            case '7':
            case '_':
                decyphered = decypher8(decyphered);
                break;
        
            case 'i':
            case '8':
            case '=':
                decyphered = decypher9(decyphered);
                break;
        
            case 'j':
            case '9':
            case '+':
                decyphered = decypher10(decyphered);
                break;
        
            case 'k':
            case ',':
            case '<':
                decyphered = decypher11(decyphered);
                break;
        
            case 'l':
            case '.':
            case '>':
                decyphered = decypher12(decyphered);
                break;
        
            case 'm':
            case '/':
            case '?':
                decyphered = decypher13(decyphered);
                break;
        
            case 'n':
            case ';':
            case "'":
                decyphered = decypher14(decyphered);
                break;
        
            case 'o':
            case ':':
            case'\\':
                decyphered = decypher15(decyphered);
                break;
        
            case 'p':
            case '"':
            case ' ':
                decyphered = decypher16(decyphered);
                break;
        
            case 'q':
            case '[':
            case '|':
                decyphered = decypher17(decyphered);
                break;
        
            case 'r':
            case ']':
                decyphered = decypher18(decyphered);
                break;
        
            case 's':
            case '{':
                decyphered = decypher19(decyphered);
                break;
        
            case 't':
            case '}':
                decyphered = decypher20(decyphered);
                break;
        
            case 'u':
            case '(':
                decyphered = decypher21(decyphered);
                break;
        
            case 'v':
            case ')':
                decyphered = decypher22(decyphered);
                break;
        
            case 'w':
            case '*':
                decyphered = decypher23(decyphered);
                break;
        
            case 'x':
            case '&':
                decyphered = decypher24(decyphered);
                break;
        
            case 'y':
            case '^':
                decyphered = decypher25(decyphered);
                break;
        
            case 'z':
            case '%':
                decyphered = decypher26(decyphered);
                break;
        
            default:
                break;
        }
    }

    return decyphered;
}

const cypher1 = ( text ) => {
    var cypher1 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher1 += arr1[(index+3)-arr1.length];
                }else{
                    cypher1 += arr1[index+3];
                }
            }
        });

    }
    return cypher1;
}

const decypher1 = ( text ) => {
    var decypher1 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher1 += arr1[arr1.length+(index-3)];
                }else{
                    decypher1 += arr1[index-3];
                }
            }
        });

    }
    return decypher1;
}

const cypher2 = ( text ) => {
    var cypher2 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher2 += arr1[arr1.length+(index-5)];
                }else{
                    cypher2 += arr1[index-5];
                }
            }
        });

    }
    return cypher2;
}

const decypher2 = ( text ) => {
    var decypher2 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher2 += arr1[(index+5)-arr1.length];
                }else{
                    decypher2 += arr1[index+5];
                }
            }
        });

    }
    return decypher2;
}

const cypher3 = ( text ) => {
    var cypher3 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher3 += arr2[index];
                }else{
                    cypher3 += arr2[index];
                }
            }
        });

    }
    return cypher3;
}

const decypher3 = ( text ) => {
    var decypher3 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr2.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher3 += arr1[index];
                }else{
                    decypher3 += arr1[index];
                }
            }
        });

    }
    return decypher3;
}

const cypher4 = ( text ) => {
    var cypher4 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr2.length-1){
                    cypher4 += arr2[(index+3)-arr2.length];
                }else{
                    cypher4 += arr2[index+3];
                }
            }
        });

    }
    return cypher4;
}

const decypher4 = ( text ) => {
    var decypher4 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr2.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher4 += arr1[arr1.length+(index-3)];
                }else{
                    decypher4 += arr1[index-3];
                }
            }
        });

    }
    return decypher4;
}

const cypher5 = ( text ) => {
    var cypher5 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher5 += arr2[arr2.length+(index-5)];
                }else{
                    cypher5 += arr2[index-5];
                }
            }
        });

    }
    return cypher5;
}

const decypher5 = ( text ) => {
    var decypher5 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr2.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher5 += arr1[(index+5)-arr1.length];
                }else{
                    decypher5 += arr1[index+5];
                }
            }
        });

    }
    return decypher5;
}

const cypher6 = ( text ) => {
    var cypher6 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher6 += arr3[index];
                }else{
                    cypher6 += arr3[index];
                }
            }
        });

    }
    return cypher6;
}

const decypher6 = ( text ) => {
    var decypher6 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr3.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher6 += arr1[index];
                }else{
                    decypher6 += arr1[index];
                }
            }
        });

    }
    return decypher6;
}

const cypher7 = ( text ) => {
    var cypher7 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr3.length-1){
                    cypher7 += arr3[(index+3)-arr3.length];
                }else{
                    cypher7 += arr3[index+3];
                }
            }
        });

    }
    return cypher7;
}

const decypher7 = ( text ) => {
    var decypher7 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr3.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher7 += arr1[arr1.length+(index-3)];
                }else{
                    decypher7 += arr1[index-3];
                }
            }
        });

    }
    return decypher7;
}

const cypher8 = ( text ) => {
    var cypher8 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher8 += arr3[arr3.length+(index-5)];
                }else{
                    cypher8 += arr3[index-5];
                }
            }
        });

    }
    return cypher8;
}

const decypher8 = ( text ) => {
    var decypher8 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr3.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher8 += arr1[(index+5)-arr1.length];
                }else{
                    decypher8 += arr1[index+5];
                }
            }
        });

    }
    return decypher8;
}

const cypher9 = ( text ) => {
    var cypher9 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher9 += arr4[index];
                }else{
                    cypher9 += arr4[index];
                }
            }
        });

    }
    return cypher9;
}

const decypher9 = ( text ) => {
    var decypher9 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr4.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher9 += arr1[index];
                }else{
                    decypher9 += arr1[index];
                }
            }
        });

    }
    return decypher9;
}

const cypher10 = ( text ) => {
    var cypher10 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr4.length-1){
                    cypher10 += arr4[(index+3)-arr4.length];
                }else{
                    cypher10 += arr4[index+3];
                }
            }
        });

    }
    return cypher10;
}

const decypher10 = ( text ) => {
    var decypher10 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr4.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher10 += arr1[arr1.length+(index-3)];
                }else{
                    decypher10 += arr1[index-3];
                }
            }
        });

    }
    return decypher10;
}

const cypher11 = ( text ) => {
    var cypher11 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher11 += arr4[arr4.length+(index-5)];
                }else{
                    cypher11 += arr4[index-5];
                }
            }
        });

    }
    return cypher11;
}

const decypher11 = ( text ) => {
    var decypher11 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr4.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher11 += arr1[(index+5)-arr1.length];
                }else{
                    decypher11 += arr1[index+5];
                }
            }
        });

    }
    return decypher11;
}

const cypher12 = ( text ) => {
    var cypher12 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher12 += arr5[index];
                }else{
                    cypher12 += arr5[index];
                }
            }
        });

    }
    return cypher12;
}

const decypher12 = ( text ) => {
    var decypher12 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr5.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher12 += arr1[index];
                }else{
                    decypher12 += arr1[index];
                }
            }
        });

    }
    return decypher12;
}

const cypher13 = ( text ) => {
    var cypher13 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr5.length-1){
                    cypher13 += arr5[(index+3)-arr5.length];
                }else{
                    cypher13 += arr5[index+3];
                }
            }
        });

    }
    return cypher13;
}

const decypher13 = ( text ) => {
    var decypher13 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr5.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher13 += arr1[arr1.length+(index-3)];
                }else{
                    decypher13 += arr1[index-3];
                }
            }
        });

    }
    return decypher13;
}

const cypher14 = ( text ) => {
    var cypher14 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher14 += arr5[arr5.length+(index-5)];
                }else{
                    cypher14 += arr5[index-5];
                }
            }
        });

    }
    return cypher14;
}

const decypher14 = ( text ) => {
    var decypher14 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr5.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher14 += arr1[(index+5)-arr1.length];
                }else{
                    decypher14 += arr1[index+5];
                }
            }
        });

    }
    return decypher14;
}

const cypher15 = ( text ) => {
    var cypher15 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher15 += arr6[index];
                }else{
                    cypher15 += arr6[index];
                }
            }
        });

    }
    return cypher15;
}

const decypher15 = ( text ) => {
    var decypher15 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr6.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher15 += arr1[index];
                }else{
                    decypher15 += arr1[index];
                }
            }
        });

    }
    return decypher15;
}

const cypher16 = ( text ) => {
    var cypher16 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr6.length-1){
                    cypher16 += arr6[(index+3)-arr6.length];
                }else{
                    cypher16 += arr6[index+3];
                }
            }
        });

    }
    return cypher16;
}

const decypher16 = ( text ) => {
    var decypher16 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr6.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher16 += arr1[arr1.length+(index-3)];
                }else{
                    decypher16 += arr1[index-3];
                }
            }
        });

    }
    return decypher16;
}

const cypher17 = ( text ) => {
    var cypher17 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher17 += arr6[arr6.length+(index-5)];
                }else{
                    cypher17 += arr6[index-5];
                }
            }
        });

    }
    return cypher17;
}

const decypher17 = ( text ) => {
    var decypher17 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr6.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher17 += arr1[(index+5)-arr1.length];
                }else{
                    decypher17 += arr1[index+5];
                }
            }
        });

    }
    return decypher17;
}


const cypher18 = ( text ) => {
    var cypher18 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher18 += arr7[index];
                }else{
                    cypher18 += arr7[index];
                }
            }
        });

    }
    return cypher18;
}

const decypher18 = ( text ) => {
    var decypher18 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr7.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher18 += arr1[index];
                }else{
                    decypher18 += arr1[index];
                }
            }
        });

    }
    return decypher18;
}

const cypher19 = ( text ) => {
    var cypher19 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr7.length-1){
                    cypher19 += arr7[(index+3)-arr7.length];
                }else{
                    cypher19 += arr7[index+3];
                }
            }
        });

    }
    return cypher19;
}

const decypher19 = ( text ) => {
    var decypher19 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr7.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher19 += arr1[arr1.length+(index-3)];
                }else{
                    decypher19 += arr1[index-3];
                }
            }
        });

    }
    return decypher19;
}

const cypher20 = ( text ) => {
    var cypher20 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher20 += arr7[arr7.length+(index-5)];
                }else{
                    cypher20 += arr7[index-5];
                }
            }
        });

    }
    return cypher20;
}

const decypher20 = ( text ) => {
    var decypher20 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr7.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher20 += arr1[(index+5)-arr1.length];
                }else{
                    decypher20 += arr1[index+5];
                }
            }
        });

    }
    return decypher20;
}

const cypher21 = ( text ) => {
    var cypher21 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher21 += arr8[index];
                }else{
                    cypher21 += arr8[index];
                }
            }
        });

    }
    return cypher21;
}

const decypher21 = ( text ) => {
    var decypher21 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr8.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher21 += arr1[index];
                }else{
                    decypher21 += arr1[index];
                }
            }
        });

    }
    return decypher21;
}

const cypher22 = ( text ) => {
    var cypher22 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr8.length-1){
                    cypher22 += arr8[(index+3)-arr8.length];
                }else{
                    cypher22 += arr8[index+3];
                }
            }
        });

    }
    return cypher22;
}

const decypher22 = ( text ) => {
    var decypher22 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr8.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher22 += arr1[arr1.length+(index-3)];
                }else{
                    decypher22 += arr1[index-3];
                }
            }
        });

    }
    return decypher22;
}

const cypher23 = ( text ) => {
    var cypher23 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher23 += arr8[arr8.length+(index-5)];
                }else{
                    cypher23 += arr8[index-5];
                }
            }
        });

    }
    return cypher23;
}

const decypher23 = ( text ) => {
    var decypher23 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr8.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher23 += arr1[(index+5)-arr1.length];
                }else{
                    decypher23 += arr1[index+5];
                }
            }
        });

    }
    return decypher23;
}

const cypher24 = ( text ) => {
    var cypher24 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr1.length-1){
                    cypher24 += arr9[index];
                }else{
                    cypher24 += arr9[index];
                }
            }
        });

    }
    return cypher24;
}

const decypher24 = ( text ) => {
    var decypher24 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr9.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher24 += arr1[index];
                }else{
                    decypher24 += arr1[index];
                }
            }
        });

    }
    return decypher24;
}

const cypher25 = ( text ) => {
    var cypher25 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+3 > arr9.length-1){
                    cypher25 += arr9[(index+3)-arr9.length];
                }else{
                    cypher25 += arr9[index+3];
                }
            }
        });

    }
    return cypher25;
}

const decypher25 = ( text ) => {
    var decypher25 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr9.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-3 < 0){
                    decypher25 += arr1[arr1.length+(index-3)];
                }else{
                    decypher25 += arr1[index-3];
                }
            }
        });

    }
    return decypher25;
}

const cypher26 = ( text ) => {
    var cypher26 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr1.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index-5 < 0){
                    cypher26 += arr9[arr9.length+(index-5)];
                }else{
                    cypher26 += arr9[index-5];
                }
            }
        });

    }
    return cypher26;
}

const decypher26 = ( text ) => {
    var decypher26 = '';
    for(var i = 0 ; i < text.length ; i++){
        
        arr9.map((arr, index) => {
            if(arr === text[i].toLowerCase()){
                if(index+5 > arr1.length-1){
                    decypher26 += arr1[(index+5)-arr1.length];
                }else{
                    decypher26 += arr1[index+5];
                }
            }
        });

    }
    return decypher26;
}