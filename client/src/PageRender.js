import React from 'react';
import { useParams } from 'react-router-dom';
import Error from './components/error';

const generatePage = (pageName) => {
    const component = () => require(`./pages/${pageName}`).default

    try {
        return React.createElement(component())
    } catch (err) {
        return <Error/>
    }
}


const PageRender = () => {
    const {page, id} = useParams()
    let pageName = "";
    if (id) {
        pageName = `${page}/[id]`
    } else {
        pageName = `${page}`
    }
    console.log(pageName)

    return generatePage(pageName)
};

export default PageRender;
