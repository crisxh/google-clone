$(()=>{
  getSearchBoxDimension();
})
$(window).resize(()=>{
  
  
  resetSearchWidth()
 getSearchBoxDimension();
  closeSearchBox();
})


function getSearchBoxDimension(){
    searchOffsetTop=parseInt($('#searchBoxContainerWrap').offset().top);
console.log(searchOffsetTop);
   searchWidth=$('#searchBoxContainerWrap').width();
 searchWidth=parseInt(searchWidth);
console.log('searchWidth: ' + searchWidth);
  
  searchHeight=$('#searchBoxContainerWrap').height();
  console.log('searchHeight: ' + searchHeight);
  
  let searchContainerWidth=$('#searchContainer').width();
  
   searchWidthPercent=100*searchWidth/searchContainerWidth;
  console.log('percent: ' + parseInt(searchWidthPercent));
  
 
}
function resetSearchWidth(){
  let windowWidth=$(window).width();
  console.log('ww: '+windowWidth)
  if(windowWidth>=950){
    $('#searchBoxContainerWrap').css('width','60%');
    $('.searchBtn').css({width:'145px','font-size':'12px'})
    
  }else if(windowWidth>=350 && windowWidth<650){
    $('#searchBoxContainerWrap').css('width','80%');
    $('.searchBtn').css({width:'135px','font-size':'11px'});
  }else if(windowWidth<350){
    $('#searchBoxContainerWrap').css('width','100%');
    $('.searchBtn').css({width:'125px','font-size':'10px'})
  }
  
}

let searchOffsetTop;
let searchWidth;
let searchHeight;
let searchWidthPercent;

$('#appsWrap').click(()=>{
  $('#listAppsContainer').toggle();
});
let value="";




function openSearchBox(e){
  value=$('.searchBox').val();
  if(value.length>0){
    
  $('#searchBoxContainer').addClass('searchBoxNotNull');
$('#searchBoxContainerWrap').addClass('searchSuggestions').css({top:searchOffsetTop+'px',width:searchWidth+'px'});
    $('.typingValue').html($(e.target).val());
      $('.typingValue').show();
    $('#searchBoxContainerWrapReplace').css({
      height:searchHeight+'px',
    }).show();
  
}};
function closeSearchBox(e){
    
   
      $('#searchBoxContainer').removeClass('searchBoxNotNull');
    $('#searchBoxContainerWrap').removeClass('searchSuggestions');
    $('.typingValue').hide();
    $('#searchBoxContainerWrapReplace').hide();
    
    value ? console.log(value.length):console.log('value is null');
  }
function searchFocus(){

}

   $(".searchBox").on('focus',()=>{
    $('#searchBoxContainerWrap').addClass('focusedWrap');
     $('#searchBoxContainer').addClass('focusedContainer');
    console.log('focus')
  })
  
  $(".searchBox").on('blur',()=>{
    $('#searchBoxContainerWrap').removeClass('focusedWrap');
    $('#searchBoxContainer').removeClass('focusedContainer');
    console.log('blur');
  })

$(".searchBox").on('input', (e)=>{
 openSearchBox(e);});

  $(".searchBox").on('keydown',(e)=>{
  if(e.which===13 || e.which===32){
    $('.typingValue').append($('<br>'))
   
  }
    if(e.which===8 && value.length<=1 ){
  closeSearchBox(e);
    }

})

 

$(".collapsedNavContainer").click(()=>{
  $("#sidebarNav").toggle();
})