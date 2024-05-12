{
  "log": {
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
    "fakeip": {
      "enabled": true,
      "inet4_range": "198.18.0.0/15"
    },
	"servers": [
      {
        "address": "8.8.4.4",
        "address_resolver": "dns-direct",
        "strategy": "prefer_ipv4",
        "tag": "dns-remote"
      },
      {
        "address": "local",
        "address_resolver": "dns-local",
        "detour": "direct",
        "strategy": "prefer_ipv4",
        "tag": "dns-direct"
      },
      {
        "tag": "fakeip",
        "address": "fakeip"
      },
	  {
		"tag": "block-dns",
		"address": "rcode://success"
	  }
	],
  "rules": [
      {
        "domain_suffix": [
          ".arpa.",
          ".arpa"
        ],
        "server": "block-dns",
        "rewrite_ttl": 20
      },
      {
        "outbound": "direct",
        "server": "dns-direct",
        "rewrite_ttl": 20
      },
      {
        "outbound": "any",
        "server": "dns-direct",
        "disable_cache": true
      },
      {
        "inbound": "tun",
        "query_type": [
          "A",
          "AAAA"
        ],
        "server": "fakeip",
        "rewrite_ttl": 1
      },
      {
        "rule_set": [
          "ADSVN"
        ],
        "server": "block-dns",
        "disable_cache": true
      }
    ],
    "reverse_mapping": true,
    "strategy": "ipv4_only",
    "independent_cache": true,
    "disable_cache": true
  },
  "inbounds": [
	{
	  "type": "tun",
	  "tag": "tun-in",
	  "interface_name": "tun0",
	  "inet4_address": "172.19.0.1/30",
	  "mtu": 9000,
	  "auto_route": true,
	  "strict_route": true,
	  "stack": "system",
	  "endpoint_independent_nat": true,
	  "sniff": true
	},
	{
	  "listen": "0.0.0.0",
	  "listen_port": 2080,
	  "sniff": false,
	  "tag": "mixed-in",
	  "type": "mixed"
	}
  ],
  "outbounds": [
		{
			"tag": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁",
			"type": "selector",
			"outbounds": ["direct"]
		},
		{
			"tag": "direct",
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
		}
	],
  "route": {
	"auto_detect_interface": true,
	"final": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁",
	"rules": [
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
	  }
	 ],
	"rule_set": [
		{
		  "tag": "ADSVN",
		  "type": "remote",
		  "format": "source",
		  "url": "https://raw.githubusercontent.com/DrStrangeVN/Singbox/main/Rule.json",
		  "download_detour": "🅵🆄🅻🅻 🆂🅴🆁🆅🅴🆁"
	  }
	]
      }
   }
