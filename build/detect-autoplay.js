(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.detectAutoplay = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = 'data:video/mp4;base64,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'

},{}],2:[function(require,module,exports){
const h264Base64 = require('./h264-base64')
const mp3Base64 = require('./mp3-base64')

function removeElement ($element) {
  $element.parentElement.removeChild($element)
}

//
// API
//

function video (opts) {
  opts = Object.assign({ muted: false }, opts)

  const $video = document.createElement('video')

  if (opts.muted) {
    $video.muted = true
    $video.volume = 0
  } else {
    $video.muted = false
    $video.volume = 0.0001
  }
  $video.src = h264Base64
  $video.style.position = 'absolute'
  $video.style.width = 0
  $video.style.height = 0
  $video.style.pointerEvents = 'none'

  return new Promise((resolve, reject) => {
    $video.addEventListener('canplay', () => {
      $video.play()
        .then(() => resolve(true))
        .catch(() => resolve(false))
        .then(() => removeElement($video))
    })

    document.querySelector('body').appendChild($video)

    setTimeout(() => resolve(false), 250)
  })
}

function videoMuted () {
  return video({ muted: true })
}

function audio () {
  const $audio = document.createElement('audio')

  $audio.src = mp3Base64

  return new Promise((resolve, reject) => {
    $audio.addEventListener('canplay', () => {
      $audio.play()
        .then(() => resolve(true))
        .catch(() => resolve(false))
        .then(() => removeElement($audio))
    })

    document.querySelector('body').appendChild($audio)

    setTimeout(() => resolve(false), 250)
  })
}

module.exports = {
  video,
  videoMuted,
  audio
}

},{"./h264-base64":1,"./mp3-base64":3}],3:[function(require,module,exports){
module.exports = 'data:audio/mpeg;base64,/+MYxAAAAANIAUAAAASEEB/jwOFM/0MM/90b/+RhST//w4NFwOjf///PZu////9lns5GFDv//l9GlUIEEIAAAgIg8Ir/JGq3/+MYxDsLIj5QMYcoAP0dv9HIjUcH//yYSg+CIbkGP//8w0bLVjUP///3Z0x5QCAv/yLjwtGKTEFNRTMuOTeqqqqqqqqqqqqq/+MYxEkNmdJkUYc4AKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'

},{}]},{},[2])(2)
});