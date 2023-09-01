# PacketLogger
✨ Packet logger MCBE proxy

# What is this?
- A proxy helps you dump packets from the MCBE server you join!

# Config

```json
{
    "localAddress": {
        "ip": "0.0.0.0",
        "port": 19132
    },
    "remoteAddress": {
        "ip": "",
        "port": 19132
    },
    "relayDelay": 300
}
```

# Setup
- Edit the ip and port addresses of `localAddress` and `remoteAddress` in config.json, `localAddress` will be the address you join and `remoteAddress` will be the address you want to export the packet to.
- Use command `node main.js` to start proxy.
- The proxy will then be started and will give you an address for Chrome Devtools.
- Go to the Chrome Devtools address to enable the proxy then enter the `localAddress` address in the config, all packets will be printed in the networks section of the Chrome Devtools page.