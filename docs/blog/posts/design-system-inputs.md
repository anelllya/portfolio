---
title: Design System - Inputs
slug: design-system-inputs
date: 2024-04-16
categories: 
    - Design system
---

# Bridging the Gap: Design in Figma with HTML Input Types in Mind

In software development, when we want to collect information from users, we often use forms with labeled text fields. While these fields might seem a bit robotic to us humans, they're crucial for allowing communication between people and software. This communication helps systems create personalized experiences and recommendations within their digital interfaces.

<!-- more -->

## Designer <-> Developer Communication

Designers and developers often face challenges in communication, leading to the creation of similar outputs. However, there's typically a lack of coordination between them. Designers design with humans in mind, naming their components' properties accordingly, which is great for keeping the focus on the user experience. On the other hand, developers operate in a more machine-centric environment. While this approach is beneficial in maintaining a human-centric design and a machine-centric development process, I believe that aligning certain aspects with similar names could greatly benefit both sides.

The journey from design concept to functional implementation is usually a bumpy ride. We, designers, craft visually appealing interfaces, developers have to translate these designs into tangible elements with specific characteristics defined in HTML. The challenge lies in ensuring that both parties speak the same language, minimizing misunderstandings and streamlining the development process.

## HTML Inputs

There are several inputs that are most likely to be used out of the complete list, which you can visit in [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button){ target="_blank"}. There are some shared attributes that we are going to be addressing and we will see how can we set our Figma components for success. 

### Basic Anatomy

1. **Label** - a small introduction on the type of information that is needed in this input type=text
2. **The input** - it is the actual field where users add information
3. **Caption** -only if necessary, and some small tricks are aplied so it works properly 

``` html
<label for="name" class="inputLabel">Name (4 to 8 characters):</label> 

<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" class="inputTypeText"/>

<span class="inputCaption">Here add some instructions</span>

``` 
And here is the result with no styling applied. We have only added some classes, so it is prepared for further retouch:

<div class="defaultForm">

<label for="name" >Name (4 to 8 characters):</label> 

<input type="text" id="name" name="name" required minlength="4" maxlength="8" size="10"/>

<span>Here add some instructions</span>

</div>

What we need to have in mind when designing: 

1. `#!html <input type="text">`
2. Attributes: `pattern, placeholder, readonly, required, size`

The question is how can we link these properties to the Figma panel? Let's figure it out...







