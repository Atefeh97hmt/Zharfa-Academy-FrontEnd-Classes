function showToast(){
    let toast = document.getElementById('toast');
    toast.className = 'show';

    setTimeout(() =>{
        toast.className = toast.className.replace("show", "");

    }, 3000)
}