for (let a = 2; a <= 1000; a++) 
{
    let prima = true;

    for (let i = 2; i * i <= a; i++) 
    {
        if (a % i === 0) 
        {
            prima = false;
            break;
        }
    }
    if (prima) {
        console.log(a);
    }
}
