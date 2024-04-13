function operator(proxies = []) {
  return proxies.map((p = {}) => {
    const _ = lodash

    const host = _.get($arguments, 'host')
    const hostPrefix = _.get($arguments, 'hostPrefix')
    const hostSuffix = _.get($arguments, 'hostSuffix')
    const array = _.get($arguments, 'array')
    
    let network = _.get(p, 'network')
    const type = _.get(p, 'type')
    const isReality = _.get(p, 'reality-opts')

    /* 只修改 vmess 和 vless */
    if (_.includes(['vmess', 'vless'], type)) {
      if (!network && !isReality) {
        network = defaultNetwork
        _.set(p, 'network', defaultNetwork)
      }
      if (host) {
        if (hostPrefix) {
          _.set(p, 'name', `${hostPrefix}${p.name}`)
        }
        if (hostSuffix) {
          _.set(p, 'name', `${p.name}${hostSuffix}`)
        }
        /* 把 非 server 的部分都设置为 host */
        _.set(p, 'servername', host)
        if (_.get(p, 'tls')) {
          /* skip-cert-verify 在这里设为 true 有需求就再加一个节点操作吧 */
          _.set(p, 'skip-cert-verify', true)
          // 这个应该没用了
          // _.set(p, 'tls-hostname', host)
          _.set(p, 'sni', host)
        }

        if (!isReality) {
          if (network === 'ws') {
            _.set(p, 'ws-opts.headers.Host', array ? [host] : host)
          } else if (network === 'h2') {
            _.set(p, 'h2-opts.host', array ? [host] : host)
          } else if (network === 'grpc') {
            _.set(p, 'grpc-opts.headers.Host', array ? [host] : host)
          } else if (network === 'grpc') {
            _.set(p, 'http-opts.headers.Host', array ? [host] : host)
          } else {
            // 其他? 谁知道是数组还是字符串...先按字符串吧
            _.set(p, `${network}-opts.headers.Host`, array ? [host] : host)
          }
        }
      }
    }
    return p
  })
}
