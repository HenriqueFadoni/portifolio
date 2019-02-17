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
            <div className="modal__container__buttons">
                <button className='btn-portifolio' href='/'>
                    <a href="/">Website</a>
                </button>
                <button className='btn-portifolio'>
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`https://github.com/HenriqueFadoni/${props.data.urlGitHub}`}>GitHub</a>
                </button>
            </div>
        </div>
    );
};

export default ModalContent;