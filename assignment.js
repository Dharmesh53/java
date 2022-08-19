function question1( )
{
    let sum=0,n;
    for(let i=0; i<=10; i++){
        sum=sum+i;
    }
    document.write("<br>"+ "The Sum of Natural no is "+sum);
}

function question2( )
{
let a,b;
a = parseInt(prompt("Enter the First Number", "0"), 00);
b = parseInt(prompt("Enter the last number", "0"), 00);
let sum=0;
for(let i=a+1;i<b;i++)
{ 
    sum=sum+i ;  
}
document.write("<br>"+ "Add of all numbers in between  "+ a +" & "+ b +" is "+sum);

}

function question3( )
{
    let n;
    n = parseInt(prompt("Enter the value of n ", "0"), 00);
    document.write( "Table of 5 upto to "+ n + " is"+"<br>")
    for(let i=1;i<=n;i++)
    {
        let mult=5*i;
        document.write("<br>"+ 5 + "x" + i + "=" + mult + "<br>");
    }
}

function question4()
{
    let n;
    n = parseInt(prompt("Enter the value of n ", "0"), 00);
    document.write( "Table of 5 upto to "+ n + " is "+"<br>")
    for(let i=1;i<=10;i++)
    {
        let mult=n*i;
        document.write("<br>"+ n + "x" + i + "=" + mult + "<br>");
    }
}

function question5()
{
    let n;
    n = parseInt(prompt("Enter the Number to calculate Sum of : ","0"), 00);
    let temp=n;
    let sum = 0;
    while (n)
    {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    document.write("<br>"+"The sum of the " + temp + " is "+ sum);
}

function question6()
{
    let rev = 0;
    let num , lastDig ;
    num=parseInt(prompt("Enter the Number to Reverse  ","0"), 00);

    while(num != 0)
    {
	    lastDig = num % 10;
        rev = rev * 10 + lastDig;
        num = Math.floor(num/10);
    }
    document.write("<br>"+ "Reversed number is "+rev);
}

function question7( )
{
    document.write("Even numbers from 0 to 10 are <br>")
    for(i=0;i<10;i++)
    {
        if(i%2==0)
        document.write( "<br>"+ i + "<br>")
    }
}

function question8( )
{
    let a,b;
    a = parseInt(prompt("Enter the starting Number", "0"), 00);
    b = parseInt(prompt("Enter the ending number", "0"), 00);
    document.write("Odd Numbers between " +a+" & "+b+ " are <br>")
    for(let i=a; i<=b; i++)
    {
        if(i%2 != 0)
        {
            document.write( "<br>"+ i + "<br>")
        }
    }
}

function question9( )
{
    document.write("All numbers divisible by 3 between 1 to 30 are <br>")
    for(i=1;i<=30;i++)
    {
        if(i%3==0)
        document.write( "<br>"+ i + "<br>")
    }
}
function question10( )
{
    let a,b;
    a = parseInt(prompt("Enter the starting Number", "0"), 00);
    b = parseInt(prompt("Enter the ending number", "0"), 00);
    document.write("All number which are not divisible between " +a+" & "+b+ " are <br>")
    for(let i=a; i<=b; i++)
    {
        if(i%3!=0)
        {
            document.write("<br>"+ i + "<br>")
        }
    }
}

function question11( )
{
    let n;
    n = parseInt(prompt("Enter the value of n ", "0"), 00);
    document.write( "Double of "+ n + " is "+ n*2 +" <br>") 
}

function question12( )
{
    let n;
    n = window.prompt("Enter the day (s for saturday and S for sunday)");
    if(n[0]=='s' || n[0]=='S') 
    {
        document.write("It is a Weekend :)");
    }
    else 
    {
        document.write("It is a working day :( ");
    }
}

function question13()
{
    let n;
    n = parseInt(prompt('Enter the Number of terms (n)'));
    let n1 = 0, n2 = 1, next;
    document.write("Fibonacci Series is <br>");
    for (let i = 1; i <= n; i++) 
    {
        document.write("<br>"+ n1 + "<br>");
        next = n1 + n2;
        n1 = n2;
        n2 = next;
    }
}

function question14( )
{
    var n;
    n = parseInt(prompt("Enter the Number", "0"), 00);
    document.write("Square of "+ n + " is : "+ n*n +"<br>");
    document.write("<br>"+ "Cube of "+ n + " is : "+ n*n*n +"\n");
}

function question16( )
{
    var x,y,z;
    x = parseInt(prompt("Enter the First Number", "0"), 00);
    y = parseInt(prompt("Enter the Second Number", "0"), 00);
    z = parseInt(prompt("Enter the Third Number", "0"), 00);
    (x>y && x>z)?document.write(x + " is greatest"):((y>x && y>z)?document.write(y + " is greatest"):document.write(z + " is greatest"));
}

function question17( )
{
    let sum=0,n;
    n = parseInt(prompt("Enter the value of n", "0"), 00);
    for(let i=0; i<=n; i++){
        sum=sum+i;
    }
    document.write("<br>"+ "The Sum of Natural no is "+sum);
}

function question19( )
{
    let
    n = prompt("Enter characters ");
    if (Number.isFinite(Number(n))) 
    {
        document.write("Entered characters are number.");
    }
    else
    {
        document.write("Entered characters are alphabet.");
    } 
}

function question20( )
{
    let n;
    n = parseInt(prompt("Enter the Number"), 00);
    (n==0)?document.write("Number is zero\n"):((n>0)?document.write("Number is Positive"):document.write("Number is Negative"));
}
