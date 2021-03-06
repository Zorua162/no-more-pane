// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Code from examples that disables the Page Action when not on panopto
// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'cloud.panopto.eu' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'cloud.panopto.eu' },
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

//Add the listener for if the button is pressed
chrome.pageAction.onClicked.addListener(function(tab) { 
  //Code called when the extension button is pressed
  console.log("Removing the leftPane on: " + tab.url);
  chrome.tabs.executeScript({
    code: 'document.getElementById("leftPane").remove(); document.getElementsByClassName("secondary-content screen-capture")[0].style="width: 1000px; height: 670.5px;"'
    //code : 'console.log("test worked here"); console.log("Second test here");'
  });
});

