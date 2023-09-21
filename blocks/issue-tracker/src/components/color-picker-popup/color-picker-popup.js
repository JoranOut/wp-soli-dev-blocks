import "./color-picker-popup.scss";
import {useState, useEffect} from '@wordpress/element';
import {ColorPicker, ColorIndicator} from '@wordpress/components';

export default function ColorPickerPopup({color, onChange}) {
    const [_color, setColor] = useState(color);
    const [expanded, setExpanded] = useState(false);

    useEffect(()=>{
        setColor(color)
    },[color]);

    const changeColor = (newColor) => {
        setColor(newColor);
        onChange(newColor);
    }

    const toggleExpanded = () => {
        setExpanded(!expanded);
    }

    return (
        <>
            <div className={"color-picker-wrapper"}>
                <ColorIndicator colorValue={_color} onClick={toggleExpanded}/>
                {expanded && <>
                    <ColorPicker
                        className={"color-picker"}
                        color={_color}
                        onChange={changeColor}
                        enableAlpha
                        defaultValue="#000"
                    />
                </>}
            </div>
        </>
    );
}
