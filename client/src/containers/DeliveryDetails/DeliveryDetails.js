import React, { Component } from "react";
import { getDeliveryById } from "../../helpers/api";
import { Link } from "react-router-dom";
import PickupButton from "../../components/PickupButton/PickupButton";
import "./DeliveryDetails.css";
class DeliveryDetails extends Component {
  constructor() {
    super();
    this.state = {
      delivery: {},
      notFound: false,
      message: ""
    };
  }
  componentDidMount = async () => {
    const delivery_id = this.props.match.params.deliveryId;
    try {
      const data = await getDeliveryById(delivery_id);
      this.setState({
        delivery: data.data
      });
    } catch (error) {
      this.setState({
        notFound: true,
        message: "No matching delivery was found in our system"
      });
    }
  };

  render() {
    const token = localStorage.getItem("jwtToken");
    const deliveryInfo = this.state.delivery;
    return (
      <div className="details">
        {this.state.notFound ? (
          <div>
            <h4> {this.state.message}</h4>
            <p>
              <Link to="/">Go back</Link>
            </p>
          </div>
        ) : (
          <div className="delivery-details">
            <h4> Delivery Details</h4>
            <p>
              This Delivery is from a store in {deliveryInfo.address} to our
              address, the deadline is {deliveryInfo.deadline}. If you are
              available for this pick up please click the I can pick up button
              below. If you can't see the I can pick up button that means you
              haven't logged in, So please login if you already have an account
              or register if you don't have an account yet. Thank you for you
              help !!
            </p>
            <ul>
              <li>
                Delivery Id <strong>{deliveryInfo.delivery_id}</strong>
              </li>
              <li>
                Delivery address <strong>{deliveryInfo.address}</strong>
              </li>
              <li>
                Delivery deadline <strong> {deliveryInfo.deadline}</strong>
              </li>
            </ul>
            {token ? (
              <PickupButton deliveryId={deliveryInfo.delivery_id} />
            ) : null}
          </div>
        )}
      </div>
    );
  }
}
export default DeliveryDetails;
