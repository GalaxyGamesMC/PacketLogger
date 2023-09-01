const config = require('./config.json')
const mcprotocol = require('bedrock-protocol')
const { setTimeout: wait } = require('timers/promises')
const netlog = require('prismarine-inspector')

async function main() {
    const proxy = new mcprotocol.Relay({
        offline: false,
        host: config.localAddress.ip,
        port: config.localAddress.port,
        destination: {
            host: config.remoteAddress.ip,
            poet: config.remoteAddress.port
        }
    })

    await wait(config.relayDelay)
    proxy.listen()
    netlog(proxy, { 
        port: 9223 
    }).then(() => 
        console.log('Started local proxy')
    )
    await wait(config.relayDelay)
}

main()