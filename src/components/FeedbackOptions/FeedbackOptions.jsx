import { Button } from "./FeedbackOptions.styled";
import PropTypes from "prop-types";

const FeedbackOptions = ({options, onLeaveFeedback }) => (
    <div>
        {options.map(option => (
            <Button type="button" onClick={() => onLeaveFeedback(option)} key={option}> {option} </Button>
        ))}
            {/* <Button type="button" options={options} onClick={onLeaveFeedback}> Good </Button>
            <Button type="button" options={options} onClick={onLeaveFeedback}> Neutral </Button>
            <Button type="button" options={options} onClick={onLeaveFeedback}> Bad </Button> */}
    </div>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;

