import { h } from 'preact';
import style from './style.css';

const handlePocket = (event) => {
	event.preventDefault();
	const target = event.currentTarget;
	const form = target.closest('form');
	const pocket = target.getAttribute('data-pocket')
	form.elements.pocket.value = pocket;
	form.submit();
}

const Button = ({ pocket, image, title, subtitle }) => (
	<button onClick={handlePocket} data-pocket={pocket} class={style.btn}>
		<img src={image} />
		<div>
			{title}
			<br />
			{subtitle && subtitle.length > 0 ? <small>{subtitle}</small> : false}
		</div>
	</button>
);

export default Button;