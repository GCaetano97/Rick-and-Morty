Rick and Morty Challenge

#Packages
This are the packages added to the boilerplate create-react-app with the Typescript template
-Axios for data fetching
-Styled-Components for styling the app

#Brief Explanation

The page is divided in two, a hero section when the user gets to the page and a character section with the characters and a filter
On the Character page there are three parts for it, the filter, the character list and the buttons for the pagination
For the character list there's one more component to render each item in a card.

    App -> Hero 
        -> Characters -> Filter
                      -> Character List
                      -> Buttons for the pagination

#Considerations
-Redux, for this project since it was small there was no need for a global store to have state stored

#What would be added next?
From the API it's possible to get Dimensions and Episodes. With this, there would be helpfull to have a navbar to navigate the page and to change to that respective part with React Router.
Despite that, if there was more time I would add a single page for each one of the characters when a user clicks on a card. That page could just be a modal or a new page entirely.