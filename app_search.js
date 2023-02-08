var  tg3 = window.Telegram.WebApp;

tg3.expand(); //расширяем на все окно

tg3.MainButton.text = "Готово"; //изменяем текст кнопки
tg3.MainButton.setText("Поиск 1"); //изменяем текст кнопки иначе
tg3.MainButton.textColor = "#e7e8e9"; //изменяем цвет текста кнопки
tg3.MainButton.color = "#4682B4"; //изменяем цвет бэкграунда кнопки
tg3.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры
tg3.MainButton.show();
tg3.MainButton.enable();


// //задаем формат для поле объем, чтобы только цифры были
// document.getElementById('summary').addEventListener('input', function() {
//   this.value = this.value.replace(/[^\d]/g, '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
// });

// //задаем формат для поле курс, чтобы только цифры были
// document.getElementById('kurs').addEventListener('input', function() {
//   this.value = this.value.replace(/[^0-9.]/g, '', '')
//   // .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$0 ');
// });



// Задаем селекты
var value_opt1 =  document.getElementById("select_group_1");
var value_opt2 =  document.getElementById("select_group_2");
var value_opt4 =  document.getElementById("select_group_4");
var value_opt3 =  document.getElementById("select_group_3");
var value_opt5 =  document.getElementById("select_group_5");
var value_opt6 =  document.getElementById("select_group_6");
var value_opt7 =  document.getElementById("select_group_7");

var kurs = document.getElementById("kurs");
var Label_Sum = document.getElementById("summary");

function onChange() {

    var text_val_ask = value_opt1.options[value_opt1.selectedIndex].text;
    var text_nal_ask = value_opt2.options[value_opt2.selectedIndex].text;
    var text_stamp_ask = value_opt3.options[value_opt3.selectedIndex].text;
    var text_val_bid = value_opt4.options[value_opt4.selectedIndex].text;
    var text_nal_bid = value_opt5.options[value_opt5.selectedIndex].text;
    var text_stamp_bid = value_opt6.options[value_opt6.selectedIndex].text;
    var text_place = value_opt7.options[value_opt7.selectedIndex].text;

   //  var val_ask_num = value_opt1.value;

   //  var val_bid_num = value_opt4.value;



   //  let searchValue = Math.min(val_ask_num, val_bid_num);
   //  let selectElement = document.getElementById('select_group_1');
   //  let options = selectElement.options;

   //  for (let i = 0; i < options.length; i++) {
   //    if (options[i].value == searchValue) {
   //    // console.log(options[i].text, document.getElementById('summary').innerHTML);

   //    document.getElementById('Label_Sum').innerHTML = 'Объем, в ' + options[i].text.substring(0, 3);
   //    window.sum_val_name = options[i].text
   //    // + options[i].text;

   //    break;
   //    } }


    var jsonObject = {
        "type_web_msg" : "from search",
        "text_val_ask" : text_val_ask,
        "text_nal_ask" : text_nal_ask,
        "text_stamp_ask" : text_stamp_ask,
        "text_val_bid" : text_val_bid,
        "text_nal_bid" : text_nal_bid,
        "text_stamp_bid" : text_stamp_bid,
        "text_place": text_place
    };


    window.jsonString = JSON.stringify(jsonObject);


}

value_opt1.onchange = onChange;
value_opt4.onchange = onChange;
value_opt2.onchange = onChange;
value_opt3.onchange = onChange;
value_opt5.onchange = onChange;
value_opt6.onchange = onChange;
value_opt7.onchange = onChange;


tg3.onEvent('mainButtonClicked', function(){
  onChange();

  tg3.sendData(jsonString);
  // tg3.sendData("От страницы ADS");
  // console.log(text_place);

  tg3.window.close();
  //при клике на основную кнопку отправляем данные в строковом виде
});
