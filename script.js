var amount,type,remark,items=[],balance=0,credit=0,debit=0;
var x=0,tempbalance = [],pro,los,proper,losper;
var name,password;
var no=-1,cell6;
document.getElementById('loginclose').addEventListener('click',function(){
    name = document.getElementById('name').value
    password=document.getElementById('password').value
    if(name == "" || password == ""){
        alert("Please Enter The Required Data")
    }
    else{
    document.getElementById('login').style.display="none";
    document.getElementById('darkscreen').style.display="none";
    document.getElementById('dispname').innerHTML="welcome Mr."+name;}
})
document.getElementById('close').addEventListener("click",function(){
    amount = document.getElementById('amount').value;
    type = document.getElementById('type').value;
    remark = document.getElementById('remark').value;
    var index = document.getElementById('run').value;
   if(amount == ""){
       alert('please enter the amount');
   }
   else{
       if(remark == ''){
           remark = '-nil-'
       }
       if(index != "noedit"){
           index = parseInt(index);
           items[index].amount=amount;
           items[index].type = type;
           items[index].remark = remark;
    }
    else{
        var object = new Object(amount,type,remark);
       items.push(object);
    }
       document.getElementById('amount').value="";
       document.getElementById('remark').value="";
       document.getElementById('run').value="noedit"
       document.getElementById('screen').style.display="none";
       document.getElementById('pop').style.display='none';
       document.getElementById('log').style.opacity='1';
       document.getElementById('table').innerHTML='<tr> <th>S.No</th> <th>Amount</th> <th>Type</th> <th>Remarks</th> <th> Balance </th> <th>Edit</th> <th>Delete</th> </tr>';
       circle()
       addtable()
   } 
});
function Object(amount,type,remark){
    this.amount = amount;
    this.type = type;
    this.remark=remark;
}
document.getElementById('add').addEventListener('click',function(){
    document.getElementById('screen').style.display="block";
       document.getElementById('pop').style.display='flex';
    document.getElementById('log').style.opacity='0';
})
function addtable(){
    var table = document.getElementById('table')
    x=0
    while(x < items.length){
        var sno = x+1
        var row = table.insertRow(sno);
        no+=1;
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3)
        var cell5 = row.insertCell(4)
        cell6 = row.insertCell(5)
        var cell7 = row.insertCell(6)
        cell6.setAttribute('id',no)
        cell1.innerHTML=sno;
        cell2.innerHTML=items[x].amount;
        cell3.innerHTML=items[x].type;
        cell4.innerHTML=items[x].remark;
        cell5.innerHTML=tempbalance[x];
        cell6.innerHTML='<svg id='+no+' onclick=editItem(this) class="bi endd bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/></svg>'
        cell7.innerHTML='<svg id='+no+' onclick=deleteItem(this) class="bi endd delete bi-trash2-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.037 3.225l1.684 10.104A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z"/><path fill-rule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"/></svg>'
        x++;
    }
    no=-1;
}

function editItem(x){
    var index = parseInt(x.getAttribute('id'))
    console.log(items)
    console.log(index)
   var updateamount;
   var updatetype;
   var updateremark;
   document.getElementById('amount').value=items[index].amount;
   document.getElementById('type').value=items[index].type;
    document.getElementById('remark').value=items[index].remark;
    document.getElementById('run').value=index.toString();
   document.getElementById('screen').style.display="block";
   document.getElementById('pop').style.display='flex';
document.getElementById('log').style.opacity='0'; 

}
function deleteItem(x){
    var index=parseInt(x.getAttribute('id'))
    items.splice(index,1)
    document.getElementById('table').innerHTML='<tr> <th>S.No</th> <th>Amount</th> <th>Type</th> <th>Remarks</th> <th> Balance </th> <th>Edit</th> <th>Delete</th> </tr>';
       circle()
       addtable()
    
}
function circle(){
    for (i=0;i<items.length;i++){
        if(items[i].type == 'credit'){
            balance+= parseInt(items[i].amount);
            credit+= parseInt(items[i].amount);
            tempbalance[i] = balance;
        }
        else{
            balance-= parseInt(items[i].amount);
            debit+= parseInt(items[i].amount);
            tempbalance[i] = balance;
        }
    }
    document.getElementById('bal').innerHTML=balance;
    document.getElementById('cre').innerHTML=credit;
    document.getElementById('deb').innerHTML=debit;
    tempbalance[i] = balance;
    pro = parseFloat((balance/credit) * 100).toFixed(2);
    los = parseFloat((debit/credit) * 100).toFixed(2);
    pro= pro == 'NaN'? 0 : pro;
    los= los == 'NaN'? 0 : los;
    proper =(440-( 440*pro)/100);
    losper = (440-( 440*los)/100);
    document.getElementById('pronum').innerHTML=pro+'<span class="per">%</span>';
    document.getElementById('losnum').innerHTML=los+'<span class="per">%</span>';
    document.getElementById('profittop').style.strokeDashoffset=proper;
    document.getElementById('losstop').style.strokeDashoffset=losper;
    balance = 0;
    credit = 0;
    debit = 0;
    totalam=0;
}