$(function(){
  // 線上訂購 - meals卡片
  var mealList = [
    {
      mealId: 1,
      coverImage: "product_1.png",
      title: "經典漢堡套餐",
      engTitle: "Classic Hamburger Package",
      price: "120",
      hot: true,
    },
    {
      mealId: 2,
      coverImage: "product_2.png",
      title: "英俊香腸",
      engTitle: "Handsome Sausage",
      price: "1,024",
      hot: false,
    },
    {
      mealId: 3,
      coverImage: "product_3.png",
      title: "漢堡兄弟",
      engTitle: "Hamburg Brothers",
      price: "792",
      hot: false,
    },
    {
      mealId: 4,
      coverImage: "product_4.jpeg",
      title: "極致早餐",
      engTitle: "Wonderful Breakfast",
      price: "9,453",
      hot: true,
    },
    {
      mealId: 5,
      coverImage: "product_5.jpeg",
      title: "我只要肉",
      engTitle: "Niku",
      price: "2,266",
      hot: false,
    },
    {
      mealId: 6,
      coverImage: "product_6.jpeg",
      title: "酥脆炸物",
      engTitle: "Not Healthy",
      price: "666",
      hot: false,
    },
    {
      mealId: 7,
      coverImage: "product_7.png",
      title: "完美願望",
      engTitle: "Dragon Ball Package",
      price: "999,999",
      hot: true,
    },
  ];

  var commentList = [
    {
      critic: '高雄一口吃',
      comment: '自從吃了這家餐廳以後，我口水連續留了一個多月都沒停，下次不要再被我遇到，不然我一定連他們的桌子都啃下去。',
      career: '-- 產品經理',
      avatar: 'avatar_1.png',
    },
    {
      critic: '廟口小霸王',
      comment: '自從吃了這家餐廳以後，我口水連續留了一個多月都沒停，下次不要再被我遇到，不然我一定連他們的椅子都啃下去。',
      career: '-- 金身道士',
      avatar: 'avatar_2.png',
    },
    {
      critic: '春天也來了',
      comment: '自從吃了這家餐廳以後，我口水連續留了一個多月都沒停，下次不要再被我遇到，不然我一定連他們的桌子都啃下去。',
      career: '-- 美麗萬分',
      avatar: 'avatar_3.png',
    },
  ];
  
  var vm = new Vue({
    el: '#app',
    data: {
      categories: [
        { id: 1, title: '全部(7)' },
        { id: 2, title: '我就要套餐(3)' },
        { id: 3, title: '一家烤肉萬家香(2)' },
        { id: 4, title: '不敗漢堡系列(3)' },
      ],
      active: 0,
      meals: [
        [
          mealList[0],
          mealList[1],
          mealList[2],
          mealList[3],
          mealList[4],
          mealList[5],
          mealList[6],
        ],
        [
          mealList[0],
          mealList[3],
          mealList[6],
        ],
        [
          mealList[1],
          mealList[4],
        ],
        [
          mealList[0],
          mealList[2],
          mealList[6],
        ],
      ],
      commentList,
    },
    computed: {
      content: function content() {
        return this.meals[this.active];
      },
    },
    methods: {
      activate: function activate(index){
        this.active = index;
      },
    },
  });

  // 導航 - RWD收放選單
  var topMenuList = $('.top-menu').find('ul')
  var menuIcon = $('.menu-toggle').find('.icon-bar')
  tapMenu = function(e){
    topMenuList.toggleClass('hide');
    menuIcon.toggleClass('dark-icon-bar menu-open');
  };


  // 首頁 - 選單背景動畫
  $(window).scroll(function(e){
    if ($(window).scrollTop()<=$('main').offset().top-50){
      $('nav').addClass('at_top');
    }else{
      $('nav').removeClass('at_top');
    };
  });

  // 首頁 - 漂浮動畫
  $(window).scroll(function(e){
    let headerHeight = $('#header').height()
    let bubble = $('.bubble_list')
    let bottomBar = $('.bottomBar-mobile')
    if ($(window).scrollTop() >= headerHeight-300){
      bubble.addClass('if-top');
    }else{
      bubble.removeClass('if-top');
    };
    if ($(window).scrollTop() > 0){
      bottomBar.removeClass('if-top');
    }else{
      bottomBar.addClass('if-top');
    };
  });

  // 首頁 - 點擊導航連結動畫
  $(document).on('click','.topbar a',function(){
    let target = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(target).offset().top-100
    },500);
  });

  // 首頁 - 訂位人數增減
  $('.index').on('click','.people_number_input .fa-plus', function(e){
    let $input = $(this).siblings('#input_number'),
        val = parseInt($input.val()),
        max = parseInt($input.attr('max')),
        step = parseInt($input.attr('step'));
    
    let temp = val + step;
    $input.val(temp <= max ? temp : max);
    console.log(temp);
  });

  $('.index').on('click','.people_number_input .fa-minus', function(e){
    let $input = $(this).siblings('#input_number'),
        val = parseInt($input.val()),
        min = parseInt($input.attr('min')),
        step = parseInt($input.attr('step'));
    
    let temp = val - step;
    $input.val(temp >= min ? temp : min);
    console.log(temp);
  });

  // 線上訂購 - 我的最愛標籤hover效果
  $(document).on('mouseenter','.favorite',function(){
    $(this).children('i').addClass('fas');
    $(this).children('i').removeClass('far');
  });
  $(document).on('mouseleave','.favorite',function(){
    $(this).children('i').removeClass('fas');
    $(this).children('i').addClass('far');
  });

  
  // 線上訂購 - 購物車icon數量
  addToCart = function(){
    let n = $('.cart_icon').find('.cart_num').html();
    let num = parseInt(n)+1;
    $('.cart_num').html(num);
  };

  // 登入頁面 - input效果
  $('.input').on('focusin',function(){
    $(this).find('span').animate({"opacity":"0"}, 200);
  });

  $('.input').on('focusout',function(){
    $(this).find('span').animate({"opacity":"1"}, 300);
  });
  
  // 登入頁面 - 點擊nav頁面跳轉modal動畫
  let modal = $('.modal')
  let wrapAll = $('.wrap-all')
  let modalLogin = $('.modal_card')
  modalShow = function(){
    modal.css('display','block');
    wrapAll.addClass('modal_blur');
    $('body').addClass('modal_open');
    modalLogin.animate({},function(){
      modalLogin.css('transform','translateY(0px)');
    });
    modalLogin.animate({},function(){
      modalLogin.removeClass('transparent');
    });
  };

  modalClose = function (){
    setTimeout(function(){
      modal.css('display','none');
      wrapAll.removeClass('modal_blur');
      $('body').removeClass('modal_open');
    },200);
    modalLogin.css('transform','translateY(-100px)');
    modalLogin.addClass('transparent');
  };


  // 登入頁面 - 跳轉modal
  var loginForm = $('.modal').find('.login_form')
  var cmtFst = $('.modal_change').find('span')
  var cmtSec = $('.modal_change').find('a')
  var loginField = $('.modal').find('.login_field')
  var registerField = $('.modal').find('.register_field')
  changeModal = function(){
    loginForm.toggleClass('changeRegister');
    cmtFst.text(
      cmtFst.text() == '還沒有帳號嗎？' ? '已經有帳號了嗎？' : '還沒有帳號嗎？'
    );
    cmtSec.text(
      cmtSec.text() == '立即註冊' ? '立即登入' : '立即註冊'
    );
    // 登入頁面 - 表格群組disabled轉換
    loginField.attr('disabled', function(_, attr){
      return !attr
    });
    registerField.attr('disabled', function(_, attr){
      return !attr
    });
  };

  // 使用條款與隱私政策
  let policyTab = $('#policy').find('ul.tabs li');
  $('.tab-content').hide();
  $('.tab-content:first').show();
  policyTab.first().find('.line').width(100 + '%')
  policyTab.on('click', function(){
    $('.tab-content').hide();
    let activeTab = $(this).data('num');
    $('.' + activeTab).fadeIn();
    
    policyTab.removeClass('active');
    $(this).addClass('active');

    policyTab.find('.line').width(0);
    $(this).find('.line').animate({'width':'100%'}, 'fast');
    
  });
  policyTab.last().addClass('tab-last');


});
