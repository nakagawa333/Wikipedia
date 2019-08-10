

$(function(){
    $("#searchTerm").keypress(function(e){
        if(e.keyCode === 13){
            let searchTerm = $("#searchTerm").val();
            let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 

            $.ajax({
                url:url,
                type:"GET",
                contentType:"application/json;charset=utf-8",
                async:false,
                dataType:"json",
                success:function(data,status,jqXHR){
                    $("#output").html();

                    for(var i = 0; i < data[1].length; i++){
                        $("#output").prepend("<div><div class='well'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");

                    }
                }
            })

                    }
    });

    $("#search").on("click",function(){
        let searchTerm = $("#searchTerm").val();

        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm +"&format=json&callback=?"; 

        $.ajax({
            url:url,
            type:"GET",
            contentType:"application/json; charset=utf-8",
            dataType:"json",
            success:function(data,status,jqXHR){

                appendHtml = "";
                value = $("#searchTerm").val();

                if(value == ""){
                    alert("何か文字の記入をお願いします");
                }

                
                for(var i = 0; i <data[1].length; i++){
                    appendHtml = $("#output").prepend("<div><div class='well'><a href="+data[3][i]+" ><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
                }


                if(appendHtml == ''){
                    alert("検索結果がありませんでした");
                }
            }
        })


    })
})