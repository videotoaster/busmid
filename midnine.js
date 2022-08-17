// midnine/busmid v1.2
// GPL'd by VideoToblinski in 2022
// This is a duct-taped together Firefox extension to load
// older versions of the Nintendo site. Flash content will
// be disabled, but that's a sacrifice I'm willing to make.

// If we're on web.archive.org:
if (window.location.href.indexOf("web.archive.org/web/") != -1) {
  // Pretend that Shockwave Flash 7 is installed.
  navigator.plugins["Shockwave Flash"] = new Object("DUMMY PLUGIN")
  navigator.plugins["Shockwave Flash"].description = "   7.   ";

  // no_flash.vm appears when Flash is not detected, and since we're
  // circumventing the check anyways, this page is irrelevant, so we
  // should really just redirect to home.
  // TODO: Dejank this redirect, lmao
  if (window.location.href.indexOf("nintendo.com/no_flash.vm") != -1) {
    window.location.href = window.location.href.replace("no_flash.vm", "home/");
  }

  // Add the ignorecheck and ignoreflash cookies to skip browser and Flash
  // detection, which causes a redirect to no_flash.vm
  document.cookie = "ignorecheck=yes; expires=Fri, 01 Jan 2038 12:00:00 UTC";
  document.cookie = "ignoreflash=yes; expires=Fri, 01 Jan 2038 12:00:00 UTC";
}
