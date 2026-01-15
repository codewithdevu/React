function customrender(reactElement , container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTMl = reactElement.Children
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    Children: 'click me to visit google '
}

const mainContainer = document.querySelector('#root')

customrender(reactElement , mainContainer)