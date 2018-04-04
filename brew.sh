#!/usr/bin/env bash

# Install command-line tools using Homebrew.

# Ask for the administrator password upfront.
sudo -v

# Keep-alive: update existing `sudo` time stamp until the script has finished.
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

echo "brew start"
# Make sure we’re using the latest Homebrew.
brew update

# Upgrade any already-installed formulae.
brew upgrade

# Install GNU core utilities (those that come with OS X are outdated).
# Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
brew install coreutils
sudo ln -s /usr/local/bin/gsha256sum /usr/local/bin/sha256sum

# Install Bash 4.
brew install bash
brew tap homebrew/versions
brew install bash-completion2

sudo bash -c 'echo /usr/local/bin/bash >> /etc/shells'
chsh -s /usr/local/bin/bash

# Install other useful binaries.
brew install dark-mode
brew install git
brew install git-lfs
brew install rename
brew install nvm
brew install shellcheck
brew install yarn
brew install z

# Remove outdated versions from the cellar.
brew cleanup
echo "brew done"

# NPM
npm i react-native -g


# Cask
echo "cask start"

brew cask install 1password
brew cask install spotify
brew cask install slack
brew cask install cyberduck

echo "Installing code tools"
brew cask install visual-studio-code
brew cask install iterm2

echo "Installing design tools"
brew cask install sketch
brew cask install adobe-creative-cloud
brew cask install rightfont

echo "Installing osx tools"
brew cask install vlc
brew cask install beamer
brew cask install licecap
brew cask install audacity
brew cask install alfred
brew cask install flux
brew cask install magnet
brew cask install backblaze
brew cask install appcleaner
brew cask install transmission
brew cask install handbrake
brew cask install audio-hijack
brew cask install steam
brew cask install notion

echo "cask done"
echo "Complete. Have a nice day!"
