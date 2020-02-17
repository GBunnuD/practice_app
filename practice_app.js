function practice_app()
{
     const total=parseFloat(document.querySelector('#total1').value)
     const rate=parseFloat(document.querySelector('#rate1').value)
     const tip=total*rate/100
     const tax=total*5.5/100
     const grandtotal=total+tip+tax;
    

     document.querySelector('#tip').innerHTML=`${tip.toFixed(3)}`
     document.querySelector('#tax').innerHTML=`${tax.toFixed(3)}`
     document.querySelector('#grandtotal').innerHTML=`${grandtotal.toFixed(2)}`
}
     document.querySelector('#calculation').addEventListener('click',practice_app)