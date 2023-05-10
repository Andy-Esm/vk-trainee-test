import {useState} from 'react';

import styles from './select-form.module.css';

const SelectForm = () => {
	const [formValue, setFormValue] = useState({
		tower: '',
		floor: 3,
		room: 1,
		date: new Date(),
		startTime: '',
		endTime: '',
		textArea: '',
	});

	const handleInputChange = (event) => {
		const {name, value, type} = event.target;
		setFormValue((prevState) => ({
			...prevState,
			[name]: type === 'number' ? parseInt(value) : value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(JSON.stringify(formValue));
	};

	const handleReset = () => {
		setFormValue({
			tower: '',
			floor: 3,
			room: 1,
			date: new Date(),
			startTime: '',
			endTime: '',
			textArea: '',
		});
	};

	const floorOptions = Array.from({length: 25}, (_, index) => index + 3);

	const roomOptions = new Array(10).fill(null);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<label htmlFor="tower" className={styles.label}>
				Выберете одну из башен
			</label>
			<select
				name="tower"
				id="tower"
				value={formValue.tower}
				onChange={handleInputChange}
				className={styles.select}
			>
				<option value="">...</option>
				<option value="Башня А">Башня А</option>
				<option value="Башня Б">Башня Б</option>
			</select>
			<label htmlFor="floor">Выберете Этаж</label>
			<select
				name="floor"
				id="floor"
				value={formValue.floor}
				onChange={handleInputChange}
				className={styles.select}
			>
				{floorOptions.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
			<label htmlFor="room">Выберете Переговорную</label>
			<select
				name="room"
				id="room"
				value={formValue.room}
				onChange={handleInputChange}
				className={styles.select}
			>
				{roomOptions.map((_, index) => (
					<option key={index} value={index + 1}>
						{index + 1}
					</option>
				))}
			</select>
			<label htmlFor="date">Выберете дату и время бронирования</label>
			<div className={styles.time__wrapper}>
				<input
					type="date"
					id="date"
					name="date"
					value={formValue.date}
					onChange={handleInputChange}
				/>
				<label htmlFor="startTime">C</label>

				<input
					id="startTime"
					type="time"
					name="startTime"
					value={formValue.startTime}
					onChange={handleInputChange}
				/>
				<label htmlFor="endTime">По</label>
				<input
					type="time"
					name="endTime"
					value={formValue.endTime}
					onChange={handleInputChange}
				/>
			</div>
			<label htmlFor="textArea">Есть какие-то пожелания?</label>
			<textarea
				value={formValue.textArea}
				id="textArea"
				rows="6"
				name="textArea"
				placeholder="Введите свой текст..."
				onChange={handleInputChange}
				className={styles.text__area}
			/>
			<div className={styles.btns__wrapper}>
				<button className={styles.reset__btn} onClick={handleReset} type="reset">
					Сбросить
				</button>
				<button className={styles.send__btn}>Отправить</button>
			</div>
		</form>
	);
};

export default SelectForm;
