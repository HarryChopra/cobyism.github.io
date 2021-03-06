---
title: Interfaces all the way down
layout: post
---

If your job involves designing interfaces for the web, it’s easy to think that the interfaces you work on are experienced in isolation, but that’s almost never the case.

The truth is that any digital interface is unavoidably going to be nested inside *at least* one other layer of interface, but probably more. This is something us designers would do well to keep in mind more than I think we often do.

First up, most designs for the web are going to be contained within a browser interface. The size and location of things like tab lists, back buttons, location bars, loading indicators, and so forth will be different between each browser, and will often vary across different platforms too. There could even be extra indicators or notifications from the browser itself too, about things like updates or security warnings, or extra buttons or panes added by plugins or extensions the user has installed. Add to this the fact that almost all modern browsers allow multiple tabs to be open at once, and the amount of extra potential mental overhead quickly starts to skyrocket. If you’ve ever experienced the frustration of having sound begin to play from an unidentified background browser tab, you’ll understand how critical it is that your interface to be sympathetic to complex intra-browser navigation concerns.

![Nested interfaces on mobile device](https://f.cloud.github.com/assets/296432/1521369/6568af3e-4b91-11e3-9450-19b943b18fed.png)

The next layer of interface after the browser that users will *almost certainly* have to deal with is the operating system’s interface. When you’re using an application on a mobile or a tablet, chances are the only visible artifact will be a small status bar at the top or button of the screen. There could be other things going on at various times too though: alerts or messages from other applications might pop up over the top of your interface; the user might switch between the app containing your interface and other apps; or a range of other things could happen.

![Nested interfaces on laptop](https://f.cloud.github.com/assets/296432/1521530/00ca98a4-4b95-11e3-8b97-0fce889aaf2e.png)

At a minimum, there’s going to be a device involved with a screen of some sort. Even if it’s a phone or a tablet where the screen *is* the interface, the device itself will likely have a frame with a button or two around the outside somewhere, and maybe a camera with an indicator light too, with the screen eclosed within that bezel. On a laptop or desktop computer the interfaces you have with the device are obviously going to be the keyboard, mouse or trackpad, monitor(s), power button, and so forth. Each of these different types of physical interface with the device have their quirks, and represent one layer of extra interface your design will need to account for at all times.

Whenever you have multiple layers of abstraction operating at once, like you do with the different purposes and scopes of each layer of interface described above, the number of things that can negatively affect a user’s experience of *your* interface is staggering. If something goes wrong inside one layer, or there is friction for some reason between two layers, *your* interface will be what suffers at the end of the day. To use an analogy, a designer not factoring in the environment within which their interface lives would be like an architect designing a building with no consideration for neighbouring property, sunlight direction, road access, surrounding trees, ground drainage, and so forth—the building could easily end up being dark, damp, difficult to access, and devoid of privacy. Such a project can only produce a low quality experience for its inhabitants.

All of this might seem obvious at first, but how often do you consciously factor these extra layers of interface in when designing an interface? I know from my own experience that I don’t think about these things anywhere near as much as I probably should, and I’d wager that for many designers, the answer is "never" (or maybe "rarely"), and that’s a little unnerving to think about.

I see this as being another argument in favour of designing interfaces *in the browser* whenever possible, so that you experience the full heirarchy of interfaces at all times as you build your interface. The ramifications that nested interfaces will have will differ from project to project, but in general, the more conscious you can be of the many layers of interfaces that might surround *your* interface, the more enjoyable your end product will be to use.
