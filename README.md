# JobTracker

The JobTracker application allows one or more individuals to be able to create an account in the application and track their job leads. This includes maintaining details about the job, tracking the status of the job, and adding notes to the job. When viewing a list of their jobs, a user can filter the list based on the status, and can also perform a free-text search of the content.

## Installation
(The following instructions assume you will be running on a system with Ruby 2.2+ available).

* Fork and clone this repository to your target environment.
* Run 'bundle install' to download any required RubyGems.
* Run rake db:migrate to create database
* Execute `rails s` from the command line to start your Rack-based server.

## Usage

**Functionality**

The JobTracker application maintains the following pieces of information:

Job Information:
* Job Name
* Job Title
* Company
* Job Description
* Salary
* Application URL
* Date Found
* Date Posted
* Job Status
* Date Job Entry Created
* Date Job Entry Last Updated

Job Note:
* Note (free text)
* Date Added

**Authentication**

Any user can create an account on the site by providing an e-mail address and passwords. Formatting of e-mail address' and a minimum password length is enforced.

## Contributing

Please contact Michael Simon at michael.simon@gmail.com if you are interested in contributing.

## History

Please refer to the [CHANGELOG](CHANGELOG.md).

## Credits

This application makes use of the following primary technologies/frameworks:
* Ruby
* Ruby on Rails 4.2
* AngularJS (v1)
* Angular Material

## License

**This repository was created as part of a learning exercise in [Flatiron School's Learn-Verified](http://www.flatironschool.com/) program.**

**The content of this repository is available for non-commercial use only. For more information please refer to the [LICENSE](https://www.binpress.com/license/view/l/9b1947b4990df950bcc5127d93e3a77b).**
