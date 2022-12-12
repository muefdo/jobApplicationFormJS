

function basarıyla(){
    document.getElementById("subbut").innerHTML = "BAŞARIYLA YÜKLENDİ"
}

function halacal(){
  
    if(document.getElementById("cont").checked)
    
            document.getElementById("enyear").disabled= true;
    else
            document.getElementById("enyear").disabled= false;
}  

var deneyimform = document.getElementById("deneyimform");
var dosyaindex= 0 ;


function addexp(){

    var cnamelabel = document.createElement("label");
    var cnameinput = document.createElement("input");
   
    var styearlabel = document.createElement("label");
    var styearinput = document.createElement("input");
    
    var enyearlabel = document.createElement("label");
    var enyearinput = document.createElement("input");
    
    var contlabel = document.createElement("label");
    var continput = document.createElement("input");

    const inputarr = new Array(cnameinput, styearinput, enyearinput ,continput);
    const realinputarr = new Array(`cname_${dosyaindex}`, `styear_${dosyaindex}`, `enyear_${dosyaindex}`, `cont_${dosyaindex}`);
    const inputtype = new Array("text", "date","date", "checkbox");
    const inputplaceholder = new Array("şirket ismi", "başlangıç yılı","bitiş yılı", "hala çalışıyorum" );
    
    const labelarr = new Array(cnamelabel, styearlabel, enyearlabel, contlabel);
    const reallabelarr = new Array(`cname_${dosyaindex}`, `styear_${dosyaindex}`, `enyear_${dosyaindex}`, `cont_${dosyaindex}`);

    inputarr.forEach((element, index) =>{ 
        console.log(inputarr, index);
        element.setAttribute('id', realinputarr[index]);
        element.setAttribute('type', inputtype[index]);
        element.setAttribute('placeholder', inputplaceholder[index]);
     
     });
    labelarr.forEach((element, index)=>{
        element.setAttribute("id", reallabelarr[index]);
        });
        

        deneyimform.appendChild(cnamelabel);
        deneyimform.appendChild(cnameinput);
        deneyimform.appendChild(styearlabel);
        deneyimform.appendChild(styearinput);
        deneyimform.appendChild(enyearlabel);
        deneyimform.appendChild(enyearinput);
        deneyimform.appendChild(contlabel);
        deneyimform.appendChild(continput);

  continput.onclick = () => {
    var checked = continput.checked;

    if (checked)
        enyearinput.disabled = true;
    else
        enyearinput.disabled = false;
}
    dosyaindex++;


}















/*
KOD ÇALIŞIYOR AMA HALACAL BÖÖLÜMÜ ÇALIŞMIYOR SADECE VE İNPUT ALIRKEN SADECE İLK İNPUT ALINIYOR 

var addexpbut = document.getElementById("addexpbut");
var deneyimform = document.getElementById("deneyimform");
var countre=1;

function zaa(){
    countre+=1;
   html='<div class="formdeneyim" id="formdeneyim'+countre+'">\
            <label for="cname">Şirket ismi</label><br>\
            <input type="text" id="cname'+countre+'" name="cname" placeholder="şirket ismi"><br><br>\
            <label for="styear"> başlangıç yılı</label><br>\
            <input type="date" id="styear" name="styear" placeholder="başlangıç tarihi"><br><br>\
            <label for="enyear">Bitiş yılı</label><br>\
            <input type="date" id="enyear" name="enyear" placeholder="bitiş yılı" ><br><br>\
            <label for="cont">hala çalışıyorum</label>\
            <input type="checkbox" id="cont" name="cont" onclick="halacal()"><br><br>\
        </div>'
   var form = document.getElementById('deneyimform');
   form.innerHTML+=html
}

*/