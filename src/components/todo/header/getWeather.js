var getJson = (url) => {
    var promise = new Promise(function(resolve, reject){
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    
        function handler() {
          if (this.status === 200) {
            //这行console不能删除，否则header.vue调用时取不到数据，为什么？
            console.log(this.response.data);
            resolve(this.response);
          } else {
            reject(new Error(this.statusText));
          }
        };
      });
    
      return promise;
}

export default{
    getJson
}