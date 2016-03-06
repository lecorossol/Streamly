
$(document).ready(
function () {
 verifyNoCommande();
}
);  

function verifyNoCommande ()
{


	 $.ajax({
       url : 'http://SPSLAZ175RGVUCIU1ZFKTBPKNAIYDNRX@vps246572.ovh.net/prestashop/api/orders/?filter[reference]=[XKBKNABJK]',
       type : 'GET',
       dataType : 'html',
       success : function(response){
           $('.test').append(readXML(response));  
           $('.test').append("ceci est un test");
       },

       error : function(resultat, statut, erreur){
         
       },

       complete : function(resultat, statut){

       }

    });
}

function readXML(xmlData){
 var xmlDoc = $.parseXML(xmlData),
  $xml = $( xmlDoc ),
  $title = $xml.find("order");
  
  //return $title.text();  
  return $title.attr('id');

}