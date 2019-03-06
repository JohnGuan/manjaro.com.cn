$('.row').isotope({
    itemSelector: '.grid-item',
    getSortData: {
        date: function (elem) {
            return Date.parse($(elem).find('time').text());
        }
    },
    sortBy : 'date',
    sortAscending : false
});
var feeds = [
    "https://forum.manjaro.org/c/announcements.rss",
    "https://forum.manjaro.org/c/manjaro-arm/announcements.rss"
    ]
function feedreader(feed) {
    $.get(feed, function(data) {
    var $XML = $(data);
    $XML.find("item").each(function(iter) {
        
        if (feed == feeds[1] && iter > 0) {
            // pass
        } else {
        
        var $this = $(this),
            item = {
                title:       $this.find("title").text().replace(/\d{2,4}[\-|\/]\d{1,2}[\-]\d{1,2}|\[|\]|\(|\)/g, ""),
                category:    $this.find("category").text(),
                description: $this.find("description").text().replace(/\]]>/g, "").replace("full topic", "in the forum"),
                date:        $this.find("pubDate").text().replace(/\+0000|,/g, "").slice(0, -9).slice(4, 15),
                link:        $this.find("link").text(),
            };
        var el = "news" + item.date.replace(/\ |:|,/g, "") + iter.toString()
        var forumHtml = $($.parseHTML(item.description));
        var regex = /\||full edition:|minimal-edition:|Full ISO|Minimal ISO|direct | sig | sha1 |sha256|torrent/gi
        var shortText = forumHtml.text().trim().replace(regex, "").slice(1, 200);
        var img = forumHtml.find("img:first").attr("src");
       
        var $article = $(`
        <article id='unique` + el + `' class='blog-post zoom grid-item col-md-6 col-xl-4 ml-auto mr-auto'>
            <div class="card">
                <div class="card-body">
                <time>` + item.date + `</time>
                <h5 class="card-title">` + item.title + `</h5>
                <img class="card-img-top img-fluid" src="` + img + `" alt="Post Image" onerror="this.style.display='none'">
                <p class="card-text">` + shortText + `</p>
                <div class="btn-group">
                <button class="btn-sm btn disabled">Read More:</button>
                <button data-toggle="modal" data-target='#` + el + `' class="btn btn-sm btn-success btn-primary">Here</button>
                <button class="btn btn-success btn-sm btn-primary" onclick='window.location.href="` + item.link + `"'>Forum</button>
                </div>
                </div>
            </div>
        </article>`)
        
        var modal = `<div class="modal fade" id="` + el + `" tabindex="-1" role="dialog" aria-labelledby="` + item.title + `" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">` + item.title + `</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">
                    &times;
                    </button>
                </div>
                <div class="modal-body">
                ` + item.description + `
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
        `
        $(".blog .row").isotope( 'insert', $article );
        $(".blog .row").append(modal);
        
        $("#unique" + el + " .card-img-top").imagesLoaded( function() {
            // reload layout after images are loaded since boxes change sizes
            $(".row").isotope("reloadItems").isotope("layout"); 
         });

        $('#' + el + ' .modal-body').find(".meta").remove()
        //$('#' + el + ' .modal-body').find("strong").contents().unwrap();
        
        if (iter == 24) {
            setTimeout(function(){ $(".loader").hide();}, 600);
        }  
    }});
});};
feedreader(feeds[0]);
feedreader(feeds[1]);
