$(".accept").click(function(event){
  var form = document.getElementsByClassName(event.target.id);
  var x ="True"
  form.status=x
  form.email=event.target.id
  form.submit();
})

$('.delete').click(function(event){
  var form = document.createElement('form');
  var x = "False"
  form.status=x;
  form.email=event.target.id;
  form.action='/change_status';
  form.method='get';
  document.body.appendChild(form);;
  form.submit();
})
