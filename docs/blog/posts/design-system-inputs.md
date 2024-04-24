---
title: Design System - Inputs
slug: design-system-inputs
date: 2024-04-16
categories: 
    - Design system
    - Inputs
---

# Bridging the Gap: Design in Figma with HTML Input Types in Mind

![Figma input type text anatomy](../../img/blog/input-type-text-anatomy-dark.webp#only-dark)
![Figma input type text anatomy](../../img/blog/input-type-text-anatomy-light.webp#only-light)

In software development, when we want to collect information from users, we often use forms with labeled text fields. While these fields might seem a bit robotic to us humans, they're crucial for allowing communication between people and software. This communication helps systems create personalized experiences and recommendations within their digital interfaces.

<!-- more -->

[View Figma Community File](https://www.figma.com/community/file/1365035881732469486/inputs){ target="blank"}

## Design and Development

Designers and developers often face challenges in communication, leading to the creation of similar outputs. However, there's typically a lack of coordination between them. Designers design with humans in mind, naming their components' properties accordingly, which is great for keeping the focus on the user experience. On the other hand, developers operate in a more machine-centric environment. While this approach is beneficial in maintaining a human-centric design and a machine-centric development process, I believe that aligning certain aspects with similar names could greatly benefit both sides.

The journey from design concept to functional implementation is usually a bumpy ride. We, designers, craft visually appealing interfaces, developers have to translate these designs into tangible elements with specific characteristics defined in HTML. The challenge lies in ensuring that both parties speak the same language, minimizing misunderstandings and streamlining the development process.

## HTML Inputs

Here are 12 different input types that are most likely to be used in any website or digital product. 

1. Checkbox
2. Date
3. Date-time local
4. Email
5. Number
6. Password
7. Radio
8. Range
9. Search
10. Submit
11. Text
12. URL 

If you still need to check if there are even more types, you can go and explore the complete list on [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button){ target="_blank"}. Almost all inputs have some common attributes that we are going to be addressing and we will see how we can set our Figma components for success. 

### Desired Anatomy

1. **Label**: Provides a brief introduction to the information required.
2. **Required indicator**: A symbol indicating a mandatory field for submission.
3. **Text field/input**: The area where users input information.
4. **Supportive text/Caption**: Included only when necessary, as it's not an HTML tag; we'll use workarounds to include it.

## Input Text

It's often the most basic form element used for accepting single-line text input from users. By starting here, we can establish foundational design principles that can be applied to more complex input types.

#### HTML structure

``` html
<label for="name" class="inputLabel">Label</label> 

<input type="text" id="name" name="name" class="inputTypeText" required/>

<span class="inputCaption">Additional instructions</span>

``` 

When we talk about the structure of HTML elements, it's crucial to understand the relationship between labels and input fields. The "for" attribute in a label should always match the "id" attribute of the corresponding input field. Why? Because this association is what makes forms accessible and user-friendly. When they're correctly linked, users can click on the label itself to activate or focus on the input field, making navigation smoother and more intuitive. It's a small detail, but it significantly enhances the overall usability of web forms.

And here is the result with no styling applied. We have only added some classes, so it is prepared for further retouches:

<hr>

<div class="defaultForm">

<label for="name">Label</label> <br />

<input type="text" id="name" name="name" required/> <br />

<span>Additional instructions</span>

</div>

<hr>

What we need to have in mind when designing: 

1. The input type, which will be the name of the Figma component: `#!html <input type="text">`
2. Attributes to consider including in a boolean property: `disabled, pattern, placeholder, readonly, required, size`

#### CSS pseudo classes

`:hover`, `:focus`, and `:active` 

These classes play a significant role in enhancing the user experience by providing visual feedback for different states of interaction. By defining them consistently across components, we ensure a cohesive and intuitive interface.

The order of these pseudo classes is very important and we should always define them as follows [^1]: 

1. Hover
2. Focus
3. Active

[^1]: Bits of code - 
Articles on frontend engineering and more [When do the :hover, :focus, and :active pseudo-classes apply?](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/){ target="blank" }

The question is where and how can we link these properties to the Figma panel? Some of the component properties will refer to HTML attributes and others will be referring to CSS pseudo classes that will determine the final look of the components. Let's figure it out together...

#### Figma component properties

Connecting component properties in the Figma panel to those corresponding to HTML attributes (such as "Disabled," "Required") and associated with CSS pseudo-classes (like "Hover," "Focus") might not seem essential at first glance. However, when you're designing something meant to be both human-readable and developer-friendly, it's crucial. Avoiding the need for extensive explanations by ensuring clarity in design components fosters smoother communication between designers and developers. This connection enables them to effortlessly discuss and understand component behavior directly within the design tool, facilitating collaboration and streamlining the design and development process.

1. Component name: **Input text**
2. Show Placeholder: True / False
3. States <span class="handnotes">CSS pseudo classes</span>: 
    - Default (it becomes *valid*, after validation)
    - Hover 
    - Focus 
    - Invalid 
4. Disabled: True / False <span class="handnotes">HTML attribute</span>
5. Required: True / False <span class="handnotes">HTML attribute</span>
6. Label edit property
7. Input value edit property
8. Placeholder edit property
9. Show Caption
10. Caption edit property

![Input Text Component's Propertiesin Figma](../../img/blog/Input-type-text-figma-properties.webp)