const dataURL = "https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f";

const skazka = $.getJSON(
   dataURL,
   function(data) {
  });

function handleButton() {
 $('#result').text(skazka.responseJSON.text);
}

function handleData(data) {
let text = String(skazka.responseJSON.text);
  
  const Var1 = $("input[name=var1]").val();
  const Var2 = $("input[name=var2]").val();
  const Var3 = $("input[name=var3]").val();
  const Var4 = $("input[name=var4]").val();
  const Var5 = $("input[name=var5]").val();
  const Var6 = $("input[name=var6]").val();
  const Speach = $("input[name=speach]").val();

  text = text.replace(new RegExp('{var1}', 'g'), Var1);
  text = text.replace(new RegExp('{var2}', 'g'), Var2);
  text = text.replace(new RegExp('{var3}', 'g'), Var3);
  text = text.replace(new RegExp('{var4}', 'g'), Var4);
  text = text.replace(new RegExp('{var5}', 'g'), Var5);
  text = text.replace(new RegExp('{var6}', 'g'), Var6);
  text = text.replace(new RegExp('{speach}', 'g'), Speach);

  $("#result").text(text);
  }

function init() {
	$("#button1").click(handleButton);
  $("#button2").click(handleData);
}
$(document).ready(init);