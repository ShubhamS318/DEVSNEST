
/* Write a JavaScript function to check whether an `input` is an array or not
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
True*/

is_array = function(input)
{
if (tostring.call(input) === "[object Array]")
return true;
return false;
};
console.log(is_array('w3resource'));
console.log(is_array([1,2,4,0]));


/*Write a JavaScript function to clone an array
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]*/

array_Clone = function(arral)
{
return arral.slice(0);

};
console.log(array_Clone([1,2,4,0]));
console.log(array_Clone([1,2,[4,0]]));


/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]*/

first = function(array, n) 
{
if (array == null)
return void 0;
if(n == null)
return array[0];
if (n < 0)
return [];
return array.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9,0, -2],6));
console.log(first([7, 9, 0, -2],-3));


/*Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/

mycolour = ["Red", "Green", "White", "Black"];
console.log(mycolour.toString());
console.log(myColour.join());
console.log(myColour.join('+'));



/*Write a JavaScript program to find the most frequent item of an array
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )*/

var arr1=[3,'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;
for (var i=0; i.lenght; i++);
{
for (var j=1; j<arr1.lenght; j++)
{
    if (arr1[i] == arr1[j])
    m++;
    if (mf<m)
    {

        mf=m;
        item = arr1[i];
    
    }
}
m=0;

}
console.log(item+" ( " +mf +"times ) ");