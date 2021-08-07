
let helo = React.createElement("h1", null, "hellooo world");


let list = React.createElement("ul", null,
    React.createElement("li", null, "1 cup Fresh Basil"),
    React.createElement("li", null, "1 cup Pine Nuts"),
    React.createElement("li", null, "2 cups Butter Lettuce"),
    React.createElement("li", null, "1 Yellow Squash"),
    React.createElement("li", null, "1/2 cup Olive Oil"),
    React.createElement("li", null, "3 cloves of Garlic"));


let items = [
    "1 cup Fresh Basil",
    "1 cup Pine Nuts",
    "2 cups Butter Lettuce",
    "1 Yellow Squash",
    "1/2 cup Olive Oil",
    "3 cloves of Garlic"
]
let list2 = React.createElement("ul", { className: "ingredients" }, items.map((ingredient, i) => React.createElement("li", { key: i },
    ingredient)));



ReactDOM.render(helo, document.getElementById("root"));
ReactDOM.render(list, document.getElementById("fruit"));
ReactDOM.render(list2, document.getElementById("fruit-sec"));


/* const IngredientsList = React.createClass({

    displayName: "IngredientsList",

    render() {

        return React.createElement("ul", {

            "className": "ingredients"

        },

            React.createElement("li", null, "1 Apple"),

            React.createElement("li", null, "1 Banana")

        )

    }

}) */

class IngredientsList extends React.Component {

    renderListItem(ingredient, i) {

        return React.createElement("li", { key: i }, ingredient)

    }

    render() {

        return React.createElement(

            "ul",

            { className: "ingredients" },

            this.props.items.map(this.renderListItem))
    }
}

console.log(React);


var dogUrl = 'https://dog.ceo/api/breeds/image/random';
fetch(dogUrl).then(response => {
    return response.json();
}).then(response => {
    let img = React.createElement('img', { key: 'img', src: response.message });
    ReactDOM.render([ul, ol, img], div)
})