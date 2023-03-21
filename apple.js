var pagenum = localStorage.page;
if (pagenum == undefined) {
  pagenum = 1;
}
const mobilecolorimg = {
  1: "change_mobile_color/after_move_purple.jpg",
  2: "change_mobile_color/after_move_golden.jpg",
  3: "change_mobile_color/after_move_silver.jpg",
  4: "change_mobile_color/after_move_black.jpg"
}

if (pagenum == 1) {
  //-------------body------------------------//
  var real_body = document.getElementById("html1");
  real_body.className = "not1";

  //--------------login page-----------------/
  var login_page_div = document.createElement("div");
  login_page_div.id = "bodybody";
  //------------login body-------------------//
  var login_shadow_div = document.createElement("div");
  login_shadow_div.id = "shadow";
  //------------login-----------icon----------//
  var login_page_icon = document.createElement("i");
  login_page_icon.className = "fa-brands";
  login_page_icon.classList.add("fa-apple");
  login_page_icon.id = "icon";

  login_shadow_div.appendChild(login_page_icon);
  login_page_div.appendChild(login_shadow_div);
  real_body.appendChild(login_page_div);
  //-------login box------------------//
  var login_box = document.createElement("input");
  login_box.id = "input";
  login_box.type = "text";
  login_box.placeholder = "Your Short Name...";
  login_box.autocomplete = "off";
  login_box.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      open()
    }

  });


  var currentY =0;




  real_body.appendChild(login_box);
  //-----------whole body-//
  var artificial_body = document.createElement("div");
  artificial_body.id = "body";
  artificial_body.style = "display:none";
  real_body.appendChild(artificial_body);
  // ---------------top bar-------------//
  var top_bar_space = document.createElement("div");
  top_bar_space.className = "topbarspace";
  artificial_body.appendChild(top_bar_space);

  var top_bar_1 = document.createElement("div");
  top_bar_1.className = "topbar1";
  var top_bar_11 = document.createElement("div");
  top_bar_11.className = "topbar11"
  var top_bar_icon1 = document.createElement("i");

  top_bar_icon1.className = "fa-brands";
  top_bar_icon1.classList.add("fa-apple");
  top_bar_icon1.id = "icon1";

  top_bar_11.appendChild(top_bar_icon1);
  top_bar_11.innerHTML += "iPhone 14 pro";
  top_bar_1.appendChild(top_bar_11);

  var top_bar_12 = document.createElement("div");
  top_bar_12.className = "topbar12";
  top_bar_1.appendChild(top_bar_12);
  artificial_body.appendChild(top_bar_1);
  //-------------second---bar----------//
  var top_bar_2 = document.createElement("div");
  top_bar_2.className = "topbar2";
  top_bar_2.innerText = "Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank credit cards.‡ Plus No Cost EMI from most leading banks.";
  artificial_body.appendChild(top_bar_2);

  page_btn_names = ["overview", "Switching to iPhone"];

  for (let i = 0; i < 2; i++) {
    var page_anchor = document.createElement("a");
    page_anchor.href = "apple" + (i + 1) + ".html";
    var page_btn = document.createElement("button");
    page_btn.className = "pagebtn";
    page_btn.addEventListener('click', () => {
      changepage(i + 1)
    })
    page_btn.innerText = page_btn_names[i];



    if (i == 0) {
      page_btn.id = "clicked";
      top_bar_12.appendChild(page_btn);
      continue;
    }
    page_anchor.appendChild(page_btn);
    top_bar_12.appendChild(page_anchor);
  }
  var page_btns = document.getElementsByClassName("pagebtn");
  // console.log(page_btns)

  for (let i = 1; i < 2; i++) {
    page_btns[i].addEventListener('mouseover', () => {
      page_btns[i].style = "color:#147CE5"
    })
    page_btns[i].addEventListener('mouseout', () => {
      page_btns[i].style = "color:#ffffff"
    })
    page_btns[i].addEventListener('click', () => {
      page_btns[i].style = "color:#ffffff"
    })
  }
  //---------------------end of top bars-----------------//


  //-----------------------------------body1------------------//
  var body1 = document.createElement("div");
  body1.id = "body1";
  artificial_body.appendChild(body1);
  //------to show the emonji of user---/
  var emonji = document.createElement("img");
  emonji.src = "icon animation/emo1.png";
  emonji.id = "userimg";
  emonji.style = "display:none";
  body1.appendChild(emonji);
  //----to display the user name -----------/
  var user_show_name = document.createElement("h1");
  user_show_name.id = "name";
  user_show_name.style = "display:none";
  body1.appendChild(user_show_name);
  // console.log(user_show_name);
  //---the intro img of website-/ 
  var intro_14_pro_img = document.createElement("img");
  intro_14_pro_img.src = "body1/apple_intro_text.jpg";
  intro_14_pro_img.id = "Start_up_img";
  body1.appendChild(intro_14_pro_img);
  //---to create the shadow of the mobile in lower bottom -----------//
  var lower_layer = document.createElement("div");
  lower_layer.id = "Lower_layer";
  body1.appendChild(lower_layer);
  //-----------the video div  of mobile in the begining---------------/
  var Start_up_video_div = document.createElement("div");
  Start_up_video_div.id = "Start_up_video_div";
  Start_up_video_div.style = "display:none";
  // the video of begin-------/
  var Start_up_video = document.createElement("video");
  Start_up_video.id = "Start_up_video";
  Start_up_video.src = "";
  Start_up_video.type = "video/mp4";
  Start_up_video.autoplay = true;
  Start_up_video.muted = true;
  Start_up_video_div.appendChild(Start_up_video);
  body1.appendChild(Start_up_video_div);



  var pla_count=0;                   

  var shad = false;
  var showname;
  var savename = sessionStorage.username;
  // console.log(savename)


  //------to toggle the input if the user already login----/

  //--------------events fo login icon-----------background--------//

  login_box.addEventListener("mouseover", function(event) {
    if (shad == false) {
      login_shadow_div.style = "background: radial-gradient(circle, rgba(255,184,112,1) 0%, rgba(255,184,112,0.27072835970325626) 50%, rgba(255,184,112,0) 80%);"
    }
  })
  login_box.addEventListener("mouseout", function(event) {
    if (shad == false) {
      login_shadow_div.style = "background: radial-gradient(circle, rgba(154,134,253,1) 0%, rgba(154,134,253,0.27072835970325626) 50%, rgba(154,134,253,0) 80%);"
    }
  })
  login_box.addEventListener("click", function(event) {
    login_shadow_div.style.display = "none";
    shad = true;
  });
  login_page_div.addEventListener("click", function(event) {
    if (login_box.value != "") {
      open()
    } else {
      login_box.value = "";
      login_shadow_div.style.display = "block";
      shad = false;
      login_shadow_div.style = "background: radial-gradient(circle, rgba(154,134,253,1) 0%, rgba(154,134,253,0.27072835970325626) 50%, rgba(154,134,253,0) 80%);"
    }
  });
  login_shadow_div.addEventListener("mouseover", function(event) {
    if (shad == false) {
      login_shadow_div.style = "background: radial-gradient(circle, rgba(255,184,112,1) 0%, rgba(255,184,112,0.27072835970325626) 50%, rgba(255,184,112,0) 80%);"
    }
  })
  login_shadow_div.addEventListener("mouseout", function(event) {
    if (shad == false) {
      login_shadow_div.style = "background: radial-gradient(circle, rgba(154,134,253,1) 0%, rgba(154,134,253,0.27072835970325626) 50%, rgba(154,134,253,0) 80%);"
    }
  })


  //------to create click shadow in the login page--------------/
  login_page_div.addEventListener('click', (e) => {
    var element = document.createElement('span')
    element.className = 'heart';
    element.innerHTML = "<i class=\"fa-brands fa-apple\" id=\"applefloat\"></i>"
    element.style.left = e.clientX - 15 + 'px';
    element.style.top = e.clientY - 10 + 'px';
    login_page_div.appendChild(element);
    setTimeout(() => {
      element.remove()
    }, 900);

  })

  var scroll = document.documentElement;

  //-------------------scroll color letter-------------------------//

  var scroll_gradient_letter_whole_div = document.createElement("div");
  scroll_gradient_letter_whole_div.id = "scroll_gradient_letter_whole_div";
  var scroll_gradient_letter_div = document.createElement("div");
  scroll_gradient_letter_div.id = "scroll_gradient_letter_div";
  scroll_gradient_letter_div.innerText = "A magical new way to interact with iPhone. A vital safety feature designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.";
  scroll_gradient_letter_whole_div.appendChild(scroll_gradient_letter_div);
  artificial_body.appendChild(scroll_gradient_letter_whole_div);

  //-----------------------scroll color background------------------------/

  var scroll_gradient_change = document.createElement("div");
  scroll_gradient_change.id = "scroll_gradient_letter_whole_div";
  scroll_gradient_change.className = "scroll_gradient_change";
  artificial_body.appendChild(scroll_gradient_change)

  var scroll_gradient_letter_div_2 = document.createElement("div");
  scroll_gradient_letter_div_2.id = "scroll_gradient_letter_div_2";
  scroll_gradient_change.appendChild(scroll_gradient_letter_div_2);


  //----object of gradient -text---/
  const scroll_ps = {
    1: ["scroll_gradient_big_letter", "Pro." + "<br>" + "Beyond."],
    2: ["scroll_gradient_small1_letter", "iPhone 14 Pro and iPhone 14 Pro Max"],
    3: ["scroll_gradient_small2_letter", "From ₹129900.00* before trade-in"],
    4: ["https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiR_I_x2637AhUQALcAHX0QAK0QwqsBegQICRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dh-iQJHcWhAg&usg=AOvVaw282iL80ydAixYHmCpHT0GG", "scroll_gradient_anchor_letter", "Watch the film  ", `<i class="fa-regular fa-circle-play"></i>  `],
    5: ["https://www.apple.com/in/apple-events/", "scroll_gradient_anchor_letter", "Watch the event  ", `<i class="fa-solid fa-greater-than small"></i>`]
  }
  for (let i = 1; i < 4; i++) {
    var scroll_p = document.createElement("p");
    scroll_p.id = scroll_ps[i][0];
    scroll_p.innerHTML = scroll_ps[i][1];
    scroll_gradient_letter_div_2.appendChild(scroll_p);
  }
  for (let i = 4; i <= 5; i++) {
    var scroll_anchor = document.createElement("a");
    scroll_anchor.href = scroll_ps[i][0];
    scroll_anchor.className = scroll_ps[i][1];
    scroll_anchor.innerHTML = scroll_ps[i][2];
    scroll_anchor.innerHTML += scroll_ps[i][3];
    scroll_gradient_letter_div_2.appendChild(scroll_anchor);
  }




  var side_page1_whole_div = document.createElement("div");
  side_page1_whole_div.className = "side_page1_whole_div";
  side_page1_whole_div.classList.add("side_page_common_class");

  var side_coverdiv1 = document.createElement("div");
  side_coverdiv1.className = "side_coverdiv1";

  var cover_of_three = document.createElement("div");
  cover_of_three.className = "cover_of_three";

  side_coverdiv1.appendChild(cover_of_three);
  side_page1_whole_div.appendChild(side_coverdiv1);
  artificial_body.appendChild(side_page1_whole_div);

  var change_phone_color_whole_div = document.createElement("div");
  change_phone_color_whole_div.id = "change_phone_color_whole_div";
  change_phone_color_whole_div.className = "not2";
  cover_of_three.appendChild(change_phone_color_whole_div);

  var color_change_layer = document.createElement("div");
  color_change_layer.id = "color_change_layer";
  change_phone_color_whole_div.appendChild(color_change_layer);

  var color_change_list_div = document.createElement("div");
  color_change_list_div.id = "color_change_list_div";
  color_change_layer.appendChild(color_change_list_div);

  var color_of_mobiles = ["Deep purple", "Gold", "Silver", "space Black"];

  for (let i = 1; i <= 4; i++) {
    var list_button = document.createElement("button");
    list_button.id = "color" + i;
    if (i == 1) {
      list_button.style.color = "#CECECE";
    }
    list_button.addEventListener('click', () => {
      clickchange(i)
    });
    // console.log("clickchange(" + i + ")")
    list_button.className = "color_change_list_element";
    list_button.innerText = color_of_mobiles[i - 1];
    color_change_list_div.appendChild(list_button);
  }

  var change_phone_color_video = document.createElement("video");
  change_phone_color_video.id = "change_phone_color_video";
  change_phone_color_video.src = "";
  change_phone_color_video.style = "display:none;";
  change_phone_color_video.type = "video/mp4";
  change_phone_color_video.autoplay = true;
  change_phone_color_video.muted = true;
  color_change_layer.appendChild(change_phone_color_video);

  var change_phone_color_img = document.createElement("img");
  change_phone_color_img.src = "change_mobile_color/before_move_mobile_pic.jpg";
  change_phone_color_img.id = "change_phone_color_img";
  var layer = document.createElement("div");
  layer.className = "layerX";
  color_change_layer.appendChild(layer);
  color_change_layer.appendChild(change_phone_color_img);



  var example;
  var colorchangeinput = 2;

  var scroll_opacity_text_cover = document.createElement("div");
  scroll_opacity_text_cover.className = "scroll_opacity_text_cover";
  change_phone_color_whole_div.appendChild(scroll_opacity_text_cover)

  var scroll_opacity_text = document.createElement("div");
  scroll_opacity_text.id = "scroll_opacity_text";

  scroll_opacity_text_cover.appendChild(scroll_opacity_text);

  scroll_opacity_text.innerHTML = "Designed for durability.<br>With Ceramic Shield, tougher than any smartphone glass. Water resistance.<sup>1</sup> Surgical-grade stainless steel. 15.54 cm (6.1″) and 17.00 cm (6.7″) display sizes.<sup>2</sup> All in four Pro colours.";


  var logo_and_text_div_cover = document.createElement("div");
  logo_and_text_div_cover.className = "logo_and_text_div_cover";

  var logo_and_text_div = document.createElement("div");
  logo_and_text_div.id = "logo_and_text_div";
  logo_and_text_div.className = "not";

  
  logo_and_text_div_cover.appendChild(logo_and_text_div);

  var logo_change_motion_div = document.createElement("div");
  logo_change_motion_div.id = "logo_change_motion_div";
  
  logo_change_motion_div.classList.add("motion_icon")
  logo_and_text_div.appendChild(logo_change_motion_div);
  logo_change_motion_div.addEventListener('click',()=>{
    logo_and_text_div.className = "not"; 
    logo_and_text_div.firstElementChild.style="background-position: 0px 0px;";
  })

  var logo_side_text = document.createElement("div");
  logo_side_text.id = "logo_side_text";
  logo_side_text.innerText = " iPhone is also designed from the ground up to protect your privacy and put you in control of what you share and who you share it with"
  logo_and_text_div.appendChild(logo_side_text);
  change_phone_color_whole_div.appendChild(logo_and_text_div_cover);


  var i = 0;
  var line = 1;
  var j = 0;

 
  var side_page_cover_wholediv1 = document.createElement("div");
  side_page_cover_wholediv1.className = "side_page_cover_wholediv1";

  var o_div = document.createElement("div");
  o_div.id = "o_div";
  o_div.innerHTML = "Meet the<br>new face<br>of iPh<span id=\"the_o\"></span>ne.";
  side_page_cover_wholediv1.appendChild(o_div);


  var img_island_div = document.createElement("div");
  img_island_div.id = "img_island_div";

  var phone_above_text = document.createElement("p");
  phone_above_text.id = "phone_above_text";
  phone_above_text.innerHTML = "Introducing Dynamic Island, a truly <br>Apple innovation that's hardware and<br> software — and something in between. <br>It bubbles up music, FaceTime and so <br>much more — all without taking you <br>away from what you're doing.<br>";

  var phone_video_play_btn = document.createElement("button");
  phone_video_play_btn.id = "phone_video_play_btn";
  phone_video_play_btn.addEventListener('click', () => {
    phone_video_1()
  });
  phone_video_play_btn.innerText = "pause";
  phone_above_text.appendChild(phone_video_play_btn);
  img_island_div.appendChild(phone_above_text);

  var frame_of_mobile = document.createElement("img");
  frame_of_mobile.id = "frame_of_mobile";
  frame_of_mobile.src = "o animation/from_o_frame.png";
  img_island_div.appendChild(frame_of_mobile);

  var start_frame_of_o_phone = document.createElement("img");
  start_frame_of_o_phone.id = "start_frame_of_o_phone";
  start_frame_of_o_phone.src = "o animation/o_animation_endframe.jpg";
  img_island_div.appendChild(start_frame_of_o_phone);

  var o_phone_video = document.createElement("video");
  o_phone_video.id = "o_phone_video";
  o_phone_video.src = "o animation/o_animation.mp4";
  o_phone_video.style = "display:none;";
  o_phone_video.type = "video/mp4";
  o_phone_video.autoplay = true;
  o_phone_video.muted = true;
  img_island_div.appendChild(o_phone_video);

  var shade1 = document.createElement("div");
  shade1.className = "shade1";
  img_island_div.appendChild(shade1);
  change_phone_color_whole_div.appendChild(side_page_cover_wholediv1);
  side_page_cover_wholediv1.appendChild(img_island_div);
  var o_width = document.getElementById("the_o");


  var isvideo_played = false;


  var tempof_video;
  o_phone_video.addEventListener('ended', () => {
    phone_video_play_btn.innerText = "replay";
    tempof_video = 0;
  })

  var button_text_div1 = document.createElement("div");
  button_text_div1.className = "button_text_div1";

  var btn_p1 = document.createElement("p");
  btn_p1.innerText = "See more of what Dynamic Island can do and how we brougth it to life";
  button_text_div1.appendChild(btn_p1);

  var button1 = document.createElement("div");
  button1.className = "button_of_sidepage button1";
  button1.innerHTML = "<i class=\"fa-solid fa-arrow-right\"></i>";
  button1.addEventListener('click',()=>{move(0)} );
  button_text_div1.appendChild(button1);
  change_phone_color_whole_div.appendChild(button_text_div1);

  var alwaystext = document.createElement("div");
  alwaystext.className = "alwaystext";

  var always_text = document.createElement("p");
  always_text.className = "always_text";
  always_text.innerText = "Always-On display. Always at the ready.";
  alwaystext.appendChild(always_text);
  change_phone_color_whole_div.appendChild(alwaystext);


  var side_page_scrolldiv1 = document.createElement("div");
  side_page_scrolldiv1.className = "side_page_scrolldiv1";

  var scroll_abo11 = document.createElement("div");
  scroll_abo11.className = "scroll_abo11";

  var scrollabo12 = document.createElement("div");
  scrollabo12.className = "scrollabo12";
  scrollabo12.classList.add("side_scroll_moving_div");

  var sidepage1 = document.createElement("div");
  sidepage1.className = "sidepage1";
  sidepage1.classList.add("side_scroll_div");

  scrollabo12.appendChild(sidepage1);
  scroll_abo11.appendChild(scrollabo12);
  side_page_scrolldiv1.appendChild(scroll_abo11)
  side_coverdiv1.appendChild(side_page_scrolldiv1);

  var button1_inverse = document.createElement("div");
  button1_inverse.className = "button1_inverse";
  button1_inverse.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";
  button1_inverse.addEventListener('click', () => {
    unmove(0)
  });
  sidepage1.appendChild(button1_inverse);

  var range1 = document.createElement("div");
  range1.className = "range1";
  var range1meter = document.createElement("div");
  range1meter.className = "range1meter";
  range1meter.classList.add("rangewidth");
  range1.appendChild(range1meter);
  sidepage1.appendChild(range1);

  var sidepage_h1_1 = document.createElement("h1");
  sidepage_h1_1.innerText = "Welcome to a  shapeshifting, multitasking, head- turning, game-changing iPhone experience.";
  sidepage1.appendChild(sidepage_h1_1);

  var sidepage1_img_1 = document.createElement("img");
  sidepage1_img_1.src = "sidepage1/1.jpg";
  sidepage1.appendChild(sidepage1_img_1);

  var sidepage_p_texts = ["Dynamic Island blends fun and function like never before, consolidating your notifications, alerts and activities into one interactive place. It's integrated throughout iOS 16 — and can work with all kinds of apps — to seamlessly surface what you need, right when you need it.", "It expands fluidly to get your attention — Hey, you have a call coming in — then tucks away again. You can touch and hold to control your music, keep an eye on a timer and more. Easy. Intuitive. Delightful."]
  for (let i = 1; i <= 2; i++) {
    var side_page_p = document.createElement("p");
    side_page_p.id = "sidep" + i;
    side_page_p.innerText = sidepage_p_texts[i - 1];
    sidepage1.appendChild(side_page_p);
  }

  var anonymous_1 = document.createElement("div");
  var sidepage_h1_2 = document.createElement("h1");
  sidepage_h1_2.id = "sideh1";
  sidepage_h1_2.innerText = "Built breakthrough by breakthrough.";
  anonymous_1.appendChild(sidepage_h1_2);

  var side_page_p_3 = document.createElement("p");
  side_page_p_3.id = "sidep3";
  side_page_p_3.innerText = "Innovation thrives when you bring hardware, software and silicon teams together like only Apple can.";
  anonymous_1.appendChild(side_page_p_3);
  sidepage1.appendChild(anonymous_1);

  var box_div = document.createElement("div");
  box_div.className = "box_div";

  const sidepage_box_text = {
    1: ["31% smaller TrueDepth camera system", "engineered to free up display space and be even <br>more capable"],
    2: ["A re-engineered proximity sensor", "now detects light from behind the display, saving additional space"],
    3: ["Advanced display algorithms", "make Dynamic Island responsive wherever you tap, swipe or hold"],
    4: ["Animations designed to look and feel like liquid", "thanks to hardware and software anti-aliasing powered by Apple silicon"]
  }

  for (let i = 1; i <= 4; i++) {
    var box_div3 = document.createElement("div");
    box_div3.className = "box_div3";
    var sidepage_h2 = document.createElement("h2");
    sidepage_h2.innerHTML = sidepage_box_text[i][0];
    box_div3.appendChild(sidepage_h2);
    var sidepage_h4 = document.createElement("h4");
    sidepage_h4.innerHTML = sidepage_box_text[i][1];
    box_div3.appendChild(sidepage_h4);
    box_div.appendChild(box_div3);
    if (i == 1 || i == 3) {
      var verti = document.createElement("div");
      verti.className = "verti";
      box_div.appendChild(verti);
    }
    if (i == 2) {
      var hori = document.createElement("div");
      hori.className = "hori";
      box_div.appendChild(hori);
    }
  }
  sidepage1.appendChild(box_div);

  var sidepage_h1_3 = document.createElement("h1");
  sidepage_h1_3.id = "sideh5";
  sidepage_h1_3.innerText = "This is the biggest change to the face of iPhone since we went all screen.";
  sidepage1.appendChild(sidepage_h1_3);



  var preposition = 0;

    // console.log(scrollabo12.scrollLeft);


  

var mobile_pop_div= document.createElement("div");
mobile_pop_div.className="mobile_pop_div";
artificial_body.appendChild(mobile_pop_div);

var mobile_div_for_pop_up=document.createElement("div");
mobile_div_for_pop_up.className="mobile_div_for_pop_up";

var img_of_mobile_frame = document.createElement("img");
img_of_mobile_frame.className="img_of_mobile_frame";
img_of_mobile_frame.src="flat_golden/action_mode_hw__fi4fqussd9ea_large.png"

var speed_up_mobile_video = document.createElement("video");
speed_up_mobile_video.src="o animation/speed_mobile_up.mp4";
speed_up_mobile_video.className="speed_up_mobile_video";
speed_up_mobile_video.muted=true;


mobile_pop_div.appendChild(mobile_div_for_pop_up);
mobile_div_for_pop_up.appendChild(img_of_mobile_frame);
mobile_div_for_pop_up.appendChild(speed_up_mobile_video);

var pop_up_text_arr =["Now your Lock Screen is always glanceable, so you don't even have to tap it to stay in the know.","When iPhone is turned face down or in your pocket, it goes dark to save battery life.","All-day <br>battery life","even with so many new capabilities"]

var text_div_z = document.createElement("div");
text_div_z.className="text_div_z"
mobile_pop_div.appendChild(text_div_z);
var second_popup=document.createElement("div");
second_popup.style="opacity:0;background-image: linear-gradient(180deg,#ffb6ff 60%,#b344ff 100%);"
var zx=0;
for(let z=0;z<4;z++){
  var text_node_s = document.createElement("p");
  text_node_s.innerHTML=pop_up_text_arr[z];
  text_node_s.className="text_node_s_pop_up";
  text_node_s.id="text_node_s_pop_up"+(++zx)
  if(zx==1){
    text_div_z.appendChild(text_node_s);
    continue
  }
  second_popup.appendChild(text_node_s)
}

text_div_z.appendChild(second_popup)
var note_div_text_arr=["Your photo. Your font. Your widgets. Your iPhone.","iOS 16 lets you customise your<br> Lock Screen in fun new ways. Layer a photo to make it pop. Track your Activity rings. And see live updates from your favourite apps."]
var note_rearrange_div = document.createElement("div");
note_rearrange_div.className="note_rearrange_div";
var note_div_text_div = document.createElement("div");
note_div_text_div.className="note_div_text_div"
for (let i = 0; i < 2; i++) {
    var text_node=document.createElement("p");
    text_node.className="text_node__"+i+i;
    text_node.innerHTML=note_div_text_arr[i];
    note_div_text_div.appendChild(text_node)
}
note_rearrange_div.appendChild(note_div_text_div);
artificial_body.appendChild(note_rearrange_div)
var mobile_analog=["scroll_mobile collections/mobile_pic1.jpg","scroll_mobile collections/mobile_pic2.jpg","scroll_mobile collections/mobile_pic3.jpg","scroll_mobile collections/mobile_pic4.jpg","scroll_mobile collections/mobile_pic5.jpg","scroll_mobile collections/mobile_pic6.jpg","scroll_mobile collections/moible_pic7.jpg","scroll_mobile collections/mobile_pic8.jpg"];
var analog_div_of_mobile=document.createElement("div");
analog_div_of_mobile.className="analog_div_of_mobile";
for (let i = 0; i < 8; i++) {
  var img_div = document.createElement("div");
  img_div.className="img_div";
  var img_of_mobile=document.createElement("img");
  img_of_mobile.src=mobile_analog[i];
  img_of_mobile.className="analog_img_of_mobile"
  img_div.appendChild(img_of_mobile);
  analog_div_of_mobile.appendChild(img_div);
}
note_rearrange_div.appendChild(analog_div_of_mobile);
var analog_increment=0;
for (let i = 0; i < 2; i++) {
  var analog_btn = document.createElement("button");
  analog_btn.className="analog_btn";
  analog_btn.id="analog_btn"+i;

  if(i==0){
    analog_btn.addEventListener('click',() =>{if(analog_increment>0){analog_unmove(--analog_increment)}})
    analog_btn.innerHTML=`<i class="fa-solid fa-angle-left"></i>`
  }else{
    analog_btn.addEventListener('click',() =>{if(analog_increment<7){analog_move(analog_increment++)}})
    analog_btn.innerHTML=`<i class="fa-solid fa-angle-right"></i>`;
  }
  analog_div_of_mobile.appendChild(analog_btn);
  
}
document.getElementById("analog_btn0").style="background:#151516";
var shadow_div=document.createElement("div");
shadow_div.className="shadow_div";
note_rearrange_div.appendChild(shadow_div);




var logo_and_text_div_cover = document.createElement("div");
logo_and_text_div_cover.className = "logo_and_text_div_cover";
logo_and_text_div_cover.id="hi";

var logo_and_text_div_2 = document.createElement("div");
logo_and_text_div_2.id = "logo_and_text_div";
logo_and_text_div_2.className = "not";

// logo_and_text_div_2.classList.add("motion_icon")
logo_and_text_div_cover.appendChild(logo_and_text_div_2);

var logo_change_motion_div_2 = document.createElement("div");
logo_change_motion_div_2.id = "logo_change_motion_div";
logo_change_motion_div_2.classList.add("motion_icon")
logo_and_text_div_2.appendChild(logo_change_motion_div_2);
logo_change_motion_div_2.addEventListener('click',()=>{
  logo_and_text_div_2.className = "not"; 
  logo_change_motion_div_2.style="background-position: 0px 0px;";
})

var logo_side_text = document.createElement("div");
logo_side_text.id = "logo_side_text";
logo_side_text.innerText = " App Tracking Transparency lets you decide which apps are allowed to track your activity";
logo_and_text_div_2.appendChild(logo_side_text);
artificial_body.appendChild(logo_and_text_div_cover);


var slide_page_whole_div_2 = document.createElement("div");
slide_page_whole_div_2.className="slide_page_whole_div_2";
slide_page_whole_div_2.classList.add("side_page_common_class");
artificial_body.appendChild(slide_page_whole_div_2);
var anonymous_2 =document.createElement("div");


var brighter_img_whole_div = document.createElement("div");
brighter_img_whole_div.className="brighter_img_whole_div";
slide_page_whole_div_2.appendChild(anonymous_2);
anonymous_2.appendChild(brighter_img_whole_div);

var text_node = document.createElement("p");
text_node.className="text_node_brighter_small_text";
text_node.innerHTML="A display that's up to<br> 2x brighter in the sun."
brighter_img_whole_div.appendChild(text_node);


var brighter_img_color_bg_div = document.createElement("div");
brighter_img_color_bg_div.className="brighter_img_color_bg_div";

var text_node = document.createElement("p");
text_node.className="brighter_img_color_bg";
text_node.innerHTML="Brilliant.";
brighter_img_color_bg_div.appendChild(text_node);
brighter_img_whole_div.appendChild(brighter_img_color_bg_div);

var brighter_img=document.createElement("img");
brighter_img.className="brighter_img";
brighter_img.src="flat_golden/display_brilliant__egbbp2nyjquu_large.jpg";
brighter_img_whole_div.appendChild(brighter_img)


var button_text_div1 = document.createElement("div");
  button_text_div1.className = "button_text_div1";

  var btn_p1 = document.createElement("p");
  btn_p1.innerHTML = "See why the new<br> Super Retina XDR display <br> is like nothing else";
  button_text_div1.appendChild(btn_p1);

  var button1 = document.createElement("div");
  button1.className = "button_of_sidepage brighter_img_color_bg_div";
  button1.innerHTML = "<i class=\"fa-solid fa-arrow-right\"></i>";
  button1.addEventListener('click',()=>{move(1)});
  button_text_div1.appendChild(button1);
  anonymous_2.appendChild(button_text_div1);

var side_page2_fulldiv = document.createElement("div");
side_page2_fulldiv.className="side_page2_fulldiv";

slide_page_whole_div_2.appendChild(side_page2_fulldiv);

var side_coverdiv2=document.createElement("div");
side_coverdiv2.className="side_coverdiv2"
side_page2_fulldiv.appendChild(side_coverdiv2);

var side_coverdiv22=document.createElement("div");
side_coverdiv22.className="side_coverdiv22"
side_coverdiv22.classList.add("side_scroll_moving_div");
side_coverdiv2.appendChild(side_coverdiv22);


var sidepage2 = document.createElement("div");
sidepage2.className = "sidepage2";
sidepage2.classList.add("side_scroll_div");

side_coverdiv22.appendChild(sidepage2);


var button1_inverse = document.createElement("div");
button1_inverse.className = "button1_inverse";
button1_inverse.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";
button1_inverse.addEventListener('click', () => {
  unmove(1)
});
sidepage2.appendChild(button1_inverse);

var range1 = document.createElement("div");
range1.className = "range1";
var range1meter = document.createElement("div");
range1meter.className = "range1meter";
range1meter.classList.add("rangewidth");
range1.appendChild(range1meter);
sidepage2.appendChild(range1);

const second_sidepage_assets={
  1:["For those bright, sunny days, the Super Retina XDR display now reaches a peak of 2,000 nits outdoors — that’s twice as bright as before and the highest peak brightness of any smartphone. So text jumps right off the screen.","sidepage2/display_1__fy8pduduyeqa_large.jpg"],
  2:["Photos and HDR videos get a big boost too — up to 1,600 nits peak brightness, bringing iPhone to the same level as the Pro Display XDR. Movies, shows and even the films you’ve shot on iPhone look more true to life than ever.","sidepage2/display_2__fl6s958zjuy6_large.jpg"],
  3:["ProMotion technology allows for variable refresh rates from 10 to 120 times per second. It smoothly and intelligently ramps up when you need exceptional graphics performance, and ramps down to save power when you don’t. Game on, gamers.","sidepage2/display_3__e26ff1nthagm_large.jpg"]
}

for(let i=1;i<4;i++){
  var text_node=document.createElement("div");
  text_node.className="sidepage_2_text";
  text_node.innerHTML=second_sidepage_assets[i][0];
  text_node.id="side_page_2_text"+i;
  sidepage2.appendChild(text_node);
  var img = document.createElement("img");
  img.src=second_sidepage_assets[i][1];
  img.id="side_page_2_img"+i;
  sidepage2.appendChild(img)
}

//-----------------------------------------------------------------------



var slide_page_whole_div_3 = document.createElement("div");
slide_page_whole_div_3.className="slide_page_whole_div_2 less_height";
slide_page_whole_div_3.classList.add("side_page_common_class");
artificial_body.appendChild(slide_page_whole_div_3);
var anonymous_3 =document.createElement("div");


var crash_img_whole_div = document.createElement("div");
crash_img_whole_div.className="crash_img_whole_div";
slide_page_whole_div_3.appendChild(anonymous_3);
anonymous_3.appendChild(crash_img_whole_div);


var brighter_img=document.createElement("img");
brighter_img.className="crash_img";
brighter_img.src="flat_golden/emergency.jpg";
crash_img_whole_div.appendChild(brighter_img)

var text_node = document.createElement("p");
text_node.className="crash_big_text";
text_node.innerHTML="Crash Detection calls for help when you can’t.";
crash_img_whole_div.appendChild(text_node);



var text_node = document.createElement("p");
text_node.className="crash_small_text";
text_node.innerHTML="iPhone 14 Pro can detect a severe<br> car crash, then call emergency<br> services and notify your<br> emergency contacts."
crash_img_whole_div.appendChild(text_node);







var button_text_div1 = document.createElement("div");
  button_text_div1.className = "button_text_div1";

  var btn_p1 = document.createElement("p");
  btn_p1.innerHTML = "See how the tech in<br> iPhone 14 Pro recognises <br>  a severe car crash";
  button_text_div1.appendChild(btn_p1);

  var button1 = document.createElement("div");
  button1.className = "button_of_sidepage button1";
  button1.innerHTML = "<i class=\"fa-solid fa-arrow-right\"></i>";
  button1.addEventListener('click',()=>{move(2)});
  button_text_div1.appendChild(button1);
  anonymous_3.appendChild(button_text_div1);

var side_page2_fulldiv = document.createElement("div");
side_page2_fulldiv.className="side_page2_fulldiv";

slide_page_whole_div_3.appendChild(side_page2_fulldiv);

var side_coverdiv3=document.createElement("div");
side_coverdiv3.className="side_coverdiv2"
side_page2_fulldiv.appendChild(side_coverdiv3);

var side_coverdiv33=document.createElement("div");
side_coverdiv33.className="side_coverdiv22"
side_coverdiv33.classList.add("side_scroll_moving_div");
side_coverdiv3.appendChild(side_coverdiv33);


var sidepage3 = document.createElement("div");
sidepage3.className = "sidepage2";
sidepage3.style="width:4000px"
sidepage3.classList.add("side_scroll_div");
side_coverdiv33.appendChild(sidepage3);


var button1_inverse = document.createElement("div");
button1_inverse.className = "button1_inverse";
button1_inverse.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";
button1_inverse.addEventListener('click', () => {
  unmove(2)
});
sidepage3.appendChild(button1_inverse);

var range1 = document.createElement("div");
range1.className = "range1";
var range1meter = document.createElement("div");
range1meter.className = "range1meter";
range1meter.classList.add("rangewidth");
range1.appendChild(range1meter);
sidepage3.appendChild(range1);



var text_node = document.createElement("p");
text_node.className="third_page_big_text";
text_node.innerHTML="How iPhone<br> feels, hears and measures a crash."
sidepage3.appendChild(text_node);

var whole_box_for_side_page_3 = document.createElement("div");
whole_box_for_side_page_3.className="whole_box_for_side_page_3";
sidepage3.appendChild(whole_box_for_side_page_3);

const sidepage3_assets={
  1:{
    1:["Sudden<br> speed shifts","A new high g-force accelerometer senses extreme accelerations or decelerations up to 256 Gs."],
    2:["Abrupt changes in direction","A high dynamic range gyroscope monitors drastic changes in a car’s orientation."],
    3:["Laboratory crash tests","We developed advanced motion algorithms by performing head-on, rear-end, side-impact and rollover crash tests."],
  },
  2:{
    1:["Cabin pressure changes","The barometer can detect pressure changes caused by deploying airbags."],
    2:["Loud sound levels of impact","While you’re driving, the microphone identifies the extreme sound levels of a collision. For privacy, all processing is done on your iPhone."],
    3:["Real-world crash data","We used public crash data from accidents to make Crash Detection as accurate as possible."],
  }
}

for(let i=1;i<=2;i++){
  var long_box=document.createElement("div");
  long_box.className="long_box";
  whole_box_for_side_page_3.appendChild(long_box);

  for(let j=1;j<=3;j++){

    var box_of_sidepage3= document.createElement("div");
box_of_sidepage3.className="box_of_sidepage3";
if(i==1){
  long_box.className="long_box down_line";
}
if(j%3==1||j%3==2){
  box_of_sidepage3.classList.add("sideline_3")
}
    var text_node = document.createElement("p");
text_node.className="box_big_text_side_page_3";
text_node.innerHTML=sidepage3_assets[i][j][0];
box_of_sidepage3.appendChild(text_node);

var text_node = document.createElement("p");
text_node.className="box_small_text_side_page_3";
text_node.innerHTML=sidepage3_assets[i][j][1];
box_of_sidepage3.appendChild(text_node);
long_box.appendChild(box_of_sidepage3);

  }
}




var third_page_color_div=document.createElement("div");
third_page_color_div.className="third_page_color_div";
sidepage3.appendChild(third_page_color_div);


var text_node = document.createElement("p");
text_node.className="box_color_text_side_page_3";
text_node.innerHTML="1 million hours of real‑world driving and crash data helps iPhone recognise accidents";
third_page_color_div.appendChild(text_node);






//------------------------------------------------------------

var mobile_user_name_div= document.createElement("div");
mobile_user_name_div.className="mobile_user_name_div";
anonymous_2.appendChild(mobile_user_name_div);


var img = document.createElement("img");
img.src="flat_golden/action_mode_hw__fi4fqussd9ea_large.png";

img.className="mobile_frame-of_name"
mobile_user_name_div.appendChild(img)

var video = document.createElement("video");
video.src="gradient/pexels-free-creative-stuff-5649205(1).mp4";
video.className="mobile_video-of_name"
video.autoplay=true;
video.muted=true;
video.loop=true;
mobile_user_name_div.appendChild(video)




var upper_text= document.createElement("div");
upper_text.id="upper";

mobile_user_name_div.appendChild(upper_text);


var center_text_div = document.createElement("div");
center_text_div.id="center";
var center_text= document.createElement("div");
center_text.id="center2";
center_text.innerHTML=" Have a Nice day....! ";
center_text_div.appendChild(center_text)
mobile_user_name_div.appendChild(center_text_div);



var lower_text_div = document.createElement("div");
lower_text_div.id="lower";
var lower_text= document.createElement("div");
lower_text.id="lower2";


lower_text_div.appendChild(lower_text)
mobile_user_name_div.appendChild(lower_text_div);


var round_1 = document.createElement("div");
round_1.className="round_1";
mobile_user_name_div.appendChild(round_1);


img.addEventListener("mouseover",()=>{
  center_text_div.style=`transform:translateX(-${transformX}px);height:80px`;
  document.getElementById("upper").style.color="black";
console.log(1)
  document.getElementById("lower2").style.color="black";                                
})
img.addEventListener("mouseleave",()=>{
  center_text_div.style=`transform:translateX(-${transformX}px);height:0px`;
  document.getElementById("upper").style.color="white";
  document.getElementById("lower2").style.color="white";
})





if (savename != undefined) {
  var temp_p=savename.indexOf(" ");
  if(temp_p!=-1){
    savename=savename.slice(0,temp_p);
  }

  var transformX = (savename.length)*25;
  upper_text.style=`transform:translateX(-${transformX}px)`;
  lower_text_div.style=`transform:translateX(-${transformX}px)`;
  center_text_div.style.transform=`translateX(-${transformX}px)`;
  toggleinput();
}


var text_div_for_lens = document.createElement("div");
text_div_for_lens.className="text_div_for_lens";
anonymous_3.appendChild(text_div_for_lens)

var lens_text_assets = ["The Pro camera system gets ","massively<br> &nbsp&nbsp more Pro.","Introducing the all-new 48MP Main camera with an advanced quad-pixel sensor."]
for(let i=0;i<3;i++){
  var text_node = document.createElement("p");
  text_node.id="lens_text_one"+i;
  text_node.innerHTML=lens_text_assets[i];
  text_div_for_lens.appendChild(text_node)
}


var slide_page_whole_div_4 = document.createElement("div");
slide_page_whole_div_4.className="slide_page_whole_div_4";
artificial_body.appendChild(slide_page_whole_div_4);

var anonymous_4 = document.createElement("div");
anonymous_4.className="anonymous_4";
slide_page_whole_div_4.appendChild(anonymous_4);

var lens_video_div= document.createElement("div");
lens_video_div.className="lens_video_div";
anonymous_4.appendChild(lens_video_div);

var background_black_of_lens= document.createElement("div");
background_black_of_lens.className="background_black_of_lens"
lens_video_div.appendChild(background_black_of_lens);

var lens_of_camera = document.createElement("img");
lens_of_camera.className="lens_of_camera";
lens_of_camera.src="icon animation/quad_sensor_startframe__fcaicouwupiu_large-removebg-preview.png";
lens_video_div.appendChild(lens_of_camera)



var lens_set_video = document.createElement("video");
lens_set_video.className="not";
lens_set_video.src="icon animation/large.mp4";
lens_set_video.muted=true;
lens_video_div.appendChild(lens_set_video);

var lens_start_frame= document.createElement("img");
lens_start_frame.className="lens_start_frame";
lens_start_frame.src="iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/startframe_no_chip__dn5b11wijv6u_large.jpg";
lens_video_div.appendChild(lens_start_frame)



var text_node = document.createElement("p");
text_node.className="lens_below_text";
text_node.innerHTML="Up to 4x<br>the resolution.<br>For jaw-dropping<br>cropping."
anonymous_4.appendChild(text_node)

var parabola_img_whole_div=document.createElement("div");
parabola_img_whole_div.className="parabola_img_whole_div";
anonymous_4.appendChild(parabola_img_whole_div);



var parabola_first_img = document.createElement("img");
parabola_first_img.className="parabola_first_img";
parabola_first_img.src="flat_golden/camera_resolution__fyu5zct2qo2m_small.jpg";
parabola_img_whole_div.appendChild(parabola_first_img);

var div_for_arabola_img_2 = document.createElement("div");
div_for_arabola_img_2.className="div_for_arabola_img_2";
parabola_img_whole_div.appendChild(div_for_arabola_img_2); 


var mover_div = document.createElement("div");
mover_div.className="mover_div";
parabola_img_whole_div.appendChild(mover_div)


var parabola_below_text_div = document.createElement("div");
parabola_below_text_div.className="parabola_below_text_div";
anonymous_4.appendChild(parabola_below_text_div)

var parabola_below_text = ["iPhone 14 Pro raises the bar for <br> what 48 megapixels can do —<br> delivering 4x the resolution in<br> ProRAW for mind-blowing detail in<br> every crop.","65% larger sensor","than iPhone 13 Pro"]
for(let i=0;i<3;i++){
  var text_node = document.createElement("p");
  text_node.id="parabola_below_text"+i;
  text_node.innerHTML=parabola_below_text[i];
  if(i==1){
    var div= document.createElement("div");
    div.className="third_page_color_div width_less_color";
    div.appendChild(text_node)
    parabola_below_text_div.appendChild(div);
    continue;
  }
  parabola_below_text_div.appendChild(text_node)
}





var crambile_img_div = document.createElement("div");
crambile_img_div.className="crambile_img_div";
crambile_img_div.classList.add("side_page_common_class");
artificial_body.appendChild(crambile_img_div);

var anonymous_5 = document.createElement("div");
anonymous_5.className="anonymous_5";
crambile_img_div.appendChild(anonymous_5);

var text_node = document.createElement("p");
text_node.className="text_node_crambile";
text_node.innerHTML="&nbsp;&nbsp;The picture<br> of versatility."
anonymous_5.appendChild(text_node);

var crambile_img_box = document.createElement("div");
crambile_img_box.className="crambile_img_box";
anonymous_5.appendChild(crambile_img_box);

const crambile_assets = {
  0:["iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/prime_lense_1__ddxtd9iwh8ae_large.jpg","1x Main | 24 mm"],
  1:["iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/prime_lense_2__fv44rnp6w1e2_large.jpg","0.5x Ultra Wide Macro | 13 mm"],
  2:["iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/prime_lense_3__9i8zkvwrufm6_large.jpg","New 2x Telephoto | 48 mm"],
  3:["iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/prime_lense_4__zvim8rl0csy6_large.jpg","0.5x Ultra Wide | 13 mm"],
  4:["iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/prime_lense_5__cyytd25swfue_large.jpg","3x Telephoto | 77 mm"],
  5:"The new Pro camera system adds a 2x optical-quality Telephoto to its zoom range, putting tons of framing flexibility in your pocket. Up your frame game.",
}


for (let i = 0; i < 5; i++) {
  var cra_img_div= document.createElement("div");
  cra_img_div.className="cra_img_div"
  cra_img_div.id="cra_img_div"+(i+1);
  var cra_img = document.createElement("img");
cra_img.src=crambile_assets[i][0];
cra_img_div.appendChild(cra_img);
var text_node= document.createElement("p");
text_node.className="cramibile_text";
text_node.innerHTML=crambile_assets[i][1];
cra_img_div.appendChild(text_node);
crambile_img_box.appendChild(cra_img_div)
var crabile_texts = document.getElementsByClassName("cramibile_text");
if(i==3){
  var text_node= document.createElement("p");
  text_node.className="cramibile_text_big";
text_node.innerHTML=crambile_assets[5];
crambile_img_box.appendChild(text_node);
}
}




var button_text_div1 = document.createElement("div");
  button_text_div1.className = "button_text_div1";

  var btn_p1 = document.createElement("p");
  btn_p1.innerHTML = "See how we created the<br> 2x Telephoto and how to <br>  get the most out of it";
  button_text_div1.appendChild(btn_p1);

  var button1 = document.createElement("div");
  button1.className = "button_of_sidepage button1";
  button1.innerHTML = "<i class=\"fa-solid fa-arrow-right\"></i>";
  button1.addEventListener('click',()=>{move(3)});
  button_text_div1.appendChild(button1);
  anonymous_5.appendChild(button_text_div1);



  var side_page2_fulldiv = document.createElement("div");
  side_page2_fulldiv.className="side_page2_fulldiv";
  
  crambile_img_div.appendChild(side_page2_fulldiv);
  
  var side_coverdiv3=document.createElement("div");
  side_coverdiv3.className="side_coverdiv2"
  side_page2_fulldiv.appendChild(side_coverdiv3);
  
  var side_coverdiv33=document.createElement("div");
  side_coverdiv33.className="side_coverdiv22"
  side_coverdiv33.classList.add("side_scroll_moving_div");
  side_coverdiv3.appendChild(side_coverdiv33);
  
  
  var sidepage3 = document.createElement("div");
  sidepage3.className = "sidepage2";
  sidepage3.style="width:4000px"
  sidepage3.classList.add("side_scroll_div");
  side_coverdiv33.appendChild(sidepage3);
  
  
  var button1_inverse = document.createElement("div");
  button1_inverse.className = "button1_inverse";
  button1_inverse.innerHTML = "<i class=\"fa-solid fa-xmark\"></i>";
  button1_inverse.addEventListener('click', () => {
    unmove(3)
  });
  sidepage3.appendChild(button1_inverse);
  
  var range1 = document.createElement("div");
  range1.className = "range1";
  var range1meter = document.createElement("div");
  range1meter.className = "range1meter";
  range1meter.classList.add("rangewidth");
  range1.appendChild(range1meter);
  sidepage3.appendChild(range1);
  
  
var text_node = document.createElement("p");
text_node.className="big_text_10";
text_node.innerHTML="Much more detail.<br> In much less light.";
anonymous_5.appendChild(text_node)



var img_gallery_div = document.createElement("div");
img_gallery_div.className="img_gallery_div";
anonymous_5.appendChild(img_gallery_div);
const img_gallery_assets = {
  0:["iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/low_light_wide__c65nchuelcom_large.jpg","3x better<br>  low-light photos","on the Ultra Wide<br> camera"],
  1:["iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/low_light_main__0url34t622q6_large.jpg","2x better<br>  low-light photos","on the Main camera"],
  2:["iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/low_light_telephoto__d4dzyue5rc66_large.jpg","2x better<br>  low-light photos","on the Telephoto<br> camera"]
}


for(i=0;i<3;i++){
  var div = document.createElement("div");
  div.className="img_gallery";
  var img = document.createElement("img");
  img.src=img_gallery_assets[i][0];
  div.appendChild(img);
  img_gallery_div.appendChild(div);
}
var img_gallery_div_below = document.createElement("div");
img_gallery_div_below.className="img_gallery_div_1";
anonymous_5.appendChild(img_gallery_div_below);

for(i=0;i<3;i++){
  var div = document.createElement("div");
  div.className="img_gallery";
  var div2 = document.createElement("div");
  div2.className="third_page_color_div";
  var c_tag = document.createElement("p");
  c_tag.className="c_tag";
  c_tag.innerHTML=img_gallery_assets[i][1];
  div2.appendChild(c_tag);
  var p_tag_1 = document.createElement("p");
  p_tag_1.className="below_text";
  p_tag_1.innerHTML="up to";
  var p_tag_2 = document.createElement("p");
  p_tag_2.className="below_text";
  p_tag_2.innerHTML=img_gallery_assets[i][2];
  div.appendChild(p_tag_1)
  div.appendChild(div2)
  div.appendChild(p_tag_2)
  
  img_gallery_div_below.appendChild(div);


  
}



var logo_and_text_div_cover = document.createElement("div");
logo_and_text_div_cover.className = "logo_and_text_div_cover";
logo_and_text_div_cover.id="hi"

var logo_and_text_div_3 = document.createElement("div");
logo_and_text_div_3.id = "logo_and_text_div";
logo_and_text_div_3.className = "not";


logo_and_text_div_cover.appendChild(logo_and_text_div_3);

var logo_change_motion_div = document.createElement("div");
logo_change_motion_div.id = "logo_change_motion_div";

logo_change_motion_div.classList.add("motion_icon")
logo_and_text_div_3.appendChild(logo_change_motion_div);
logo_change_motion_div.addEventListener('click',()=>{
  logo_and_text_div_3.className = "not"; 
  logo_change_motion_div.style="background-position: 0px 0px;";
})

var logo_side_text = document.createElement("div");
logo_side_text.id = "logo_side_text";
logo_side_text.innerText = "When apps request access to your photos, iPhone lets you call the shots by sharing just the ones you want instead of your entire library"
logo_and_text_div_3.appendChild(logo_side_text);
artificial_body.appendChild(logo_and_text_div_cover);


var video_text_div_1 = document.createElement("div");
video_text_div_1.className="video_text_div_1";
artificial_body.appendChild(video_text_div_1);

var text_node =document.createElement("p");
text_node.className="big_text_10";
text_node.innerHTML="24. Breath­taking. <br> Frames. Per. Second.";
video_text_div_1.appendChild(text_node)

var text_node =document.createElement("p");
text_node.className="cramibile_text_small";
text_node.innerHTML="Cinematic mode now shoots in 4K HDR at 24 fps — the film industry standard. Have your people call our people.";
video_text_div_1.appendChild(text_node)


var video = document.createElement("video");
video.className="big_screen";
video.src="flat_golden/medium.mp4";
video.autoplay=true
video.muted=true;
video.loop=true;
video_text_div_1.appendChild(video);


var div = document.createElement("div");
div.className="long_div_1";
video_text_div_1.appendChild(div)

var p_tag_2 = document.createElement("p");
p_tag_2.className="cramibile_text_small cus_size";
p_tag_2.innerHTML="Now you can seamlessly<br> edit with other pro footage in <br>4K at 24 or 30 fps. You can <br>even edit the depth effect <br>after capture."
div.appendChild(p_tag_2)
var div2 = document.createElement("div");
  div2.className="third_page_color_div ";
  var c_tag = document.createElement("p");
  c_tag.className="c_tag";
  c_tag.innerHTML="Highest-quality video"
  div2.appendChild(c_tag);
  div.appendChild(div2)
  var p_tag_2 = document.createElement("p");
  p_tag_2.className="below_text";
  p_tag_2.innerHTML="in a smartphone";

  div.appendChild(p_tag_2)




  var video_text_div_1 = document.createElement("div");
video_text_div_1.className="video_text_div_1";
video_text_div_1.style="height:2500px";
artificial_body.appendChild(video_text_div_1);

var text_node =document.createElement("p");
text_node.className="big_text_10";
text_node.innerHTML="Shaky action shot? <br>Fix it in pre.";
video_text_div_1.appendChild(text_node)



var mobile_user_name_div= document.createElement("div");
mobile_user_name_div.className="mobile_running";
video_text_div_1.appendChild(mobile_user_name_div);


var img = document.createElement("img");
img.src="flat_golden/action_mode_hw__fi4fqussd9ea_large.png";

img.className="mobile_frame-of_name"
mobile_user_name_div.appendChild(img)

var video = document.createElement("video");
video.src="flat_golden/dfgh.mp4";
video.className="mobile_video-of_name cs"
video.autoplay=true;
video.muted=true;
video.loop=true;
mobile_user_name_div.appendChild(video)



var div = document.createElement("div");
div.className="long_div_1";
video_text_div_1.appendChild(div)

var p_tag_2 = document.createElement("p");
p_tag_2.className="cramibile_text_small cus_size cuz";
p_tag_2.innerHTML="Whether you’re filming from an off-road SUV or running alongside your subject, try Action mode for smooth handheld videos — no gimbal required."
div.appendChild(p_tag_2)

var p_tag_2 = document.createElement("p");
  p_tag_2.className="below_text cus_wi";
  p_tag_2.innerHTML="The only smartphone in the world that lets you ";

  div.appendChild(p_tag_2)

var div2 = document.createElement("div");
  div2.className="third_page_color_div ";
  div2.style="width:450px;"
  var c_tag = document.createElement("p");
  c_tag.className="c_tag sm cus_wi";
  c_tag.innerHTML="shoot, view, edit and share in ProRes or Dolby Vision HDR"
  div2.appendChild(c_tag);
  div.appendChild(div2)
  

var shadow_double = document.createElement("div");
shadow_double.className="shadow_double";

var camera_elevate =document.createElement("video");
camera_elevate.className="camera_elevate";
camera_elevate.src="flat_golden/meum.mp4";
video.muted=true;
video_text_div_1.appendChild(shadow_double)
video_text_div_1.appendChild(camera_elevate);


var elevete_list_div = document.createElement("div");
elevete_list_div.className="elevete_list_div";
video_text_div_1.appendChild(elevete_list_div);


const elevete_list_assets = {
  0:["Main","48MP for up to 4x the resolution","  24 mm,  48 mm (2x Telephoto),  Quad-pixel sensor,  2.44 µm quad pixel,  1.22 µm single pixel,  ƒ/1.78 aperture,  100% Focus Pixels,  7-element lens,  Sensor-shift OIS (2nd gen)"],
  1:["Telephoto","Up to 2x better low‑light photos","  77 mm,  3x optical zoom,  ƒ/2.8 aperture,  6% Focus Pixels,  6-element lens,  OIS"],
  2:["Ultra Wide","Sharper, brighter macro shots","  13 mm,  120° field of view,  ƒ/2.2 aperture,  100% Focus Pixels,  6-element lens,  Lens correction"]
}


for(let z=0 ;z<3;z++){
  var div = document.createElement("div");
  div.className="vertical_list_div";
  if(z!=1){div.classList.add("curve_list")}
  elevete_list_div.appendChild(div)

  for(let x=0;x<2;x++){
  var text_node= document.createElement("p");
  text_node.className="list_head_text"+(x+1);
  text_node.innerHTML=elevete_list_assets[z][x];
  div.appendChild(text_node)
  }

  var list = elevete_list_assets[0][2].split(",");
var ul = document.createElement("ul");
ul.className="ul"

  for(let j of list){
    var li = document.createElement("li");
    li.innerHTML=j;
    ul.appendChild(li);
  }
div.appendChild(ul)

}


var chip_text_arr=["The<br> mastermind<br> behind it all.","Say hello to A16 Bionic,<br>the ultimate smartphone chip."]


var chip_div_wholediv = document.createElement("div");
chip_div_wholediv.className="chip_div_wholediv";
artificial_body.appendChild(chip_div_wholediv);

var chip_text_div = document.createElement("div");
chip_text_div.className="chip_text_div";
chip_div_wholediv.appendChild(chip_text_div);

for(let x=0;x<2;x++){
  var text_node= document.createElement("p");
  text_node.className="chip_text"+(x+1);
  text_node.innerHTML=chip_text_arr[x];
  chip_text_div.appendChild(text_node);
  }

var chip_div = document.createElement("div");
chip_div.className="chip_div";
var chip= document.createElement("img");
chip.className="chip";
chip.src="iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/a16_chip__chss6utgva82_large.jpg";
chip_div.appendChild(chip)
chip_div_wholediv.appendChild(chip_div)


var point_1 = document.createElement("div");
var point_2 = document.createElement("div");
var point_3 = document.createElement("div");
chip_div.appendChild(point_1)
chip_div.appendChild(point_2)
chip_div.appendChild(point_3)
var point_4 = document.createElement("div");
var point_5 = document.createElement("div");
var point_6 = document.createElement("div");
chip_div.appendChild(point_4)
chip_div.appendChild(point_5)
chip_div.appendChild(point_6)
var point_7 = document.createElement("div");
chip_div.appendChild(point_7)





//----------------------------



  
const difference_of_iphone={
  1:[["apple2/last_1.jpg","apple2/last_11.png","New","iPhone 14 Pro","The ultimate iPhone."," ","From ₹129900.00*","buy",`learn more&nbsp<i class="fa-solid fa-greater-than small"></i>`,"https://www.apple.com/in/shop/goto/buy_iphone/iphone_14_pro","https://www.apple.com/in/iphone-14-pro/"],["17.00 cm (6.7″) or  15.54 cm (6.1″)","Super Retina XDR display","ProMotion technology","Always-On display"],["apple2/table_1.png","Dynamic Island","A new way to interact with iPhone"],["apple2/sos.png","Emergency SOS","Crash Detection"],["apple2/lens_1.png","Pro camera system","48MP Main | Ultra Wide","Telephoto","Photonic Engine for incredible ","detail and colour <br>Autofocus on TrueDepth <br>front camera"],["apple2/icon_battery.png","Up to 29 hours video playback"],["apple2/icon_a16.png","A16 Bionic chip"],["apple2/icon_face_id.png","Face ID"],["apple2/icon_5g.png","5G capable"]],
  2:[["apple2/last_2.jpg","apple2/last_22.png","New","New iPhone 14","A total powerhouse."," ","From ₹79900.00*","buy",`learn more&nbsp<i class="fa-solid fa-greater-than small"></i>`,"https://www.apple.com/in/shop/goto/buy_iphone/iphone_14","https://www.apple.com/in/iphone-14/"],["16.95 cm (6.7″) or 15.40 cm (6.1″)","Super Retina XDR display","-","-"],[" "," ","-"],["apple2/sos.png","Emergency SOS","Crash Detection"],["apple2/lens_2.png","Advanced dual-camera system","12MP Main | Ultra Wide","-","Photonic Engine for incredible","detail and colour <br>Autofocus on TrueDepth<br> front camera"],["apple2/icon_battery.png","Up to 26 hours video playback"],["apple2/icon_a15.png","A15 Bionic chip with 5-core GPU"],["apple2/icon_face_id.png","Face ID"],["apple2/icon_5g.png","5G capable"]],
  3:[["apple2/last_3.jpg","apple2/last_33.png","","iPhone 13","As amazing as ever."," ","From ₹64900.00*","buy",`learn more&nbsp<i class="fa-solid fa-greater-than small"></i>`,"https://www.apple.com/in/shop/goto/buy_iphone/iphone_13","https://www.apple.com/in/iphone-13/specs/"],["15.40 cm (6.1″) or 13.76 cm (5.4″)","Super Retina XDR display","-","-"],[" ","-"," "],["apple2/sos.png","Emergency SOS","-"],["apple2/lens_3.png","Dual-camera system","12MP Main | Ultra Wide","-","TrueDepth front camera",""],["apple2/icon_battery.png","Up to 19 hours video playback"],["apple2/icon_a15.png","A15 Bionic chip with 4-core GPU"],["apple2/icon_face_id.png","Face ID"],["apple2/icon_5g.png","5G capable"]],
  4:[["apple2/last_4.jpg","apple2/last_44.png","","iPhone SE","Serious power. Serious value."," ","From ₹49900.00*","buy",`learn more&nbsp<i class="fa-solid fa-greater-than small"></i>`,"https://www.apple.com/in/shop/goto/buy_iphone/iphone_se","https://www.apple.com/in/iphone-se/"],["11.94 cm (4.7″)","Retina HD display","-","-"],[" ","-"," "],["apple2/sos.png","Emergency SOS","-"],["apple2/lens_4.png","Advanced camera system","12MP Main","-","Front camera",""],["apple2/icon_battery.png","Up to 15 hours video playback"],["apple2/icon_a15.png","A15 Bionic chip with 4-core GPU"],["apple2/icon_touch_id.png","Touch ID"],["apple2/icon_5g.png","5G capable"]]
}

const second_page_assets = {
  btn: `<i class="fa-solid fa-plus"></i>`,
  greater: `<i class="fa-solid fa-greater-than small"></i>`,
}
var description_whole_div= document.createElement("div");
description_whole_div.className="description_whole_div white_text margin_top_for back_black";
var side_space=document.createElement("div");
side_space.className="side_space white_text back_black";
var text_node=document.createElement("p");
text_node.className="white_text text_node_b";
text_node.innerHTML="Which iPhone is right for you?";
side_space.appendChild(text_node);
side_space.appendChild(description_whole_div);
artificial_body.appendChild(side_space);

for(let i=1;i<=4;i++){
  var description_div = document.createElement("div");
  description_div.className="white_text description_div back_black";
  description_whole_div.appendChild(description_div);

  var des_div_1=document.createElement("div");
  des_div_1.className="white_text des_div_1 back_black";
  description_div.appendChild(des_div_1);

  var phone_img = document.createElement("img");
  phone_img.className="white_text phone_img back_black";
  phone_img.src=difference_of_iphone[i][0][0];
  des_div_1.appendChild(phone_img);

  var color_of_mobile = document.createElement("img");
  color_of_mobile.className="white_text color_of_mobile back_black";
  color_of_mobile.src=difference_of_iphone[i][0][1];
  des_div_1.appendChild(color_of_mobile);

  var small_of_new = document.createElement("p");
  small_of_new.className="white_text small_of_new back_black";
  small_of_new.innerHTML=difference_of_iphone[i][0][2];
  des_div_1.appendChild(small_of_new);
  
  for(let z=3;z<7;z++){
    var text_node=document.createElement("p");
    text_node.className="white_text text_node back_black";
    if(z==3){
      text_node.className="white_text text_node_1 back_black";
    }
    text_node.innerHTML=difference_of_iphone[i][0][z];
    des_div_1.appendChild(text_node)
  }
  for(let d=7;d<=8;d++){
    var buy_btn = document.createElement("a");
    buy_btn.className="white_text buy_btn back_black";
    if(d==8){
      buy_btn.className="white_text buy_btn_1 back_black";
    }
    buy_btn.innerHTML=difference_of_iphone[i][0][d];
    buy_btn.href=difference_of_iphone[i][0][d+2];
    des_div_1.appendChild(buy_btn);
  }
  des_div_1.innerHTML+="<hr>";
  var des_div_2=document.createElement("div");
  des_div_2.className="white_text des_div_2 back_black";
  description_div.appendChild(des_div_2);
  for (let x = 0; x < 4; x++) {
    
    
    var text_node = document.createElement("p");
    text_node.className="white_text text_node back_black";
    if(x==0){
      text_node.className="white_text text_node_2 back_black"
    }    
    text_node.innerHTML=difference_of_iphone[i][1][x];
    des_div_2.appendChild(text_node)
  }

  var des_div_3 =document.createElement("div");
  des_div_3.className="white_text des_div_3 back_black";
  description_div.appendChild(des_div_3);
  if(i==1){
    var dynamic_img= document.createElement("img");
    dynamic_img.src=difference_of_iphone[i][2][0];
    des_div_3.appendChild(dynamic_img);
  }
  var text_node = document.createElement("p");
  text_node.className="white_text text_node_5 back_black";
  text_node.innerHTML=difference_of_iphone[i][2][1];
  des_div_3.appendChild(text_node);
  
  var text_node = document.createElement("p");
  text_node.className="white_text text_node_4 back_black";
  text_node.innerHTML=difference_of_iphone[i][2][2];
  des_div_3.appendChild(text_node);
  
  var des_div_4 =document.createElement("div");
  des_div_4.className="white_text des_div_4 back_black";
  description_div.appendChild(des_div_4);

    var sos_img= document.createElement("img");
    sos_img.src=difference_of_iphone[i][3][0];
    des_div_4.appendChild(sos_img);

  var text_node = document.createElement("p");
  text_node.className="white_text text_node_5 back_black";
  text_node.innerHTML=difference_of_iphone[i][3][1];
  des_div_4.appendChild(text_node);
  
  var text_node = document.createElement("p");
  text_node.className="white_text text_node_5 back_black";
  text_node.innerHTML=difference_of_iphone[i][3][2];
  des_div_4.appendChild(text_node);


  var des_div_5 =document.createElement("div");
  des_div_5.className="white_text des_div_5 back_black";
  description_div.appendChild(des_div_5);

    var camera_module_img= document.createElement("img");
    camera_module_img.src=difference_of_iphone[i][4][0];
    des_div_5.appendChild(camera_module_img);

  var text_node = document.createElement("p");
  text_node.className="white_text text_node_5";
  text_node.innerHTML=difference_of_iphone[i][4][1];
  des_div_5.appendChild(text_node);
  for(let g=2;g<6;g++){
  var text_node = document.createElement("p");
  text_node.className="white_text text_node_6";
  text_node.innerHTML=difference_of_iphone[i][4][g];
  des_div_5.appendChild(text_node);
  }
for(let t=5;t<9;t++){
  var des_div_6 =document.createElement("div");
  des_div_6.className="white_text des_div_7";
  description_div.appendChild(des_div_6);

    var battery_img= document.createElement("img");
    battery_img.src=difference_of_iphone[i][t][0];
    des_div_6.appendChild(battery_img);

  var text_node = document.createElement("p");
  text_node.className="white_text text_node_8";
  text_node.innerHTML=difference_of_iphone[i][t][1];
  des_div_6.appendChild(text_node);
}  
  }
  var des_div_8 =document.createElement("div");
  des_div_8.className="white_text des_div_8";
  side_space.appendChild(des_div_8);

  var link_arr_1 =["Compare all iPhone models","Shop iPhone","Chat now","https://www.apple.com/in/iphone/compare/","https://www.apple.com/in/shop/goto/buy_iphone","https://contactretail.apple.com/?c=in&l=en&ap=COM&pg=COM:iphone/buy-help&ag=FASTPASS"]

  for(let f=0;f<3;f++){
    var text_node = document.createElement("a");
  text_node.className="white_text text_node_9";
  if(f==2){
    text_node.innerHTML=link_arr_1[f];   
    text_node.href=link_arr_1[f+3];

    var text_node_10 = document.createElement("p");
  text_node_10.className="white_text text_node_10";
    text_node_10.innerHTML="Need some help? "
    text_node_10.appendChild(text_node)
    text_node_10.innerHTML+=" or call 000800 040 1966.";
    
    des_div_8.appendChild(text_node_10);
    continue;
  }
  text_node.innerHTML=link_arr_1[f]+" "+second_page_assets.greater;
   
  text_node.href=link_arr_1[f+3];
  des_div_8.appendChild(text_node);
  }
  var des_div_10 =document.createElement("div");
  des_div_10.className="white_text des_div_12";
  artificial_body.appendChild(des_div_10);

const page_final_2 ={
  1:["Trade in your smartphone for credit.","With Apple Trade In, you can get credit towards a new iPhone when you trade in an eligible smartphone.1 It's good for you and the planet.","Learn more","https://www.apple.com/in/shop/goto/trade_in"],
  2:["Still have questions?<br> Just ask.","You won't find a better place to buy iPhone. We know about carriers, payment options, and more. And we make it easy to understand.","Learn more","https://www.apple.com/in/iphone/buy/"],
  3:["Free delivery","Get free delivery direct to your door.","Learn more","https://www.apple.com/in/shop/goto/shipping_delivery"],
  4:["Ways to buy","Buy the way that's right for you.","Learn more","https://www.apple.com/in/shop/goto/ways_to_buy"],
  5:["Get help buying","Have a question? Call a Specialist or chat online.<br> Call 000800 040 1966.","Contact us","https://contactretail.apple.com/?pg=COM:iphone-14-pro_switch&ap=COM&c=in&l=en"]
}

for (let g = 1; g < 6; g++) {

  var bottom_top_div = document.createElement("div");
  bottom_top_div.className="white_text bottom_top_div";
  des_div_10.appendChild(bottom_top_div);
  

  var bottom_text_1 = document.createElement("p");
  bottom_text_1.className="white_text bottom_text_1";
  bottom_text_1.innerHTML=page_final_2[g][0];
  bottom_top_div.appendChild(bottom_text_1);

  var bottom_text_2 = document.createElement("p");
  bottom_text_2.className="white_text bottom_text_2";
  bottom_text_2.innerHTML=page_final_2[g][1];
  bottom_top_div.appendChild(bottom_text_2);


  var anchor_bottom = document.createElement("a");
  anchor_bottom.className=" anchor_bottom";
  anchor_bottom.innerHTML=page_final_2[g][2]+second_page_assets.greater;
  anchor_bottom.href=page_final_2[g][3];


  if(g>2){
    bottom_top_div.classList.add("bottom_top_small");
    bottom_text_1.classList.add("bottom_text_1_small");
    bottom_text_2.classList.add("bottom_text_2_small");
    anchor_bottom.classList.add("anchor_bottom_small");
  }
  bottom_top_div.appendChild(anchor_bottom);

}








}





















//----------page1----------functions-------//

//---------1---to display the body----//

function bodyflex() {
  login_box.style.display = "none";
  artificial_body.style = "display:flex";
  window.scrollTo(0, 0)
  setTimeout(nameblock, 3255)
}
//--------------2----to hide the intro img---/
function hide_img_1() {
  setwebpage()
  intro_14_pro_img.style.display = "none";
  Start_up_video.src = "body1/intro_video_apple.mp4";
  Start_up_video_div.style = "display:block;animation: video_zoom_in_1 1.5s linear;";
  setTimeout(() => {
    top_bar_2.style.background = "#1d1d1f";
  }, 4000)
}
//------------3-----to show the user name---------/
function nameblock() {
  user_show_name.style = "display:block";
  emonji.style = "display:block";
  setTimeout(namenone, 1435)
}
//-------------4-----to hide the user name show in the video-------/
function namenone() {
  user_show_name.style = "display:none";
  emonji.style = "display:none";
}
//--------------5----open the website from login page---/
function open() {
  if (login_box.value != "" && login_box.value != null && login_box.value != undefined) {
    savename = login_box.value;
    var temp_p=savename.indexOf(" ");
    if(temp_p !=-1){
      savename=savename.slice(0,temp_p);
    }
  
    var transformX = (savename.length)*25;
    console.log(transformX)
    upper_text.style=`transform:translateX(-${transformX}px)`;
    lower_text_div.style.transform=`translateX(-${transformX}px)`;
    center_text_div.style=`transform:translateX(-${transformX}px)`;
 

    
    
    user_show_name.innerText = "Hi.... " + (savename).toUpperCase();
    upper_text.innerHTML="Hello..."+(savename).toUpperCase()
    lower_text.innerText="Hello..."+(savename).toUpperCase()
    sessionStorage.setItem("username", savename)
    
    login_box.value = "";
    login_box.placeholder = "";
    login_page_div.style.display = "none";
    login_box.style = "text-align:left;transform: scale(50)";
    setTimeout(() => {
      bodyflex();
      parabola_creater();
      setTimeout(hide_img_1, 1500);
    }, 1000);
  }
}
//-----------6----togle the login page if already login-----/
function toggleinput(){
  login_box.value = savename;
  open();
}
//----------7-------set all scroll event to webpage---/
function setwebpage() {
  real_body.onscroll = () => {
      //  console.log((scroll.scrollTop));
    currentY=scroll.scrollTop;
    localStorage.currentYpos=currentY;
    if ((scroll.scrollTop > 10000) && (real_body.className == "not1")) {
      playvideoofchangemobile();
    }
 
    if ((scroll.scrollTop > 11200) && (scroll.scrollTop < 11999)) {
      opacityoftext1();

    }
    if (scroll.scrollTop > 11700) {
      
      setTimeout(()=>{if(!logo_and_text_div.classList.contains("done")){iconmotion(0);logo_and_text_div.className = "done";}}, 1000);
    }
     if(scroll.scrollTop > 17000){
      
      setTimeout(()=>{if(!logo_and_text_div_2.classList.contains("done")){iconmotion(1);logo_and_text_div_2.className = "done";}}, 1000);
    }
    if(scroll.scrollTop > 28100){
      
      setTimeout(()=>{if(!logo_and_text_div_3.classList.contains("done")){iconmotion(2);logo_and_text_div_3.className = "done";}}, 1000);
    }
    if ((scroll.scrollTop > 12800) && (scroll.scrollTop < 13000)) {
      dynamic_o_size(scroll.scrollTop);
    }
    if ((scroll.scrollTop > 13000)) {
      phone_opacityhigh(scroll.scrollTop);
    }
    if ((scroll.scrollTop > 13800)) {
      buttonmove(0);
    }
    if(scroll.scrollTop >18450){
      buttonmove(1);
    }
    if(scroll.scrollTop >20600){
      buttonmove(2);
    }
    if(scroll.scrollTop >27000){
      buttonmove(3);
    }
    if(scroll.scrollTop>25300  && scroll.scrollTop<27000){
      crambile_move(scroll.scrollTop-25300);
    }

    if(scroll.scrollTop>32100 && scroll.scrollTop<33300){
      camera_elevate_f(scroll.scrollTop-32100);
    }

    if(scroll.scrollTop>32300 && scroll.scrollTop<32900){
      list_text(scroll.scrollTop-32300);
    }
    if(scroll.scrollTop>33450 && scroll.scrollTop<34200){
      chip_move(scroll.scrollTop-33450);
    }

    if(scroll.scrollTop>14750 && scroll.scrollTop<15200){
      var scale=1.25;
      speed_up_mobile_video.currentTime=0;
      if(scroll.scrollTop>14900 && scroll.scrollTop<15200){
         scale=(1.25-((scroll.scrollTop-14900)/1000));
         
      }
      
      mobile_pop_up(scroll.scrollTop-14750,scale);
      if(scroll.scrollTop>14800 && scroll.scrollTop<14900){
        pop_up_text_opacity((scroll.scrollTop-14800)/200,0)
      }else if(scroll.scrollTop>14900 && scroll.scrollTop<15200){
        pop_up_text_opacity(1,(((scroll.scrollTop-15000)/200)))
      }
    }
    if(lens_set_video.className=="not"){
      if(scroll.scrollTop>21321 && scroll.scrollTop<22695){
        lens_movements((scroll.scrollTop-21321));
      }else if(scroll.scrollTop>22695){
        lens_movements(1373);
      }
    }
    if(scroll.scrollTop>23500){
      parabola_mover((scroll.scrollTop-23500)/4);
    }
    
  }
}
//--------------8------to start the video of color change changing mobile----/ 
function playvideoofchangemobile() {
  real_body.className = "done";
  change_phone_color_video.src = "change_mobile_color/movement_of_mobile.mp4";
  change_phone_color_video.style.display = "block";
  change_phone_color_img.style.display = "none";
  change_phone_color_img.src = "";
  setTimeout(selfchange, 5000);
}
//--------------9-----can change color of mobile automaticaly---/
function selfchange() {
  if (change_phone_color_whole_div.className == "not2") {
    change_phone_color_video.style.display = "none";
    if (colorchangeinput % 2 == 0) {
      example = "change_of_image1";
    } else {
      example = "change_of_image2";
    }

    change_phone_color_img.style = `display:block; animation: ${example} 8s linear;`
    change_phone_color_img.src = mobilecolorimg[colorchangeinput];
    for (let i = 1; i < 5; i++) {
      document.getElementById(`color${i}`).style.color = "#343437";
    }
    document.getElementById(`color${colorchangeinput++}`).style.color = "#CECECE";
    if (colorchangeinput > 4) {
      colorchangeinput = 1;
    }

    setTimeout(selfchange, 3000);
  }
}
//---------------10--to change the color of the  if the list element is clicked-----/ 
function clickchange(a) {
  var b = a;
  change_phone_color_whole_div.className = "done";
  colorchangeinput = a;
  change_phone_color_video.style.display = "none";
  if (colorchangeinput % 2 == 0) {
    example = "change_of_image1";
  } else {
    example = "change_of_image2";
  }

  change_phone_color_img.style = `display:block; animation: ${example} 8s linear;`
  change_phone_color_img.src = mobilecolorimg[b];
  for (let i = 1; i < 5; i++) {
    document.getElementById(`color${i}`).style.color = "#343437";
  }
  document.getElementById(`color${b}`).style.color = "#CECECE";
}
//---------------11--- change the opacity of the text when scroll----/
function opacityoftext1() {
  scroll_opacity_text.style.opacity = `0.${(scroll.scrollTop%1000)-120}`;
}
//--------------12----to lock the apple lock animation---------///
function iconmotion(a) {
  document.getElementsByClassName("motion_icon")[a].style = `background-position: ${i}px ${j}px;`
  i -= 28;
  if (i < -196) {
    j -= 38;
    i = 0;
    line++
  }
  if (line < 7) {
    setTimeout(()=>{iconmotion(a)}, 50);
  } else {
    document.getElementsByClassName("motion_icon")[a].style = `background-position: 0px -196px;`
    i = 0;
    line = 1;
    j = 0;
  }
}
//--------------13-- set font-size and o width--in the text---------//
function dynamic_o_size(a) {
  var temp = (a - 12600) / 40;
  temp -= 5;

  o_div.style = "font-size:" + (8 + temp) + "rem;";
  // console.log((temp))
  // if((1.1-(temp/5))<0.16){textsize.style="font-size:"+(8+temp)+"rem;opacity:"+0+";";}
  o_width.style = "width:" + (2.4 + (temp * 2.48)) + "rem;height:" + (2.5 + (temp / 3)) + "rem;border:" + (15 + temp) + "px solid white;opacity:" + (1.1 - (temp / 5.2)) + ";";
  // console.log((2.4 + (temp * 2.48)))
  if (((temp / 5.2) - 0.9) > img_island_div.style.opacity) {
    img_island_div.style = "opacity:" + ((temp / 5.2) - 0.9) + ";";
    // console.log(((temp / 5.2) - 0.9))
  } else {
    img_island_div.style = "opacity:" + 0 + ";";
  }

}
//--------------14-------to set the full opacity of mobile inthe o div--------/
function phone_opacityhigh(a) {

  if ((scroll.scrollTop > 13000) && (scroll.scrollTop < 13099)) {
    // console.log("wertyui")
    img_island_div.style = "opacity:0." + (a - 13000) + ";";
    o_div.style = "font-size:13rem;opacity:" + (1 - (Number("0." + (a - 13000)))) + ";";
    start_frame_of_o_phone.style.display = "block";
    o_phone_video.style.display = "none";
    o_phone_video.currentTime = 0;
    phone_above_text.style.display = "none";
    // document.getElementById("o_phone_video").src="o animation/o_animation.mp4";

  } else {
    img_island_div.style = "opacity:1;";
    o_div.style = "font-size:13rem;opacity:0;";
    start_frame_of_o_phone.style.display = "none";
    o_phone_video.style.display = "block";
    phone_above_text.style.display = "block";
    // document.getElementById("o_phone_video").src="o animation/o_animation.mp4";
    if (!o_phone_video.currentTime > 0) {
      o_phone_video.play();

    }

  }
}
//-----------------15---to play the video of inside the mobile---/
function phone_video_1() {
  if (phone_video_play_btn.innerText == "pause") {
    tempof_video = o_phone_video.currentTime;
    o_phone_video.pause();
    phone_video_play_btn.innerText = "play";
  } else if (phone_video_play_btn.innerText == "play" || phone_video_play_btn.innerText == "replay") {
    o_phone_video.currentTime = tempof_video;
    o_phone_video.play();
    phone_video_play_btn.innerText = "pause";
  }
}
//------------------16---to move the button on the scroll position----/
function buttonmove(a) {
  document.getElementsByClassName("button_of_sidepage")[a].style = "transform:translate(500px,0px);box-shadow: 0px 0px 50px  black, 0px 0px 0px 0px";
}
//---------------17---to move to side page 1 function---/
function move(a) {
  preposition = scroll.scrollTop;
  document.getElementsByClassName("side_scroll_moving_div")[a].scrollTo(0, 0);
  document.getElementsByClassName("side_page_common_class")[a].style = "overflow:unset;width:3840px;transform:translateX(-1920px);"; 
  lens_of_camera.style.marginLeft="-1920px";
  background_black_of_lens.style.marginLeft="-2920px";
  setTimeout(() => {
    hide_other(a);
    window.scrollTo(0,0);
  }, 2000)
var temp_height_body=document.getElementsByClassName("side_page_common_class")[a].clientHeight-1316;
var temp_width_body=document.getElementsByClassName("side_scroll_div")[a].clientWidth-1920;
var range_width=350/temp_width_body;
var ratioinverse = temp_width_body/temp_height_body;
var ratio = temp_height_body/temp_width_body;
  real_body.onscroll = function() {

      var temp = scroll.scrollTop / ratio;
      console.log(ratio)
      document.getElementsByClassName("rangewidth")[a].style=`width:${range_width*temp+3.5}px;`;
      document.getElementsByClassName("side_scroll_moving_div")[a].scrollTo(temp, 0);
  };
  document.getElementsByClassName("side_scroll_moving_div")[a].onscroll=()=>{
    var temp1=document.getElementsByClassName("side_scroll_moving_div")[a].scrollLeft;
    document.getElementsByClassName("rangewidth")[a].style=`width:${(range_width*temp1)+3.5}px;`;
  }
}
//------------18-- to unmove to the main page from the side page--------------/
function unmove(a){
  setwebpage();
  top_bar_space.style="";
  top_bar_2.style="background: rgb(29, 29, 31);";
  body1.style="";
  scroll_gradient_letter_whole_div.style="";
  scroll_gradient_change.style="";
  side_page1_whole_div.style="";
  mobile_pop_div.style="";
  note_rearrange_div.style="";
  logo_and_text_div_cover.style="";
      slide_page_whole_div_2.style="";
      side_page1_whole_div.style="";
      slide_page_whole_div_3.style="";
      slide_page_whole_div_4.style="";
      crambile_img_div.style="";
      chip_div_wholediv.style.display="flex";
      document.getElementById("hi").style="";
      for(let i=0;i<2;i++){
        document.getElementsByClassName("video_text_div_1")[i].style.display="flex";
      }
      side_space.style.display="flex";
      des_div_10.style.display="flex";
  window.scrollTo(0,preposition);
  if(lens_set_video.className=="not"){
    lens_of_camera.style="margin-left:0px";
    background_black_of_lens.style="margin-left:0px";
  }

   document.getElementsByClassName("side_page_common_class")[a].style = "overflow:unset;width:1920px;transform:translateX(0px);";

  setTimeout(() => {
   document.getElementsByClassName("side_page_common_class")[a].style = "  overflow:hidden;;width:1920px;transform:translateX(0px);";
}, 2000)
  


}
//------------19- to register the page number---in stroge---------/
function changepage(a) {
  localStorage.setItem("page", a);
  localStorage.currentYpos=0;
}
//---------------20----pop up the mobile of video--------------/
function mobile_pop_up(a,b) {
  always_text.style=`top:${200-(a/1.5)}px;`;
  mobile_div_for_pop_up.style=`top:-${a*1.5}px;transform: scale(${b});`;
  if(a<400){
    pla_count=0;
  }
}
//----------------to play the mobile video and opacity of near text------------/
function pop_up_text_opacity(a,b){
  text_div_z.style=`opacity:${a}`;
  if(pla_count==0){
    speed_up_mobile_video.play();
    pla_count++;
  }
  
  second_popup.style=`opacity:${b};background-image: linear-gradient(180deg,#ffb6ff 60%,#b344ff 100%);`
}
//-------analog move function-----------/
function analog_move(a){
  // console.log(a)
  if(a==6){
    document.getElementById("analog_btn1").style="background:#151516"
  }else{
    document.getElementById("analog_btn1").style="background:#2F2F31";
    document.getElementById("analog_btn0").style="background:#2F2F31";
  }
  document.getElementsByClassName("img_div")[a].style="width:0px;padding:0px";
  document.getElementsByClassName("analog_img_of_mobile")[a].style="opacity:0;transform:scale(0.8);";
  
}
//------------unmove the analog------------mobileimg------/
function analog_unmove(a) {
  console.log(a)
  if(a==0){
    document.getElementById("analog_btn0").style="background:#151516"
  }else{
    document.getElementById("analog_btn0").style="background:#2F2F31";
    document.getElementById("analog_btn1").style="background:#2F2F31";
  }
  document.getElementsByClassName("img_div")[a].style="width:368px;padding:20px";
  document.getElementsByClassName("analog_img_of_mobile")[a].style="opacity:1;transform:scale(1);";
}
//-------------hideother div for theside page entry-------------/
function hide_other(a){
    top_bar_space.style="display:none;";
    top_bar_2.style="display:none;";
    body1.style="display:none;";
    scroll_gradient_letter_whole_div.style="display:none;";
    scroll_gradient_change.style="display:none;";
    mobile_pop_div.style="display:none";
    note_rearrange_div.style="display:none";
    logo_and_text_div_cover.style="display:none";
    slide_page_whole_div_4.style="display:none";
    document.getElementById("hi").style="display:none";
    chip_div_wholediv.style.display="none";
des_div_10.style.display="none";
    for(let i=0;i<2;i++){
      document.getElementsByClassName("video_text_div_1")[i].style.display="none"
    }
    side_space.style.display="none";

    for(let i=0;i<=3;i++){
      if(i!=a){
        document.getElementsByClassName("side_page_common_class")[i].style.display="none";
      }
    }       
}
//------------------move the lens in the para boa shape-----------------/
function parabola_mover(a){
  if(a<371){
  a=Math.floor(a)
  // console.log((parabola_arr[a][1]))
  mover_div.style=`top:${parabola_arr[a][0]}px;left:${parabola_arr[a][1]-50}px;`;
  div_for_arabola_img_2.style=`background-position:${"-"+(parabola_arr[a][1]+250)}px ${"-"+parabola_arr[a][0]}px`;
  }
}
//----------to move and fit the lens in the camera -----------/
function lens_movements(a) {

  var pl = (a/2)+100;
  pl=pl.toString().replaceAll(".","").split("");
  pl.splice(1,0,".")
  pl=pl.join("")
  pl=(1.9-(Number(pl)/9.9))
  lens_of_camera.style=`top:${(a/1.599)-480}px;transform:scale(${pl});`;
  background_black_of_lens.style=`top:${(a/1.599)-480}px;transform:scale(${pl});opacity:${1-(a/1000)};`;
  lens_set_video.style=`opacity:0;`;
  lens_start_frame.style=`opacity:${(a/1000)-0.5};`;
  if(a==1373){
    lens_set_video.className="done";
    lens_set_video.style="opacity:1";
    lens_of_camera.style="display:none;"
    lens_start_frame.style="z-index:-1;";
    lens_set_video.play();
  }
}
var parabola_arr=[];
//------- to create the path of the para bola points -----------------/
function parabola_creater(){
  var temp=75;
  for(let i=-185;i<=185;i++){
    var mini_arr=[];
    var xpos = Math.abs(i);
    var ypos= 450-((Math.pow((xpos+3),2)+2)/200);
    if(temp>0){
      ypos+=temp;
      temp-=0.5;
    }
    mini_arr.push(i+185);
    mini_arr.push(ypos);
    parabola_arr.push(mini_arr);
    mini_arr=[];
  }
}
//------to move the crambile img------------/
function crambile_move(a){
  // console.log(a)
  if(a>0 && a<500){
    document.getElementById("cra_img_div1").style=`transform:translate(-${a/10}px,${50-((a/10)*3)}px)`;
    document.getElementById("cra_img_div2").style=`transform:translate(${-50+(a/10)}px,${-50+((a/10)*5)}px)`;
    document.getElementById("cra_img_div4").style=`transform:translate(${-500+(a*1.2)}px,${-250+((a/10)*7)}px)`;
    document.getElementById("cra_img_div5").style=`transform:translate(50px,${-1250+((a*1.9))}px)`;
  }
  if(a>600 && a<700){
    for(let z=0;z<5;z++){
      crabile_texts[z].style=`opacity:${(a-600)/100}`;
    }
  }else if(a<600){
    for(let z=0;z<5;z++){
      crabile_texts[z].style=`opacity:0`;
    }
  }else{
    for(let z=0;z<5;z++){
      crabile_texts[z].style=`opacity:1`;
    }
  }
  if(0<a && a< 800){
    document.getElementById("cra_img_div3").style=`transform:translate(${200-((a/8)*1.5)}px,${-750+((a*0.75))}px) scale(${0.8+(a/4000)})`;
  }
  if(a>800 && a<1700){
    document.getElementById("cra_img_div3").style=`transform:translate(50px,${-150+(((a-800)/6))}px) scale(1)`;
  }
}


function camera_elevate_f(a){
  camera_elevate.currentTime=(a/200);
  camera_elevate.style=`transform:translate(0px,${(a/2)}px) scale(1.2)`;
  shadow_double.style=`transform:translate(0px,${((a/2)*1.5)}px)`;
}


function list_text(a){
  if(a<25){
    for(let i=0;i<3;i++){
      document.getElementsByClassName("list_head_text1")[i].style.opacity=0;
    }
  }else if(a<100){

    for(let i=0;i<3;i++){
      document.getElementsByClassName("list_head_text1")[i].style.opacity=(a/100);
    }
  }else if(a<125){
    for(let i=0;i<3;i++){
      document.getElementsByClassName("list_head_text2")[i].style=`opacity:0`;
    }
  }else if(a<200){
    for(let i=0;i<3;i++){
      document.getElementsByClassName("list_head_text2")[i].style=`opacity:${((a-100)/100)}`;
    }
  }else if(a>400 & a<500){
    elevete_list_div.style=`transform: translate(0px,${-600+((a-400))/2}px);`
  }else{
    for(let i=0;i<3;i++){
      document.getElementsByClassName("list_head_text2")[i].style=`opacity:1;padding-bottom:25px;border-bottom:1px solid grey;`;
      document.getElementsByClassName("ul")[i].style=`height:${(a-500)*2.5}px`
    }
  }

}

function chip_move(a){

  chip_div.style=`transform:translateX(${a-700}px);box-shadow:${Math.floor(((a/15)*2)-100)}px 0px ${Math.floor((150-(a/15)*3))}px ${Math.floor(100-((a/15)*2))}px;display:block`;
  // chip.style=`opacity:${1-((a/1500)*2)}`
  a=a*1.5;
  point_1.style=`position:absolute;height:10px;width:10px;background:black;top:${a}px;left:${a}px;box-shadow: 0px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px,${Math.floor(((a/3)*4)-1000)}px ${Math.floor(((a/3)*2)-500)}px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px`;
  
  point_3.style=`position:absolute;height:10px;width:10px;background:black;top:${a}px;left:${a/2}px;box-shadow: 0px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px,${Math.floor(500-((a/3)*2))}px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px`;
 
  point_5.style=`position:absolute;height:10px;width:10px;background:black;top:${a}px;left:200px;box-shadow: 0px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px,${Math.floor(500-((a/3)*2))}px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px`;
  point_6.style=`position:absolute;height:10px;width:10px;background:black;top:500px;left:${a}px;box-shadow: 0px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px,${Math.floor(500-((a/3)*2))}px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px`;
  point_7.style=`position:absolute;height:10px;width:10px;background:black;top:${a}px;left:500px;box-shadow: 0px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px,${Math.floor(500-((a/3)*2))}px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px`;

  point_2.style=`position:absolute;height:10px;width:10px;background:black;top:${a/2}px;left:${a}px;box-shadow: 0px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px,${Math.floor(500-((a/3)*2))}px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px`;
  point_4.style=`position:absolute;height:10px;width:10px;background:black;top:200px;left:${a}px;box-shadow: 0px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px,${Math.floor(500-((a/3)*2))}px 0px ${Math.floor((300-(a/15)*6))}px ${Math.floor((500-(a/3)*2))}px`;

}

















// -----------------------------------------------------------------//

//----------------------page 2---------------------------------------------//

// -----------------------------------------------------------------//
if (pagenum == 2) {



  var real_body_2 = document.getElementById("html2");

  var privacy_text="Privacy. That's iPhone.";
privacy_text = privacy_text.split("");
var privacy_iconloc_arr=[];
privacy_iconloc();
window.onscroll = function(){
  var scroll =document.documentElement.scrollTop;



  if(scroll<1000 && scroll>450){
    opacity_of_hero(scroll);
  }else if(scroll > 1000){
    hero_img_div.style=`opacity:0;`;
  }else{
    hero_img_div.style=`opacity:1;`;
  }
  if(2350<scroll && 2925>scroll){
    privacy_dot(Math.floor((scroll-2350)/25),privacy_text,Math.floor((scroll-2350)/8));
  }else if(scroll>2925){
    privacy_dot(22,privacy_text,71)
  }else{
    privacy_dot(-1,privacy_text,0);
  }
  // console.log(scroll)
}
  var top_bar_space = document.createElement("div");
  top_bar_space.className = "topbarspace white";
  real_body_2.appendChild(top_bar_space);

  var top_bar_1 = document.createElement("div");
  top_bar_1.className = "topbar1 white_blur";
  var top_bar_11 = document.createElement("div");
  top_bar_11.className = "topbar11"
  var top_bar_icon1 = document.createElement("i");

  top_bar_icon1.className = "fa-brands";
  top_bar_icon1.classList.add("fa-apple");
  top_bar_icon1.id = "icon1";

  top_bar_11.appendChild(top_bar_icon1);
  top_bar_11.innerHTML += "iPhone 14 pro";
  top_bar_11.id = "black";
  top_bar_1.appendChild(top_bar_11);

  var top_bar_12 = document.createElement("div");
  top_bar_12.className = "topbar12";
  top_bar_1.appendChild(top_bar_12);
  real_body_2.appendChild(top_bar_1);

  var top_bar_2 = document.createElement("div");
  top_bar_2.className = "topbar2";
  top_bar_2.innerText = "Get up to ₹6000 instant savings on orders over ₹41900 with HDFC Bank credit cards.‡ Plus No Cost EMI from most leading banks.";
  setTimeout(() => {
    top_bar_2.style="background:#E8E8ED;color:black;border-bottom:1px solid black";
  }, 3000);
  real_body_2.appendChild(top_bar_2);

  page_btn_names = ["overview", "Switching to iPhone", "Tech specs"];

  for (let i = 0; i < 2; i++) {
    var page_anchor = document.createElement("a");
    page_anchor.href = "apple" + (i + 1) + ".html";
    var page_btn = document.createElement("button");
    page_btn.className = "pagebtn";
    page_btn.addEventListener('click', () => {
      changepage(i + 1)
    })
    page_btn.innerText = page_btn_names[i];



    if (i == 1) {
      page_btn.id = "clicked";
      top_bar_12.appendChild(page_btn);
      continue;
    }
    page_btn.id = "black";
    page_anchor.appendChild(page_btn);
    top_bar_12.appendChild(page_anchor);
  }
  var page_btns = document.getElementsByClassName("pagebtn");
  // console.log(page_btns)

  for (let i = 0; i < 2; i++) {
    if (i != 1) {
      page_btns[i].addEventListener('mouseover', () => {
        page_btns[i].style = "color:#147CE5"
      })
      page_btns[i].addEventListener('mouseout', () => {
        page_btns[i].style = "color:#000000"
      })
      page_btns[i].addEventListener('click', () => {
        page_btns[i].style = "color:#000000"
      })
    }

  }

  var text_and_big_img_div = document.createElement("div");
  text_and_big_img_div.className = "text_and_big_img_div";
  real_body_2.appendChild(text_and_big_img_div);

  let first_div_text = ["It's so easy to switch to iPhone.", "Coming from an Android phone? You'll see how easy it is to switch from the moment you turn on your new iPhone. There's a walk-through to get you started and an app that transfers your photos, contacts and more. You can even trade in your old smartphone for credit."]

  for (let i = 1; i <= 2; i++) {
    var text_p_1 = document.createElement("p");
    text_p_1.id = "text_p" + i;
    text_p_1.innerText = first_div_text[i - 1];
    text_and_big_img_div.appendChild(text_p_1)
  }
  var hero_img_div = document.createElement("div");
  var hero_big_img = document.createElement("img");
  hero_img_div.appendChild(hero_big_img);
  text_and_big_img_div.appendChild(hero_img_div);
  hero_big_img.src = "applepage2/hero_large.jpg";
  hero_img_div.id = "hero_img_div";


  var main_center_big_div = document.createElement("div");
  main_center_big_div.className = "main_center_big_div";
  real_body_2.appendChild(main_center_big_div);

  var center_bar = document.createElement("div");
  center_bar.className = "center_bar";
  main_center_big_div.appendChild(center_bar)
  var btn_name = ["Why switch", "Hear from switchers"];

  for (let i = 1; i <= 2; i++) {
    var center_bar_button = document.createElement("button");
    center_bar_button.className = "center_bar_button";
    center_bar_button.innerText = btn_name[i - 1]
    center_bar_button.addEventListener('click', () => {
      // this.style="border-bottom:1px solid black";
      center_bar_anchor(i);
    });
    center_bar.appendChild(center_bar_button)
  }


  const second_page_assets = {
    1: ["Trade in", "You can get up to <br>₹9705.00 for your<br> Android smartphone.", "applepage2/trade_1.jpg", "Trade In", "Trade in your current device for credit towards a new iPhone. To protect your data and privacy, we'll show you how to safely back up and wipe your data before you trade in your old phone.", `Find your trade-in value `, "https://www.apple.com/in/shop/goto/trade_in"],
    2: ["Support", "Real help is just a call,<br> chat or Tweet away.", "applepage2/support_2.jpg", "Support", "There are lots of ways to reach someone if you have questions. Call a Specialist, chat with someone online or Tweet @AppleSupport. Whether your question is about hardware or software, we're ready to help. And the Tips app will help you get the most out of your iPhone over time.", `Learn more `, "https://support.apple.com/en-in"],
    3: ["Move to iOS app", "Transfer your photos and contacts in a few simple steps.", "applepage2/move_3.jpg", "Move to iOS app", "Start by downloading the Move to iOS app on your Android phone. It securely transfers the stuff you care about most — your contacts, messages, WhatsApp content, photos, videos, email accounts and calendars — from your Android phone to your iPhone.", `Learn more about the Move to iOS app `, "https://support.apple.com/en-in/HT201196"],
    4: ["Durability", "If you want a phone <br>that will last, this is it.", "applepage2/durability_4.jpg", "Durability", "iPhone is built to withstand everyday wear and tear — and to resist spills and splashes.  And if you turn on automatic updates, it stays current with new features and the latest security. The result? iPhone holds its value longer than other smartphones."],
    5: ["Battery", "Battery life that keeps<br> up with your day.", "applepage2/battery_5.jpg", "Battery", "The hardware and software on iPhone are designed to work together efficiently to make the most of your battery life, so you can do more on a single charge."],
    6: ["Privacy", "........ ...... .......", "applepage2/privacy_6.jpg", "Privacy", "iPhone is built from the ground up to protect your personal information. Every iPhone has secure facial or fingerprint authentication. Apps need your permission to track your activity across other companies' apps or websites. Your iMessages and FaceTime video calls are encrypted ", "Learn more about Apple and privacy", "https://www.apple.com/in/privacy/"],
    7: ["Ease of use", "Everything <br>just works.", "applepage2/seamless_72.jpg", "Ease of use", "Apple engineers design our hardware and software together for a totally seamless experience. Want to connect your new AirPods to your iPhone? It's a simple one-tap setup. Want to share photos or contacts with friends nearby? AirDrop lists their names onscreen, so you can choose with a tap."],
    8: ["Environment", "More recovered and <br>renewable materials.", "applepage2/environment_8.jpg", "Environment", "Our stores, offices, data centres and operations are already carbon neutral. And by 2030, our products will be too. How will we get there? By using more recycled materials. Increasing energy efficiency. Using renewable energy. Avoiding direct emissions. And investing in nature-based solutions.", "Learn more about Apple and the environment", "https://www.apple.com/in/environment/"],
    9: ["Advanced cameras", "You'll get amazing <br>photos and videos <br>with iPhone.", "applepage2/camera_9.jpg", "Advanced cameras", "Night mode captures incredible colour and detail in low-light shots. Portrait mode makes your subject pop against a beautifully blurred background. Cinematic mode adds depth-of-field effect to your videos just like they do in Hollywood. And it all happens automatically."],
    10: ["Apple-designed chips", "It's all powered <br>by extremely<br> advanced<br> smartphone <br>chips.", "applepage2/video_10.mp4", "Apple-designed chips", "Apple-designed chips deliver exceptional performance you'll notice in everything you do. We also design the operating system, so everything works together in the most efficient way possible for great battery life.", ],
    11: ["Connect with friends", "Stay in touch with Messages,<br> WhatsApp and more.", "applepage2/imessage_11.jpg", "Connect with friends", "Messages lets you reply with quick icons, create Memoji and more. And you can keep your conversations going on WhatsApp and Facebook Messenger too."],
    12: ["App Store", "Lots of apps curated for you.", "applepage2/appstore_12.jpg", "App Store", "Our editors curate millions of free and paid apps to help you find your next favourite. We bring you stories about developers and tips to get the most out of your apps. And Privacy Nutrition Labels help you see how apps use your data."],
    btn: `<i class="fa-solid fa-plus"></i>`,
    greater: `<i class="fa-solid fa-greater-than small"></i>`,
  }


  for (let i = 1; i <= 12; i++) {
    var box_div = document.createElement("button");
    box_div.id=i;
    main_center_big_div.appendChild(box_div)
    var box_div_1 = document.createElement("div");
    var box_div_2 = document.createElement("div");

    box_div_1.className = "box_div_1";
    box_div_2.className = "box_div_2";

    box_div.appendChild(box_div_1)
    box_div.appendChild(box_div_2)

    var box_div_h4_1 = document.createElement("h4");
    box_div_h4_1.innerHTML = second_page_assets[i][0];
    box_div_h4_1.id = "box_div_h4_1" + i;
    box_div_1.appendChild(box_div_h4_1);
    var box_div_h2_1 = document.createElement("h2");
    box_div_h2_1.innerHTML = second_page_assets[i][1];
    box_div_h2_1.id = "box_div_h2_1" + i;
    box_div_1.appendChild(box_div_h2_1);
    if (i == 6 || i == 7 || i == 9 || i == 10) {
      box_div_1.classList.add("left_side_text");
      box_div_h2_1.id = "left_margin_text";
      box_div_h4_1.id = "left_margin_text";
    }
    if (i == 9) {
      box_div_h4_1.id = "dark_text";
    } else if (i == 6) {
      box_div_h2_1.id = "box_div_h2_1" + i;
    }

    if(i==6){
      var img =document.createElement("div");
      img.id="icon_lock";
      box_div_1.appendChild(img);
      var hide = document.createElement("div");
      hide.id="hide_1";
      box_div_1.appendChild(hide);
    }



    if (i != 10) {
      box_div_1.style = `background-image:url('${second_page_assets[i][2]}')`;




      if(i==7){
        box_div_1.style = `background-image:url('${second_page_assets[i][2]}');background-position-x: 290px;background-position-y: 0px;position:relative`;
        var img = document.createElement("img")
        img.src="applepage2/seamless_71.png";
        var video = document.createElement("video");
        video.src="applepage2/airpodes.mp4";
        video.id="video_404";
        video.autoplay=true;
        video.loop=true;
        box_div_1.appendChild(img)
        box_div_1.appendChild(video)
      }
      if (i == 2 || i == 4 || i == 5 || i == 8) {
        box_div_1.classList.add("position_center")
      } else if (i == 3) {
        var box_div_grey = document.createElement("div");
        box_div_grey.className = "bg_grey";
        box_div.appendChild(box_div_grey)
      }

    } else {
      var box_div_video = document.createElement("video");
      box_div_video.id = "box_div_video";
      box_div_video.src = second_page_assets[i][2];
      box_div_video.type = "video/mp4";
      box_div_video.autoplay = true;
      box_div_video.muted = true;
      box_div_video.loop = true;
      box_div_1.appendChild(box_div_video);
      box_div_1.id = "color_inverse";
      box_div_1.classList.add("add_color")
    }





    var box_div_h4_2 = document.createElement("h4");
    box_div_h4_2.innerHTML=second_page_assets[i][3];
    var box_div_h6_1 = document.createElement("h6");
    box_div_h6_1.innerHTML=second_page_assets[i][4];

    box_div_2.appendChild(box_div_h4_2);
    box_div_2.appendChild(box_div_h6_1);

    if (i == 1 || i == 2 || i == 3 || i == 6 || i == 8) {
      var box_div_anchor = document.createElement("a");
      box_div_anchor.className="box_div_anchor";
      box_div_anchor.innerHTML=second_page_assets[i][5]+"&nbsp";
      box_div_anchor.innerHTML+=second_page_assets.greater;
      box_div_anchor.href=second_page_assets[i][6];
      box_div_2.appendChild(box_div_anchor);
    }
    if (i % 3 == 0) {
      box_div.className = "rectangle_box";
      box_div_anchor.classList.add("box_div_anchor_1");
    } else {
      box_div.className = "square_box";
    }
    box_div.classList.add("box_div");
    var box_divs=document.getElementsByClassName("box_div");
    box_div.onclick= ()=>{toggle_box_btn(box_divs[i-1],2);}

    var btn_of_change=document.createElement("button");
    btn_of_change.className="btn_of_change";
    var btns_of_change=document.getElementsByClassName("btn_of_change");
    btn_of_change.innerHTML=second_page_assets.btn;
    btn_of_change.id="btn_of_change"+i;
    btn_of_change.onclick= (e)=>{toggle_box_btn(btns_of_change[i-1],1);e.stopPropagation();}
    box_div.appendChild(btn_of_change);
    if(i==6 || i==10){
      btn_of_change.classList.add("btn_of_change_white");
    }

  }

  // console.log(btns_of_change)
  var center_big_text = document.createElement("p");
  center_big_text.id = "center_big_text";
  center_big_text.innerHTML = "See why they switched from <br> Android to iPhone.";
  main_center_big_div.appendChild(center_big_text);


  const main_center_assets_2={
    1:["With iPhone, Anukriti can finally leave blurred memories in the past.","Anukriti S., Delhi","iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/true_depth_1__b7vharnzn3au_large.jpg","video/clideo_editor_4d3120466bcb4d7c88e11e632af49be0.mp4"],
    2:["iPhone's durability gives Sultann the freedom to be careless.","Sultann P., Bangalore","iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/true_depth_2__gmr4l66vliuu_large.jpg","video/clideo_editor_40977a4c79a6462a964b1a5bf2e71104.mp4"],
    3:["Want to have control over what you share? So did Nidhi.","Nidhi N., Bangalore","iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/true_depth_3__qfw6cgy89iyy_large.jpg","video/clideo_editor_f8b8fa15d3eb493cbaa375e22d9fe821.mp4"],
    4:["With iPhone, Arshiya's only worry when playing games is where to shoot.","Arshiya K., Mumbai","iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/prime_lens_3_vertical__c9ak16uehggi_large.jpg","video/clideo_editor_73db1a2b2aac409480d34985590826ee.mp4"],
    5:["Power banks used to tie Tara down. Then she switched to iPhone.","Tara B., Delhi","iPhone 14 Pro and iPhone 14 Pro Max - Apple (IN)_files/low_light_1_vertical__efhhynk20ec2_large.jpg","video/clideo_editor_40977a4c79a6462a964b1a5bf2e71104.mp4"],
  }

  for(let i=1;i<=5;i++){
    var rec_div=document.createElement("div");
    rec_div.className="rec_div";
    var rec_div_inner = document.createElement("div");
    rec_div_inner.className="rec_div_inner"

    var rec_div_h3 = document.createElement("h3");
    rec_div_h3.innerHTML=main_center_assets_2[i][0];
    var rec_div_h6 = document.createElement("h6");
    rec_div_h6.innerHTML=main_center_assets_2[i][1];

    rec_div_inner.appendChild(rec_div_h3);
    rec_div_inner.appendChild(rec_div_h6);
    rec_div.appendChild(rec_div_inner)



  var video = document.createElement("video");
  video.src=main_center_assets_2[i][3];
  video.className="muted_video";
  // video.autoplay=true;
  video.muted=true;
  video.controls=true;
  rec_div.appendChild(video);






    main_center_big_div.appendChild(rec_div);
    // console.log(i)
  }


const difference_of_iphone={
  1:[["apple2/last_1.jpg","apple2/last_11.png","New","iPhone 14 Pro","The ultimate iPhone."," ","From ₹129900.00*","buy",`learn more&nbsp<i class="fa-solid fa-greater-than small"></i>`,"https://www.apple.com/in/shop/goto/buy_iphone/iphone_14_pro","https://www.apple.com/in/iphone-14-pro/"],["17.00 cm (6.7″) or  15.54 cm (6.1″)","Super Retina XDR display","ProMotion technology","Always-On display"],["apple2/table_1.png","Dynamic Island","A new way to interact with iPhone"],["apple2/sos.png","Emergency SOS","Crash Detection"],["apple2/lens_1.png","Pro camera system","48MP Main | Ultra Wide","Telephoto","Photonic Engine for incredible ","detail and colour <br>Autofocus on TrueDepth <br>front camera"],["apple2/icon_battery.png","Up to 29 hours video playback"],["apple2/icon_a16.png","A16 Bionic chip"],["apple2/icon_face_id.png","Face ID"],["apple2/icon_5g.png","5G capable"]],
  2:[["apple2/last_2.jpg","apple2/last_22.png","New","New iPhone 14","A total powerhouse."," ","From ₹79900.00*","buy",`learn more&nbsp<i class="fa-solid fa-greater-than small"></i>`,"https://www.apple.com/in/shop/goto/buy_iphone/iphone_14","https://www.apple.com/in/iphone-14/"],["16.95 cm (6.7″) or 15.40 cm (6.1″)","Super Retina XDR display","-","-"],[" "," ","-"],["apple2/sos.png","Emergency SOS","Crash Detection"],["apple2/lens_2.png","Advanced dual-camera system","12MP Main | Ultra Wide","-","Photonic Engine for incredible","detail and colour <br>Autofocus on TrueDepth<br> front camera"],["apple2/icon_battery.png","Up to 26 hours video playback"],["apple2/icon_a15.png","A15 Bionic chip with 5-core GPU"],["apple2/icon_face_id.png","Face ID"],["apple2/icon_5g.png","5G capable"]],
  3:[["apple2/last_3.jpg","apple2/last_33.png","","iPhone 13","As amazing as ever."," ","From ₹64900.00*","buy",`learn more&nbsp<i class="fa-solid fa-greater-than small"></i>`,"https://www.apple.com/in/shop/goto/buy_iphone/iphone_13","https://www.apple.com/in/iphone-13/specs/"],["15.40 cm (6.1″) or 13.76 cm (5.4″)","Super Retina XDR display","-","-"],[" ","-"," "],["apple2/sos.png","Emergency SOS","-"],["apple2/lens_3.png","Dual-camera system","12MP Main | Ultra Wide","-","TrueDepth front camera",""],["apple2/icon_battery.png","Up to 19 hours video playback"],["apple2/icon_a15.png","A15 Bionic chip with 4-core GPU"],["apple2/icon_face_id.png","Face ID"],["apple2/icon_5g.png","5G capable"]],
  4:[["apple2/last_4.jpg","apple2/last_44.png","","iPhone SE","Serious power. Serious value."," ","From ₹49900.00*","buy",`learn more&nbsp<i class="fa-solid fa-greater-than small"></i>`,"https://www.apple.com/in/shop/goto/buy_iphone/iphone_se","https://www.apple.com/in/iphone-se/"],["11.94 cm (4.7″)","Retina HD display","-","-"],[" ","-"," "],["apple2/sos.png","Emergency SOS","-"],["apple2/lens_4.png","Advanced camera system","12MP Main","-","Front camera",""],["apple2/icon_battery.png","Up to 15 hours video playback"],["apple2/icon_a15.png","A15 Bionic chip with 4-core GPU"],["apple2/icon_touch_id.png","Touch ID"],["apple2/icon_5g.png","5G capable"]]
}

var description_whole_div= document.createElement("div");
description_whole_div.className="description_whole_div";
var side_space=document.createElement("div");
side_space.className="side_space";
var text_node=document.createElement("p");
text_node.className="text_node_b";
text_node.innerHTML="Which iPhone is right for you?";
side_space.appendChild(text_node);
side_space.appendChild(description_whole_div);
main_center_big_div.appendChild(side_space);

for(let i=1;i<=4;i++){
  var description_div = document.createElement("div");
  description_div.className="description_div";
  description_whole_div.appendChild(description_div);

  var des_div_1=document.createElement("div");
  des_div_1.className="des_div_1";
  description_div.appendChild(des_div_1);

  var phone_img = document.createElement("img");
  phone_img.className="phone_img";
  phone_img.src=difference_of_iphone[i][0][0];
  des_div_1.appendChild(phone_img);

  var color_of_mobile = document.createElement("img");
  color_of_mobile.className="color_of_mobile";
  color_of_mobile.src=difference_of_iphone[i][0][1];
  des_div_1.appendChild(color_of_mobile);

  var small_of_new = document.createElement("p");
  small_of_new.className="small_of_new";
  small_of_new.innerHTML=difference_of_iphone[i][0][2];
  des_div_1.appendChild(small_of_new);
  
  for(let z=3;z<7;z++){
    var text_node=document.createElement("p");
    text_node.className="text_node";
    if(z==3){
      text_node.className="text_node_1";
    }
    text_node.innerHTML=difference_of_iphone[i][0][z];
    des_div_1.appendChild(text_node)
  }
  for(let d=7;d<=8;d++){
    var buy_btn = document.createElement("a");
    buy_btn.className="buy_btn";
    if(d==8){
      buy_btn.className="buy_btn_1";
    }
    buy_btn.innerHTML=difference_of_iphone[i][0][d];
    buy_btn.href=difference_of_iphone[i][0][d+2];
    des_div_1.appendChild(buy_btn);
  }
  des_div_1.innerHTML+="<hr>";
  var des_div_2=document.createElement("div");
  des_div_2.className="des_div_2";
  description_div.appendChild(des_div_2);
  for (let x = 0; x < 4; x++) {
    
    
    var text_node = document.createElement("p");
    text_node.className="text_node";
    if(x==0){
      text_node.className="text_node_2"
    }    
    text_node.innerHTML=difference_of_iphone[i][1][x];
    des_div_2.appendChild(text_node)
  }

  var des_div_3 =document.createElement("div");
  des_div_3.className="des_div_3";
  description_div.appendChild(des_div_3);
  if(i==1){
    var dynamic_img= document.createElement("img");
    dynamic_img.src=difference_of_iphone[i][2][0];
    des_div_3.appendChild(dynamic_img);
  }
  var text_node = document.createElement("p");
  text_node.className="text_node_5";
  text_node.innerHTML=difference_of_iphone[i][2][1];
  des_div_3.appendChild(text_node);
  
  var text_node = document.createElement("p");
  text_node.className="text_node_4";
  text_node.innerHTML=difference_of_iphone[i][2][2];
  des_div_3.appendChild(text_node);
  
  var des_div_4 =document.createElement("div");
  des_div_4.className="des_div_4";
  description_div.appendChild(des_div_4);

    var sos_img= document.createElement("img");
    sos_img.src=difference_of_iphone[i][3][0];
    des_div_4.appendChild(sos_img);

  var text_node = document.createElement("p");
  text_node.className="text_node_5";
  text_node.innerHTML=difference_of_iphone[i][3][1];
  des_div_4.appendChild(text_node);
  
  var text_node = document.createElement("p");
  text_node.className="text_node_5";
  text_node.innerHTML=difference_of_iphone[i][3][2];
  des_div_4.appendChild(text_node);


  var des_div_5 =document.createElement("div");
  des_div_5.className="des_div_5";
  description_div.appendChild(des_div_5);

    var camera_module_img= document.createElement("img");
    camera_module_img.src=difference_of_iphone[i][4][0];
    des_div_5.appendChild(camera_module_img);

  var text_node = document.createElement("p");
  text_node.className="text_node_5";
  text_node.innerHTML=difference_of_iphone[i][4][1];
  des_div_5.appendChild(text_node);
  for(let g=2;g<6;g++){
  var text_node = document.createElement("p");
  text_node.className="text_node_6";
  text_node.innerHTML=difference_of_iphone[i][4][g];
  des_div_5.appendChild(text_node);
  }
for(let t=5;t<9;t++){
  var des_div_6 =document.createElement("div");
  des_div_6.className="des_div_7";
  description_div.appendChild(des_div_6);

    var battery_img= document.createElement("img");
    battery_img.src=difference_of_iphone[i][t][0];
    des_div_6.appendChild(battery_img);

  var text_node = document.createElement("p");
  text_node.className="text_node_8";
  text_node.innerHTML=difference_of_iphone[i][t][1];
  des_div_6.appendChild(text_node);
}  
  }
  var des_div_8 =document.createElement("div");
  des_div_8.className="des_div_8";
  side_space.appendChild(des_div_8);

  var link_arr_1 =["Compare all iPhone models","Shop iPhone","Chat now","https://www.apple.com/in/iphone/compare/","https://www.apple.com/in/shop/goto/buy_iphone","https://contactretail.apple.com/?c=in&l=en&ap=COM&pg=COM:iphone/buy-help&ag=FASTPASS"]

  for(let f=0;f<3;f++){
    var text_node = document.createElement("a");
  text_node.className="text_node_9";
  if(f==2){
    text_node.innerHTML=link_arr_1[f];   
    text_node.href=link_arr_1[f+3];

    var text_node_10 = document.createElement("p");
  text_node_10.className="text_node_10";
    text_node_10.innerHTML="Need some help? "
    text_node_10.appendChild(text_node)
    text_node_10.innerHTML+=" or call 000800 040 1966.";
    
    des_div_8.appendChild(text_node_10);
    continue;
  }
  text_node.innerHTML=link_arr_1[f]+" "+second_page_assets.greater;
   
  text_node.href=link_arr_1[f+3];
  des_div_8.appendChild(text_node);
  }
  var des_div_10 =document.createElement("div");
  des_div_10.className="des_div_12";
  main_center_big_div.appendChild(des_div_10);

const page_final_2 ={
  1:["Trade in your smartphone for credit.","With Apple Trade In, you can get credit towards a new iPhone when you trade in an eligible smartphone.1 It's good for you and the planet.","Learn more","https://www.apple.com/in/shop/goto/trade_in"],
  2:["Still have questions?<br> Just ask.","You won't find a better place to buy iPhone. We know about carriers, payment options, and more. And we make it easy to understand.","Learn more","https://www.apple.com/in/iphone/buy/"],
  3:["Free delivery","Get free delivery direct to your door.","Learn more","https://www.apple.com/in/shop/goto/shipping_delivery"],
  4:["Ways to buy","Buy the way that's right for you.","Learn more","https://www.apple.com/in/shop/goto/ways_to_buy"],
  5:["Get help buying","Have a question? Call a Specialist or chat online.<br> Call 000800 040 1966.","Contact us","https://contactretail.apple.com/?pg=COM:iphone-14-pro_switch&ap=COM&c=in&l=en"]
}

for (let g = 1; g < 6; g++) {

  var bottom_top_div = document.createElement("div");
  bottom_top_div.className="bottom_top_div";
  des_div_10.appendChild(bottom_top_div);
  

  var bottom_text_1 = document.createElement("p");
  bottom_text_1.className="bottom_text_1";
  bottom_text_1.innerHTML=page_final_2[g][0];
  bottom_top_div.appendChild(bottom_text_1);

  var bottom_text_2 = document.createElement("p");
  bottom_text_2.className="bottom_text_2";
  bottom_text_2.innerHTML=page_final_2[g][1];
  bottom_top_div.appendChild(bottom_text_2);


  var anchor_bottom = document.createElement("a");
  anchor_bottom.className="anchor_bottom";
  anchor_bottom.innerHTML=page_final_2[g][2]+second_page_assets.greater;
  anchor_bottom.href=page_final_2[g][3];


  if(g>2){
    bottom_top_div.classList.add("bottom_top_small");
    bottom_text_1.classList.add("bottom_text_1_small");
    bottom_text_2.classList.add("bottom_text_2_small");
    anchor_bottom.classList.add("anchor_bottom_small");
  }
  bottom_top_div.appendChild(anchor_bottom);

}



}
//-------------page 2 function--------------/


//----------to change the context of box----/
function toggle_box_btn(a,b) {
  // console.log(a)
if(b==2){
  console.log(2)
  var cls= a.classList;
  var ids = a.id;
  if(!cls.contains("div_small")){
    for(let i=1;i<=12;i++){
      if(ids!=i){
        box_divs[i-1].classList.remove("div_small");
        box_divs[i-1].firstElementChild.nextElementSibling.classList.remove("div_up");
        box_divs[i-1].lastElementChild.classList.remove("btn_of_change_rotate");
        if(i!=6 && i!=10){
          box_divs[i-1].lastElementChild.classList.remove("btn_of_change_white");
        }
      }
    }
    cls.add("div_small");
    a.firstElementChild.nextElementSibling.classList.add("div_up");
    a.lastElementChild.classList.add("btn_of_change_white");
    a.lastElementChild.classList.add("btn_of_change_rotate");

  }
}else if(b==1){
  var cls = a.parentElement.classList;
  var ids = a.parentElement.id;
  for(let i=1;i<=12;i++){
    if(ids!=i){
      box_divs[i-1].classList.remove("div_small");
      box_divs[i-1].firstElementChild.nextElementSibling.classList.remove("div_up");
      box_divs[i-1].lastElementChild.classList.remove("btn_of_change_rotate");
        if(i!=6 && i!=10){
          box_divs[i-1].lastElementChild.classList.remove("btn_of_change_white");
        }
    }
  }
  console.log(1)
  cls.toggle("div_small")
  a.parentElement.firstElementChild.nextElementSibling.classList.toggle("div_up");
  a.parentElement.lastElementChild.classList.toggle("btn_of_change_white");
  a.parentElement.lastElementChild.classList.toggle("btn_of_change_rotate");
 
}

  
}
//-------------to navigate trow anchor ---------/
function center_bar_anchor(a){
  if(a==1){
    window.scrollTo({
      top: 1120,
      left: 0,
      behavior: 'smooth'
    });
  }else{
    window.scrollTo({
      top: 6050,
      left: 0,
      behavior: 'smooth'
    });
  }
}
//-----------to decreate or increate the hero img------/
function opacity_of_hero(a){
  hero_img_div.style=`opacity:${1-(a/1000)}`;
}
//-----------to change t dot to text and icon motion---------/
function privacy_dot(a,b,c){
  var dot="........ ...... ........";
  dot=dot.slice(a+2);
  var text_of_privacy="";
  var z= privacy_iconloc_arr[c];
  z=z.split(" ");
  for(let v =0;v<=a;v++){
    text_of_privacy+=b[v];
  }
  document.getElementById("box_div_h2_16").innerHTML=text_of_privacy+dot;
  document.getElementById("icon_lock").style=`background-position: ${z[0]}px ${z[1]}px;`
}
//--------------to genarate the postion of icons  background---/
function privacy_iconloc(){
  for (let j=0;j>=-360;j-=60){
    for(let i=4;i>=-456;i-=46){
    
      privacy_iconloc_arr.push(i+" "+j);
      if(i==-226 && j==-360){
        break;
      }
    }
    
    }
}


