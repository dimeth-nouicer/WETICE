function isWebBLEAvailable(){
    if (!navigator.bluetooth){
        console.log('errrr');
        return false
    }
    return true
}

function getDeviceInfo(){
    let options = {
        acceptAllDevices: true
    }

    console.log('requesting BLE devices info..')
    navigator.bluetooth.requestDevice(options).then(device => {
        console.log('Name:' + device.name)
    }).catch(error => {
        console.log('request device error: ' + error)
    })
}

document.querySelector('form').addEventListener('submit', 
function(event) {
    event.stopPropagation()
    event.preventDefault()

    if(isWebBLEAvailable()) {
        getDeviceInfo()
    }
} )