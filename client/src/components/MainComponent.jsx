import React, {useState} from 'react'
import BarCharts from './BarCharts'
import { Col, Container, Row } from "react-bootstrap";
import DatePicker from "./DatePicker";
import SendButton from "./SendButton";
import SelectAutocomplite from "./SelectAutocomplite";
import TweetComponent from "./TweetComponent";
import ModalComponent from "./ModalComponent";

const MainComponent = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([])
  const handleOpen = (value) => {
    setValue(value);
    setOpen(true);
  }

  const handleClose = () => setOpen(false);
  return (
    <Container className='mt-5'>
      <Row>
        <Col sm={8}>
          <BarCharts />
        </Col>
        <Col sm={4}>
          <Row>
            <SelectAutocomplite/>
            <DatePicker/>
            <Row className='mt-5'>
            <SendButton/>
            </Row>
            <Row className='mt-5'>
              <TweetComponent
                  handleOpen={handleOpen}
              />
            </Row>
          </Row>
        </Col>
      </Row>
      <ModalComponent
          value={value}
          open={open}
          handleClose={handleClose}
      />
    </Container>
  )
}
export default MainComponent;