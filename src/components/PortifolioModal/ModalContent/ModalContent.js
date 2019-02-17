import React from 'react';

const ModalContent = props => {
    return (
        <div className="modal__container__content">
            <h1>{props.data.name}</h1>
            <div className="modal__container__content__text">
                <h2>Summary:</h2>
                <p>{props.data.summary}</p>
                <h2>Technologies:</h2>
                <ul >
                    {props.data.technologies.map((tech, index) => (
                        <li key={props.data.technologies[index] + props.data.name}>
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
            <button><a href="/">GO TO WEBSITE</a></button>
            <button>
                <a 
                    target='_blank'
                    rel='noopener noreferrer'
                    href={`https://github.com/HenriqueFadoni/${props.data.urlGitHub}`}>GitHub</a></button>
        </div>
    );
};

export default ModalContent;