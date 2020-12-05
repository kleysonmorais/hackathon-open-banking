import React from 'react';
import Radio from '@material-ui/core/Radio';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '4ch',
  },
}));

const BlueRadio = withStyles({
  root: {
    // color: 'blue',
    '&$checked': {
      color: '#0F386C',
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function QuestionComponent({ data }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(data.check);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="pb-6">
      <h3 className="font-semibold text-lg">{data.title}</h3>
      <div className="grid grid-cols-2">
        <FormControl component="fieldset" className="">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
          >
            {data.items.map((item, index) => (
              <FormControlLabel
                key={index.toString()}
                value={item.text}
                control={<BlueRadio />}
                label={item.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <div>
          {data.showCount &&
            data.items.map((item, index) => (
              <div className="py-1" key={index.toString()}>
                <TextField
                  id="margin-none"
                  defaultValue={item.value}
                  className={classes.textField}
                />
                <ButtonGroup
                  size="large"
                  color="primary"
                  aria-label="large outlined primary button group"
                  className="px-4"
                >
                  <Button>
                    <img
                      src="../icons/menos.svg"
                      alt="menos"
                      style={{ width: 15 }}
                    />
                  </Button>
                  <Button>
                    <img
                      src="../icons/mais.svg"
                      alt="mais"
                      style={{ width: 15 }}
                    />
                  </Button>
                </ButtonGroup>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
