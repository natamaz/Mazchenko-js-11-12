$(function(){

    var html = $('#test').html();
    var data = {
        name: 'Мазченко Наталья Александровна',
        photo_url: "img/logo.png",
        work: "Студентка группы GoFE 3, программы GoForIT",
        learning_reasons: " Ожидания от курса:",
        reasons_list: ["Получение новых знаний и навыков",
            "Обучение под руководством практикующего специалиста",
            "Получение новой интересной профессии"],
        contact_phone: "Мой контактный телефон",
        phone_number:"+380997866414",
        social_profile: "Мой профиль в ВКонтакте",
        social_network: "http://vk.com/id123214522",
        facebook_url: "VK.com",
        feedback_title: "Мой feedback:",
        feedback: " Уверенна, что данный курс станет новой, интересной страницей моей жизни."
    };

    var content = tmpl(html,data)

    $('body').append(content);
});
/**
 * Created by НАФТУСЯ on 27.04.2016.
 */
