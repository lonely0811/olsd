$httpClient.get('https://api.my-ip.io/ip', function (error, response, data) {
  $done({
    title: 'Current IP Address',
    content: data,
    backgroundColor: '#663399',
    icon: 'network',
  })
})
