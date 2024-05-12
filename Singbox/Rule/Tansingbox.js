{
    "log": {
        "disabled": false,
        "level": "info",
        "timestamp": true
    },
    "experimental": {
        "clash_api": {
            "external_controller": "127.0.0.1:9090",
            "external_ui": "ui",
            "secret": "",
            "external_ui_download_url": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/metacubexd/archive/refs/heads/gh-pages.zip",
            "external_ui_download_detour": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁",
            "default_mode": "rule"
        },
        "cache_file": {
            "enabled": true,
            "store_fakeip": true
        }
    },
    "dns": {
        "servers": [{
            "tag": "direct-dns",
            "address": "local",
            "strategy": "ipv4_only",
            "detour": "direct"
        },
            {
                "tag": "select-dns",
                "address": "8.8.4.4",
                "strategy": "ipv4_only",
                "detour": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁"
            },
            {
                "tag": "block",
                "address": "rcode://success"
            },
            {
                "tag": "block-dns",
                "address": "rcode://success"
            }],
        "rules": [{
            "domain_suffix": [
                ".arpa.",
                ".arpa"
            ],
            "server": "block-dns",
            "rewrite_ttl": 20
        },
            {
                "rule_set": "ADSVN",
                "server": "block"
            },
            {
                "network": "udp",
                "port": 443,
                "server": "block-dns",
                "rewrite_ttl": 20
            },
            {
                "outbound": "any",
                "server": "localDns",
                "disable_cache": true
            },
            {
                "outbound": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁",
                "server": "select-dns",
                "rewrite_ttl": 20
            },
            {
                "outbound": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁",
                "server": "select-dns",
                "rewrite_ttl": 20
            }],
        "reverse_mapping": true,
        "strategy": "ipv4_only",
        "independent_cache": true
    },
    "inbounds": [{
        "type": "tun",
        "tag": "tun-in",
        "interface_name": "tun0",
        "inet4_address": "172.19.0.1/30",
        "mtu": 9000,
        "auto_route": true,
        "strict_route": true,
        "stack": "system",
        "endpoint_independent_nat": true,
        "sniff": false
    },
        {
            "listen": "0.0.0.0",
            "listen_port": 2080,
            "sniff": false,
            "tag": "mixed-in",
            "type": "mixed"
        }],
    "outbounds": [{
        "tag": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁",
        "type": "selector",
        "outbounds": [
            "🅐🅤🅣🅞 🅥🅝🅐🅜",
            "🅐🅤🅣🅞 🅢🅘🅝🅖",
            "🅐🅤🅣🅞 🅗🅚",
            "🅓🅘🅡🅔🅒🅣"]
    },
        {
            "tag": "🅐🅤🅣🅞 🅥🅝🅐🅜",
            "type": "urltest",
            "outbounds": [],
            "url": "http://www.gstatic.com/generate_204",
            "interval": "5m",
            "tolerance": 50
        },
        {
            "tag": "🅐🅤🅣🅞 🅢🅘🅝🅖",
            "type": "urltest",
            "outbounds": [],
            "url": "http://www.gstatic.com/generate_204",
            "interval": "5m",
            "tolerance": 50
        },
        {
            "tag": "🅐🅤🅣🅞 🅗🅚",
            "type": "urltest",
            "outbounds": [],
            "url": "http://www.gstatic.com/generate_204",
            "interval": "5m",
            "tolerance": 50
        },
        {
            "tag": "🅓🅘🅡🅔🅒🅣",
            "type": "direct"
        },
        {
            "tag": "bypass",
            "type": "direct"
        },
        {
            "tag": "block",
            "type": "block"
        },
        {
            "tag": "dns-out",
            "type": "dns"
        }],
    "route": {
        "auto_detect_interface": true,
        "override_android_vpn": true,
        "final": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁",
        "rules": [{
            "network": "udp",
            "port": 443,
            "outbound": "block"
        },
            {
                "domain_suffix": [
                    "googlesyndication.com"
                ],
                "outbound": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁"
            },
            {
                "ip_cidr": [
                    "8.8.8.8"
                ],
                "outbound": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁"
            },
            {
                "inbound": [
                    "dns-in"
                ],
                "outbound": "dns-out"
            },
            {
                "rule_set": [
                    "ADSVN"
                ],
                "outbound": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁"
            },
            {
                "outbound": "dns-out",
                "port": [
                    53
                ]
            },
            {
                "ip_cidr": [
                    "224.0.0.0/3",
                    "ff00::/8"
                ],
                "outbound": "block",
                "source_ip_cidr": [
                    "224.0.0.0/3",
                    "ff00::/8"
                ]
            }],
        "rule_set": [{
            "tag": "ADSVN",
            "type": "remote",
            "format": "source",
            "url": "https://raw.githubusercontent.com/DrStrangeVN/Singbox/main/Rule.json",
            "download_detour": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁"
        }]
    }
}
