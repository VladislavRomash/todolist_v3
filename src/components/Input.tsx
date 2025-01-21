import {ChangeEvent, JSX, useState, KeyboardEvent} from 'react';
import {Button} from './Button.tsx';

type Props = {
    inputHandler: (title: string) => void
}

export const Input = ({inputHandler}: Props): JSX.Element => {

        const [currentTitle, setCurrentTitle] = useState<string>('');

        const changeHandler = (e: ChangeEvent<HTMLInputElement>) => setCurrentTitle(e.currentTarget.value)

        const clickHandler = () => {
            if (currentTitle.trim()) {
                inputHandler(currentTitle.trim())
                setCurrentTitle('')
            }
        }

        const pressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                clickHandler()
            }
        }

        const disabledHandler: boolean = currentTitle.trim() === ''

        return (
            <div>
                <input value={currentTitle}
                       onChange={changeHandler}
                       onKeyDown={pressHandler}/>
                <Button title={'+'}
                        clickHandler={clickHandler}
                        disableValue={disabledHandler}/>
            </div>
        );
    }
;