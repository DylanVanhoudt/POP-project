function add(){
    const new_chq_no = parseInt($('#total_chq').val()) + 1;
    const new_input = "<input class='mb-2' type='number' value=0 name='inkomsten' id='inkomsten" + new_chq_no + "'>";
    $('#new_chq').append(new_input);
    $('#total_chq').val(new_chq_no)
}
function remove(){
    const last_chq_no = $('#total_chq').val();
    if(last_chq_no>1){
        $('#inkomsten'+last_chq_no).remove();
        $('#total_chq').val(last_chq_no-1);
    }
}
function add1(){
    const new_chq_no1 = parseInt($('#total_chq1').val()) + 1;
    const new_input1 = "<input class='mb-2' type='number' value=0 name='uitgaven' id='uitgaven" + new_chq_no1 + "'>";
    $('#new_chq1').append(new_input1);
    $('#total_chq1').val(new_chq_no1)
}
function remove1(){
    const last_chq_no1 = $('#total_chq1').val();
    if(last_chq_no1>1){
        $('#uitgaven'+last_chq_no1).remove();
        $('#total_chq1').val(last_chq_no1-1);
    }
}
function findTotal(){
    const arr = document.getElementsByName('inkomsten');
    let tot = 0;
    for(let i=0; i<arr.length; i++){
        if(parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    const arr1 = document.getElementsByName('uitgaven');
    let tot1 = 0;
    for(let j=0; j<arr1.length; j++){
        if(parseFloat(arr1[j].value))
            tot1 += parseFloat(arr1[j].value);
    }
    let tot2 = tot - tot1;
    document.getElementById('total').innerHTML = tot2;
}
function refresh(){
    window.location.reload()
}
