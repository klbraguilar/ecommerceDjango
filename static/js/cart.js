var updateBtns = document.getElementsByClassName('update-cart')
var viewProduct = document.getElementsByClassName('view-product')


for(var i = 0; i < updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId:', productId, 'action:', action)
        console.log('User:', user)

        if(user === 'AnonymousUser'){
            console.log('Not Logged in')
        }else{
            updateUserOrder(productId,action)
        }
    })
}

function updateUserOrder(productId, action){
    console.log('User is logged in ')
    var url = '/update_item/'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken' : csrftoken,
        },
        body: JSON.stringify({'productId': productId, 'action': action})
    })
    .then((response) => {
        return response.json()
    })

    .then((data) => {
        console.log('data:', data)
        location.reload()
    })
}

for(var i = 0; i < viewProduct.length; i++){
    viewProduct[i].addEventListener('click', function(){
        var productId = this.dataset.product
        console.log('productId:', productId)
        verproducto(productId)
    })
}

function verproducto(productId){
    window.location.href = '/view/' + productId;
}

