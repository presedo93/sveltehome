# Part 1
echo "Installing Rustup..."
# Install Rustup (compiler)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
# Adding binaries to path
source "$HOME/.cargo/env"
# Part 2
echo "Installing wasm-pack..."
# Install wasm-pack
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh -s -- -y

# Part 3
echo "Fetching wasm submodules..."
# Fetch submodules
git submodule init && git submodule update
# Build wasm projects
npm run wasm
