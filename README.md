Cool Science
================

Cool Science is the Science North blog. We're experimenting with moving to Ruby and open-sourcing as much of our work as possible. This repo is our first step.

## In Other Words…

You probably don't want to clone this repo for any high-end work. We're making zero effort to make this repo relevant to anyone other than the writers and readers of Cool Science. But if you've ever wanted a sneak peak at how we do things, or if you see anything on Cool Science and want to know how it works, here's your chance.

## Project Objectives

1. Make it as easy as possible for non-technical users to collaborate on an organizational blog.

2. Expose basic web analytic info to the blog authors without requiring them to either a) log into Google Analytics or b) waiting for a report. The idea is to empower authors to directly understand the impact their content is having so that they can make informed decisions when creating that content.

3. Make it easy for the tech team (we lonely nerds) to experiment with various ideas for site functionality. Part of experimentation means being able to easily change our minds about things, undo mistakes, etc.

4. Participate in open-source: We believe in the scientific principles of freedom of information and peer-review. Open-source embodies both.

## Setup Instructions

0. Install all the usual [ruby/rails prerequisites](http://rubyonrails.org/download). We're running Ruby 2.0.0 and Rails 4.0.0. If you're running other versions, your mileage may vary.

1. Clone this repository using your method of choice.

2. From your command line, run 'bundle install' from the project root.

3. From your command line, run 'rails server'. The blog should be up and running on your local machine at [http://localhost:3000](http://localhost:3000). (Alternate suggestion: Look into POW. It's our preferred server setup for development.)