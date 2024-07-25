import { Button, Box } from "@mui/material"

const ButtonComponent = (props) => {
    const onButtonClick = () => {
        props.onButtonClick?.();
    }

    return (
        <Button variant="outlined" onClick={onButtonClick}>
            {props?.title ?? 'NEXT'}
        </Button>
    )
}

export default ButtonComponent