
# Clean code - code smells examples

## Tests

### Independent

```javascript
// Depends on the database and getAllAppointment method to work
describe('add Appointment', function() {
    it('should be empty before', function(done) {
      window.beratungs.plugin.dm.resetDatabase()
      .then(function() {
        return dataManagerFct.getAllAppointments();
      })
      .then(function(response) {
        expect(response).toBeDefined();
        expect(response.length).toBe(0);
        done();
      })
      .catch(done.fail);
    });
});
```

### Repeatable

```javascript
// It may fail depending on the environment locale
describe('parse date', function() {
    it('should return the date as string', function() {
      const date = new Date('1/2/2018');
      const parsedDate = datesService.parseLocale(date);

      expect(parsedDate).toEqual('2/1/2018 0:00:00');
    });
});
```

### Self validating

```javascript
// When the test title has "and" its a bad signal
describe('delete FileMetadata', function () {

  it('should delete the file and the thumbnail', function (done) {

    dataManagerFct.deleteFileMetadata(testFile)
    .then(function(response) {
      expect(fileSystemFct.deleteFile).toHaveBeenCalledWith(testFile.path);
      expect(fileSystemFct.deleteFile).toHaveBeenCalledWith(testFile.thumbnail);
      fileSystemFct.deleteFile.calls.reset();

    }).then(function() {
      return dataManagerFct.deleteFileMetadata(testFile2);
    }).then(function(value){
      expect(fileSystemFct.deleteFile).not.toHaveBeenCalled();
      expect(fileSystemFct.deleteFile).not.toHaveBeenCalled();
      expect(value).toBeDefined();
      done();
    }).catch(done.fail);
  });
});
```

### Timely

### Insufficient Tests

Integration tests between a 150+ lines component and custom helper libraries.

```log
  ProjectMain integration
    √ should create an element
    √ should create groups for the svg parts
    constructor
      √ should create the axis
      √ should create the weekends
      √ should create the deadlines
      √ should create the bars
      √ should create the mask
      √ should create the dependencies
```

### Test everything that could break

```javascript
// What if getContactHistoryFromAppointmentId returns an empty value? or an error?
beforeEach(function () {
  spyOn(dataManagerFct, 'getContactHistoryFromAppointmentId').and.returnValue(q.resolve(fakeContactHistory.slice(0)));
  vm = controller("ContactHistoryCtrl", { dataManagerFactory: dataManagerFct, $stateParams: stateParams, $filter: filter });
});

describe('constructor', function () {

  it('should get the contact history', function () {
    expect(vm.contactHistory).toEqual([]);

    scope.$apply();
    expect(dataManagerFct.getContactHistoryFromAppointmentId).toHaveBeenCalledWith(stateParams.appointmentId, localeSrv.getLanguage());
    expect(vm.contactHistory).toEqual(fakeContactHistory);
  });

});
```

### Use a Coverage Tool

### Don’t Skip Trivial Tests

```javascript
// Controller constructor, sets the initial data
constructor(private $scope: IChildScope) {
  this.showErrorEmailPhone = false;
  this.tempPhone = '';
  $scope.$parent.vm.getAppointment().then((appointment: IAppointment) => {
    this.consultation = appointment.consultation;
    return null;
  });
}
```

```javascript
// Test, asumes initial data is correctly set
beforeEach(function() {
  vm = $controller('ConsultationFinishAxaCheckCtrl', {$scope: $scope});
  vm.consultation = fakeConsultation;
});
```

### An Ignored Tests is a Question about an Ambiguity
### Test Boundary Conditions
### Exhaustively Test Near Bugs
### Patterns of Failure Are Revealing


