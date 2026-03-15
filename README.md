# ipscan

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

`ipscan` is a tool to scan IP addresses on a local network.

## Usage

```
deno --allow-net https://code4fukui.github.io/ipscan/ipscan.js 8888 1
```
This will output a list of URLs for services found on the local network on port 8888.

## Features

- Scans a range of IP addresses on the local network
- Supports a configurable port and IP address range
- Uses Deno and the `fetch` API to quickly check for responsive services

## Requirements

- Deno runtime
- Network access permission

## License

This project is licensed under the MIT License.