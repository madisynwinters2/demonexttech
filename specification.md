# Specification: [Save a Life ]

I want my app to similar to Life360 but everything is for free and i want my app to be more strict on users who have the app downloaded 

## Style and Theme

I want the style to be Gaming and the Theme to be Anime 

Overall mood:
Bold,serious,colorful 

Use the *style-guide.html* for details on styling -- fonts, colors, and layout.

## User Scenarios

### Story 1 (most important)
A young Lady would love to be able to track her children but her children's cellular device does not have cellular service and she tried using life360 but it didnt continue to track the cell phone outside of Wifi and she discovers my app and was able to continue to track her children outside of cellular service and make sure they were safe.
---

## Requirements

Tracks and Pin point Users location outside of cellular device 
Gives user data summarization everyweek 




### Functional Requirements

1. The app must include these pages:
	 - Home (`#/`)
	 - Collection (`#/items`)
	 - Item detail (`#/items/:id`)
	 - About (`#/about`)
2. The navigation bar must let people move to Home, Items, and About.
3. The app must load data from `items-template.csv` (a simple text table file).
4. The collection page must show one card per row in the data file.
5. Each card must include name, short description, and image (if available).
6. Each card must include a way to open that item's detail page.
7. The detail page must show full information for one selected item.

### Key Data

Use this as the basic item shape from the current starter data file.

- Item
	- id
	- name
	- description
	- category
	- image_url
	- location

## Success Criteria

Describe what success looks like in simple, observable terms.

1. A new person can open the app and reach the collection page in one click from Home.
2. A new person can open one item detail page from the collection without help.
3. If the data cannot load, the app shows a clear message instead of a blank page.



### Starter defaults

The template starts with Bootstrap default styling (light background, blue primary, simple cards). You only need to describe the changes you want.

## Assumptions

- This is a beginner project for learning how to describe app behavior before generating code. It is a prototype, not a finished product.
- The app stays simple and uses one text table data file as its data source.
- The data may use placeholder images or no images at all. Use picsum.photos for any needed placeholder images.
- Styling remains based on Bootstrap classes already used in the starter project.
- The first version focuses on clarity and working basics, not advanced features.

## Notes for Students (How to Use This Template)

- Keep each section short and plain.
- Write for a classmate who is not technical.
- Focus on user actions and visible results.
- Start with Story 1 and only add extras if you have time.
