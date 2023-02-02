function TotalMoney({ listTransactions }) {
  return (
    <>
      {listTransactions.reduce((lastValue, actualValue) => {
        return Number(lastValue.value) + Number(actualValue.value);
      })}
    </>
  );
}

export default TotalMoney;
