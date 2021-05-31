$().ready(() => {
  console.log("running");
  azure_function_url = "https://devdpd.azurewebsites.net/api/devenv";
  // data ='[{"ID":259918,"DEPOT":628,"NAME1":"Maierhofer Eva  ASG","NAME2":null,"EMAIL1":null,"REMAIL":"xvt5fsxb8ffxtkg@marketplace.amazon.de","ZIP":8250,"STREET":"Riegersbach","STREETNR":"20","LONGITUDE":15.890073,"LATITUDE":47.417567,"AVIS_TYPE":null,"ASG":1,"SC":327,"PREDICT":0,"RECEIVERTYPE":1,"CREATE_DATE":"06.07.18","UPDATE_DATE":"06.07.18"}]'
  $("#predictForm").submit(function (event) {
    event.preventDefault();
    data = $(this).serializeArray();
    detail = {};
    data.forEach((e) => {
      detail[e.name] = e.value;
    });
    date = new Date()
    detail["STREETNR"]="20"
    detail['CREATE_DATE'] = "06.07.18"
    detail['UPDATE_DATE'] = "06.07.18"
    // d="[{\"ID\":259918,\"NAME1\":\"Maierhofer Eva  ASG\",\"NAME2\":null,\"EMAIL1\":null,\"REMAIL\":\"xvt5fsxb8ffxtkg@marketplace.amazon.de\",\"ZIP\":\"8250\",\"STREET\":\"Riegersbach\",\"STREETNR\":\"20\",\"LONGITUDE\":15.890073,\"LATITUDE\":47.417567,\"AVIS_TYPE\":null,\"ASG\":1,\"SC\":327,\"PREDICT\":0,\"RECEIVERTYPE\":1,\"CREATE_DATE\":\"06.07.18\",\"UPDATE_DATE\":\"06.07.18\"}]";
    // detail = JSON.stringify([detail])
    detail = detail
    url='https://92f37797-532c-4f12-b38f-177e73a93e7a.mock.pstmn.io'
    console.log(detail,'\n\n');
    console.log(JSON.stringify({"data":JSON.stringify([detail])}))
    // var xhttp = new XMLHttpRequest();
  // xhttp.onreadystatechange = function() {
    // if (this.readyState == 4 && this.status == 200) {
      // console.log(this.responseText);
    // }
  // };
  // xhttp.open("POST", azure_function_url, true);
  // xhttp.send(JSON.stringify({"data":JSON.stringify([detail])}));

    $.ajax({
      url:url,
      type: 'post',
      dataType: 'json',
      contentType: 'application/json',
      Accept: "*/*",
      Host: "devdpd.azurewebsites.net",

      'Postman-Token': "7004c037-8d2d-4fe7-8a9a-33205ad53978",
      "Accept-Encoding": "gzip, deflate, br",
      'Access-Control-Allow-Origin':"*",

      Connection: "keep-alive",
      header:{
      'Access-Control-Allow-Origin':"*",
      'origin': "*",
              },
      
      success: function (data) {
        console.log(data)
          $('#inp').html(data.msg);
      },
      data:  JSON.stringify({"data":JSON.stringify([detail])})
  });
 
  });
});
