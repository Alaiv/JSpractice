
const changeClass = (tree, oldClass , newClass) => {
    const filtered = tree.children.map( v => {
        const clName = v.className === oldClass ? newClass : v.className;
        const newNode = {...v, className: clName};
        if (v.type === 'tag-internal') {
            return changeClass(newNode, oldClass, newClass)
        }
        return newNode;
    })
    return {...tree, children: filtered};
}


const htmlTree = {
    name: 'html',
    type: 'tag-internal',
    children: [
        {
            name: 'body',
            type: 'tag-internal',
            children: [
                {
                    name: 'h1',
                    type: 'tag-internal',
                    children: [
                        {
                            name: '',
                            type: 'text',
                            content: 'Сообщество',
                        },
                    ],
                },
                {
                    name: 'p',
                    type: 'tag-internal',
                    children: [
                        {
                            type: 'text',
                            content: 'Общение между пользователями Хекслета',
                        },
                    ],
                },
                {
                    name: 'hr',
                    type: 'tag-leaf',
                },
                {
                    name: 'input',
                    type: 'tag-leaf',
                },
                {
                    name: 'div',
                    type: 'tag-internal',
                    className: 'hexlet-community',
                    children: [
                        {
                            name: 'div',
                            type: 'tag-internal',
                            className: 'text-xs-center',
                            children: [],
                        },
                        {
                            name: 'div',
                            type: 'tag-internal',
                            className: 'fa fa-spinner',
                            children: [],
                        },
                    ],
                },
            ],
        },
    ],
};

console.log(changeClass2(htmlTree, 'hexlet-community', 'new-class'));
