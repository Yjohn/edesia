const config = require("../knexfile")[process.env.NODE_ENV || "development"];

const knex = require("knex")(config);

const getUsers = () => {
  return knex.select().from("users");
};
const getDeliveries = () => {
  return knex.select().from("deliveries");
};
const getDrivers = () => {
  return knex.select().from("drivers");
};

const getStores = () => {
  return knex.select().from("stores");
};

const getContacts =() => {
  return knex.select().from("contacts");
}

module.exports = {
  getUsers,
  getDeliveries,
  getDrivers,
  getStores,
  getContacts,
};
