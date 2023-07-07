# Project REST-Rant

REST-Rant is an app where users can review restaurants.


| method     | path                     | purpose                                           |
| :--------- | :----------------------  | :-----------------------------------------------  |
| GET        | /                        | Home Page                                         |
| GET        | /places                  | places index page                                 |
| POST       | /places                  | creates new place                                 |
| GET        | /places/new              | Form page for creating a new place                |
| GET        | /places/:id              | Details about a particular place                  |
| PUT        | /places/:id              | Update a particular place                         |
| GET        | /places/:id/edit         | Form page for editing an existing place           |
|DELETE      | /places/:id              | Delete a particular place                         |
| POST       | /places/:id/rant         | Create a rant (comment) about a particular place  |
| GET        | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place  |
|DELETE      |             *            | 404 page (matches any route not defined above)    |



|Restaurant Name | City         | State      | Cuisine Type   |Pic url|
| :--------------| :----------  | :----------| :------------- |:----|
|La Rotisserie   | Bayside      | NY         | French         |pic  |
|Violets         | Orange       | CA         | Vietnamese     |pic  |
|Marios          | Maine        | WA         | Colombian      |pic  |



## Planning

### User Stories
TBD

### Wireframes
TBD

### Notes

<br />


Possible bonus ideas:
<ul>
    <li>update for comments</li>
    <li>aggregate rating for a place</li>
    <li>Auto-complete state dropdown</li>
</ul>