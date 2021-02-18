import React from 'react';

const Footer = ({count}) => (<div>
    <div>Невыполненных заданий: {count}</div>
    <ul>
        <li>Все</li>
        <li>Выполненные</li>
        <li>Невыполненные</li>
    </ul>
    <div>Удалить выполненные</div>
</div>);

export default Footer;