/* 
  * Example 1 - Using Angular JS $http promises
  * */
 function getUsers(){
    return $http.get('/users');
  }

  getUsers()
    .then(function(res){
      $scope.users = res.users;  
    });

  /* 
  * Example 2 - Using Native NodeJS promises
  * */
  function getEmployees(){
    return new Promise(function(resolve, reject){
      resolve(doSomething());
    });
  }

  function getData(){
    return getEmployees();
  }

  getData()
    .then(function(res){
      console.log(res.employees);
    });   