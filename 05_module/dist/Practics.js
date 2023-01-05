"use strict";
function getPromise() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromise()
    .then((data) => {
    console.log(data);
});
function compare(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
function mergePrac(objA, objB) {
    return Object.assign(objA, objB);
}
class Component {
    constructor(props) {
        this.props = props;
    }
}
class Page extends Component {
    pageInfo() {
        console.log(this.props.title);
    }
}
function getPromiseAnswer() {
    return new Promise((resolve) => {
        resolve(['Text', 50]);
    });
}
getPromiseAnswer()
    .then((data) => {
    console.log(data);
});
function compareAnswer(top, bottom) {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight,
    };
}
function mergeAnswer(objA, objB) {
    return Object.assign(objA, objB);
}
class ComponentAnswer {
    constructor(props) {
        this.props = props;
    }
}
class PageAnswer extends ComponentAnswer {
    pageInfo() {
        console.log(this.props.title);
    }
}
//# sourceMappingURL=Practics.js.map