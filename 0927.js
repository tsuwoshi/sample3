$(function(){

              $('.question').click(function(){

                            var mark = $(this).find('span');

                            $(this).next('.answer').toggle(300);

                            /*$(this).find('.down').toggle(); //

                            $(this).find('.up').toggle();*/

              if(mark.hasClass('fa-chevron-down')){

                            $(mark).removeClass('fa-chevron-down');

                            $(mark).addClass('fa-chevron-up');

              }else{$(mark).removeClass('fa-chevron-up');

                            $(mark).addClass('fa-chevron-down');

              }

              })
});
document.getElementById('cd').textContent = document.getElementById('scr').textContent;
