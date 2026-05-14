# ipscan

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A command-line tool to scan a local network for services on a specified port.

## Features

- Scans the `192.168.x.1-254` IP range, where the third octet (`x`) is configurable.
- Performs parallel, non-blocking HTTP checks with a 300ms timeout per request.
- Outputs a JSON array of URLs for all responsive services found.

## Requirements

- Deno runtime
- Network access permission (`--allow-net`)

## Usage

Run the script directly from its URL:

```bash
deno run --allow-net https://code4fukui.github.io/ipscan/ipscan.js [PORT] [IP_THIRD_OCTET]
```

### Arguments

-   `[PORT]` (optional): The port number to scan. Defaults to `80`.
-   `[IP_THIRD_OCTET]` (optional): The third octet for the `192.168.X.y` IP range. Defaults to `1`.

### Example

To scan for services on port `8888` across the `192.168.1.1-254` range:

```bash
deno run --allow-net https://code4fukui.github.io/ipscan/ipscan.js 8888 1
```

### Example Output

The script prints a JSON array of the URLs found:

```json
[
  "http://192.168.1.10:8888/",
  "http://192.168.1.105:8888/"
]
```

## License

MIT License — see [LICENSE](LICENSE).