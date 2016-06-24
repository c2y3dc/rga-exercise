# RGA Exercise

## Instructions

1. Install packages: `npm install`
2. Install gulp: `npm install -g gulp`
3. Build by running this commnad: `gulp`
4. Serve with this command: `python -c $'import SimpleHTTPServer;\nmap = SimpleHTTPServer.SimpleHTTPRequestHandler.extensions_map;\nmap[""] = "text/plain";\nfor key, value in map.items():\n\tmap[key] = value + ";charset=UTF-8";\nSimpleHTTPServer.test();' "8000";`
5. Go to localhost:8000 in your browser