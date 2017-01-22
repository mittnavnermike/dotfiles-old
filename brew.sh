
#!/usr/bin/env bash

# Make sure we’re using the latest Homebrew.
brew update

# Upgrade any already-installed formulae.
brew upgrade

brew tap caskroom/cask
brew install brew-cask
brew tap caskroom/versions

brew install git
brew install wget

# Sys
brew cask install 1password

# Dev
brew cask install atom
brew cask install google-chrome
brew cask install firefox
brew cask install hyper
brew cask install iterm2
brew cask install cyberduck

# Osx
brew cask install divvy
brew cask install alfred
brew cask install appcleaner

# Dezign
brew cask install adobe-creative-cloud
brew cask install fontexplorer-x-pro

# Phun
brew cask install slack
brew cask install dropbox
brew cask install google-drive
brew cask install spotify
brew cask install licecap
brew cask install vlc
brew cask install transmission
