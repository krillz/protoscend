 // Place all the behaviors and hooks related to the matching controller here.
 // All this logic will automatically be available in application.js.
 // You can use CoffeeScript in this file: http://coffeescript.org/

 // source: https://github.com/antennaio/jquery-bar-rating/blob/master/dist/jquery.barrating.min.js
 // !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var t=function(){function t(){var t=this,n=function(){var n=[t.options.wrapperClass];""!==t.options.theme&&n.push("br-theme-"+t.options.theme),t.$elem.wrap(e("<div />",{"class":n.join(" ")}))},r=function(){t.$elem.unwrap()},a=function(){var n;return n=t.options.initialRating?e('option[value="'+t.options.initialRating+'"]',t.$elem):e("option:selected",t.$elem)},i=function(e){var n=t.$elem.data("barrating");return"undefined"!=typeof e?n[e]:n},o=function(e,n){null!==n&&"object"==typeof n?t.$elem.data("barrating",n):t.$elem.data("barrating")[e]=n},s=function(){var e=a();o(null,{userOptions:t.options,ratingValue:e.val(),ratingText:e.data("html")?e.data("html"):e.text(),originalRatingValue:e.val(),originalRatingText:e.data("html")?e.data("html"):e.text(),readOnly:t.options.readonly,deselectable:t.$elem.find("option:first").val()?!1:!0})},l=function(){t.$elem.removeData("barrating")},u=function(){return i("ratingText")},c=function(){return i("ratingValue")},d=function(){var n=e("<div />",{"class":"br-widget"});return t.$elem.find("option").each(function(){var r,a,i,o;r=e(this).val(),r&&(a=e(this).text(),i=e(this).data("html"),i&&(a=i),o=e("<a />",{href:"#","data-rating-value":r,"data-rating-text":a,html:t.options.showValues?a:""}),n.append(o))}),t.options.showSelectedRating&&n.append(e("<div />",{text:"","class":"br-current-rating"})),t.options.reverse&&n.addClass("br-reverse"),t.options.readonly&&n.addClass("br-readonly"),n},f=function(){return i("userOptions").reverse?"nextAll":"prevAll"},g=function(e){t.$elem.find('option[value="'+e+'"]').prop("selected",!0),t.$elem.change()},p=function(e){e=e?e:u(),t.options.showSelectedRating&&t.$elem.parent().find(".br-current-rating").text(e)},h=function(){t.$widget.find("a").removeClass("br-selected br-current"),t.$widget.find('a[data-rating-value="'+c()+'"]').addClass("br-selected br-current")[f()]().addClass("br-selected")},b=function(e){return e.hasClass("br-current")&&i("deselectable")},v=function(n){n.on("click.barrating",function(r){var a,s,l=e(this),d=i("userOptions");return r.preventDefault(),n.removeClass("br-active br-selected"),l.addClass("br-selected")[f()]().addClass("br-selected"),a=l.attr("data-rating-value"),s=l.attr("data-rating-text"),b(l)?(l.removeClass("br-selected br-current")[f()]().removeClass("br-selected br-current"),a="",s=""):(n.removeClass("br-current"),l.addClass("br-current")),o("ratingValue",a),o("ratingText",s),g(a),p(s),d.onSelect.call(t,c(),u(),r),!1})},m=function(t){t.on("mouseenter.barrating focus.barrating",function(){var n=e(this);t.removeClass("br-active br-selected"),n.addClass("br-active")[f()]().addClass("br-active"),p(n.attr("data-rating-text"))})},$=function(e){t.$widget.on("mouseleave.barrating blur.barrating",function(){e.removeClass("br-active"),p(),h()})},w=function(t){t.on("touchstart.barrating",function(t){t.preventDefault(),t.stopPropagation(),e(this).click()})},y=function(e){e.on("click.barrating",function(e){e.preventDefault()})},C=function(e){v(e),t.options.hoverState&&(m(e),$(e))},x=function(e){e.off(".barrating")},R=function(e){$elements=t.$widget.find("a"),w&&w($elements),e?(x($elements),y($elements)):C($elements)};this.show=function(){i()||(n(),s(),t.$widget=d(),t.$widget.insertAfter(t.$elem),h(),p(),R(t.options.readonly),t.$elem.hide())},this.readonly=function(e){"boolean"==typeof e&&i("readOnly")!=e&&(R(e),o("readOnly",e),t.$widget.toggleClass("br-readonly"))},this.set=function(e){var n=i("userOptions");t.$elem.find('option[value="'+e+'"]').val()&&(o("ratingValue",e),o("ratingText",t.$elem.find('option[value="'+e+'"]').text()),g(c()),p(u()),h(),n.silent||n.onSelect.call(this,c(),u()))},this.clear=function(){var e=i("userOptions");o("ratingValue",i("originalRatingValue")),o("ratingText",i("originalRatingText")),g(c()),p(u()),h(),e.onClear.call(this,c(),u())},this.destroy=function(){var e=c(),n=u(),a=i("userOptions");x(t.$widget.find("a")),t.$widget.remove(),l(),r(),t.$elem.show(),a.onDestroy.call(this,e,n)}}return t.prototype.init=function(t,n){return this.$elem=e(n),this.options=e.extend({},e.fn.barrating.defaults,t),this.options},t}();e.fn.barrating=function(n,r){return this.each(function(){var a=new t;if(e(this).is("select")||e.error("Sorry, this plugin only works with select fields."),a.hasOwnProperty(n)){if(a.init(r,this),"show"===n)return a.show(r);if(a.$elem.data("barrating"))return a.$widget=e(this).next(".br-widget"),a[n](r)}else{if("object"==typeof n||!n)return r=n,a.init(r,this),a.show();e.error("Method "+n+" does not exist on jQuery.barrating")}})},e.fn.barrating.defaults={theme:"",initialRating:null,showValues:!1,showSelectedRating:!0,reverse:!1,readonly:!1,fastClicks:!0,hoverState:!0,silent:!1,wrapperClass:"br-wrapper",onSelect:function(e,t,n){},onClear:function(e,t){},onDestroy:function(e,t){}},e.fn.barrating.BarRating=t});

  $(function() {
      var rating;

      $('#route_show_rating').barrating({
        theme: 'bootstrap-stars',
        readonly: true,
      });

      if ($('#route_show_rating').data() !== undefined) {
        rating = $('#route_show_rating').data().rating;
      }
      $('#route_show_rating').barrating('set',rating);

      $('#route_set_rating').barrating({
        theme: 'bootstrap-stars',
        readonly: false,
        onSelect: function(value, text, event) {
          if (typeof(event) !== 'undefined') {
            var desc = '';
            switch (value) {
              case "1":
                desc = 'Bad';
                break;
              case "2":
                desc = 'Not great';
                break;
              case "3":
                desc = 'Okay';
                break;
              case "4":
                desc = 'Good';
                break;
              case "5":
                desc = 'Great';
                break;
            }
            $("#rating_description").html(desc);
            $.post('/ratings', {
              route_id: text,
              rating: value,
            });
          }
        }
      });

      if ($('#route_set_rating').data() !== undefined) {
        var rating = $('#route_set_rating').data().rating;
      }
      $('#route_set_rating').barrating('set',rating);
   });
