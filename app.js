const months =['jan','Fev','Marc','Abr','Mai','Jun', 'Jul','Ago','Set','Out','Nov','Dev']

function render(){
  let output=''

  thisMonth= months[new Date().getMonth()]
  

  for(let month of months){
    const active = thisMonth == month ? 'active' :'';

    //output= output + '<div>' + month + '</div>'
    output += <div class="${active}">${month}</div>
  }
  return output
}

app.querySelector('main').innerHTML = render()
app.querySelector('header span').innerHTML = new Date().getFullYear()