import React, { useContext } from "react";
import { Box, Card, Typography, CardContent, styled } from "@mui/material";
import { Globalcon } from "./ExpressCon";

const ExpenseCard = () => {
  const transaction = useContext(Globalcon);

  const amount = transaction.state.map((value, index) => {
    return value.amount;
  });

  const income = amount
    .filter((value, index) => value > 0)
    .reduce((acc, value) => (acc += value));

  const expense = amount
    .filter((value, index) => value < 0)
    .reduce((value, item) => (value += item), 0);
  const balance = income + expense;

  return (
    <>
      <div className="balance">
        <div>
          <h2>Your Account </h2>
          <h1>${balance}</h1>
        </div>
        <hr></hr>
      </div>

      <div className="card">
        <div>
          <h3>Income</h3>
          <p style={{ color: "green" ,fontSize:"2rem" }}>{income}</p>
        </div>
        <hr></hr>

        <div>
          <h3>Expense</h3>
          <p style={{ color: "red" ,fontSize:"2rem" }}>{expense}</p>
        </div>
      </div>
    </>
  );
};

export default ExpenseCard;
