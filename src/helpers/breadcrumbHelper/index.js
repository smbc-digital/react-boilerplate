const showBreadcrumbs = (show) =>{
    let breadcrumb = null; //document.getElementById('breadcrumb')
    if(breadcrumb !== null) 
    {
        if(show){
            breadcrumb.classList.remove('hidden')
        }
        else{
            breadcrumb.classList.add('hidden')
        }
    }
}

export default showBreadcrumbs